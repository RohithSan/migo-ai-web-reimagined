import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-secondary/30 rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-white/10 rotate-45 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Driving Compliance.
          <br />
          <span className="text-secondary">Empowering Innovation.</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          GxP Quality, Clinical, & Technology Services Provider for Life Sciences Industries
        </h2>
        
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
          MIGO AI is an integrated Validation, Automation, Quality, and Clinical business solutions provider to global pharmaceutical, biotechnology, and medical device companies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;