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
    <Card className="bg-[#7B88F7]/50 backdrop-blur-sm">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Verify Code
        </h2>
        <p className="text-white/90 text-center mb-8">
          It is a long established fact that a reader will be distracted by the readable content
        </p>
        
        <div className="text-center mb-2">
          <p className="text-white/80 text-sm">Enter OTP</p>
        </div>

        <div className="flex justify-between gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              ref={inputRefs[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-lg font-semibold border rounded bg-white/20 border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          ))}
        </div>

        <Button 
          className="w-full bg-[#4052EE] hover:bg-[#4052EE]/90 text-white py-6"
          disabled={otp.some(digit => !digit) || isLoading}
          onClick={handleVerify}
        >
          {isLoading ? "Verifying..." : "Verify"}
        </Button>
      </CardContent>
    </Card>
  )
}

