import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, MapPin, Mail, Github, Linkedin } from "lucide-react";

const CV = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" className="hover-glow" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button className="hover-glow">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <div className="animate-fade-in space-y-8">
          {/* Header */}
          <div className="text-center pb-8 border-b border-border">
            <h1 className="text-5xl font-bold mb-4">Vagif Asadov</h1>
            <p className="text-2xl gradient-text font-semibold mb-4">
              AI/ML/NLP Engineer
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                vagif@example.com
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </span>
              <a href="https://github.com" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a href="https://linkedin.com" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Summary */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                AI/ML/NLP Engineer with expertise in building production-grade machine learning systems. 
                Specialized in large language models, deep learning, and applied NLP. Proven track record 
                of deploying scalable AI solutions that process millions of documents and serve thousands 
                of users. Strong background in PyTorch, Hugging Face Transformers, and cloud infrastructure (AWS).
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Professional Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">Senior ML Engineer</h3>
                    <p className="text-muted-foreground">Tech Company · Full-time</p>
                  </div>
                  <span className="text-sm text-muted-foreground terminal-text">2023 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Built production semantic search system handling 10M+ documents with sub-50ms latency</li>
                  <li>Fine-tuned LLMs (GPT-2, BERT) for domain-specific tasks achieving 94%+ accuracy</li>
                  <li>Deployed MLOps pipeline reducing model iteration time by 60%</li>
                  <li>Led team of 3 engineers on NLP extraction project for medical research</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">ML Engineer</h3>
                    <p className="text-muted-foreground">AI Startup · Full-time</p>
                  </div>
                  <span className="text-sm text-muted-foreground terminal-text">2021 - 2023</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developed AWS Textract pipeline processing 10K+ documents daily with 97% accuracy</li>
                  <li>Optimized BERT models achieving 30% faster inference through quantization</li>
                  <li>Built multi-modal embedding system for cross-modal retrieval (92% recall@10)</li>
                  <li>Reduced cloud costs by $2K/month through infrastructure optimization</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">Research Assistant</h3>
                    <p className="text-muted-foreground">University of South Florida</p>
                  </div>
                  <span className="text-sm text-muted-foreground terminal-text">2019 - 2021</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Conducted NLP research on clinical text analysis and medical entity extraction</li>
                  <li>Published 2 papers on transformer-based models for healthcare applications</li>
                  <li>Collaborated with medical professionals to annotate datasets</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">Master of Science in Computer Science</h3>
                    <p className="text-muted-foreground">University of South Florida</p>
                  </div>
                  <span className="text-sm text-muted-foreground terminal-text">2019 - 2021</span>
                </div>
                <p className="text-sm text-muted-foreground">Focus: Machine Learning, Natural Language Processing</p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">Bachelor of Science in Computer Engineering</h3>
                    <p className="text-muted-foreground">University of South Florida</p>
                  </div>
                  <span className="text-sm text-muted-foreground terminal-text">2015 - 2019</span>
                </div>
                <p className="text-sm text-muted-foreground">Magna Cum Laude</p>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "SQL", "TypeScript", "Bash", "C++"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">ML/AI Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "Hugging Face Transformers", "TensorFlow", "LangChain", "scikit-learn", "ONNX"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Cloud & Infrastructure</h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Lambda", "S3", "Textract", "SageMaker", "Docker", "Kubernetes", "FastAPI", "PostgreSQL", "Redis"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {["Large Language Models", "Deep Learning", "NLP/NLU", "RAG Systems", "Vector Databases", "MLOps"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Certifications & Courses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">AWS Certified Machine Learning - Specialty</span>
                <span className="text-sm text-muted-foreground terminal-text">2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">MIT Deep Learning Course</span>
                <span className="text-sm text-muted-foreground terminal-text">2023</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Stanford CS224N: NLP with Deep Learning</span>
                <span className="text-sm text-muted-foreground terminal-text">2022</span>
              </div>
            </CardContent>
          </Card>

          {/* Publications */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Publications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">
                  "Optimizing BERT Performance for Clinical Text Classification"
                </h3>
                <p className="text-sm text-muted-foreground">
                  V. Asadov et al. · Journal of Biomedical Informatics · 2023
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  "Cross-Modal Retrieval Systems for Medical Documentation"
                </h3>
                <p className="text-sm text-muted-foreground">
                  V. Asadov, J. Smith · ACL Workshop on Clinical NLP · 2022
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CV;
