'use client'

import { Button } from "@/components/ui/button"

export default function FeatureSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 feature-title">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            High-Impact <span className="bg-blue-600 text-white px-4 py-1 rounded-full">Features</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Tristique fermentum nunc pellentesque viverra. Diam lectus gravida est semper eget ornare fringilla amet. Tempus lacinia leo molestie placerat nunc ut.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`feature-card rounded-3xl p-6 md:p-8 ${
                i === 1
                  ? "bg-blue-600 text-white"
                  : "bg-blue-50"
              } transition-transform hover:scale-105 duration-300`}
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 ${
                i === 1 ? "bg-white/20" : "bg-white"
              }`}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={i === 1 ? "text-white" : "text-blue-600"}
                >
                  <path
                    d="M20 12V5C20 4.46957 19.7893 3.96086 19.4142 3.58579C19.0391 3.21071 18.5304 3 18 3H6C5.46957 3 4.96086 3.21071 4.58579 3.58579C4.21071 3.96086 4 4.46957 4 5V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 7H17M7 11H17M7 15H13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-2 md:mb-3 ${
                i === 1 ? "text-white" : "text-gray-900"
              }`}>
                Order Management
              </h3>
              <p className={`text-sm mb-4 md:mb-6 ${
                i === 1 ? "text-white/80" : "text-gray-600"
              }`}>
                Lorem ipsum dolor sit amet consectetur. Tristique fermentum nunc pellentesque viverra.
              </p>
              <Button
                variant={i === 1 ? "secondary" : "default"}
                className={`w-full px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 1
                    ? "bg-white text-blue-600 hover:bg-white/90"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Read More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

