import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Animatie voor de energiecirkels
  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Energetische achtergrond elementen */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Golvende energielijnen */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,45 50,50 T100,50"
            className="stroke-purple-200/30 fill-none"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M0,55 Q25,50 50,55 T100,55"
            className="stroke-blue-200/30 fill-none"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </svg>

        {/* Energetische cirkels */}
        <motion.div
          animate={pulseAnimation}
          className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-gradient-to-r from-purple-400/10 to-blue-400/10 blur-2xl"
        />
        <motion.div
          animate={pulseAnimation}
          transition={{ delay: 1 }}
          className="absolute bottom-1/4 right-0 w-60 h-60 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-2xl"
        />
        <motion.div
          animate={pulseAnimation}
          transition={{ delay: 2 }}
          className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-gradient-to-r from-purple-400/10 to-cyan-400/10 blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Hoofdtekst met vibratie-effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.02, 1],
              rotate: [-0.5, 0.5, -0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-quicksand font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent relative">
              {t('features.title')}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 blur-xl -z-10 rounded-full opacity-50" />
            </h2>
          </motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* Hoofdfeatures */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {/* Global Consciousness Card */}
          <motion.div 
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('features.main.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.main.description')}
              </p>
            </div>
          </motion.div>

          {/* Community Card */}
          <motion.div 
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('features.community.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.community.description')}
              </p>
            </div>
          </motion.div>

          {/* Blockchain Card */}
          <motion.div 
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-cyan-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('features.blockchain.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.blockchain.description')}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Doelgroep Secties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            {t('features.movement.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Users */}
            <a href="#users-section" className="group">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-purple-100 h-full"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {t('features.groups.users.title')}
                </h4>
                <p className="text-gray-600">
                  {t('features.groups.users.description')}
                </p>
              </motion.div>
            </a>

            {/* Companies */}
            <a href="#companies-section" className="group">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg border border-blue-100 h-full"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {t('features.groups.companies.title')}
                </h4>
                <p className="text-gray-600">
                  {t('features.groups.companies.description')}
                </p>
              </motion.div>
            </a>

            {/* Investors */}
            <a href="#investors-section" className="group">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-cyan-50 to-green-50 rounded-2xl p-6 shadow-lg border border-cyan-100 h-full"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {t('features.groups.investors.title')}
                </h4>
                <p className="text-gray-600">
                  {t('features.groups.investors.description')}
                </p>
              </motion.div>
            </a>

            {/* Developers */}
            <a href="#developers-section" className="group">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-green-50 to-purple-50 rounded-2xl p-6 shadow-lg border border-green-100 h-full"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {t('features.groups.developers.title')}
                </h4>
                <p className="text-gray-600">
                  {t('features.groups.developers.description')}
                </p>
              </motion.div>
            </a>
          </div>
        </motion.div>

        {/* Call-to-action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('features.cta.title')}
              </h3>
              <p className="text-xl text-gray-700 mb-8">
                {t('features.cta.subtitle')}
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:shadow-lg transition-shadow duration-300"
              >
                {t('features.cta.button')}
              </motion.button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 to-blue-100/40 transform rotate-6 scale-150" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
