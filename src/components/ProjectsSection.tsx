import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award, Zap, Mic, CreditCard } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
      {
      id: "voix",
      title: "VOIX IT",
      subtitle: "Voice-to-Catalog AI for Rural Sellers",
      description:
        "An AI-powered voice-first catalog creation platform for rural sellers. Enables farmers and artisans to list products, auto-generate content, and share via WhatsApp - in their own language, without needing tech skills.",
      stack: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Relevance AI",
        "FastAPI",
        "Whisper/Web Speech API",
        "Whatsapp Business API"
      ],
      features: [
        "Voice-to-catalog in multi languages",
        "Auto-generated product descriptions",
        "Share listings via WhatsApp Catalog",
        "Stock updates, edit/delete functions",
        "Flipkart-style catalog simulation"
      ],
      impact:
        "Democratizes digital selling for non-tech-savvy rural users with voice and AI agents.",
      highlight:
        "HackFinity - 24hr Agentic AI Hackathon by SIMATS Engineering",
      github: "https://github.com/Tech-Smiths/Voix-It",
      live: "https://voixe-it.vercel.app/",
      icon: Mic,
      gradient: "from-lime-green to-cyber-blue",
      accentColor: "lime-green"
    },
    {
      id: "finxpert",
      title: "FINXPERT",
      subtitle: "Escape the Matrix – Start Investing Smart",
      description:
        "AI-powered financial planning platform for India’s middle class. Offers budgeting, investment insights, awareness alerts, and goal-based planning to help break the paycheck-to-paycheck loop.",
      stack: ["TypeScript", "React", "Tailwind CSS", "Firebase", "FastAPI", "Gemini API", "Vercel"],
      features: [
        "Personalized investment guidance",
        "Budget tracking & leak analysis",
        "SIP & mutual fund discovery",
        "Financial awareness alerts",
        "Chat-based planning assistant"
      ],
      impact: "Equips first-time investors with the clarity, tools, and confidence to build wealth smartly.",
      highlight:
        "Xyntra – 36-hour National Hackathon by IEEE Computer Society, REC",
      github: "https://github.com/Darkknight1213/FinXpert",
      live: "https://fin-xpert-seven.vercel.app/",
      icon: Zap,
      gradient: "from-magenta to-lime-green",
      accentColor: "magenta"
    },

    {
      id: "offlinepay",
      title: "OFFLINE PAY",
      subtitle: "UPI Without Internet",
      description:
        "Peer-to-peer payment app for zero-connectivity zones. Transfers via NFC, QR, Bluetooth, or fallback USSD. Designed for robustness, built with Flutter.",
      stack: ["Flutter", "Firebase", "Bluetooth API", "QR modules"],
      features: [
        "Offline P2P transactions",
        "Multi-protocol fallback (NFC, QR, BT, USSD)",
        "Secure local ledger",
        "Rural fintech focus"
      ],
      impact:
        "Enables digital payments in fully offline environments — no WiFi, no SIM, no excuses.",
      highlight: "Built independently as a rural fintech concept prototype",
      github: "https://github.com/Darkknight1213/Offline-Pay",
      live: null,
      icon: CreditCard,
      gradient: "from-electric-purple to-magenta",
      accentColor: "electric-purple"
    },
    {
      id: "resq",
      title: "RESQ",
      subtitle: "AI Emergency Ops System",
      description:
        "AI-driven ambulance dispatch system using live traffic routing, hospital pre-alerts, and patient vitals syncing. Cut response time and chaos during real crises.",
      stack: ["HTML & CSS", "JavaScript", "Gemini API", "MySql", "Google Maps API"],
      features: [
        "Smart ambulance dispatch",
        "AI-driven route optimization",
        "Pre-arrival medical reports",
        "Emergency chatbot assistant"
      ],
      impact:
        "Reduces critical emergency response times by up to 50%. Built for scale and disaster-readiness.",
      highlight: "Hack'it – 12 hours hackathon by Anna University",
      github: "https://github.com/Hack-Smiths/ResQ",
      live: null,
      icon: Award,
      gradient: "from-cyber-blue to-magenta",
      accentColor: "cyber-blue"
    }
  ];



  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text font-space">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.id} 
                className="battle-card p-8 rounded-2xl group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} glow-${project.accentColor}`}>
                      <IconComponent className="w-8 h-8 text-background" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      <p className={`text-sm font-medium text-${project.accentColor}`}>{project.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Github className="w-4 h-4" />
                        </Button>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Special Sections */}

                {project.features && Array.isArray(project.features) && project.features.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-magenta mb-2">Features</h4>
                    <p className="text-xs text-muted-foreground">{project.features.join(', ')}</p>
                  </div>
                )}

                {project.impact && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Impact</h4>
                    <p className="text-xs text-muted-foreground">{project.impact}</p>
                  </div>
                )}

                

                {project.highlight && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-lime-green mb-2">Highlight</h4>
                    <p className="text-xs text-muted-foreground">{project.highlight}</p>
                  </div>
                )}



                {/* View Project Button */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block mt-4"
                  >
                    <Button variant="neon" size="sm" className="w-full">
                      View Project Details
                    </Button>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;