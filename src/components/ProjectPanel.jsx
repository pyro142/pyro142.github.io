import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export default function ProjectPanel({ project, onClose }) {
  // Lock body scroll while panel is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      />

      {/* Panel */}
      <motion.aside
        key="panel"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 280 }}
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-2xl bg-[#0e0e0e] border-l border-[#1f1f1f] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#444] transition-all"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Hero image / mock */}
        <div
          className="w-full h-56 relative overflow-hidden"
          style={{ background: project.heroGradient || 'linear-gradient(135deg, #1a1a2e, #0f0f1a)' }}
        >
          {project.heroContent}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] to-transparent" />
        </div>

        {/* Content */}
        <div className="px-8 pb-16 -mt-6 relative z-10">
          {/* Label */}
          <span className="text-xs text-neutral-500 uppercase tracking-widest">Case Study</span>

          {/* Title */}
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2 mb-3 leading-tight">
            {project.title}
            <span style={{ color: project.accent }}>.</span>
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed mb-10">{project.tagline}</p>

          {/* Sections */}
          {project.sections.map((section, i) => (
            <div key={i} className="mb-10">
              <span className="text-xs text-neutral-500 uppercase tracking-widest mb-1 block">{section.label}</span>
              <h3 className="font-display font-bold text-2xl text-white mb-4">{section.heading}</h3>
              {section.content && (
                <p className="text-neutral-400 text-sm leading-relaxed border-l-2 pl-4 mb-4"
                  style={{ borderColor: project.accent + '66' }}>
                  {section.content}
                </p>
              )}
              {section.features && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {section.features.map((f, j) => (
                    <div key={j} className="bento-card p-4">
                      <div className="text-lg mb-2">{f.icon}</div>
                      <h4 className="font-display font-bold text-sm text-white mb-1">{f.title}</h4>
                      <p className="text-neutral-500 text-xs leading-relaxed">{f.body}</p>
                    </div>
                  ))}
                </div>
              )}
              {section.pills && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {section.pills.map((p) => (
                    <span key={p} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-xs text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.accent }} />
                      {p}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* CTA */}
          <div className="flex gap-3 mt-8">
            {project.links?.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  link.primary
                    ? 'text-white hover:opacity-90'
                    : 'bg-[#1a1a1a] border border-[#2a2a2a] text-neutral-300 hover:text-white hover:border-[#444]'
                }`}
                style={link.primary ? { background: project.accent } : {}}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  )
}
