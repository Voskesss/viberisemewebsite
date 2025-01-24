import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const InvestorSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 'growth',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: t('investor.features.growth.title'),
      description: t('investor.features.growth.description')
    },
    {
      id: 'security',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t('investor.features.security.title'),
      description: t('investor.features.security.description')
    },
    {
      id: 'impact',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: t('investor.features.impact.title'),
      description: t('investor.features.impact.description')
    },
    {
      id: 'market',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      title: t('investor.features.market.title'),
      description: t('investor.features.market.description')
    }
  ];

  return (
    <section className="relative" id="investors-section">
      {/* Overgang van vorige sectie */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-50 to-transparent -translate-y-full pointer-events-none" />
      
      {/* Golvende overgang */}
      <div className="absolute top-0 inset-x-0 -translate-y-[99%] z-10">
        <svg 
          className="w-full h-[100px] fill-white transform rotate-180" 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" 
            className="fill-gray-50"
          />
        </svg>
      </div>

      <div className="bg-gradient-to-b from-white to-gray-50 pt-24 pb-32 relative overflow-hidden">
        {/* Energetische achtergrond */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/20 to-green-100/20" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-cyan-400/10 via-green-400/10 to-cyan-400/10 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-green-600 to-cyan-600 bg-clip-text text-transparent"
            >
              {t('investor.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              {t('investor.subtitle')}
            </motion.p>
          </div>

          {/* Video sectie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto mb-20 relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder voor video - vervang src met echte video URL */}
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Video Coming Soon</div>
              </div>
            </div>
            
            {/* Energetische elementen rond de video */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-green-500/10 to-cyan-500/10 rounded-3xl blur-xl -z-10" />
            <motion.div
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-green-500/20 to-cyan-500/20 rounded-2xl blur-lg -z-10"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-100 relative overflow-hidden group"
              >
                {/* Feature icon met glow effect */}
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-xl mb-6 flex items-center justify-center text-white relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t(`investor.features.${feature.id}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`investor.features.${feature.id}.description`)}
                </p>

                {/* Subtiele accent lijn */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/50 to-green-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            ))}
          </div>

          {/* Call-to-action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <a 
              href="#invest-now" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              {t('investor.features.cta')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
