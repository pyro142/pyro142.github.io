import { motion } from 'framer-motion'

export default function WorkCard({ title, description, tags = [], accent = '#7c3aed', href = '#', onClick, image, arrow = true }) {  const isInternal = !!onClick

  const inner = (
    <>
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-6 right-6 h-px opacity-60"
        style={{ background: `linear-gradient(to right, transparent, ${accent}, transparent)` }}
      />
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-display font-bold text-xl text-white group-hover:text-neutral-100 transition-colors">
              {image && (
                <div className="w-full rounded-xl overflow-hidden mb-4">
                  <img src={image} alt={title} className="w-full h-auto  object-top" />
                </div>
              )}
              {title}
            </h3>
              {arrow && (
              <svg className="text-neutral-600 group-hover:text-neutral-400 transition-colors mt-1 shrink-0"
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isInternal
                  ? <path d="M9 18l6-6-6-6" />
                  : <path d="M7 17L17 7M17 7H7M17 7v10" />}
              </svg>
              )}
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="flex gap-2 flex-wrap mt-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-medium border"
              style={{ background: `${accent}18`, borderColor: `${accent}30`, color: accent }}>
              {tag}
            </span>
          ))}
        </div>
        {isInternal && (
          <p className="text-xs mt-3 font-medium" style={{ color: accent }}>View case study →</p>
        )}
      </div>
    </>
  )

  const cls = "bento-card noise-overlay block p-6 min-h-[200px] group cursor-pointer h-full"

  if (isInternal) {
    return (
      <motion.button onClick={onClick} whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.2, ease: 'easeOut' }} className={cls + ' w-full text-left'}>
        {inner}
      </motion.button>
    )
  }

  return (
    <motion.a href={href} target={href !== '#' ? '_blank' : undefined} rel="noopener noreferrer"
      whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, ease: 'easeOut' }} className={cls}>
      {inner}
    </motion.a>
  )
}
