'use client'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import PricingSection from '../components/PricingSection'
import ShowcasedIndustries from '../components/ShowcasedIndustries'
import AppDownloadSection from '../components/AppDownloadSection'
import AppDownloadCards from '../components/AppDownloadCards'
import Footer from '../components/Footer'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Home() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-[#4052ff] overflow-hidden">
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
    </div>
  )
}

