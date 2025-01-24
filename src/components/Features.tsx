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

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decoratieve achtergrond elementen */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-0 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Hoofdtekst met moderne gradient */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <span className="text-blue-600 font-semibold mb-4 block">
            Decentralized. Secure. Yours.
          </span>
          <h2 className="text-5xl md:text-6xl font-quicksand font-semibold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* Feature cards met moderne styling */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Data Container Card */}
          <motion.div 
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl shadow-blue-100/20 border border-blue-50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('features.data.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.data.description')}
              </p>
            </div>
          </motion.div>

          {/* AI Assistant Card */}
          <motion.div 
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl shadow-purple-100/20 border border-purple-50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('features.ai.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.ai.description')}
              </p>
            </div>
          </motion.div>

          {/* Choose Interactions Card */}
          <motion.div 
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl shadow-green-100/20 border border-green-50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6 flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('features.rewards.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.rewards.description')}
              </p>
            </div>
          </motion.div>

          {/* Break Free Card */}
          <motion.div 
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl shadow-orange-100/20 border border-orange-50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6 flex items-center justify-center transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
        </motion.div>

        {/* Call-to-action sectie */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Take Control?
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Join thousands who have already taken back control of their digital life.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:shadow-lg transition-shadow duration-300"
              >
                Join the Revolution
              </motion.button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 to-purple-100/40 transform rotate-6 scale-150" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
