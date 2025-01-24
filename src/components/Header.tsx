import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../i18n';

const Header = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages[i18n.language as keyof typeof languages] || languages.en;

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0A192F]/90 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-4 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-gray-900">VibeRise</span>
        </a>

        {/* Right side navigation */}
        <div className="flex items-center gap-6">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-white"
            >
              <span className="text-xl">{currentLanguage.flag}</span>
              <span className="text-sm font-medium opacity-0 max-w-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap">
                {currentLanguage.nativeName}
              </span>
            </button>

            {/* Dropdown */}
            {isOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[160px]">
                {Object.entries(languages).map(([code, { nativeName, flag }]) => (
                  <button
                    key={code}
                    onClick={() => {
                      i18n.changeLanguage(code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors ${
                      code === i18n.language ? 'text-blue-600 font-medium bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-xl">{flag}</span>
                    <span className="text-sm">{nativeName}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Login button */}
          <a
            href="https://app.skillval.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-white hover:text-blue-400 transition-colors"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
