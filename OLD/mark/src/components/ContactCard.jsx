import { motion } from 'framer-motion'

export default function ContactCard() {
  return (
    <div className="bento-card noise-overlay p-6 h-full min-h-[180px] flex flex-col justify-between bg-gradient-to-br from-[#ea580c22] to-[#141414]">
      <div>
        <span className="text-xs text-orange-400 uppercase tracking-widest mb-2 block">Contact</span>
        <h3 className="font-display font-bold text-2xl text-white leading-tight mb-2">
          Let's work together
        </h3>
        <p className="text-neutral-500 text-sm">
          Got an infrastructure problem or an interesting role? I'd love to hear about it.
        </p>
      </div>

      <motion.a
        href="mailto:hello@garbutt.it"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#ea580c] text-white text-sm font-medium hover:bg-[#c2410c] transition-colors duration-200 self-start"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
        Get in touch
      </motion.a>
    </div>
  )
}
