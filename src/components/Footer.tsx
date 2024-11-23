'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white">
      {/* Newsletter Section */}
      <div className="bg-white/5 p-6 md:p-8 rounded-3xl mx-4 -mt-12 relative">
        <div className="absolute top-4 right-4 text-sm text-white/80">
          2780.52 + 6612.18
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <Image
              src="/placeholder.svg"
              alt="Megaphone"
              width={120}
              height={120}
              className="hidden md:block transition-transform hover:scale-110 duration-300"
            />
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                Subscribe for
                <br />
                Exclusive Updates
              </h2>
            </div>
          </div>
          <Button 
            size="lg"
            className="w-full md:w-auto bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg rounded-xl transition-colors"
          >
            Subscribe
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="footer-content">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Cypso POS</h3>
            <p className="text-sm md:text-base text-white/80 mb-6">
              Lorem ipsum dolor sit amet consectetur. Tristique fermentum nunc pellentesque viverra.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Link 
                  key={i} 
                  href="#"
                  className="bg-white rounded-full p-2 hover:bg-blue-100 transition-colors"
                >
                  <Image
                    src="/placeholder.svg"
                    alt={`Social ${i}`}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="text-lg md:text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm md:text-base hover:underline transition-all">Home</Link></li>
              <li><Link href="#" className="text-sm md:text-base hover:underline transition-all">Pricing</Link></li>
              <li><Link href="#" className="text-sm md:text-base hover:underline transition-all">Contact</Link></li>
              <li><Link href="#" className="text-sm md:text-base hover:underline transition-all">Help</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-6">Info</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm md:text-base hover:underline transition-all">About</Link></li>
              <li><Link href="#" className="text-sm md:text-base hover:underline transition-all">Term & Conditions</Link></li>
              <li><Link href="#" className="text-sm md:text-base hover:underline transition-all">Privacy Policies</Link></li>
              <li><Link href="#" className="text-sm md:text-base hover:underline transition-all">How to Work this</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-xs md:text-sm text-white/80">
            @2024 Cypsopos.com | All Rights Reserved Cypso Labs (PVT) Ltd.
          </p>
        </div>
      </div>
    </footer>
  )
}

