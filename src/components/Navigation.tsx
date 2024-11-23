'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-blue-600">
      <div className="text-2xl font-bold text-white">Cypso POS</div>
      <button 
        className="lg:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto lg:gap-8 mt-4 lg:mt-0`}>
        <Link className="block lg:inline-block text-white hover:text-blue-200 transition-colors mb-2 lg:mb-0" href="#">
          About
        </Link>
        <Link className="block lg:inline-block text-white hover:text-blue-200 transition-colors mb-2 lg:mb-0" href="#">
          Pricing
        </Link>
        <Link className="block lg:inline-block text-white hover:text-blue-200 transition-colors mb-2 lg:mb-0" href="#">
          Service
        </Link>
        <Link className="block lg:inline-block text-white hover:text-blue-200 transition-colors mb-2 lg:mb-0" href="#">
          Contact
        </Link>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mt-4 lg:mt-0">
          <Link href="/signin">
            <Button className="w-full lg:w-auto bg-white text-blue-600 hover:bg-blue-100 transition-colors">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="outline" className="w-full lg:w-auto text-white border-white hover:bg-white/20 transition-colors">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

