import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const entries = [
  {
    date: "2025-03-15",
    title: "Fine-tuning GPT-2 on Medical Data",
    content:
      "Experimented with different tokenization strategies for medical terminology. Found that custom BPE tokenizer with domain-specific vocabulary improved perplexity by 23%. Next step: test on clinical notes dataset.",
  },
  {
    date: "2025-03-08",
    title: "AWS Textract Optimization Notes",
    content:
      "Reduced processing time by 40% using batch operations and parallel Lambda invocations. Key insight: pre-processing images with adaptive thresholding significantly improves OCR accuracy.",
  },
  {
    date: "2025-02-28",
    title: "BERT vs RoBERTa Performance Analysis",
    content:
      "Completed comprehensive F-score analysis across 5 NLP tasks. RoBERTa consistently outperforms on longer sequences, but BERT is faster for inference. Training time difference is negligible with mixed precision.",
  },
  {
    date: "2025-02-20",
    title: "Semantic Search with FAISS",
    content:
      "Implemented HNSW index for 10M document corpus. Query latency under 50ms with 95% recall. Memory footprint reduced using product quantization. This is production-ready.",
  },
];

export const Journal = () => {
  return (
    <section id="journal" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 animate-fade-in flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-primary" />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Technical Journal</h2>
            <p className="text-lg text-muted-foreground">
              Notes from the lab — experiments, insights, and breakthroughs.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {entries.map((entry, index) => (
            <Card
              key={index}
              className="glass-card hover-glow transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="terminal-text mb-1">{entry.date}</div>
                    <h3 className="text-xl font-semibold group-hover:gradient-text transition-all">
                      {entry.title}
                    </h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{entry.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
