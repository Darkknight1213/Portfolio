import { Code, Database, Cloud, Zap, Brain, Settings } from "lucide-react";

const TechStackSection = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "cyber-blue",
      techs: ["TypeScript & JavaScript", "React", "Tailwind", "Flutter"]
    },
    {
      title: "Backend", 
      icon: Database,
      color: "magenta",
      techs: [ "FastAPI","Node.js", "Firebase", "Cloud Functions"]
    },
    {
      title: "AI/NLP",
      icon: Brain,
      color: "lime-green",
      techs: ["Gemini", "OpenAI", "TTS/STT", "Langchain"]
    },
    {
      title: "Infrastructure",
      icon: Cloud,
      color: "electric-purple",
      techs: ["Google Cloud", "Vercel", "Cloud Run"]
    },
    {
      title: "Database",
      icon: Settings,
      color: "cyber-blue",
      techs: ["Firestore", "MongoDB", "MySql"]
    },
    {
      title: "DevOps",
      icon: Zap,
      color: "magenta",
      techs: ["GitHub", "Vercel", "Render"]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text font-space">
          Tech Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="battle-card p-6 rounded-xl text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-lg bg-${category.color}/10 mb-4 group-hover:glow-${category.color} transition-all duration-300`}>
                  <IconComponent className={`w-8 h-8 text-${category.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
                
                <div className="space-y-2">
                  {category.techs.map((tech) => (
                    <div 
                      key={tech}
                      className={`px-4 py-2 bg-muted rounded-lg text-sm font-medium text-muted-foreground hover:text-${category.color} hover:bg-${category.color}/10 transition-all duration-200 cursor-default`}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Battle Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            <div className="battle-card p-6 rounded-lg">
              <div className="text-3xl font-bold text-cyber-blue mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Hackathons Engineered</div>
            </div>
            
            <div className="battle-card p-6 rounded-lg">
              <div className="text-3xl font-bold text-magenta mb-2">4</div>
              <div className="text-sm text-muted-foreground">MVPs in the Trenches</div>
            </div>
            
            <div className="battle-card p-6 rounded-lg">
              <div className="text-3xl font-bold text-lime-green mb-2">1500+</div>
              <div className="text-sm text-muted-foreground">Hours Grinding Code</div>
            </div>
            
            <div className="battle-card p-6 rounded-lg">
              <div className="text-3xl font-bold text-electric-purple mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Tech Domains Explored</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;