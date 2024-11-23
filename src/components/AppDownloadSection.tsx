'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AppDownloadSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-blue-50 rounded-2xl p-8 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Image src="/placeholder.svg" alt="App Preview" width={200} height={200} />
            <div>
              <h3 className="text-2xl font-bold mb-4">Cypso User App</h3>
              <div className="flex gap-4">
                <Image src="/placeholder.svg" alt="QR Code" width={100} height={100} />
                <div className="flex flex-col gap-2">
                  <Button variant="outline">Download Android</Button>
                  <Button variant="outline">Download iPhone</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

