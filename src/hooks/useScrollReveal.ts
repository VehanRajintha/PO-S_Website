import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

export const useScrollReveal = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    })

    // Hero Section
    sr.reveal('.hero-content', { origin: 'left' })
    sr.reveal('.hero-image', { origin: 'right', delay: 400 })
    sr.reveal('.hero-stats', { delay: 600 })

    // Feature Section
    sr.reveal('.feature-title', { origin: 'top' })
    sr.reveal('.feature-card', { 
      interval: 200,
      delay: 400 
    })

    // Pricing Section
    sr.reveal('.pricing-title', { origin: 'top' })
    sr.reveal('.pricing-card', {
      interval: 200,
      delay: 400
    })

    // Showcased Industries
    sr.reveal('.industries-title', { origin: 'left' })
    sr.reveal('.industries-card', {
      interval: 200,
      delay: 400
    })

    // App Download Section
    sr.reveal('.app-download', { origin: 'bottom' })
    sr.reveal('.app-card', {
      interval: 300,
      delay: 400
    })

    // Footer
    sr.reveal('.footer-content', { origin: 'bottom' })
    sr.reveal('.footer-links', {
      interval: 200,
      delay: 400
    })

    return () => sr.destroy()
  }, [])
} 