# Model Serving Platforms

> Enterprise serving platforms, model orchestration frameworks, and API gateways designed to deploy, autoscale, and monitor machine learning models in production.

## 🎯 What to Learn

- Model serving architecture: Request queueing, dynamic batching, worker pools, and health checking
- NVIDIA Triton Inference Server: Multi-framework serving (PyTorch, ONNX, TensorRT, Python) and concurrent model execution
- KServe: Cloud-native model serving on Kubernetes with serverless auto-scaling (Knative)
- BentoML & OpenLLM: Unified Python framework for packaging models into production-ready microservices
- Ray Serve: Scalable, composable model serving with Python-native distributed actor orchestration
- LitServe: High-throughput AI serving engine based on FastAPI built by Lightning AI

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Triton Inference Server (NVIDIA)](https://github.com/triton-inference-server/server)
  - Type: Model Serving Platform
  - Language: English
  - Level: Advanced
  - Why recommended: The premier enterprise multi-framework inference serving software optimized for maximum GPU utilization, dynamic batching, and concurrent execution.

### 🎓 Courses

- [Full Stack Deep Learning: Deployment & Serving](https://fullstackdeeplearning.com/) — Covers model packaging, web serving, latency optimization, and infrastructure scaling.

### ▶️ YouTube — English

- [NVIDIA Developer: Video Guides & Tutorials](https://www.youtube.com/@NVIDIADeveloper)
  - Channel: NVIDIA Developer
  - Language: English
  - Type: Tutorial
  - Level: Advanced
  - Why: NVIDIA engineers walk through model configuration, dynamic batching, and performance profiling with Perf Analyzer.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Machine Learning Engineering in Action by Ben Wilson (Manning)](https://www.manning.com/books/machine-learning-engineering-in-action) — Covers production serving architectures, reliability engineering, and monitoring.

### 💻 GitHub / Implementations

- [Triton Inference Server](https://github.com/triton-inference-server/server) — Production inference by NVIDIA.
- [KServe](https://github.com/kserve/kserve) — Kubernetes-native model serving.
- [BentoML](https://github.com/bentoml/BentoML) — Unified model serving framework.
- [Seldon Core](https://github.com/SeldonIO/seldon-core) — ML deployment on Kubernetes.
- [TorchServe](https://github.com/pytorch/serve) — PyTorch model serving.
- [TensorFlow Serving](https://github.com/tensorflow/serving) — TensorFlow model serving.
- [Ray Serve](https://github.com/ray-project/ray) — Scalable model serving with Ray.
- [LitServe](https://github.com/Lightning-AI/LitServe) — Lightning-fast serving engine.

### 🧪 Practice

- [BentoML Quickstart](https://docs.bentoml.com/en/latest/get-started/quickstart.html) — Package and serve a PyTorch model in 15 minutes.

### 🛠️ Projects

- [Multi-Model Triton Serving Pipeline](https://github.com/triton-inference-server/server) — Build an ensemble pipeline on Triton combining a vision embedding model, vector search, and LLM text generation.

## 🧭 Recommended Learning Path

1. Build a simple serving endpoint with FastAPI and understand its throughput bottlenecks.
2. Learn BentoML to package model weights, dependencies, and service logic into a self-contained Bento.
3. Configure dynamic batching and concurrent model instances in NVIDIA Triton.
4. Deploy models on Kubernetes using KServe for scale-to-zero capabilities.
5. Benchmark throughput and P99 latency under concurrency with Perf Analyzer or Locust.

## ⭐ Top 3 Resources

1. NVIDIA Triton Inference Server (GitHub & Docs)
2. BentoML (Unified Python model serving)
3. KServe (Kubernetes native serving)

