import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import WaitlistModal from './WaitlistModal';

const CustomerSection = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      id: 'privacy',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: t('customer.features.privacy.title'),
      description: t('customer.features.privacy.description')
    },
    {
      id: 'earnings',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('customer.features.earnings.title'),
      description: t('customer.features.earnings.description')
    },
    {
      id: 'freedom',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: t('customer.features.freedom.title'),
      description: t('customer.features.freedom.description')
    },
    {
      id: 'control',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: t('customer.features.control.title'),
      description: t('customer.features.control.description')
    }
  ];

  return (
    <section className="relative" id="users-section">
      {/* Overgang van vorige sectie */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-green-50 to-transparent -translate-y-full pointer-events-none" />
      
      {/* Golvende overgang */}
      <div className="absolute top-0 -translate-y-[99%] z-10 full-width">
        <svg 
          className="w-full h-[100px] fill-white transform rotate-180" 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" 
            className="fill-green-50"
          />
        </svg>
      </div>

      <div className="bg-gradient-to-b from-white to-green-50 pt-24 pb-32 relative overflow-hidden full-width">
        {/* Energetische achtergrond met kolibrie-elementen */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-100/20 to-orange-100/20" />
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-teal-400/10 via-orange-400/10 to-teal-400/10 blur-3xl"
          />
          
          {/* Kleine kolibries in de achtergrond */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-teal-500"
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-3 h-3 rounded-full bg-orange-500"
            animate={{
              y: [0, 15, 0],
              x: [0, -8, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center mb-20">
            {/* Badge voor doelgroep */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-100/50 to-orange-100/50 backdrop-blur-sm border border-white/20 shadow-sm mb-6"
            >
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm font-medium bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent">
                {t('customer.badge')}
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-orange-600 to-teal-600 bg-clip-text text-transparent"
            >
              {t('customer.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              {t('customer.subtitle')}
            </motion.p>
          </div>

          {/* Illustratie van een persoon met een kolibrie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto mb-20 relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/viberisemewebsite/images/illustrations/digital-freedom.jpg" 
                alt="Digitale vrijheid met ColiBlanco" 
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Energetische elementen rond de afbeelding */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/10 via-orange-500/10 to-teal-500/10 rounded-3xl blur-xl -z-10" />
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
              className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-orange-500/20 to-teal-500/20 rounded-2xl blur-lg -z-10"
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
                className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 relative overflow-hidden group landing-spot"
              >
                {/* Feature icon met glow effect */}
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-orange-500 rounded-xl mb-6 flex items-center justify-center text-white relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-orange-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>

                {/* Subtiele accent lijn */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/50 to-orange-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
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
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              {t('customer.features.cta')}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Wachtlijst Modal */}
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userGroup="consumer"
      />
    </section>
  );
};

export default CustomerSection;
