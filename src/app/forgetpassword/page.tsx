'use client'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AtSign } from 'lucide-react'

export default function ForgetPasswordPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await router.push('/forgetpassword/verify')
    } catch (error) {
      console.error('Navigation failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleNavigation = (path: string) => {
    console.log('Navigating to:', path)
    router.push(path)
  }

  return (
    <div className="min-h-screen bg-[#4052ff] overflow-hidden relative">
      {/* Background SVG - Add pointer-events-none */}
      <div 
        className="absolute inset-0 w-full h-[800px] pointer-events-none"
        style={{
          backgroundImage: 'url("/bg.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8,
          mixBlendMode: 'normal'
        }}
      />

      {/* Top Right Background SVG */}
      <div 
        className="absolute top-[-600px] right-[20px] w-[1900px] h-[1000px] pointer-events-none"
        style={{
          backgroundImage: 'url("/bg.svg")',
          backgroundSize: 'contain',
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8
        }}
      />
      
      {/* Center Circle */}
      <div 
        className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] pointer-events-none"
        style={{
          backgroundImage: 'url("/circle.svg")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6,
          zIndex: 0
        }}
      />
      
      {/* Bottom Right Circle */}
      <div 
        className="absolute bottom-[70px] right-[40px] w-[150px] h-[150px]"
        style={{
          backgroundImage: 'url("/circle.svg")',
          backgroundSize: 'contain',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Bottom left Circle */}
      <div 
        className="absolute bottom-[150px] left-[350px] w-[150px] h-[150px]"
        style={{
          backgroundImage: 'url("/circle.svg")',
          backgroundSize: 'contain',
          backgroundPosition: 'bottom left',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 relative z-50">
        <div className="text-white text-2xl font-bold pl-8 pt-4">
          <button 
            onClick={() => handleNavigation('/')} 
            className="hover:opacity-80 cursor-pointer"
          >
            Cypso POS
          </button>
        </div>
        <div className="hidden md:flex space-x-8 text-[#FFFFFF]">
          <button 
            onClick={() => handleNavigation('/about')} 
            className="text-lg font-medium hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
          >
            About
          </button>
          <button 
            onClick={() => handleNavigation('/pricing')} 
            className="text-lg font-medium hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
          >
            Pricing
          </button>
          <button 
            onClick={() => handleNavigation('/service')} 
            className="text-lg font-medium hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
          >
            Service
          </button>
          <button 
            onClick={() => handleNavigation('/contact')} 
            className="text-lg font-medium hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
          >
            Contact
          </button>
        </div>
        <div className="flex space-x-2 pr-8">
          <Button 
            variant="outline" 
            className="bg-white text-[#4052ff] hover:bg-white/90 rounded-full px-6 cursor-pointer z-50"
            onClick={() => handleNavigation('/signin')}
            type="button"
          >
            Sign In
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20 rounded-full px-6 cursor-pointer z-50"
            onClick={() => handleNavigation('/signup')}
            type="button"
          >
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-8 relative z-10">
        {/* Left Side - Illustration */}
        <div className="w-full md:w-1/2 relative h-[600px] flex flex-col items-center">
          <Image
            src="/signin.svg"
            alt="Illustration"
            layout="fill"
            objectFit="contain"
            priority
          />
          {/* Pagination Dots */}
          <div className="absolute bottom-0 flex space-x-4 mb-8">
            <div className="w-12 h-3 rounded-full bg-white transition-all duration-300" />
            <div className="w-3 h-3 rounded-full bg-white/50 transition-all duration-300" />
            <div className="w-3 h-3 rounded-full bg-white/50 transition-all duration-300" />
          </div>
        </div>

        {/* Right Side - Forgot Password Form */}
        <div className="w-full md:w-1/2 max-w-md">
          <Card className="bg-[#6E82FE] min-h-[650px] rounded-3xl border-0">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="mt-28">
                <h2 className="text-3xl font-bold text-white text-center">
                  Forgot Password
                </h2>
                <p className="text-white/90 text-center">
                  Verify Your Phone or E-Mail for Change Your Password
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8 mt-12">
                <div className="relative">
                  <AtSign className="absolute left-3 top-3 text-gray-500" size={20} />
                  <Input 
                    placeholder="Enter your Email or Phone" 
                    className="bg-white/90 border-0 pl-10 placeholder:text-gray-500 rounded-xl h-12"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#4052EE] hover:bg-[#4052EE]/90 text-white rounded-xl h-12"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Request a Code"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

