import Image from 'next/image'
import { Button } from "@/components/ui/button"
import SignUpForm from '@/app/signup/form/sign-up-form'

export default function Page() {
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

        {/* Right side - Sign Up Form */}
        <div className="w-full md:w-[450px]">
          <SignUpForm />
        </div>
      </main>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-8">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-8 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white"></div>
      </div>
    </div>
  )
}

