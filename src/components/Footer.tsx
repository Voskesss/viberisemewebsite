import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 py-16 border-t border-gray-200 full-width">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold text-white mb-4">VibeRise</span>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Your data should work for you.
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              {t('footer.contact.title')}
            </h3>
            <ContactForm />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-200">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
