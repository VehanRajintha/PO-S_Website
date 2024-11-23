'use client'

import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'

export default function ScrollRevealWrapper({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 300,
        distance: '20px',
        duration: 700,
        easing: 'ease-out',
        origin: 'bottom',
        scale: 1,
        viewFactor: 0,
      })
    }
  }, [])

  return <div ref={sectionRef}>{children}</div>
} 