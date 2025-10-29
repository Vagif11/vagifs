import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 100}px`,
                animation: `slide-up ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="terminal-text mb-4">vagif@ai-engineer:~$</div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Vagif Asadov
          </h1>
          <p className="text-2xl md:text-3xl gradient-text font-semibold mb-4">
            Building intelligence, one model at a time.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            AI/ML/NLP engineer specializing in LLMs, deep learning, and applied AI systems.
            Passionate about transforming complex data into actionable intelligence.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="hover-glow group">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button size="lg" variant="outline" className="hover-glow" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="hover-glow" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="hover-glow" asChild>
              <a href="mailto:contact@vagif.dev">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-glow" />
        </div>
      </div>
    </section>
  );
};
