import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-800 py-16 border-t border-green-700 full-width relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-green-600/10 via-blue-600/10 to-green-600/10 blur-3xl"
        />
      </div>

      {/* Animated waves */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,45 50,50 T100,50"
            stroke="rgb(34 197 94 / 0.1)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              pathOffset: [0, 1, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.path
            d="M0,55 Q25,50 50,55 T100,55"
            stroke="rgb(52 211 153 / 0.1)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              pathOffset: [0, 1, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="flex flex-col space-y-4">
            <a href="/" className="flex items-center gap-3 justify-center md:justify-start">
              <img src="/viberisemewebsite/images/logo/logo-coliblanco.png" alt="ColiBlanco Logo" className="w-10 h-10 object-contain" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-green-500">
                ColiBlanco<span className="font-light italic opacity-90 ml-0.5 transform -rotate-6 inline-block">.ai</span>
              </span>
            </a>
            <p className="text-sm text-green-300 text-center md:text-left">
              {t('footer.description')}
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              {t('footer.contact.title')}
            </h3>
            <ContactForm />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-green-400 pt-8 border-t border-green-700">
          &copy; {currentYear} ColiBlanco.ai - {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
