import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home } from 'lucide-react'

// ============ X Icon ============
export function XIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

// ============ Floating Orbs ============
export function FloatingOrbs() {
  return (
    <div className="orbs-container">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
    </div>
  )
}

// ============ Magnetic Button ============
export function MagneticButton({ children, className, onClick, href }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (clientX - left - width / 2) * 0.3
    const y = (clientY - top - height / 2) * 0.3
    setPosition({ x, y })
  }

  const reset = () => setPosition({ x: 0, y: 0 })

  const Component = href ? 'a' : 'button'

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Component className={className} onClick={onClick} href={href}>
        {children}
      </Component>
    </motion.div>
  )
}

// ============ Glow Card ============
export function GlowCard({ children, className }) {
  const ref = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    const { left, top } = ref.current.getBoundingClientRect()
    setMousePos({ x: e.clientX - left, y: e.clientY - top })
  }

  return (
    <motion.div
      ref={ref}
      className={`glow-card ${className || ''}`}
      onMouseMove={handleMouse}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}

// ============ Custom Cursor ============
export function CustomCursor({ cursorPos }) {
  return (
    <>
      <motion.div 
        className="custom-cursor"
        animate={{ x: cursorPos.x - 10, y: cursorPos.y - 10 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div 
        className="cursor-dot"
        animate={{ x: cursorPos.x - 4, y: cursorPos.y - 4 }}
        transition={{ type: "spring", stiffness: 1000, damping: 28 }}
      />
    </>
  )
}

// ============ Back to Top Button ============
export function BackToTop({ show, onClick }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          className="back-to-top"
          onClick={onClick}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Home size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
