import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0acc] backdrop-blur-md border-b border-[#1f1f1f]' : ''
      }`}
    >
      <span className="font-display font-bold text-lg tracking-tight">
        Garbutt<span className="text-[#7c3aed]">.IT</span>
      </span>

      <ul className="flex gap-6 text-sm text-neutral-400">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#7c3aed] group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
