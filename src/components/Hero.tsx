const Hero = () => {
  return (
    <div className="full-width relative hero-section min-h-[600px] md:min-h-[800px] bg-white" style={{
      backgroundImage: 'url(/viberisemewebsite/images/hero-bg.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top'
    }}>
      {/* Logo links bovenin */}
      <div className="absolute top-32 left-8 md:left-12 lg:left-16 z-10 w-[40%] md:w-[50%] max-w-[450px] min-w-[180px]">
        <img
          src="/viberisemewebsite/images/logo-light.png"
          alt="SkillVal"
          className="w-full h-auto"
        />
      </div>

      {/* Witte golf onderaan */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C320,100 720,100 1440,0 L1440 100 L0 100 Z" 
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
