import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Bash", level: 75 },
    ],
  },
  {
    category: "AI/ML Frameworks",
    skills: [
      { name: "PyTorch", level: 95 },
      { name: "Hugging Face", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "LangChain", level: 80 },
    ],
  },
  {
    category: "Data & Infrastructure",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Pandas", level: 90 },
      { name: "FastAPI", level: 85 },
    ],
  },
  {
    category: "Specializations",
    skills: [
      { name: "NLP/LLMs", level: 95 },
      { name: "Deep Learning", level: 90 },
      { name: "RAG Systems", level: 85 },
      { name: "MLOps", level: 80 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Tools</h2>
          <p className="text-lg text-muted-foreground">
            Current technical stack and areas of expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <Card
              key={catIndex}
              className="glass-card hover-glow"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl gradient-text">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-mono text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
