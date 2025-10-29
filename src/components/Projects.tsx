import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Endometrial Cancer Data Extraction",
    description: "Advanced NLP pipeline for extracting clinical data from medical records using custom BERT models and GPT-2 fine-tuning.",
    tags: ["PyTorch", "Hugging Face", "BERT", "GPT-2", "Medical NLP"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Semantic Search API",
    description: "Production-ready semantic search engine using sentence transformers and FAISS for efficient similarity search across millions of documents.",
    tags: ["FastAPI", "FAISS", "Transformers", "AWS", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "BERT F-Score Analysis",
    description: "Comprehensive study on optimizing BERT performance metrics with custom training loops and advanced hyperparameter tuning.",
    tags: ["PyTorch", "BERT", "MLOps", "Weights & Biases"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "GPT-2 Medical Fine-Tuning",
    description: "Fine-tuned GPT-2 on specialized medical literature with custom tokenization for domain-specific text generation.",
    tags: ["GPT-2", "Transformers", "Medical AI", "Python"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "AWS Textract Pipeline",
    description: "Automated document processing pipeline using AWS Textract and custom NLP models for structured data extraction.",
    tags: ["AWS", "Textract", "Lambda", "S3", "Python"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Multi-Modal Embedding System",
    description: "Cross-modal embedding system combining text and image representations for advanced retrieval tasks.",
    tags: ["CLIP", "PyTorch", "Vector DB", "FastAPI"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground">
            Building production-grade AI systems that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card hover-glow group cursor-pointer transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span className="group-hover:gradient-text transition-all">
                    {project.title}
                  </span>
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="terminal-text">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="hover-glow" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" variant="outline" className="hover-glow" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
