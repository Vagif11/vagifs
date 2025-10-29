import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export const NowWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-fade-in">
      <Card className="glass-card hover-glow border-primary/50">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 animate-glow" />
            <div>
              <div className="font-semibold text-sm mb-1 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Now
              </div>
              <p className="text-sm text-muted-foreground">
                Building a multi-agent RAG system with LangGraph
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1 terminal-text">
                Reading: "Attention Is All You Need"
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
