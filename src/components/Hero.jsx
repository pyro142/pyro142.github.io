import { motion } from 'framer-motion'


const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/joel-garbutt/',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/pyro142',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="flex flex-col items-center justify-center px-6 relative overflow-hidden"
      initial={{ height: '100vh' }}
      animate={{ height: '40vh' }}
      transition={{ duration: 0.8, delay: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7c3aed] opacity-[0.06] rounded-full blur-[120px] pointer-events-none" />

        {/* Inner: handles stagger entrance */}
        <motion.div
          className="max-w-2xl w-full text-center relative z-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Avatar */}
          <motion.div variants={item} className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#222] shadow-xl">
              <img
                src="/images/profile.jpg"
                alt="Joel Garbutt"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.style.background = '#1a1a2e'
                }}
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={item} className="font-display font-extrabold text-5xl md:text-6xl leading-tight mb-4">
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a78bfa] to-[#7c3aed]">
              Joel
            </span>
            .
          </motion.h1>

          <motion.p variants={item} className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto">
            Infrastructure Engineer building reliable, scalable systems. I like things that just work.
          </motion.p>

          {/* Social links */}
          <motion.div variants={item} className="flex gap-3 justify-center">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141414] border border-[#222] text-neutral-400 hover:text-white hover:border-[#444] transition-all duration-200 text-sm"
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
    </motion.section>
  )
}