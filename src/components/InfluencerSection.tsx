import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const InfluencerSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 'reach',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: t('influencer.features.reach.title'),
      description: t('influencer.features.reach.description')
    },
    {
      id: 'earnings',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('influencer.features.earnings.title'),
      description: t('influencer.features.earnings.description')
    },
    {
      id: 'analytics',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: t('influencer.features.analytics.title'),
      description: t('influencer.features.analytics.description')
    },
    {
      id: 'community',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('influencer.features.community.title'),
      description: t('influencer.features.community.description')
    }
  ];

  return (
    <section className="relative" id="influencers-section">
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
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 to-purple-100/20" />
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-pink-400/10 via-purple-400/10 to-pink-400/10 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              {t('influencer.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              {t('influencer.subtitle')}
            </motion.p>
          </div>

          {/* Video sectie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto mb-20 relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
                <iframe 
                  src="https://player.vimeo.com/video/1050016503?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" 
                  style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="VibeRise me Influencer's"
                />
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
            
            {/* Energetische elementen rond de video */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl -z-10" />
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
              className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-lg -z-10"
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
                className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 relative overflow-hidden group"
              >
                {/* Decoratieve gradient in de hoek */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl mb-6 flex items-center justify-center">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-16"
          >
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-pink-700 hover:to-purple-700 transition-all transform hover:scale-105">
              {t('influencer.features.cta')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerSection;
