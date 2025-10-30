import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Build Something</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration, consulting, or just want to discuss AI? 
            I'm always open to exploring new opportunities and ideas.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button size="lg" className="hover-glow group" asChild>
            <a href="mailto:vagif@example.com">
              <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              vagif@example.com
            </a>
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
        </div>

        <div className="terminal-text text-left max-w-2xl mx-auto opacity-70">
          <p>output: you only have to be right once</p>
        </div>
      </div>
    </section>
  );
};
