import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Rocket, Code, Brain, Trophy } from "lucide-react";

const milestones = [
  { icon: GraduationCap, label: "Graduated USF", color: "text-primary" },
  { icon: Brain, label: "MIT Deep Learning Course", color: "text-accent" },
  { icon: Code, label: "Built NLP Extraction Model", color: "text-primary" },
  { icon: Rocket, label: "Deployed Production AI System", color: "text-accent" },
  { icon: Trophy, label: "Published Research Paper", color: "text-primary" },
  { icon: Award, label: "AWS Certified ML Specialist", color: "text-accent" },
];

export const Milestones = () => {
  return (
    <section id="milestones" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Milestones</h2>
          <p className="text-lg text-muted-foreground">
            Key achievements and completed goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <Badge
                key={index}
                variant="outline"
                className="glass-card hover-glow px-6 py-4 text-base cursor-pointer transition-all duration-300 hover:scale-110"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className={`h-5 w-5 mr-2 ${milestone.color}`} />
                <span>{milestone.label}</span>
              </Badge>
            );
          })}
        </div>
      </div>
    </section>
  );
};
