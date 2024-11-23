import { useEffect } from 'react'

export const useScrollReveal = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initScrollReveal = async () => {
      try {
        const ScrollReveal = (await import('scrollreveal')).default;
        
        const sr = ScrollReveal({
          distance: '60px',
          duration: 1500,
          delay: 400,
          reset: false
        })

        // Navigation
        sr.reveal('nav', {
          origin: 'top',
          distance: '20px',
          duration: 1000,
          delay: 200
        })

        // Hero Section
        sr.reveal('.hero-content', { 
          origin: 'left',
          distance: '80px',
          duration: 1000,
          delay: 300
        })
        sr.reveal('.hero-image', { 
          origin: 'right',
          distance: '80px',
          duration: 1000,
          delay: 600
        })
        sr.reveal('.hero-stats', { 
          origin: 'bottom',
          distance: '40px',
          duration: 1000,
          delay: 800,
          interval: 200
        })

        // Feature Section
        sr.reveal('.feature-title', { 
          origin: 'top',
          distance: '40px',
          duration: 1000
        })
        sr.reveal('.feature-card', { 
          origin: 'bottom',
          distance: '40px',
          duration: 1000,
          interval: 200
        })

        // Pricing Section
        sr.reveal('.pricing-title', { 
          origin: 'top',
          distance: '40px',
          duration: 1000
        })
        sr.reveal('.pricing-card', {
          origin: 'bottom',
          distance: '40px',
          duration: 1000,
          interval: 200
        })

        // Industries Section
        sr.reveal('.industries-title', { 
          origin: 'left',
          distance: '60px',
          duration: 1000
        })
        sr.reveal('.industries-card', {
          origin: 'right',
          distance: '60px',
          duration: 1000,
          interval: 200
        })

        // App Download Section
        sr.reveal('.app-download', { 
          origin: 'left',
          distance: '60px',
          duration: 1000
        })
        sr.reveal('.app-card', {
          origin: 'bottom',
          distance: '40px',
          duration: 1000,
          interval: 300
        })

        // Footer
        sr.reveal('.footer-content', { 
          origin: 'bottom',
          distance: '40px',
          duration: 1000
        })
        sr.reveal('.footer-links', {
          origin: 'bottom',
          distance: '20px',
          duration: 1000,
          interval: 200
        })

        return () => {
          try {
            sr.destroy()
          } catch (error) {
            console.warn('Error destroying ScrollReveal:', error)
          }
        }
      } catch (error) {
        console.warn('Error initializing ScrollReveal:', error)
        return () => {}
      }
    }

    initScrollReveal()
  }, [])
} 