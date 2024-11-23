'use client'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SignUpPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await router.push('/signup/verify')
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

        {/* Right Side - Sign Up Form */}
        <div className="w-full md:w-1/2 max-w-md">
          <div className="bg-[#6675ff] rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Sign Up</h2>
            <p className="text-white/80 mb-6">Log in To Your Exiting Account</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="First Name" className="bg-white/10 text-white placeholder-white/50 border-none" />
              <Input placeholder="Last Name" className="bg-white/10 text-white placeholder-white/50 border-none" />
              <Input placeholder="Email" type="email" className="bg-white/10 text-white placeholder-white/50 border-none" />
              <Input placeholder="Phone" type="tel" className="bg-white/10 text-white placeholder-white/50 border-none" />
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm text-white">
                  I Agree to the Terms of service and the privacy Policy
                </label>
              </div>
              <Button 
                type="submit"
                className="w-full bg-[#4052ff] hover:bg-[#4052ff]/90 text-white" 
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Next"}
              </Button>
            </form>
            <div className="mt-6 flex justify-center space-x-4">
              <Button variant="outline" className="rounded-full w-10 h-10 p-0">
                <Image src="/placeholder.svg?height=20&width=20" alt="Google" width={20} height={20} />
              </Button>
              <Button variant="outline" className="rounded-full w-10 h-10 p-0">
                <Image src="/placeholder.svg?height=20&width=20" alt="Apple" width={20} height={20} />
              </Button>
              <Button variant="outline" className="rounded-full w-10 h-10 p-0">
                <Image src="/placeholder.svg?height=20&width=20" alt="Facebook" width={20} height={20} />
              </Button>
            </div>
            <p className="text-center text-white mt-4">
              Do you Have account ? <a href="#" className="underline">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

