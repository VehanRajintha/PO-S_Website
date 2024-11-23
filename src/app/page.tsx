import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import PricingSection from '../components/PricingSection'
import ShowcasedIndustries from '../components/ShowcasedIndustries'
import AppDownloadSection from '../components/AppDownloadSection'
import AppDownloadCards from '../components/AppDownloadCards'
import Footer from '../components/Footer'
import ScrollRevealWrapper from '@/components/ScrollRevealWrapper'

export default function Home() {
  return (
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
  )
}

