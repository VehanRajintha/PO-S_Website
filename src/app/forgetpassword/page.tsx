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

  return (
    <div className="min-h-screen bg-[#4052ff] overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4">
        <div className="text-white text-2xl font-bold">Cypso POS</div>
        <div className="hidden md:flex space-x-4 text-white">
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#service">Service</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" className="text-white hover:bg-white/20">Sign In</Button>
          <Button variant="outline" className="bg-white text-[#4052ff] hover:bg-white/90">Sign Up</Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-8">
        {/* Left Side - Illustration */}
        <div className="w-full md:w-1/2 relative h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Right Side - Forgot Password Form */}
        <div className="w-full md:w-1/2 max-w-md">
          <Card className="bg-[#7B88F7]/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-2">
                Forgot Password
              </h2>
              <p className="text-white/90 text-center mb-8">
                Verify Your Phone or E-Mail for Change Your Password
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <AtSign className="absolute left-3 top-3 text-gray-500" size={20} />
                  <Input 
                    placeholder="Enter your Email or Phone" 
                    className="bg-white/90 border-0 pl-10 placeholder:text-gray-500"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#4052EE] hover:bg-[#4052EE]/90 text-white py-6"
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

