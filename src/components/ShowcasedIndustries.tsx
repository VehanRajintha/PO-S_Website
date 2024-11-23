'use client'

import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'

export default function ShowcasedIndustries() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background shape */}
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
              <div className="text-blue-600 inline-block">INDUSTRIES</div>
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Tristique fermentum nunc pellentesque viverra.
            </p>
          </div>

          {/* Right cards */}
          <div className="w-full lg:w-2/3 lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Left column */}
              <div className="space-y-6">
                {[1, 2].map((_, i) => (
                  <div key={i} className="industries-card bg-blue-600 rounded-3xl p-6 text-white transition-transform hover:scale-105 duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                      <ShoppingCart className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Order Management</h3>
                    <p className="text-sm text-white/80 mb-4">
                      Lorem ipsum dolor sit amet consectetur. Tristique fermentum nunc pellentesque viverra.
                    </p>
                    <Button variant="secondary" className="w-full bg-white text-blue-600 hover:bg-white/90 transition-colors">
                      Read More
                    </Button>
                  </div>
                ))}
              </div>

              {/* Right column - offset */}
              <div className="space-y-6 mt-0 sm:mt-12">
                {[1, 2].map((_, i) => (
                  <div key={i} className="industries-card bg-blue-600 rounded-3xl p-6 text-white transition-transform hover:scale-105 duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                      <ShoppingCart className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Order Management</h3>
                    <p className="text-sm text-white/80 mb-4">
                      Lorem ipsum dolor sit amet consectetur. Tristique fermentum nunc pellentesque viverra.
                    </p>
                    <Button variant="secondary" className="w-full bg-white text-blue-600 hover:bg-white/90 transition-colors">
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

