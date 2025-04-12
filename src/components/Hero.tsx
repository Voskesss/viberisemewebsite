import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  const words = [
    'ai',
    'freedom',
    'control',
    'data',
    'privacy',
    'movement',
    'europe'
  ];

  const [currentWord, setCurrentWord] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 5000); // Verander woord elke 5 seconden

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="full-width relative hero-section min-h-[800px] md:min-h-[90vh] bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          src="/viberisemewebsite/videos/hero-bg.mp4"
        >
        </video>
        {/* Overlay voor betere leesbaarheid van tekst */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content - absolute positioning at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 pb-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-40 h-40 mx-auto mb-6 relative">
              <img src="/viberisemewebsite/images/logo/logo-coliblanco.png" alt="ColiBlanco Logo" className="w-full h-full object-contain" />
              
              {/* Animatie effect rond het logo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 via-orange-500/20 to-teal-500/20 rounded-full blur-xl -z-10 animate-pulse" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-semibold text-white mb-8 tracking-wide font-quicksand">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-orange-400 to-teal-400">ColiBlanco</span>
              <span 
                key={words[currentWord]}
                className="font-light italic opacity-90 -ml-2 transform -rotate-6 inline-block transition-opacity duration-1000 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-orange-300 to-teal-300"
              >.{t(`hero.words.${words[currentWord]}`)}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              {t('hero.description')}
            </p>
            <button className="bg-gradient-to-r from-teal-500 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all mb-8">
              {t('hero.cta')}
            </button>
          </div>
        </div>

        {/* Simpele elegante kromming */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 100" 
            className="w-full text-white"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,0 C480,100 960,100 1440,0 L1440 100 L0 100 Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
