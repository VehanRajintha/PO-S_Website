'use client'

import { Button } from "@/components/ui/button"

export default function PricingSection() {
  return (
    <section className="py-20 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 pricing-title">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Pricing</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Tristique fermentum nunc pellentesque viverra. Diam lectus gravida est semper eget ornare fringilla amet. Tempus lacinia leo maximus placerat nunc ut.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { recommended: false },
            { recommended: true },
            { recommended: false }
          ].map((plan, i) => (
            <div key={i} className="pricing-card relative transition-transform hover:scale-105 duration-300">
              {plan.recommended && (
                <div className="absolute -top-4 inset-x-0">
                  <div className="bg-blue-600 text-white text-center py-2 px-4 rounded-t-lg w-36 mx-auto">
                    Recommended
                  </div>
                </div>
              )}
              <div className={`rounded-2xl bg-gradient-to-b from-blue-400/20 to-blue-600/20 p-6 ${plan.recommended ? 'mt-4' : ''}`}>
                <div className="mb-6">
                  <div className="w-8 h-8 mb-4">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 2L2 8L16 14L30 8L16 2Z" fill="#2563EB"/>
                      <path d="M2 16L16 22L30 16" stroke="#2563EB" strokeWidth="2"/>
                      <path d="M2 24L16 30L30 24" stroke="#2563EB" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">1 Year Plan</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Package Name</h3>
                  <div className="text-base md:text-lg font-semibold text-gray-700">
                    LKR 1300/Month
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center text-sm">
                      <svg className="w-5 h-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Include Item {item.toString().padStart(2, '0')}</span>
                    </div>
                  ))}
                  {[1, 2].map((item) => (
                    <div key={item} className="flex items-center text-sm text-gray-500">
                      <svg className="w-5 h-5 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>Exclude Item {item.toString().padStart(2, '0')}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <Button variant="default" className="w-full bg-white hover:bg-gray-50 text-blue-600 transition-colors">
                    Get (Package Name)
                  </Button>
                  <div className="text-xs text-center text-gray-500">Terms Apply</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

