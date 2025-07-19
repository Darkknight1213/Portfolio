import { Calendar, Award, Zap } from "lucide-react";

const AboutSection = () => {
  const timeline = [
    {
      year: "2022",
      event: "Explored core tech: Python, C++, JS, and built hobby games",
      icon: Award,
    },
    {
      year: "2023",
      event: "Dived into Machine Learning and started exploring real projects",
      icon: Calendar,
    },
    {
      year: "2024",
      event: "Started B.Tech AI/ML • Joined Tech Society • Broke into real-world dev",
      icon: Zap,
    },
    {
      year: "2025",
      event: "Built 4 Real-World MVPs in Hackathons • Focused on DSA & Java mastery",
      icon: Calendar,
    },
  ];




  const funFacts = [
    { label: "Sleep", value: "Optional" },
    { label: "Debugging", value: "Therapeutic" },
    { label: "Pet peeve", value: "Useless complexity" }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text font-space">
          About Me
        </h2>

        {/* Bio */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed text-muted-foreground">
            I'm a full-stack dev obsessed with solving <span className="text-cyber-blue font-semibold">real problems</span>. 
            My code is not art – it's a <span className="text-magenta font-semibold">weapon</span>. 
            From AI to system design, I believe in speed, clarity, and execution. 
            My mission? Build solutions that actually work in the wild. 
            My tech is <span className="text-lime-green font-semibold">battle-tested</span> through 
            hackathons, internships, and real-world constraints.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Journey</h3>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-px bg-gradient-to-b from-cyber-blue via-magenta to-lime-green"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pl-8' : 'text-left pr-8'}`}>
                      <div className="battle-card p-6 rounded-lg">
                        <div className="text-2xl font-bold text-cyber-blue mb-2">{item.year}</div>
                        <div className="text-lg text-foreground">{item.event}</div>
                      </div>
                    </div>
                    
                    <div className="relative z-10 flex items-center justify-center w-2/12">
                      <div className="w-12 h-12 bg-background border-2 border-cyber-blue rounded-full flex items-center justify-center glow-cyber">
                        <IconComponent className="w-6 h-6 text-cyber-blue" />
                      </div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8 text-foreground">Fun Facts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {funFacts.map((fact, index) => (
              <div key={fact.label} className="battle-card p-6 rounded-lg">
                <div className="text-lg font-semibold text-muted-foreground mb-2">{fact.label}:</div>
                <div className={`text-xl font-bold ${
                  index === 0 ? 'text-cyber-blue' : 
                  index === 1 ? 'text-magenta' : 'text-lime-green'
                }`}>
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;