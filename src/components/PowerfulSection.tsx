import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PowerfulSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="full-width relative w-full bg-gradient-to-br from-[#0A192F] via-[#172A46] to-[#1F3A60] -mb-1 overflow-hidden">
      {/* Moderne, dynamische achtergrond elementen */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute right-0 top-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] rounded-full bg-gradient-to-br from-blue-400 to-purple-500 blur-3xl translate-x-1/3 -translate-y-1/4" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute left-0 bottom-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 blur-3xl -translate-x-1/4 translate-y-1/4" 
      />

      {/* Onderste golf met moderne curve */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,120 L0,60 C240,100 480,20 720,40 C960,60 1200,100 1440,80 L1440,120 Z" 
            fill="white"
            className="opacity-95"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Tekst sectie met animaties */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-5xl font-quicksand font-semibold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {t('powerful.title')}
            </h2>
            <div className="space-y-6 text-lg text-white/90">
              <p>
                {t('powerful.description')}
              </p>
              <p>
                {t('powerful.description2')}
              </p>
              <div className="mt-8 flex items-center space-x-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex-1"
                >
                  <h3 className="text-xl font-semibold mb-2">{t('powerful.secure.title')}</h3>
                  <p className="text-white/80">{t('powerful.secure.description')}</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex-1"
                >
                  <h3 className="text-xl font-semibold mb-2">{t('powerful.rewards.title')}</h3>
                  <p className="text-white/80">{t('powerful.rewards.description')}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Moderne interface visualisatie */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent md:hidden" />
              <img
                src="/images/dashboard.png"
                alt="VibeRise Dashboard"
                className="w-full h-auto rounded-2xl"
              />
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-3"
              >
                <div className="text-white text-sm">{t('powerful.earned')}</div>
                <div className="text-2xl font-semibold text-green-400">€15.00</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PowerfulSection;
