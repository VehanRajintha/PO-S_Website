'use client'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { MapPin } from 'lucide-react'

export default function AddressDetails2() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await router.push('/signup/createpassword')
    } catch (error) {
      console.error('Navigation failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#4052EE]">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="text-white text-2xl font-bold">Cypso POS</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-white/90">About</a>
          <a href="#" className="text-white hover:text-white/90">Pricing</a>
          <a href="#" className="text-white hover:text-white/90">Service</a>
          <a href="#" className="text-white hover:text-white/90">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:text-white/90">
            Sign In
          </Button>
          <Button className="bg-white text-[#4052EE] hover:bg-white/90">
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Illustration */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image 
            src="/placeholder.svg?height=400&width=600" 
            alt="Analytics Illustration" 
            width={600} 
            height={400}
            className="w-full"
          />
        </div>

        {/* Right side - Address Form */}
        <div className="w-full md:w-[450px]">
          <Card className="bg-[#7B88F7]/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-6">
                Address Details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-500" size={20} />
                  <Input 
                    placeholder="House No / Apartment Name" 
                    className="bg-white/90 border-0 pl-10 placeholder:text-gray-500"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-500" size={20} />
                  <Input 
                    placeholder="Street Line 1" 
                    className="bg-white/90 border-0 pl-10 placeholder:text-gray-500"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-500" size={20} />
                  <Input 
                    placeholder="Street Line 2" 
                    className="bg-white/90 border-0 pl-10 placeholder:text-gray-500"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#4052EE] hover:bg-[#4052EE]/90 text-white py-6"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Next"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
