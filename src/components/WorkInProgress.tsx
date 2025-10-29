import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Sparkles } from "lucide-react";

const wip = [
  {
    title: "Attention Mechanism Deep Dive",
    description: "Studying multi-head attention and transformer architectures from first principles.",
    progress: 65,
    status: "experimenting",
  },
  {
    title: "Semantic Search API v2",
    description: "Building next-gen semantic search with hybrid retrieval and reranking.",
    progress: 40,
    status: "in development",
  },
  {
    title: "LangChain RAG System",
    description: "Production RAG pipeline with custom embeddings and vector stores.",
    progress: 80,
    status: "shipping soon",
  },
];

const statusColors: Record<string, string> = {
  "experimenting": "bg-accent/20 text-accent border-accent/50",
  "in development": "bg-primary/20 text-primary border-primary/50",
  "shipping soon": "bg-green-500/20 text-green-400 border-green-500/50",
};

export const WorkInProgress = () => {
  return (
    <section id="wip" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 animate-fade-in flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-primary animate-glow" />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Work in Progress</h2>
            <p className="text-lg text-muted-foreground">
              Current experiments and ongoing research.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {wip.map((item, index) => (
            <Card
              key={index}
              className="glass-card hover-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <Badge
                    variant="outline"
                    className={`${statusColors[item.status]} terminal-text whitespace-nowrap`}
                  >
                    {item.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-mono font-semibold">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
