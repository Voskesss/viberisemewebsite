import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../i18n';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages[i18n.language as keyof typeof languages] || languages.en;

  const sections = [
    { id: 'features-section', name: t('features.title') },
    { id: 'users-section', name: t('features.groups.users.title') },
    { id: 'companies-section', name: t('features.groups.companies.title') },
    { id: 'influencers-section', name: t('features.groups.influencers.title') },
    { id: 'developers-section', name: t('features.groups.developers.title') },
    { id: 'investors-section', name: t('features.groups.investors.title') },
  ];

  // Sluit menu's als er buiten geklikt wordt
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 72; // Hoogte van de header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0A192F]/90 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-4 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">
            VibeRise<span className="font-light italic opacity-90 ml-0.5 transform -rotate-6 inline-block">.me</span>
          </span>
        </a>

        {/* Right side navigation */}
        <div className="flex items-center gap-6">
          {/* Language selector (altijd zichtbaar) */}
          <div className="relative" ref={langRef}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-white"
            >
              <span className="text-xl">{currentLanguage.flag}</span>
              <span className="hidden lg:block text-sm font-medium opacity-0 max-w-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap">
                {currentLanguage.nativeName}
              </span>
            </button>

            {/* Dropdown */}
            {isOpen && (
              <div 
                className="absolute top-full right-0 mt-2 bg-[#0A192F]/95 backdrop-blur-sm rounded-lg shadow-lg py-2 min-w-[160px] z-50"
                onClick={(e) => e.stopPropagation()}
              >
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
          <div className="relative lg:hidden" ref={menuRef}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
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

            {/* Mobiel menu */}
            {isMenuOpen && (
              <div 
                className="absolute top-full right-0 mt-2 bg-[#0A192F]/95 backdrop-blur-sm rounded-lg shadow-lg py-2 min-w-[200px] z-50"
                onClick={(e) => e.stopPropagation()}
              >
                {sections.map(({ id, name }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors text-white/90 hover:text-white text-sm"
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:block relative" ref={menuRef}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-white"
            >
              <span className="text-sm font-bold">VibeRise</span>
              <span className="font-light italic opacity-90 ml-0.5 transform -rotate-6 inline-block">.{t('hero.words.for')}</span>
              <svg className={`w-4 h-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Desktop dropdown */}
            {isMenuOpen && (
              <div 
                className="absolute top-full right-0 mt-2 bg-[#0A192F]/95 backdrop-blur-sm rounded-lg shadow-lg py-2 min-w-[200px] z-50"
                onClick={(e) => e.stopPropagation()}
              >
                {sections.map(({ id, name }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="w-full text-left px-4 py-2 hover:bg-white/5 transition-colors text-white/90 hover:text-white text-sm"
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
