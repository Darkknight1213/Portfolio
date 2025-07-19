import { Shield, Brain, Wrench, Code } from "lucide-react";

const ExperienceSection = () => {
  const roles = [
    {
      title: "Backend Lead & Agent Integrator",
      project: "Voix’it",
      description: "Engineered FastAPI backend with Relevance AI, WhatsApp API, and Whisper for multilingual, rural-first voice commerce. Integrated modular LLM agents across catalog, maintenance, and messaging flows.",
      icon: Wrench,
      color: "lime-green"
    },
    {
      title: "Tech Lead & Full-Stack Dev", 
      project: "FinXpert",
      description: "Led end-to-end dev — built real-time budgeting, SIP discovery, and chatbot assistant using React, Firebase, and rule-based logic tailored for India's middle class.",
      icon: Brain,
      color: "magenta"
    },
    {
      title: "Solo Full-Stack Builder",
      project: "Offline Pay",
      description: "Independently built a UPI-style payment system for offline zones using Flutter, Firebase, QR, NFC, and Bluetooth — ensuring secure P2P transactions without internet.",
      icon: Code,
      color: "electric-purple"
    },
    {
      title: "ML Engineer & System Architect",
      project: "ResQ",
      description: "Built real-time emergency response backend with YOLO, BioBERT, and Google Maps API. Architected ML-based route optimization and hospital alerting system for ambulance coordination.",
      icon: Shield,
      color: "cyber-blue"
    }
  ];


  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text font-space">
          Battle Roles
        </h2>

        <div className="space-y-8">
          {roles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <div 
                key={role.title}
                className={`battle-card p-8 rounded-xl flex items-start gap-6 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex-shrink-0 p-4 rounded-lg bg-${role.color}/10 glow-${role.color}`}>
                  <IconComponent className={`w-12 h-12 text-${role.color}`} />
                </div>
                
                <div className={index % 2 === 1 ? 'md:text-right' : ''}>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{role.title}</h3>
                  <h4 className={`text-lg font-semibold text-${role.color} mb-4`}>{role.project}</h4>
                  <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;