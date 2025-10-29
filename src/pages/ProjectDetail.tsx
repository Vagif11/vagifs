import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

const projectsData: Record<string, any> = {
  "endometrial-cancer-extraction": {
    title: "Endometrial Cancer Data Extraction",
    description: "Advanced NLP pipeline for extracting clinical data from medical records using custom BERT models and GPT-2 fine-tuning.",
    tags: ["PyTorch", "Hugging Face", "BERT", "GPT-2", "Medical NLP"],
    github: "https://github.com",
    demo: null,
    fullDescription: `This project addresses a critical challenge in medical informatics: extracting structured clinical data from unstructured medical records. Built for cancer research, the system processes pathology reports and clinical notes to identify key diagnostic markers.`,
    approach: `The pipeline combines multiple state-of-the-art NLP techniques:
    
1. **BERT-based Named Entity Recognition** - Custom fine-tuned BERT model to identify medical entities (diagnoses, treatments, measurements)
2. **GPT-2 for Context Understanding** - Fine-tuned on medical literature to understand clinical context and relationships
3. **Post-processing Pipeline** - Rule-based validation and entity linking to medical ontologies

The system achieved 94% precision and 89% recall on the validation dataset, significantly outperforming baseline regex approaches.`,
    technicalDetails: `**Architecture:**
- Preprocessing: Text normalization, de-identification
- Feature extraction: Custom BERT tokenizer with medical vocabulary
- Model: DistilBERT fine-tuned on 50K annotated medical records
- Inference: Batch processing with AWS Lambda
- Storage: Structured data exported to PostgreSQL

**Key Optimizations:**
- Mixed precision training reduced training time by 40%
- Model quantization for faster inference
- Caching layer for frequently queried entities`,
    results: `- Processed 100K+ medical records
- 94% precision, 89% recall
- 3.2s average processing time per document
- Deployed in production at medical research facility`,
  },
  "semantic-search-api": {
    title: "Semantic Search API",
    description: "Production-ready semantic search engine using sentence transformers and FAISS for efficient similarity search across millions of documents.",
    tags: ["FastAPI", "FAISS", "Transformers", "AWS", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    fullDescription: `A high-performance semantic search API that enables natural language queries across large document collections. Built for production use with sub-50ms latency at scale.`,
    approach: `**Core Technology Stack:**

1. **Sentence Transformers** - Using all-MiniLM-L6-v2 for dense embeddings
2. **FAISS Indexing** - HNSW index with product quantization for memory efficiency
3. **FastAPI Backend** - Async endpoints with connection pooling
4. **Redis Cache** - Hot query caching for frequently searched terms

The system handles 10M+ documents with consistent sub-50ms query latency.`,
    technicalDetails: `**System Architecture:**
- Embedding model: sentence-transformers/all-MiniLM-L6-v2 (384 dimensions)
- Index type: FAISS HNSW with IVF
- Quantization: Product Quantization (PQ) with 64 subquantizers
- API: FastAPI with async workers
- Deployment: Docker containers on AWS ECS
- Monitoring: CloudWatch + Prometheus

**Performance Optimizations:**
- Batch embedding generation
- Query result caching in Redis
- Connection pooling to vector database
- Horizontal scaling with load balancing`,
    results: `- 10M+ documents indexed
- <50ms query latency (p95)
- 95% recall @ k=10
- 99.9% uptime over 6 months
- Handles 1000+ QPS`,
  },
  "bert-fscore-analysis": {
    title: "BERT F-Score Analysis",
    description: "Comprehensive study on optimizing BERT performance metrics with custom training loops and advanced hyperparameter tuning.",
    tags: ["PyTorch", "BERT", "MLOps", "Weights & Biases"],
    github: "https://github.com",
    demo: null,
    fullDescription: `Deep dive into BERT optimization techniques across multiple NLP tasks. Focused on maximizing F-score through systematic experimentation with training strategies, loss functions, and hyperparameters.`,
    approach: `Systematic exploration of BERT optimization strategies:

1. **Loss Function Variations** - Tested focal loss, label smoothing, class weighting
2. **Learning Rate Schedules** - Linear warmup, cosine annealing, one-cycle policy
3. **Regularization Techniques** - Dropout variations, weight decay, early stopping
4. **Data Augmentation** - Back-translation, synonym replacement, contextual word embeddings

Experiments tracked with Weights & Biases across 200+ training runs.`,
    technicalDetails: `**Experimental Setup:**
- Base model: bert-base-uncased
- Tasks: 5 different classification datasets (sentiment, NER, QA, etc.)
- Metrics: F1-score (macro/micro), precision, recall
- Training: Mixed precision (fp16), gradient accumulation
- Hardware: 4x NVIDIA V100 GPUs

**Key Findings:**
- One-cycle learning rate policy consistently outperformed linear schedules
- Focal loss improved F-score by 3-5% on imbalanced datasets
- Layer-wise learning rate decay was crucial for fine-tuning
- Longer warmup periods (10% of steps) improved stability`,
    results: `- Achieved SOTA on 3 out of 5 benchmark tasks
- Average F-score improvement: 4.2% over baseline
- Published findings in research paper
- Training time reduced by 30% through optimizations`,
  },
  "gpt2-medical-finetuning": {
    title: "GPT-2 Medical Fine-Tuning",
    description: "Fine-tuned GPT-2 on specialized medical literature with custom tokenization for domain-specific text generation.",
    tags: ["GPT-2", "Transformers", "Medical AI", "Python"],
    github: "https://github.com",
    demo: null,
    fullDescription: `Domain adaptation of GPT-2 for medical text generation and completion. Trained on medical literature, clinical guidelines, and research papers to generate clinically accurate text.`,
    approach: `**Training Pipeline:**

1. **Data Collection** - Curated 2GB of medical literature (PubMed, clinical guidelines, textbooks)
2. **Custom Tokenization** - Extended GPT-2 tokenizer with 5K medical terms
3. **Progressive Fine-tuning** - Staged training from general to specific medical domains
4. **Evaluation Framework** - Medical expert review + automated perplexity metrics

The model generates coherent, clinically relevant text while maintaining GPT-2's fluency.`,
    technicalDetails: `**Training Configuration:**
- Base: GPT-2 Medium (355M parameters)
- Custom vocab: Added 5K medical tokens
- Training data: 2GB medical text (~500M tokens)
- Batch size: 32 with gradient accumulation
- Learning rate: 5e-5 with linear warmup
- Training time: 72 hours on 8x V100

**Technical Innovations:**
- Domain-adaptive pretraining strategy
- Medical terminology preservation during tokenization
- Fact-checking layer for clinical accuracy
- Temperature calibration for controlled generation`,
    results: `- Perplexity reduced by 40% on medical text
- 85% clinical accuracy (expert evaluation)
- Used in medical documentation assistance tool
- Generated 10K+ clinically reviewed summaries`,
  },
  "aws-textract-pipeline": {
    title: "AWS Textract Pipeline",
    description: "Automated document processing pipeline using AWS Textract and custom NLP models for structured data extraction.",
    tags: ["AWS", "Textract", "Lambda", "S3", "Python"],
    github: "https://github.com",
    demo: null,
    fullDescription: `End-to-end document processing solution for extracting structured data from scanned documents, forms, and PDFs. Built for high-volume processing with 99.9% reliability.`,
    approach: `**System Architecture:**

1. **Document Ingestion** - S3 trigger initiates processing pipeline
2. **OCR & Layout Analysis** - AWS Textract extracts text and document structure
3. **Custom NLP Processing** - Named entity recognition and relationship extraction
4. **Quality Assurance** - Confidence scoring and human-in-the-loop review
5. **Data Export** - Structured output to database/API

Processes 10K+ documents daily with automatic scaling.`,
    technicalDetails: `**AWS Infrastructure:**
- S3: Document storage and event triggers
- Textract: OCR and form extraction
- Lambda: Serverless processing functions
- Step Functions: Workflow orchestration
- DynamoDB: Metadata and status tracking
- SQS: Async job queue for high volume

**Processing Optimizations:**
- Parallel Lambda invocations for batch processing
- Image preprocessing (adaptive thresholding, deskewing)
- Caching for recurring document templates
- Error handling with exponential backoff`,
    results: `- 10K+ documents processed daily
- 40% faster than previous solution
- 97% extraction accuracy
- $2K/month cost savings through optimization
- Zero downtime in 6 months`,
  },
  "multimodal-embedding-system": {
    title: "Multi-Modal Embedding System",
    description: "Cross-modal embedding system combining text and image representations for advanced retrieval tasks.",
    tags: ["CLIP", "PyTorch", "Vector DB", "FastAPI"],
    github: "https://github.com",
    demo: "https://demo.com",
    fullDescription: `Advanced embedding system that creates unified representations for text and images, enabling cross-modal search. Find images using text queries and vice versa.`,
    approach: `**Architecture Design:**

1. **Dual Encoders** - Separate encoders for text and images mapped to shared embedding space
2. **CLIP-based** - Fine-tuned OpenAI CLIP for domain-specific data
3. **Vector Database** - Weaviate for efficient similarity search
4. **API Layer** - FastAPI with async processing

Enables "find similar images" and "search images by description" use cases.`,
    technicalDetails: `**Technical Stack:**
- Model: OpenAI CLIP (ViT-B/32) fine-tuned
- Embedding dimension: 512
- Vector DB: Weaviate with HNSW index
- API: FastAPI with async workers
- Deployment: Kubernetes on AWS EKS

**Training Details:**
- Dataset: 500K image-text pairs
- Fine-tuning: Contrastive learning with hard negatives
- Augmentation: Random crops, color jitter, text paraphrasing
- Hardware: 4x A100 GPUs
- Training time: 48 hours

**Key Features:**
- Cross-modal retrieval (text→image, image→text)
- Similarity clustering
- Multi-query support
- Real-time indexing`,
    results: `- 1M+ images indexed
- 92% recall@10 for cross-modal search
- <100ms query latency
- Deployed in production e-commerce platform
- 10K+ daily queries`,
  },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Button variant="ghost" className="mb-8 hover-glow" asChild>
          <Link to="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="terminal-text">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 mb-12">
            <Button className="hover-glow" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
            {project.demo && (
              <Button variant="outline" className="hover-glow" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>

          <div className="space-y-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {project.fullDescription}
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {project.approach}
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Technical Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line terminal-text text-sm">
                  {project.technicalDetails}
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/30">
              <CardHeader>
                <CardTitle className="gradient-text">Results & Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {project.results}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
