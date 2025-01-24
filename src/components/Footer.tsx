import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-16 border-t border-gray-200 full-width">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-gray-900">
                VibeRise<span className="font-light italic opacity-90 ml-0.5 transform -rotate-6 inline-block">.me</span>
              </span>
            </a>
            <p className="text-sm text-gray-600 text-center md:text-left">
              {t('footer.description')}
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
          &copy; {currentYear} VibeRise.me - {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
