import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../i18n';

// Aparte scroll helper functie
const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const header = document.querySelector('header');
  const headerHeight = header?.offsetHeight || 72;
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [langRef, menuRef]);

  const currentLanguage = languages[i18n.language as keyof typeof languages] || languages.en;

  const sections = [
    { id: 'features-section', name: t('features.title') },
    { id: 'users-section', name: t('customer.title') },
    { id: 'companies-section', name: t('company.title') },
    { id: 'influencers-section', name: t('influencer.title') },
    { id: 'developers-section', name: t('developer.title') },
    { id: 'investors-section', name: t('investor.title') },
  ];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0A192F]/90 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-4 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src="/viberisemewebsite/images/logo/logo-coliblanco.png" alt="ColiBlanco Logo" className="w-10 h-10 object-contain" />
          <span className="text-2xl font-bold text-white">
            ColiBlanco<span className="font-light italic opacity-90 ml-0.5 transform -rotate-6 inline-block">.ai</span>
          </span>
        </a>

        {/* Right side navigation */}
        <div className="flex items-center gap-6">
          {/* Language selector */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-white"
            >
              <span className="text-xl">{currentLanguage.flag}</span>
              <span className="hidden lg:block text-sm font-medium opacity-0 max-w-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap">
                {currentLanguage.nativeName}
              </span>
            </button>

            {/* Language dropdown */}
            {isOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#0A192F] rounded-lg shadow-lg py-2 min-w-[160px] z-50">
                {Object.entries(languages).map(([code, { nativeName, flag }]) => (
                  <button
                    key={code}
                    onClick={() => handleLanguageChange(code)}
                    className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-white/5 transition-colors ${
                      code === i18n.language ? 'text-blue-400 font-medium' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span className="text-xl">{flag}</span>
                    <span className="text-sm">{nativeName}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger menu voor mobiel */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:block relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-white"
            >
              <span className="text-sm font-bold text-white">ColiBlanco</span>
              <span className="font-light italic opacity-90 ml-0.5 transform -rotate-6 inline-block">.{t('hero.words.for')}</span>
              <svg className={`w-4 h-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Desktop dropdown */}
            {isMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#0A192F] rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                {sections.map(({ id, name }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      scrollToElement(id);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-white/5 transition-colors text-white/90 hover:text-white text-sm"
                  >
                    {name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobiel menu als slide-in panel */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed right-0 top-[72px] h-[calc(100vh-72px)] w-64 bg-[#0A192F] shadow-xl transform transition-transform duration-200 ease-in-out">
            <nav className="h-full overflow-y-auto">
              {sections.map(({ id, name }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(id);
                    if (element) {
                      setIsMenuOpen(false);
                      // Wacht tot het menu gesloten is
                      setTimeout(() => {
                        const header = document.querySelector('header');
                        const headerHeight = header?.offsetHeight || 72;
                        element.scrollIntoView({ behavior: 'smooth' });
                        window.scrollBy({
                          top: -headerHeight,
                          behavior: 'smooth'
                        });
                      }, 300);
                    }
                  }}
                  className="block w-full text-left px-6 py-4 hover:bg-white/5 transition-colors text-white/90 hover:text-white text-base border-b border-white/5"
                >
                  {name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
