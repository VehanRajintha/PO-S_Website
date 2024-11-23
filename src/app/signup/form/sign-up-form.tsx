'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SignUpForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = async () => {
    setIsLoading(true)
    try {
      await router.push('/signup/address1')
    } catch (error) {
      console.error('Navigation failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="bg-[#7B88F7]/50 backdrop-blur-sm">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Sign Up
        </h2>
        <p className="text-white/90 text-center mb-8">
          Log in To Your Exiting Account
        </p>
        
        <div className="space-y-4">
          <div>
            <Input 
              placeholder="User name" 
              className="bg-white/90 border-0 placeholder:text-gray-500"
            />
          </div>
          
          <div>
            <Select>
              <SelectTrigger className="bg-white/90 border-0">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Input 
              type="date" 
              placeholder="Date of Birth"
              className="bg-white/90 border-0 placeholder:text-gray-500"
            />
          </div>

          <Button 
            className="w-full bg-[#4052EE] hover:bg-[#4052EE]/90 text-white py-6"
            onClick={handleNext}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

