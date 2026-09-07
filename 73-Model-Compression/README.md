# 73 - Model Compression

> Structural pruning, knowledge distillation, parameter sharing, and compact foundation model architectures.

## 🌐 Overview & Architectural Importance

Deploying multi-billion parameter foundation models on client devices or low-cost cloud instances requires compressing model sizes without losing capabilities. Pruning removes redundant weights, distillation transfers reasoning from teacher to student models, and compact architectures (Phi, SmolLM) maximize token intelligence per parameter.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Pruning**](Pruning.md) — Torch-Pruning, Wanda, SliceGPT, NNI, structured vs unstructured pruning, and weight removal.
* [**Distillation**](Distillation.md) — Knowledge distillation, TextBrewer, MiniLM, TinyBERT, and distilling reasoning traces.
* [**Efficient Model Architectures**](Efficient-Model-Architectures.md) — SmolLM, Phi, TinyLlama, MobileNet, and compact high-performance model design.

## 🧭 Recommended Study Sequence

1. **Pruning Fundamentals**: Magnitude pruning vs second-order Taylor pruning vs activation pruning (Wanda).
2. **Structured Pruning**: Removing whole attention heads and MLP channels with Torch-Pruning and SliceGPT.
3. **Knowledge Distillation**: KL-divergence matching and temperature scaling with TextBrewer.
4. **Reasoning Distillation**: Transferring test-time `<think>` traces from frontier models to compact models.
5. **Compact Model Architecture**: Grouped-Query Attention (GQA), deep-narrow topologies, and SmolLM.

## 🗝️ Foundational Prerequisites

- Linear algebra: Matrix rank, SVD, and singular values.
- Loss functions: Cross-entropy, Kullback-Leibler (KL) divergence, and distillation temperature.
- PyTorch module parameter manipulation and hooks.

---

[← Back to Main Repository](../README.md)
