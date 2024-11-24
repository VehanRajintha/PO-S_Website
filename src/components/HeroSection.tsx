'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-[#4052FF] text-white pb-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="/wave.svg"
          alt="Wave Background"
          fill
          className="opacity-50 object-cover"
        />
      </div>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 z-0">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="60" fill="#6E82FE" fillOpacity="0.4"/>
        </svg>
      </div>
      <div className="container mx-auto px-4 pt-20 pb-40 relative z-10">
        <div className="max-w-2xl hero-content">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            JOIN A STATE-OF-THE-ART TECHNOLOGY EXPERIENCE TO OPTIMIZE YOUR BUSINESS
          </h1>
          <p className="text-base md:text-lg mb-8 text-blue-100">
            Experience seamless operations and enhanced efficiency with our cutting-edge POS solution.
          </p>
          <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-100 transition-colors">
            Get Started
          </Button>
        </div>
        <div className="absolute right-0 top-20 w-full md:w-1/2 px-4 md:px-0 mt-8 md:mt-0 hero-image">
          <Image
            src="/placeholder.png"
            alt="Dashboard Preview"
            width={600}
            height={400}
            className="w-full transition-transform hover:scale-105 duration-300"
          />
        </div>
        <div className="flex flex-wrap gap-8 md:gap-16 mt-16 hero-stats">
          <div>
            <div className="text-2xl md:text-4xl font-bold">150K+</div>
            <div className="text-sm md:text-base text-blue-200">Active Users</div>
          </div>
          <div>
            <div className="text-2xl md:text-4xl font-bold">90K+</div>
            <div className="text-sm md:text-base text-blue-200">Downloads</div>
          </div>
          <div>
            <div className="text-2xl md:text-4xl font-bold">100%</div>
            <div className="text-sm md:text-base text-blue-200">Satisfaction Rate</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

