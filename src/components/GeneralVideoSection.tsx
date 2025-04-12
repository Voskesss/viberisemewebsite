import { motion } from 'framer-motion';

const GeneralVideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Titel en subtitel */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-orange-600 to-teal-600 bg-clip-text text-transparent"
          >
            Ontdek ColiBlanco
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Bekijk onze introductievideo en leer hoe ColiBlanco de toekomst van data verandert
          </motion.p>
        </div>

        {/* Video sectie met speciale styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto mb-10 relative"
        >
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
            <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
              <iframe 
                src="https://player.vimeo.com/video/1074957007?badge=0&autopause=0&player_id=0&app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                title="Coliblanco algemeen"
              />
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          
          {/* Speciale styling voor de algemene video */}
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
          
          {/* Badge die aangeeft dat dit de algemene video is */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-teal-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-10">
            Algemene Introductie
          </div>
        </motion.div>
        
        {/* Call-to-action knop */}
        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-full text-lg font-medium hover:shadow-lg transition-all"
          >
            Meer Ontdekken
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default GeneralVideoSection;
