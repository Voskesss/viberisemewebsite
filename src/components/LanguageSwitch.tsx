import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button
        className={`px-2 py-1 rounded ${i18n.language === 'nl' ? 'bg-blue-500' : 'bg-gray-700'}`}
        onClick={() => changeLanguage('nl')}
      >
        NL
      </button>
      <button
        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-500' : 'bg-gray-700'}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
