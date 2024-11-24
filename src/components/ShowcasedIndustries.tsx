'use client'

import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'

export default function ShowcasedIndustries() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/wave.svg"
          alt="Wave Background"
          fill
          className="opacity-10 object-cover"
        />
      </div>

      {/* Left Top Background Shape */}
      <div className="absolute -left-[300px] -top-[100px] z-0">
        <div 
          className="w-[800px] h-[1000px] rounded-[40%] transform rotate-45"
          style={{
            background: 'linear-gradient(135deg, rgba(64,82,255,0.15) 0%, rgba(64,82,255,0.05) 100%)'
          }}
        />
      </div>

      {/* Left Bottom Background Shape */}
      <div className="absolute -left-[300px] -bottom-[100px] z-0">
        <div 
          className="w-[800px] h-[1000px] rounded-[40%] transform -rotate-45"
          style={{
            background: 'linear-gradient(135deg, rgba(64,82,255,0.15) 0%, rgba(64,82,255,0.05) 100%)'
          }}
        />
      </div>

      <div className="absolute inset-0 bg-[#EEF0FF]/30" />
      <div className="absolute left-0 top-0 w-2/3 h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-white/80" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row">
          {/* Left content */}
          <div className="w-full lg:w-1/3 mb-12 lg:mb-0 industries-title">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SHOWCASED{' '}
              <div className="text-[#4052FF] inline-block">INDUSTRIES</div>
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Tristique fermentum nunc pellentesque viverra.
            </p>
          </div>

          {/* Right cards */}
          <div className="w-full lg:w-2/3 lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl ml-auto">
              {/* Left column */}
              <div className="space-y-6">
                {[1, 2].map((_, i) => (
                  <div 
                    key={i} 
                    className="industries-card bg-[#4052FF] rounded-3xl p-8 text-white hover:scale-105 transition-transform duration-300 min-h-[280px] flex flex-col max-w-[260px] ml-auto"
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                      <ShoppingCart className="w-10 h-10 text-[#4052FF]" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Order Management</h3>
                    <p className="text-base text-white/80 mb-6 flex-grow">
                      Lorem ipsum dolor sit amet consectetur. Tristique fermentum nunc pellentesque viverra.
                    </p>
                    <Button 
                      variant="secondary" 
                      className="w-full bg-white text-[#4052FF] hover:bg-white/90 transition-colors rounded-full py-6 text-base"
                    >
                      Read More
                    </Button>
                  </div>
                ))}
              </div>

              {/* Right column - offset */}
              <div className="space-y-6 mt-0 sm:mt-16">
                {[1, 2].map((_, i) => (
                  <div 
                    key={i} 
                    className="industries-card bg-[#4052FF] rounded-3xl p-8 text-white hover:scale-105 transition-transform duration-300 min-h-[280px] flex flex-col max-w-[260px] ml-auto"
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                      <ShoppingCart className="w-10 h-10 text-[#4052FF]" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Order Management</h3>
                    <p className="text-base text-white/80 mb-6 flex-grow">
                      Lorem ipsum dolor sit amet consectetur. Tristique fermentum nunc pellentesque viverra.
                    </p>
                    <Button 
                      variant="secondary" 
                      className="w-full bg-white text-[#4052FF] hover:bg-white/90 transition-colors rounded-full py-6 text-base"
                    >
                      Read More
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

