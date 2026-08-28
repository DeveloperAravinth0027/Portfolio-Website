import { useEffect, useState } from 'react'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { navLinks } from '../data/navLinks'
import { siteConfig } from '../data/siteConfig'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'
import Container from './Container'

const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [activeId])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-surface/85 backdrop-blur-md border-b border-border' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-text"
          aria-label={`${siteConfig.name} — home`}
        >
          ARAVINDA<span className="text-primary">KUMAR</span>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = id === activeId
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-primary bg-primary-soft' : 'text-muted hover:text-text'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-primary hover:text-primary"
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-primary hover:text-primary"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text"
          >
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`md:hidden overflow-hidden border-b border-border bg-surface transition-[max-height] duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0 border-b-0'
        }`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = id === activeId
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                className={`rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                  isActive ? 'text-primary bg-primary-soft' : 'text-muted'
                }`}
              >
                {link.label}
              </a>
            )
          })}
          <div className="flex items-center gap-3 pt-3 mt-2 border-t border-border">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>
        </Container>
      </nav>
    </header>
  )
}
