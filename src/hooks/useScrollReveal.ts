import { useEffect, useCallback } from 'react'
import ScrollReveal from 'scrollreveal'

interface ScrollRevealConfig {
  origin: string;
  distance: string;
  duration: number;
  delay: number;
  interval?: number;
}

type ScrollRevealInstance = ReturnType<typeof ScrollReveal>

export const useScrollReveal = () => {
  const initializeReveal = useCallback(async (sr: ScrollRevealInstance) => {
    const defaultConfig: Partial<ScrollRevealConfig> = {
      duration: 1000,
      distance: '40px',
    }

    const sections = [
      // Navigation
      { selector: 'nav', config: { origin: 'top', delay: 200 } },
      
      // Hero Section
      { selector: '.hero-content', config: { origin: 'left', delay: 300 } },
      { selector: '.hero-image', config: { origin: 'right', delay: 600 } },
      { selector: '.hero-stats', config: { origin: 'bottom', delay: 800, interval: 200 } },
      
      // Feature Section
      { selector: '.feature-title', config: { origin: 'top', delay: 200 } },
      { selector: '.feature-card', config: { origin: 'bottom', interval: 200, delay: 400 } },
      
      // Pricing Section
      { selector: '.pricing-title', config: { origin: 'top', delay: 200 } },
      { selector: '.pricing-card', config: { origin: 'bottom', interval: 200, delay: 400 } },
      
      // Industries Section
      { selector: '.industries-title', config: { origin: 'left', delay: 200 } },
      { selector: '.industries-card', config: { origin: 'right', interval: 200, delay: 400 } },
      
      // App Download Section
      { selector: '.app-download', config: { origin: 'left', delay: 200 } },
      { selector: '.app-card', config: { origin: 'bottom', interval: 300, delay: 400 } },
      
      // Footer
      { selector: '.footer-content', config: { origin: 'bottom', delay: 200 } },
      { selector: '.footer-links', config: { origin: 'bottom', interval: 200, delay: 400 } }
    ]

    sections.forEach(({ selector, config }) => {
      sr.reveal(selector, { ...defaultConfig, ...config })
    })
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const initScrollReveal = async () => {
      try {
        const ScrollReveal = (await import('scrollreveal')).default
        const sr = ScrollReveal({
          distance: '60px',
          duration: 1500,
          delay: 400,
          reset: false,
        })

        await initializeReveal(sr)

        return () => {
          try {
            sr.destroy()
          } catch (error) {
            console.warn('Error destroying ScrollReveal:', error instanceof Error ? error.message : 'Unknown error')
          }
        }
      } catch (error) {
        console.warn('Error initializing ScrollReveal:', error instanceof Error ? error.message : 'Unknown error')
        return () => undefined
      }
    }

    void initScrollReveal()
  }, [initializeReveal])
} 