import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Contact = () => {
  const outputText = "output: you only have to be right once";
  const [displayedOutput, setDisplayedOutput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      if (quoteRef.current) {
        observer.unobserve(quoteRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted && currentIndex < outputText.length) {
      const timeout = setTimeout(() => {
        setDisplayedOutput(prev => prev + outputText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
        
        // Play typing sound
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSmM0fPTgjEIHG7A7+OZSA0PVKzn77BdGAg+mtv0ynYnBSiC0PLaiTcIGWi77eeaTRALUKfj8LZjHAY4kdfyzHksBSR3x/DdkEAKFF606+ynVRQKRp/g8r1sIQQojdHz04IxCBxuwO/jmEgND1Ss5++wXRgIPprb9Mp2JwUogtDy2ok3CBlou+3nmksRDFCn4/C2YxwGOJHX8sx5LAUkd8fw3ZBAA');
        audio.volume = 0.1;
        audio.play().catch(() => {}); // Ignore errors if audio fails
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [hasStarted, currentIndex, outputText]);

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

        <div ref={quoteRef} className="terminal-text text-left max-w-2xl mx-auto opacity-70">
          <p>
            {displayedOutput}
            {hasStarted && <span className="animate-pulse">|</span>}
          </p>
        </div>
      </div>
    </section>
  );
};
