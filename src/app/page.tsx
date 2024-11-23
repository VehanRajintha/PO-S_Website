'use client'
import dynamic from 'next/dynamic'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import PricingSection from '../components/PricingSection'
import ShowcasedIndustries from '../components/ShowcasedIndustries'
import AppDownloadSection from '../components/AppDownloadSection'
import AppDownloadCards from '../components/AppDownloadCards'
import Footer from '../components/Footer'
import LoadingSpinner from '../components/LoadingSpinner'

// Dynamically import components that need window
const ScrollRevealWrapper = dynamic(
  () => import('@/components/ScrollRevealWrapper'),
  {
    ssr: false,
    loading: () => <LoadingSpinner />
  }
)

export default function Home() {
  return (
    <div className="min-h-screen bg-[#4052ff] overflow-hidden">
      <ScrollRevealWrapper>
        <main className="min-h-screen bg-white">
          <Navigation />
          <HeroSection />
          <FeatureSection />
          <PricingSection />
          <ShowcasedIndustries />
          <AppDownloadSection />
          <AppDownloadCards />
          <Footer />
        </main>
      </ScrollRevealWrapper>
    </div>
  )
}

