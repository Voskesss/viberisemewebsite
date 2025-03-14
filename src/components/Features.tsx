import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import WaitlistModal from './WaitlistModal';

const Features = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <section className="relative" id="features-section">
      <div className="bg-gradient-to-b from-white to-gray-50 pt-24 pb-32 relative overflow-hidden full-width">
        {/* Energetische achtergrond */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20" />
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-blue-400/10 blur-3xl"
          />
        </div>

        {/* Golvende energielijnen */}
        <div className="absolute inset-0 overflow-hidden">
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
        </div>

        <div className="container mx-auto px-4 relative z-20">
          {/* Hoofdtekst met vibratie-effect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-24"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.03, 1],
                rotate: [-1, 1, -1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block"
            >
              <h2 className="text-5xl md:text-6xl font-quicksand font-bold mb-6 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-clip-text text-transparent relative">
                {t('features.mainTitle')}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 via-yellow-600/20 to-yellow-500/20 blur-xl -z-10 rounded-full opacity-50" />
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
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-yellow-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-yellow-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-yellow-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
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

          {/* VibeRise Device Sectie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto mb-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden shadow-xl border border-blue-100 relative"
          >
            {/* Achtergrond elementen */}
            <div className="absolute inset-0 overflow-hidden">
              <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d="M0,30 Q25,45 50,30 T100,30"
                  className="stroke-blue-400 fill-none"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.path
                  d="M0,70 Q25,55 50,70 T100,70"
                  className="stroke-purple-400 fill-none"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                />
              </svg>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
              {/* Linkerkant - Tekst */}
              <div className="flex flex-col justify-center">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
                >
                  {t('features.device.title')}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-700 text-lg mb-8"
                >
                  {t('features.device.description')}
                </motion.p>
                
                {/* Device Features */}
                <div className="grid grid-cols-1 gap-4">
                  {['privacy', 'cloud', 'calling', 'independence'].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {t(`features.device.features.${feature}.title`)}
                        </h4>
                        <p className="text-gray-600">
                          {t(`features.device.features.${feature}.description`)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* VibeCard Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-8 p-6 bg-white/50 rounded-xl border border-blue-100 shadow-md"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {t('features.device.card.title')}
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-2">
                    {t('features.device.card.description')}
                  </p>
                  <img 
                    src="images/vibecard.jpeg" 
                    alt="VibeCard" 
                    className="w-full h-auto rounded-lg shadow-lg mt-4 object-cover" 
                  />
                </motion.div>
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsModalOpen(true)}
                  className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-lg self-start"
                >
                  Meer informatie
                </motion.button>
              </div>
              
              {/* Rechterkant - Device Illustratie */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center relative"
              >
                <div className="relative w-full max-w-md">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl transform scale-110" />
                  
                  {/* Device mockup */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border-8 border-gray-800 shadow-2xl relative z-10 aspect-[9/16] w-full max-w-[280px] mx-auto">
                    {/* Screen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 overflow-hidden">
                      {/* VibeRise UI mockup */}
                      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-blue-600 to-purple-600 flex items-end p-4">
                        <div className="text-white font-bold">VibePhone OS</div>
                      </div>
                      
                      {/* App icons */}
                      <div className="absolute inset-x-0 top-24 p-4 grid grid-cols-4 gap-4">
                        {[...Array(8)].map((_, i) => (
                          <motion.div 
                            key={i}
                            initial={{ y: 0 }}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                            className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center"
                          >
                            <div className="w-6 h-6 rounded-md bg-white/40" />
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Unified Communication indicator */}
                      <div className="absolute bottom-16 inset-x-0 flex justify-center">
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.05, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="px-4 py-2 rounded-xl bg-blue-500/30 backdrop-blur-sm text-white text-sm flex items-center gap-2 max-w-[200px]"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                          </svg>
                          Unified Messaging
                        </motion.div>
                      </div>
                      
                      {/* Privacy indicator */}
                      <div className="absolute bottom-8 inset-x-0 flex justify-center">
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="px-4 py-2 rounded-full bg-green-500/30 backdrop-blur-sm text-white text-sm flex items-center gap-2"
                        >
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                          Privacy Actief
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ 
                      y: [-10, 10, -10],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-md z-0"
                  />
                  <motion.div
                    animate={{ 
                      y: [10, -10, 10],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 backdrop-blur-md z-0"
                  />
                </div>
              </motion.div>
            </div>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m-9 0a2 2 0 012-2v-6a2 2 0 012 2v6a2 2 0 012 2v6a2 2 0 012-2v-6a2 2 0 012-2z" />
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

              {/* Influencers */}
              <a href="#influencers-section" className="group">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-lg border border-pink-100 h-full"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl mb-4 mx-auto flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {t('features.groups.influencers.title')}
                  </h4>
                  <p className="text-gray-600">
                    {t('features.groups.influencers.description')}
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
                  {t('features.mainCta.title')}
                </h3>
                <p className="text-xl text-gray-700 mb-8">
                  {t('features.mainCta.subtitle')}
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => setIsModalOpen(true)}
                >
                  {t('features.mainCta.button')}
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 to-blue-100/40 transform rotate-6 scale-150" />
            </div>
          </motion.div>
        </div>
      </div>
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userGroup="consumer"
      />
    </section>
  );
};

export default Features;
