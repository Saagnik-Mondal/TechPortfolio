import { useRef } from 'react'
import './styles.css'

// Utilities
import { useTypewriter, useTheme, useCursor, useScrollPosition } from './utils'

// UI Components
import { FloatingOrbs, CustomCursor, BackToTop } from './components/ui'

// Layout Components
import { Navbar, Footer } from './components/layout'

// Section Components
import { Hero, About, Experience, Skills, Projects, Contact } from './components/sections'

export default function App() {
  const containerRef = useRef(null)
  
  // Custom hooks
  const typedText = useTypewriter()
  const { isDarkTheme, toggleTheme } = useTheme()
  const cursorPos = useCursor()
  const { showBackToTop, scrollToTop, scrollTo } = useScrollPosition()

  return (
    <div className="app" ref={containerRef}>
      {/* Custom Cursor */}
      <CustomCursor cursorPos={cursorPos} />

      {/* Floating Orbs */}
      <FloatingOrbs />

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />

      {/* Sections */}
      <Hero typedText={typedText} scrollTo={scrollTo} />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop show={showBackToTop} onClick={scrollToTop} />
    </div>
  )
}
