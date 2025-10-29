import { ThemeProvider } from "next-themes";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { WorkInProgress } from "@/components/WorkInProgress";
import { Journal } from "@/components/Journal";
import { Milestones } from "@/components/Milestones";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { NowWidget } from "@/components/NowWidget";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen">
        <ThemeToggle />
        <NowWidget />
        
        <Hero />
        <Projects />
        <WorkInProgress />
        <Journal />
        <Milestones />
        <Skills />
        <Contact />

        <footer className="py-8 px-6 border-t border-border/50">
          <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
            <p className="terminal-text">
              © 2025 Vagif Asadov. Built with precision and purpose.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
