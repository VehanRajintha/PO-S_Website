'use client'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { KeyRound, Eye, EyeOff } from 'lucide-react'

export default function ResetPasswordPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await router.push('/signin')
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

        {/* Right Side - Reset Password Form */}
        <div className="w-full md:w-1/2 max-w-md">
          <Card className="bg-[#7B88F7]/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-2">
                Reset Password
              </h2>
              <p className="text-white/90 text-center mb-8">
                Create a New Strong Password
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <KeyRound className="absolute left-3 top-3 text-gray-500" size={20} />
                  <Input 
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter New Password" 
                    className="bg-white/90 border-0 pl-10 pr-10 placeholder:text-gray-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <div className="relative">
                  <KeyRound className="absolute left-3 top-3 text-gray-500" size={20} />
                  <Input 
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-Enter New Password" 
                    className="bg-white/90 border-0 pl-10 pr-10 placeholder:text-gray-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm text-white">
                    Remember Me
                  </label>
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
      </div>
    </div>
  )
}