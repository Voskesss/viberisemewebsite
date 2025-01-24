import './App.css'
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Hero from './components/Hero'
import Features from './components/Features'
import CustomerSection from './components/CustomerSection'
import CompanySection from './components/CompanySection'
import InvestorSection from './components/InvestorSection'
import DeveloperSection from './components/DeveloperSection'
import Footer from './components/Footer'
import SEO from './components/SEO'
import Header from './components/Header'
import InfluencerSection from './components/InfluencerSection'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Detecteer browser taal en pas toe
    const browserLang = navigator.language.split('-')[0];
    if (['nl', 'en'].includes(browserLang)) {
      i18n.changeLanguage(browserLang);
    }
  }, [i18n]);

  return (
    <HelmetProvider>
      <SEO />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <CustomerSection />
          <CompanySection />
          <InfluencerSection />
          <InvestorSection />
          <DeveloperSection />
          
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </HelmetProvider>
  )
}

export default App
