import { Button } from "@/components/ui/button";
import { ChevronDown, Terminal, Zap, Code } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full opacity-60 floating-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Animated Icons */}
        <div className="flex justify-center gap-8 mb-8 fade-in-up">
          <Terminal className="w-8 h-8 text-cyber-blue glow-cyber" />
          <Zap className="w-8 h-8 text-magenta glow-magenta" />
          <Code className="w-8 h-8 text-lime-green glow-lime" />
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 fade-in-up font-space">
          <span className="gradient-text">Hi, I'm Mohamed Riyaz Ahamed.</span>
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-4 fade-in-up text-foreground">
          I build <span className="text-cyber-blue">AI systems</span>, 
          <span className="text-magenta"> web apps</span>, and{' '}
          <span className="text-lime-green">real shit</span> that works.
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-up font-light tracking-wide">
          AI & Full-stack dev | Agent Architect | Hacker | Builder of systems that scale.
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 fade-in-up">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-blue">3+</div>
            <div className="text-sm text-muted-foreground">Hack Battles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-magenta">1000+</div>
            <div className="text-sm text-muted-foreground">Hours Coded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-lime-green">4</div>
            <div className="text-sm text-muted-foreground">MVPs Shipped</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="fade-in-up">
          <Button 
            variant="battle" 
            size="xl" 
            onClick={scrollToAbout}
            className="mb-8"
          >
            Explore My Work
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown 
            className="w-8 h-8 text-muted-foreground cursor-pointer hover:text-cyber-blue transition-colors" 
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;