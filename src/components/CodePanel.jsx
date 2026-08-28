// Static, dependency-free "code editor" visual for the hero section.
// Purely decorative — marked aria-hidden so screen readers skip straight
// past it to the real content in Hero.jsx.
const codeLines = [
  { indent: 0, tokens: [{ t: 'kw', v: 'const' }, { t: 'plain', v: ' developer = {' }] },
  { indent: 1, tokens: [{ t: 'prop', v: 'name' }, { t: 'plain', v: ': ' }, { t: 'str', v: "'Aravindakumar G'" }, { t: 'plain', v: ',' }] },
  { indent: 1, tokens: [{ t: 'prop', v: 'role' }, { t: 'plain', v: ': ' }, { t: 'str', v: "'Full Stack Engineer'" }, { t: 'plain', v: ',' }] },
  { indent: 1, tokens: [{ t: 'prop', v: 'stack' }, { t: 'plain', v: ': [' }] },
  { indent: 2, tokens: [{ t: 'str', v: "'React'" }, { t: 'plain', v: ', ' }, { t: 'str', v: "'Java'" }, { t: 'plain', v: ', ' }, { t: 'str', v: "'Spring Boot'" }, { t: 'plain', v: ',' }] },
  { indent: 2, tokens: [{ t: 'str', v: "'MySQL'" }] },
  { indent: 1, tokens: [{ t: 'plain', v: '],' }] },
  { indent: 1, tokens: [{ t: 'prop', v: 'focus' }, { t: 'plain', v: ': ' }, { t: 'str', v: "'scalable, user-focused apps'" }, { t: 'plain', v: ',' }] },
  { indent: 1, tokens: [{ t: 'prop', v: 'available' }, { t: 'plain', v: ': ' }, { t: 'kw', v: 'true' } ] },
  { indent: 0, tokens: [{ t: 'plain', v: '}' }] },
]

const tokenClasses = {
  kw: 'text-accent',
  prop: 'text-primary',
  str: 'text-amber-300',
  plain: 'text-text/80',
}

export default function CodePanel() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-md rounded-2xl border border-border bg-card/80 shadow-2xl shadow-black/20 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-amber-300/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-xs font-medium text-muted">developer.js</span>
      </div>

      <pre className="overflow-x-auto px-5 py-5 text-[13px] leading-relaxed font-mono">
        <code>
          {codeLines.map((line, i) => (
            <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
              {line.tokens.map((token, j) => (
                <span key={j} className={tokenClasses[token.t]}>
                  {token.v}
                </span>
              ))}
            </div>
          ))}
          <div className="mt-1 inline-block h-4 w-2 animate-pulse bg-primary/70 align-middle" />
        </code>
      </pre>
    </div>
  )
}
