import { useState, useEffect } from 'react'

// ============ Typewriter Hook ============
const phrases = [
  "I build intelligent systems",
  "I craft machine learning models",
  "I design neural networks",
  "I create AI-powered solutions"
]

export function useTypewriter() {
  const [typedText, setTypedText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const speed = isDeleting ? 40 : 80
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentPhrase.length) {
          setTypedText(currentPhrase.slice(0, typedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentPhrase.slice(0, typedText.length - 1))
        } else {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }
    }, speed)
    
    return () => clearTimeout(timer)
  }, [typedText, isDeleting, phraseIndex])

  return typedText
}

// ============ Theme Hook ============
export function useTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const hour = new Date().getHours()
    return hour < 6 || hour >= 18
  })

  useEffect(() => {
    document.body.classList.toggle('light-theme', !isDarkTheme)
  }, [])

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    document.body.classList.toggle('light-theme', isDarkTheme)
  }

  return { isDarkTheme, toggleTheme }
}

// ============ Cursor Hook ============
export function useCursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return cursorPos
}

// ============ Scroll Position Hook ============
export function useScrollPosition(threshold = 400) {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > threshold)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return { showBackToTop, scrollToTop, scrollTo }
}
