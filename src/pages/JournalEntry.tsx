import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar } from "lucide-react";

const journalData: Record<string, any> = {
  "fine-tuning-gpt2-medical": {
    date: "2025-03-15",
    title: "Fine-tuning GPT-2 on Medical Data",
    content: `Experimented with different tokenization strategies for medical terminology. Found that custom BPE tokenizer with domain-specific vocabulary improved perplexity by 23%. Next step: test on clinical notes dataset.`,
    fullContent: `## Initial Challenge

Standard GPT-2 tokenizer was splitting medical terms awkwardly, leading to poor generation quality. For example, "endometriosis" was tokenized into 4 subword units, losing semantic meaning.

## Tokenization Experiments

Tested three approaches:
1. **Vanilla GPT-2 tokenizer** - Baseline, 45.2 perplexity
2. **Extended vocabulary** - Added 5K medical terms, 38.1 perplexity (-15.7%)
3. **Custom BPE training** - Trained on medical corpus, 34.8 perplexity (-23.0%)

The custom BPE approach preserved medical term integrity while maintaining compatibility with pre-trained weights through vocabulary expansion.

## Training Configuration

\`\`\`python
model = GPT2LMHeadModel.from_pretrained("gpt2-medium")
tokenizer = GPT2TokenizerFast.from_pretrained("./medical-tokenizer")

# Extended embedding layer
model.resize_token_embeddings(len(tokenizer))

# Froze first 8 layers, fine-tuned rest
for i, layer in enumerate(model.transformer.h):
    if i < 8:
        for param in layer.parameters():
            param.requires_grad = False
\`\`\`

Training took 36 hours on 4x V100 GPUs with mixed precision.

## Results

Generated text quality improved dramatically:
- Medical term usage: 94% accuracy (vs 67% baseline)
- Factual consistency: 81% (expert evaluation)
- Fluency maintained

## Next Steps

1. Test on clinical notes from different specialties
2. Add fact-checking layer using medical knowledge graphs
3. Benchmark against BioGPT and ClinicalBERT
4. Consider LoRA fine-tuning for parameter efficiency`,
  },
  "aws-textract-optimization": {
    date: "2025-03-08",
    title: "AWS Textract Optimization Notes",
    content: `Reduced processing time by 40% using batch operations and parallel Lambda invocations. Key insight: pre-processing images with adaptive thresholding significantly improves OCR accuracy.`,
    fullContent: `## Problem Statement

Processing 10K documents/day was taking 6+ hours with sequential Lambda calls. Cost was $450/month. Need to reduce both time and cost.

## Optimization Strategies Tested

### 1. Parallel Processing
Split documents into batches of 100, invoke Lambda functions in parallel using SQS fan-out pattern.

**Result**: 3.2x speedup, reduced to 1.8 hours

### 2. Image Preprocessing
Many scanned docs had poor quality. Added preprocessing step:
- Adaptive thresholding (OpenCV)
- Deskewing (rotation correction)
- Noise reduction

**Result**: OCR accuracy +12%, fewer re-processing needed

### 3. Smart Caching
Documents with same template (e.g., standard forms) were processed repeatedly. Added DynamoDB cache keyed by document hash + layout hash.

**Result**: 30% of documents served from cache, massive time savings

## Architecture Changes

\`\`\`
S3 Upload → Lambda (Preprocessor) → Textract (Async)
                                      ↓
Cache Check ← Lambda (Processor) ← Results
     ↓
  Output to DB
\`\`\`

Async Textract with SNS notifications crucial for handling large batches without timeouts.

## Cost Analysis

Before: $450/month
After: $280/month (-38%)

Savings came from:
- Fewer Textract API calls (caching)
- Optimized Lambda memory allocation
- Reduced re-processing

## Key Learnings

1. **Preprocessing is worth it** - Small upfront cost, big accuracy gains
2. **Cache everything** - Document layouts are repetitive
3. **Monitor everything** - CloudWatch + custom metrics helped identify bottlenecks
4. **Parallel > Sequential** - Obvious but easy to overlook with Lambda`,
  },
  "bert-roberta-analysis": {
    date: "2025-02-28",
    title: "BERT vs RoBERTa Performance Analysis",
    content: `Completed comprehensive F-score analysis across 5 NLP tasks. RoBERTa consistently outperforms on longer sequences, but BERT is faster for inference. Training time difference is negligible with mixed precision.`,
    fullContent: `## Experimental Setup

Compared BERT-base and RoBERTa-base across 5 tasks:
1. Sentiment Analysis (IMDB)
2. Named Entity Recognition (CoNLL-2003)
3. Question Answering (SQuAD 2.0)
4. Text Classification (AG News)
5. Semantic Similarity (STS-B)

Same training config for both:
- Learning rate: 2e-5 with linear warmup
- Batch size: 32
- Epochs: 3-5 (task-dependent)
- Mixed precision (fp16)
- Hardware: 4x V100 GPUs

## Results Summary

| Task | BERT F1 | RoBERTa F1 | Winner |
|------|---------|------------|--------|
| Sentiment | 92.3 | 93.1 | RoBERTa |
| NER | 91.8 | 92.7 | RoBERTa |
| QA | 83.5 | 85.2 | RoBERTa |
| Classification | 94.2 | 94.6 | Tie |
| STS | 89.1 | 90.3 | RoBERTa |

RoBERTa wins 4/5 tasks, average improvement: +1.2% F1

## Deeper Analysis

### Sequence Length Impact
RoBERTa advantage increases with sequence length:
- <128 tokens: +0.5% F1
- 128-256 tokens: +1.2% F1
- 256-512 tokens: +2.1% F1

Hypothesis: RoBERTa's dynamic masking and larger training corpus help with longer contexts.

### Inference Speed
BERT: 45ms per batch (avg)
RoBERTa: 48ms per batch (avg)

Difference is small (6.7%), but BERT is consistently faster. Both models have same architecture, so difference likely from implementation details.

### Training Time
With mixed precision:
- BERT: 4.2 hours
- RoBERTa: 4.5 hours

Negligible difference with fp16 training.

## Recommendations

**Use RoBERTa when**:
- Accuracy is critical
- Working with longer sequences
- Have GPU resources for training

**Use BERT when**:
- Need fastest inference
- Working with short sequences
- Already have trained BERT models

## Future Work

1. Test DistilBERT for inference optimization
2. Compare ALBERT for parameter efficiency
3. Benchmark newer models (DeBERTa, ELECTRA)
4. Test on domain-specific tasks (medical, legal)`,
  },
  "semantic-search-faiss": {
    date: "2025-02-20",
    title: "Semantic Search with FAISS",
    content: `Implemented HNSW index for 10M document corpus. Query latency under 50ms with 95% recall. Memory footprint reduced using product quantization. This is production-ready.`,
    fullContent: `## Building Production Semantic Search

Goal: Index 10M documents with <50ms query latency and >90% recall.

## Technology Choices

### Embedding Model
Tested several sentence transformers:
- all-MiniLM-L6-v2 (384d) - **Winner**: Best speed/quality tradeoff
- all-mpnet-base-v2 (768d) - Higher quality but 2x slower
- paraphrase-MiniLM-L3-v2 (384d) - Fastest but -5% recall

### Vector Index
FAISS with HNSW + IVF + PQ:

\`\`\`python
import faiss

# Create index
dimension = 384
M = 32  # HNSW connections
index = faiss.IndexHNSWFlat(dimension, M)

# Add IVF for coarse quantization
nlist = 1000  # number of clusters
quantizer = faiss.IndexFlatL2(dimension)
index = faiss.IndexIVFFlat(quantizer, dimension, nlist)

# Add PQ for compression
m = 64  # number of subquantizers
index = faiss.IndexIVFPQ(quantizer, dimension, nlist, m, 8)
\`\`\`

## Optimization Journey

### Iteration 1: Flat Index
- Latency: 2300ms
- Recall: 100%
- Memory: 15GB
- Verdict: ❌ Too slow

### Iteration 2: HNSW Only
- Latency: 45ms
- Recall: 98%
- Memory: 15GB
- Verdict: ⚠️ Fast but memory hungry

### Iteration 3: HNSW + PQ
- Latency: 48ms ✅
- Recall: 95% ✅
- Memory: 2.1GB ✅
- Verdict: ✅ Production ready!

Product Quantization reduced memory by 86% with minimal quality loss.

## API Implementation

\`\`\`python
from fastapi import FastAPI
from sentence_transformers import SentenceTransformer

app = FastAPI()
model = SentenceTransformer('all-MiniLM-L6-v2')
index = faiss.read_index('index.faiss')

@app.post("/search")
async def search(query: str, k: int = 10):
    embedding = model.encode([query])
    distances, indices = index.search(embedding, k)
    return {"results": indices[0].tolist()}
\`\`\`

Added Redis caching for hot queries → 80% cache hit rate → effective <10ms for popular searches.

## Performance Metrics

Tested on 10M Wikipedia abstracts:

- **Index build time**: 4.2 hours
- **Index size on disk**: 2.1GB
- **Query latency (p50)**: 32ms
- **Query latency (p95)**: 48ms
- **Query latency (p99)**: 67ms
- **Recall@10**: 95.2%
- **Recall@100**: 97.8%

## Production Deployment

Deployed on AWS ECS:
- 4 containers behind ALB
- Handles 1000+ QPS
- Auto-scaling based on CPU
- 99.9% uptime over 3 months

## Lessons Learned

1. **Product Quantization is magic** - 86% memory reduction for 3% recall drop
2. **HNSW is fast** - But tune M and efSearch carefully
3. **Cache hot queries** - Most queries are repetitive
4. **Monitor recall** - It can degrade with updates
5. **Batch updates** - Rebuilding index daily is fine for most use cases`,
  },
};

const JournalEntry = () => {
  const { slug } = useParams();
  const entry = slug ? journalData[slug] : null;

  if (!entry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Entry Not Found</h1>
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
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Button variant="ghost" className="mb-8 hover-glow" asChild>
          <Link to="/#journal">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Journal
          </Link>
        </Button>

        <div className="animate-fade-in">
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            <span className="terminal-text">{entry.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">{entry.title}</h1>

          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="prose prose-invert max-w-none">
                <div className="text-muted-foreground leading-relaxed space-y-6 whitespace-pre-line">
                  {entry.fullContent}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
