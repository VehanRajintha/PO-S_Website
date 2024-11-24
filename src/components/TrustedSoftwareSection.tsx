'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function TrustedSoftwareSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/wave.svg"
          alt="Wave Background"
          fill
          className="opacity-10 object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            WE PROVIDE TRUSTED<br />
            &BEST <span className="bg-blue-600 text-white px-4 py-1 rounded-full">SOFTWARE</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Tristique fermentum nunc pellentesque viverra. Diam lectus gravida est semper eget ornare fringilla amet. Tempus lacinia leo molestie placerat nunc ut.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              src="/dashboard-preview.png"
              alt="Dashboard Preview"
              width={600}
              height={400}
             
            />
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Tristique fermentum nunc pellentesque viverra.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-600/20"></div>
                <p>On Time Delivery Service</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-600/20"></div>
                <p>Online Market & Customers</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-600/20"></div>
                <p>Quick Maintains & Services</p>
              </div>
            </div>

            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 