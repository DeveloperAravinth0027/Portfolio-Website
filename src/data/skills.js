// Each skill uses a devicon or simple-icons CDN icon (svg) so logos stay
// crisp and dependency-free. `icon: null` falls back to the category's
// lucide icon instead of a brand logo (used only where no real logo exists).
const devicon = (slug) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}`

// simple-icons marks ship as a single black silhouette with no baked-in
// color — pinned to an exact version since icons do get renamed/removed
// between releases (e.g. Oracle and OpenAI were both dropped after v15).
const SIMPLE_ICONS_VERSION = '16.28.0'
const simpleIcon = (slug) => `https://cdn.jsdelivr.net/npm/simple-icons@${SIMPLE_ICONS_VERSION}/icons/${slug}.svg`
// Oracle and OpenAI's marks only exist in older releases of the same set.
const SIMPLE_ICONS_LEGACY_VERSION = '13.0.0'
const simpleIconLegacy = (slug) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@${SIMPLE_ICONS_LEGACY_VERSION}/icons/${slug}.svg`

// Card order (left to right, wrapping into rows):
// Frontend, Backend, Database / Deployment, AI Tools, Payments & Integration / DevOps & Tools
export const skillCategories = [
  {
    key: 'frontend',
    title: 'Frontend',
    lucideIcon: 'LayoutTemplate',
    skills: [
      { name: 'HTML5', icon: devicon('html5/html5-original.svg') },
      { name: 'CSS3', icon: devicon('css3/css3-original.svg') },
      { name: 'JavaScript', icon: devicon('javascript/javascript-original.svg') },
      { name: 'React.js', icon: devicon('react/react-original.svg') },
      { name: 'Bootstrap', icon: devicon('bootstrap/bootstrap-original.svg') },
    ],
  },
  {
    key: 'backend',
    title: 'Backend',
    lucideIcon: 'Server',
    skills: [
      { name: 'Java', icon: devicon('java/java-original.svg') },
      { name: 'Spring Boot', icon: devicon('spring/spring-original.svg') },
      { name: 'PHP', icon: devicon('php/php-original.svg') },
    ],
  },
  {
    key: 'database',
    title: 'Database',
    lucideIcon: 'Database',
    skills: [
      { name: 'MySQL', icon: devicon('mysql/mysql-original.svg') },
      { name: 'SQL', icon: null },
    ],
  },
  {
    key: 'deployment',
    title: 'Deployment',
    lucideIcon: 'Cloud',
    skills: [
      // Same story as GitHub above — Vercel's mark is solid black by default.
      { name: 'Vercel', icon: devicon('vercel/vercel-original.svg'), iconBg: 'light' },
      // Railway's mark is the opposite problem: solid white, invisible in light mode.
      { name: 'Railway', icon: devicon('railway/railway-original.svg'), iconBg: 'dark' },
      // GitHub's mark renders solid black with no built-in fallback color,
      // so it disappears on dark cards without a light backdrop chip.
      { name: 'GitHub', icon: devicon('github/github-original.svg'), iconBg: 'light' },
    ],
  },
  {
    key: 'ai-tools',
    title: 'AI Tools',
    lucideIcon: 'Bot',
    skills: [
      // Tinted with Claude's real brand terracotta (icon itself is a black silhouette).
      { name: 'Claude', icon: simpleIcon('claude'), color: '#D97757' },
      // The real Antigravity app icon, pulled from the actual installed
      // app on this machine — no such logo exists in any icon set yet.
      { name: 'Antigravity', icon: '/images/antigravity-logo.png' },
      { name: 'GitHub Copilot', icon: simpleIcon('githubcopilot'), iconBg: 'light' },
      { name: 'OpenCode', icon: simpleIcon('opencode'), iconBg: 'light' },
      // ChatGPT itself has no separate mark — this is OpenAI's logo (tinted
      // OpenAI purple), the real brand behind it.
      { name: 'ChatGPT', icon: simpleIconLegacy('openai'), color: '#412991' },
      // Tinted with Gemini's real brand purple (icon itself is a black silhouette).
      { name: 'Gemini', icon: simpleIcon('googlegemini'), color: '#8E75B2' },
    ],
  },
  {
    key: 'integrations',
    title: 'Payments & Integration',
    lucideIcon: 'CreditCard',
    skills: [
      // Tinted with Razorpay's real brand navy; that navy is close enough
      // to the card's own dark tone that it still gets a light backdrop
      // chip, same as the solid-black/white marks above.
      { name: 'Razorpay API', icon: simpleIcon('razorpay'), color: '#0C2451', iconBg: 'light' },
    ],
  },
  {
    key: 'devops',
    title: 'DevOps & Tools',
    lucideIcon: 'Wrench',
    skills: [
      { name: 'Git', icon: devicon('git/git-original.svg') },
      // GitHub's mark renders solid black with no built-in fallback color,
      // so it disappears on dark cards without a light backdrop chip.
      { name: 'GitHub', icon: devicon('github/github-original.svg'), iconBg: 'light' },
      { name: 'Nginx', icon: devicon('nginx/nginx-original.svg') },
      { name: 'VS Code', icon: devicon('vscode/vscode-original.svg') },
      { name: 'Eclipse', icon: devicon('eclipse/eclipse-original.svg') },
      // Tinted with Notepad++'s real brand green (icon itself is a black silhouette).
      { name: 'Notepad++', icon: simpleIcon('notepadplusplus'), color: '#90E59A' },
      { name: 'Spring Tool Suite', icon: devicon('spring/spring-original.svg') },
      { name: 'Postman', icon: devicon('postman/postman-original.svg') },
      { name: 'MySQL Workbench', icon: devicon('mysql/mysql-original.svg') },
      // SQL*Plus has no logo of its own — it's Oracle's command-line tool,
      // so the Oracle mark (tinted Oracle red) is the closest honest, real
      // representation.
      { name: 'SQL*Plus', icon: simpleIconLegacy('oracle'), color: '#F80000' },
      { name: 'Google Webmaster', icon: devicon('google/google-original.svg') },
    ],
  },
]
