'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import ScrollRevealWrapper from './ScrollRevealWrapper'

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white relative fade-in-section">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollRevealWrapper>
          <div className="text-center mb-16 pricing-title">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Pricing</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur. Tristique fermentum nunc pellentesque viverra.
            </p>
          </div>
        </ScrollRevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { recommended: false },
            { recommended: true },
            { recommended: false }
          ].map((plan, i) => (
            <ScrollRevealWrapper key={i}>
              <div className="relative h-full hover-popup">
                <div className="rounded-[20px] overflow-hidden h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-[#6E82FE] p-8 text-center">
                    {plan.recommended && (
                      <div className="bg-[#4361EE] text-white text-sm font-medium -mx-8 -mt-8 mb-8 py-2">
                        Recommended
                      </div>
                    )}
                    <div className="flex justify-center mb-2">
                      <Image
                        src="/package-icon.svg"
                        alt="Package Icon"
                        width={54}
                        height={54}
                        className="brightness-200"
                      />
                    </div>
                    <div className="text-sm text-white/80 mb-2">1 Year Plan</div>
                    <h3 className="text-3xl font-bold mb-2 text-white">Package Name</h3>
                    <div className="text-lg text-white">
                      LKR 1300/Month
                    </div>
                  </div>

                  <div className="bg-[#4361EE] p-8 h-full">
                    <div className="space-y-3">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center text-sm text-white">
                          <svg className="w-4 h-4 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Include Item {item.toString().padStart(2, '0')}</span>
                        </div>
                      ))}
                      {[1, 2].map((item) => (
                        <div key={item} className="flex items-center text-sm text-white/60">
                          <svg className="w-4 h-4 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span>Exclude Item {item.toString().padStart(2, '0')}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 space-y-4">
                      <Button 
                        variant="default" 
                        className="w-full bg-white hover:bg-blue-50 text-[#4361EE] rounded-xl py-3"
                      >
                        Get (Package Name)
                      </Button>
                      <div className="text-xs text-center text-white/80">
                        Terms Apply
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollRevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

