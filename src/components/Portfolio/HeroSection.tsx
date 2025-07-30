import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-sophisticated">
      {/* Background Image with Elegant Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/8"></div>
      </div>
      
      {/* Elegant Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-accent/6 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/4 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-elegant font-semibold text-foreground mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">Ainika Dutt</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-professional font-medium mb-8 leading-relaxed">
            Computer Science Student & Passionate Developer
          </p>
          <p className="text-lg text-muted-foreground font-professional mb-12 max-w-3xl mx-auto leading-relaxed">
            Building innovative solutions with elegant code while exploring the intersection of technology, creativity, and meaningful impact
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="elegant" size="lg" className="group font-professional">
              <Download className="group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="professional" size="lg" className="font-professional">
              <Mail />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <Button variant="glass" size="icon" className="rounded-full">
              <Github />
            </Button>
            <Button variant="glass" size="icon" className="rounded-full">
              <Linkedin />
            </Button>
            <Button variant="glass" size="icon" className="rounded-full">
              <Mail />
            </Button>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center backdrop-blur-sm bg-card/20">
          <div className="w-1 h-3 bg-primary/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;