import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Wraps children in a scroll-triggered fade+slide-up animation.
 * Usage: <FadeIn delay={0.1}><YourComponent /></FadeIn>
 */
export default function FadeIn({ children, delay = 0, className = '', once = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '0px 0px -60px 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}
