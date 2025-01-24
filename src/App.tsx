import './App.css'
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import PowerfulSection from './components/PowerfulSection'
import ValidationSection from './components/ValidationSection'
import CarouselSection from './components/CarouselSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'
import SEO from './components/SEO'

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <PowerfulSection />
          <ValidationSection />
          <CarouselSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default App
