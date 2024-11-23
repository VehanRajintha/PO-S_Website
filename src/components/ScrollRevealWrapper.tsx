'use client'

import { useEffect, useRef, memo } from 'react'


interface ScrollRevealWrapperProps {
  children: React.ReactNode;
}

const ScrollRevealWrapper = memo(function ScrollRevealWrapper({ children }: ScrollRevealWrapperProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window === 'undefined' || !sectionRef.current) return

      try {
        const ScrollRevealInstance = (await import('scrollreveal')).default
        const sr = ScrollRevealInstance()
        sr.reveal(sectionRef.current, {
          reset: true,
          delay: 300,
          distance: '20px',
          duration: 700,
          easing: 'ease-out',
          origin: 'bottom',
          scale: 1,
          viewFactor: 0,
        })
      } catch (error) {
        console.warn('ScrollReveal initialization failed:', error instanceof Error ? error.message : 'Unknown error')
      }
    }

    void initScrollReveal()
  }, [])

  return <div ref={sectionRef}>{children}</div>
})

export default ScrollRevealWrapper 