import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing battle station...");

  const loadingSteps = [
    "💻 Compiling RiyazOS :: INIT",
    "🧬 Injecting personality modules...",
    "📂 Decrypting source vaults...",
    "⚙️ Rewiring logic cores...",
    "✅ Portfolio interface online."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        
        // Update loading text based on progress
        const stepIndex = Math.floor((newProgress / 100) * (loadingSteps.length - 1));
        setLoadingText(loadingSteps[stepIndex] || loadingSteps[loadingSteps.length - 1]);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyber-blue/20 rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center">
        {/* Main Icon */}
        <div className="mb-8 relative">
          <Terminal className="w-16 h-16 text-cyber-blue mx-auto glow-cyber animate-pulse" />
          <div className="absolute inset-0 w-16 h-16 mx-auto border-2 border-cyber-blue/30 rounded-full animate-ping" />
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-bold gradient-text mb-8 font-space">
          Booting up Portfolio of Riyaz...
        </h2>
        
        <p className="text-muted-foreground mb-8 font-mono text-sm">
          {loadingText}
        </p>
        
        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyber-blue to-magenta transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        {/* Progress Percentage */}
        <div className="text-sm font-mono text-cyber-blue">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;