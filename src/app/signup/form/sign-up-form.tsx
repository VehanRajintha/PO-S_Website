'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { User, Users } from 'lucide-react'

export default function SignUpForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [dateValue, setDateValue] = useState('')

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

  const handleDateFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.type = 'date'
  }

  const handleDateBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      e.target.type = 'text'
    }
  }

  return (
    <Card className="bg-[#6E82FE] w-[420px] h-[520px] rounded-[20px] border-0">
      <CardContent className="p-8 flex flex-col">
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white text-center">
            Sign Up
          </h2>
          <p className="text-white/90 text-center mt-1">
            Log in To Your Exiting Account
          </p>
        </div>
        
        <div className="flex flex-col space-y-6 mt-14">
          <div className="relative">
            <User className="absolute left-4 top-4 text-gray-400" size={20} />
            <Input 
              placeholder="User name" 
              className="bg-white border-0 pl-12 placeholder:text-gray-500 rounded-2xl h-14 text-base"
            />
          </div>
          
          <div className="relative">
            <Users className="absolute left-4 top-4 text-gray-400 z-20" size={20} />
            <Select>
              <SelectTrigger className="bg-white border-0 pl-12 text-gray-500 rounded-2xl h-14 text-base">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="relative">
            <svg 
              className="absolute left-4 top-4 text-gray-400" 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M6.66667 5.00033V3.33366M13.3333 5.00033V3.33366M5.83333 8.33366H14.1667M4.16667 15.8337H15.8333C16.2754 15.8337 16.6993 15.6581 17.0118 15.3455C17.3244 15.033 17.5 14.6091 17.5 14.167V5.83366C17.5 5.39163 17.3244 4.96771 17.0118 4.65515C16.6993 4.34259 16.2754 4.16699 15.8333 4.16699H4.16667C3.72464 4.16699 3.30072 4.34259 2.98816 4.65515C2.67559 4.96771 2.5 5.39163 2.5 5.83366V14.167C2.5 14.6091 2.67559 15.033 2.98816 15.3455C3.30072 15.6581 3.72464 15.8337 4.16667 15.8337Z" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <Input 
              type="text"
              placeholder="Date of Birth"
              onFocus={handleDateFocus}
              onBlur={handleDateBlur}
              value={dateValue}
              onChange={(e) => setDateValue(e.target.value)}
              className="bg-white border-0 pl-12 placeholder:text-gray-500 rounded-2xl h-14 text-base [&::-webkit-calendar-picker-indicator]:bg-transparent"
            />
          </div>

          <Button 
            className="w-full bg-[#4052EE] hover:bg-[#4052EE]/90 text-white rounded-2xl h-14 text-base font-medium mt-4"
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

