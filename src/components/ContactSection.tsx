import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Download, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text font-space">
          Let's Build Together
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Ready to build something extraordinary? Whether you have a project in mind, 
                want to collaborate, or just want to chat about tech, I'm always open to 
                connecting with fellow builders and visionaries.
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              <a 
                href="mailto:riyazahamedff@gmail.com?subject=Let's Connect&body=Hi Riyaz," 
                className="flex items-center gap-4 p-4 battle-card rounded-lg hover:glow-cyber transition-all"
              >
                <Mail className="w-6 h-6 text-cyber-blue" />
                <span className="text-foreground">riyazahamedff@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/mohamed-riyaz-ahamed/" 
                className="flex items-center gap-4 p-4 battle-card rounded-lg hover:glow-magenta transition-all"
              >
                <Linkedin className="w-6 h-6 text-magenta" />
                <span className="text-foreground">LinkedIn Profile</span>
              </a>
              
              <a 
                href="https://github.com/Darkknight1213" 
                className="flex items-center gap-4 p-4 battle-card rounded-lg hover:glow-lime transition-all"
              >
                <Github className="w-6 h-6 text-lime-green" />
                <span className="text-foreground">GitHub Profile</span>
              </a>
            </div>

            {/* Resume Download */}
            <a 
              href="https://drive.google.com/file/d/1xZLv-WP8Sj5juktqvmeLhPa8jL6f-RJ9/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full mt-4 block"
            >
              <Button variant="battle" size="lg" className="w-full">
                <Download className="w-5 h-5 mr-2" />
                Check Resume
              </Button>
            </a>
          </div>

          {/* Contact Form */}
          <div className="battle-card p-8 rounded-xl">
            <h3 className="text-xl font-bold text-foreground mb-6">Drop Your Idea</h3>
            
            <form
              action={`mailto:riyazahamedff@gmail.com`}
              method="POST"
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-muted border-border focus:border-cyber-blue"
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-muted border-border focus:border-cyber-blue"
                />
              </div>

              <div>
                <Textarea
                  name="body"
                  placeholder="Tell me about your project idea..."
                  rows={5}
                  required
                  className="bg-muted border-border focus:border-cyber-blue resize-none"
                />
              </div>

              <Button type="submit" variant="neon" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Messagee
              </Button>
            </form>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;