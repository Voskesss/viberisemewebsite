import { motion, useScroll, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import WaitlistModal from './WaitlistModal';

const Features = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hummingbirdPosition, setHummingbirdPosition] = useState({ x: 50, y: 100 });
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 100 });
  const scrollTimeout = useRef<number | null>(null);
  
  // Scroll tracking
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { damping: 15, stiffness: 100 });
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Generate a new random target position when scrolling, but keep it within viewport
      const padding = 50; // Padding from edges of screen
      const newX = Math.random() * (window.innerWidth - padding * 2) + padding;
      const newY = Math.random() * (window.innerHeight - padding * 2) + padding + smoothScrollY.get();
      setTargetPosition({ x: newX, y: newY });
      
      // Clear previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Set timeout to detect when scrolling stops
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        
        // When scrolling stops, find a landing spot
        const elements = document.querySelectorAll('.landing-spot');
        if (elements.length > 0) {
          const randomIndex = Math.floor(Math.random() * elements.length);
          const element = elements[randomIndex];
          const rect = element.getBoundingClientRect();
          
          // Check if landing spot is in viewport
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setTargetPosition({
              x: rect.left + rect.width / 2,
              y: rect.top + smoothScrollY.get() + rect.height / 2
            });
          } else {
            // If landing spot is not in viewport, stay in the middle of the screen
            setTargetPosition({
              x: window.innerWidth / 2,
              y: window.innerHeight / 2 + smoothScrollY.get()
            });
          }
        }
      }, 500); // Increased timeout for slower movement
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [smoothScrollY]);
  
  // Update hummingbird position with smooth animation (slower)
  useEffect(() => {
    const interval = setInterval(() => {
      setHummingbirdPosition(prev => {
        // Slower movement factor (0.02 instead of 0.05)
        return {
          x: prev.x + (targetPosition.x - prev.x) * 0.02,
          y: prev.y + (targetPosition.y - prev.y) * 0.02
        };
      });
    }, 24); // Slower update interval (24ms instead of 16ms)
    
    return () => clearInterval(interval);
  }, [targetPosition]);

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
      {/* Kolibrie-achtige vorm die meebeweegt met scrollen */}
      <motion.div
        className="fixed z-50 pointer-events-none"
        style={{
          left: hummingbirdPosition.x,
          top: hummingbirdPosition.y,
          position: 'fixed'
        }}
        animate={{
          rotate: isScrolling ? [0, -10, 10, -5, 5, 0] : 0
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 0.5,
            ease: "easeInOut"
          }
        }}
      >
        <div className="relative w-4 h-4">
          {/* Bolletje */}
          <div className="absolute inset-0 bg-orange-500 rounded-full" />
          {/* Snavel */}
          <div className="absolute right-0 top-1/3 w-1 h-2 bg-orange-500 transform rotate-0 origin-left" />
        </div>
      </motion.div>

      <div className="bg-gradient-to-b from-white to-green-50 pt-24 pb-32 relative overflow-hidden full-width">
        {/* Energetische achtergrond */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20" />
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-green-400/10 via-blue-400/10 to-green-400/10 blur-3xl"
          />
        </div>

        {/* Golvende energielijnen die lijken op kolibrie-vluchtpatronen */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q15,45 30,50 T60,50 T100,50"
              className="stroke-green-300/30 fill-none"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M0,55 Q20,60 40,55 T70,55 T100,55"
              className="stroke-blue-300/30 fill-none"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.path
              d="M0,45 Q25,40 50,45 T75,45 T100,45"
              className="stroke-orange-300/30 fill-none"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          {/* Hoofdtekst met kolibrie-achtig vibratie-effect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-24"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
                x: [0, 3, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block"
            >
              <h2 className="text-5xl md:text-6xl font-quicksand font-bold mb-6 bg-gradient-to-r from-teal-500 via-blue-500 to-orange-500 bg-clip-text text-transparent relative landing-spot">
                {t('features.mainTitle')}
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-orange-500/20 blur-xl -z-10 rounded-full opacity-50" />
                
                {/* Geanimeerde kolibrie die wegvliegt */}
                <motion.div
                  initial={{ x: -50, y: 20, opacity: 0 }}
                  animate={{ 
                    x: [null, 0, 100, 200],
                    y: [null, 0, -30, -60],
                    opacity: [null, 1, 1, 0],
                    scale: [null, 1, 0.8, 0.6]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  className="absolute -left-16 -top-12 w-16 h-16"
                >
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Vleugel (teal) met animatie */}
                    <motion.path 
                      d="M200,200 C150,150 100,180 80,220 C60,260 120,320 180,260 C220,220 200,200 200,200 Z" 
                      fill="#1D7A8C"
                      animate={{
                        d: [
                          "M200,200 C150,150 100,180 80,220 C60,260 120,320 180,260 C220,220 200,200 200,200 Z",
                          "M200,200 C170,130 120,160 100,200 C80,240 140,300 200,240 C240,200 200,200 200,200 Z",
                          "M200,200 C150,150 100,180 80,220 C60,260 120,320 180,260 C220,220 200,200 200,200 Z"
                        ]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.5
                      }}
                    />
                    
                    {/* Lichaam (oranje) */}
                    <path d="M200,200 C230,190 260,180 300,210 C340,240 350,280 330,320 C310,360 260,350 230,320 C200,290 200,200 200,200 Z" fill="#FF7F2A" />
                    
                    {/* Oog */}
                    <circle cx="280" cy="240" r="12" fill="#1A2E35" />
                    
                    {/* Snavel */}
                    <path d="M300,240 L380,220 L300,260 Z" fill="#FF7F2A" />
                    
                    {/* Poten (cru00e8me) */}
                    <path d="M230,320 L200,380 L260,380 Z" fill="#FFF8E1" />
                  </svg>
                </motion.div>
              </h2>
            </motion.div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </motion.div>

          {/* Hoofdfeatures met kolibrie-kleuren */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-24"
          >
            {/* Vrijheid Card */}
            <motion.div 
              variants={item}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-teal-100 relative overflow-hidden group landing-spot"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
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

            {/* Digitale Tuin Card */}
            <motion.div 
              variants={item}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-teal-100 relative overflow-hidden group landing-spot"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl mb-6 flex items-center justify-center">
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

            {/* Digitale Orkest Card */}
            <motion.div 
              variants={item}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-teal-100 relative overflow-hidden group landing-spot"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-bl-[100px] transition-all duration-300 group-hover:scale-110" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 flex items-center justify-center">
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

          {/* ColiCard Sectie - Opvallende kaart die op alle schermen de content naar voren duwt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto mb-24 relative z-20"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative transform -rotate-1 hover:rotate-0 transition-all duration-300"
            >
              {/* Achtergrond elementen */}
              <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path
                    d="M0,30 Q25,45 50,30 T100,30"
                    className="stroke-white fill-none"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.path
                    d="M0,70 Q25,55 50,70 T100,70"
                    className="stroke-white fill-none"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                  />
                </svg>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/30 via-blue-500/30 to-teal-500/30 rounded-3xl blur-2xl -z-10" />
              
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
                {/* Linkerkant - Tekst */}
                <div className="flex flex-col justify-center text-white">
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-6"
                  >
                    ColiCard: Je Digitale Identiteit
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-white/90 text-lg mb-8"
                  >
                    De ColiCard is je sleutel tot digitale vrijheid. Een veilige, draagbare identiteit die jou controle geeft over je data en privacy, waar je ook bent.
                  </motion.p>
                  
                  {/* Card Features */}
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { 
                        title: 'Volledige Controle', 
                        description: 'Net als een kolibrie vlieg je moeiteloos door het digitale landschap, zonder zorgen over je privacy.'
                      },
                      { 
                        title: 'Jouw Digitale Nectar', 
                        description: 'Jouw digitale nectar wordt niet langer gestolen door grote bedrijven, maar komt direct bij jou terecht.'
                      },
                      { 
                        title: 'Vlieg Vrij', 
                        description: 'ColiBlanco geeft je vleugels om te ontsnappen aan de digitale kooien die grote techbedrijven voor je hebben gebouwd.'
                      },
                      { 
                        title: 'Oogst de Vruchten', 
                        description: 'Elke klik, elke zoekopdracht, elke interactie online is waardevol. Met ColiBlanco pluk jij de vruchten.'
                      }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-white/80">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIsModalOpen(true)}
                    className="mt-8 px-8 py-3 bg-white text-blue-600 font-medium rounded-xl shadow-lg self-start hover:bg-white/90 transition-all landing-spot"
                  >
                    Ontdek ColiCard
                  </motion.button>
                </div>
                
                {/* Rechterkant - Card Illustratie */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center justify-center relative"
                >
                  <div className="relative w-full max-w-md">
                    {/* Card mockup */}
                    <div className="relative z-10 w-full max-w-[350px] mx-auto transform rotate-6 hover:rotate-0 transition-all duration-300">
                      <img 
                        src="public/viberisemewebsite/images/card/colicardwebsite.png" 
                        alt="ColiCard" 
                        className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/30 object-cover" 
                      />
                      
                      {/* Floating elements around the card */}
                      <motion.div 
                        animate={{
                          y: [0, -10, 0],
                          x: [0, 5, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute -top-6 -right-6 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                      </motion.div>
                      
                      <motion.div 
                        animate={{
                          y: [0, 10, 0],
                          x: [0, -5, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute -bottom-8 -left-8 w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Users */}
              <a href="#users-section" className="group">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-green-100 h-full"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4 mx-auto flex items-center justify-center">
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 4h16a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2m0-2h16a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" />
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
            <div className="bg-gradient-to-br from-green-50 via-blue-50 to-green-50 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
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
                  className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-green-600 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => setIsModalOpen(true)}
                >
                  {t('features.mainCta.button')}
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-100/40 to-blue-100/40 transform rotate-6 scale-150" />
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
