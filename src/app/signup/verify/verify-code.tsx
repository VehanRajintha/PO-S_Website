'use client'

import { useState, useRef, KeyboardEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from 'next/navigation'

export default function VerifyCode() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]

  const handleVerify = async () => {
    setIsLoading(true)
    try {
      await router.push('/signup/form')
    } catch (error) {
      console.error('Navigation failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
      
      // Move to next input if value is entered
      if (value && index < 5) {
        inputRefs[index + 1].current?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus()
    }
  }

  return (
    <Card className="bg-[#6E82FE] h-[500px] rounded-3xl border-0">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center">
            Verify Code
          </h2>
          <p className="text-white/90 text-center">
            It is a long established fact that a reader
          </p>
          <p className="text-white/90 text-center">
            will be distracted by the readable content
          </p>
        </div>
        
        <div className="flex flex-col items-center mt-8">
          <p className="text-white mb-6">Enter OTP</p>

          <div className="flex justify-center gap-3 mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                ref={inputRefs[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-[52px] h-[52px] text-center text-lg font-semibold bg-white rounded-xl border-2 border-white text-[#4052ff] focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            ))}
          </div>

          <Button 
            className="w-full bg-[#4052EE] hover:bg-[#4052EE]/90 text-white rounded-2xl h-14 text-base font-medium"
            disabled={otp.some(digit => !digit) || isLoading}
            onClick={handleVerify}
          >
            {isLoading ? "Verifying..." : "Verify"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

