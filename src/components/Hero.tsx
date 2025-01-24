const Hero = () => {
  return (
    <div className="full-width relative hero-section min-h-[800px] md:min-h-[90vh] bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/viberisemewebsite/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay voor betere leesbaarheid van tekst */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content - absolute positioning at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 pb-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Take control of your digital life. Own your data, protect your privacy, and get rewarded for your attention.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all mb-8">
              Join the Revolution
            </button>
          </div>
        </div>

        {/* Moderne golf onderaan */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 120" 
            className="w-full text-white"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
