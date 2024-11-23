'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Apple } from 'lucide-react'

export default function AppDownloadCards() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 space-y-8">
        {/* User App Card */}
        <div className="app-card bg-[#EEF0FF] rounded-3xl p-6 md:p-8 relative overflow-hidden hover-popup">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-sm">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Cypso{' '}
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full">
                  User App
                </span>
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur. Tristique fermentum nunc pellentesque viverra.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto bg-white hover:bg-white/90 gap-2 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Download Android
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto bg-white hover:bg-white/90 gap-2 transition-colors"
                >
                  <Apple className="w-4 h-4" />
                  Download iPhone
                </Button>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="User App Illustration"
                width={300}
                height={300}
                className="object-contain transition-all hover:scale-110 hover:brightness-110 duration-300 ease-in-out"
              />
            </div>
            
            <div className="w-48 h-48 md:w-64 md:h-64 bg-white p-4 rounded-2xl transition-all hover:scale-110 hover:shadow-lg duration-300 ease-in-out">
              <Image
                src="/placeholder.svg"
                alt="QR Code"
                width={240}
                height={240}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Delivery App Card */}
        <div className="app-card bg-[#EEF0FF] rounded-3xl p-6 md:p-8 relative overflow-hidden transition-transform hover:scale-105 duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-white p-4 rounded-2xl transition-transform hover:scale-110 duration-300">
              <Image
                src="/placeholder.svg"
                alt="QR Code"
                width={240}
                height={240}
                className="w-full h-full"
              />
            </div>

            <div className="flex-1 flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="Delivery App Illustration"
                width={300}
                height={300}
                className="object-contain transition-transform hover:scale-110 duration-300"
              />
            </div>

            <div className="max-w-sm">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Cypso{' '}
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full">
                  Delivery App
                </span>
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur. Tristique fermentum nunc pellentesque viverra.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto bg-white hover:bg-white/90 gap-2 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Download Android
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto bg-white hover:bg-white/90 gap-2 transition-colors"
                >
                  <Apple className="w-4 h-4" />
                  Download iPhone
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

