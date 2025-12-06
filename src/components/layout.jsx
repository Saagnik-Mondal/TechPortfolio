import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Sun, Moon, Instagram } from 'lucide-react'
import { XIcon } from './ui'

// ============ Navbar ============
export function Navbar({ isDarkTheme, toggleTheme }) {
  return (
    <nav className="nav-bar">
      <motion.div 
        className="nav-socials"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav-social-link">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-social-link">
          <Linkedin size={18} />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="nav-social-link">
          <XIcon size={18} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-social-link">
          <Instagram size={18} />
        </a>
      </motion.div>
      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleTheme}>
          <motion.span
            key={isDarkTheme ? 'dark' : 'light'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isDarkTheme ? <Sun size={18} /> : <Moon size={18} />}
          </motion.span>
        </button>
        <a href="mailto:sm2744@cse.jgec.ac.in" className="nav-mail-link">
          <Mail size={18} />
        </a>
      </div>
    </nav>
  )
}

// ============ Footer ============
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Designed & Built by <span className="accent">Saagnik Mondal</span></p>
        <p className="footer-year">© 2025</p>
      </div>
    </footer>
  )
}
