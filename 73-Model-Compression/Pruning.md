# Pruning

> Structural and unstructured weight removal algorithms, activation-aware pruning, and matrix slicing techniques that remove redundant parameters.

## 🎯 What to Learn

- Structured vs Unstructured pruning: Zeroing individual weights (requires sparse kernels) vs removing whole neurons/heads/layers (direct speedup)
- Torch-Pruning: Structural pruning library for arbitrary deep neural networks with automatic dependency graph tracing
- Wanda (Pruning by Weights and activations): Pruning LLMs one-shot without retraining by multiplying weight magnitudes by input activation norms
- SliceGPT: Compressing LLMs by deleting entire rows and columns from weight matrices via orthogonal matrix transformations
- Lottery Ticket Hypothesis (Frankle & Carbin): Dense networks contain sparse subnetworks that can train to equal accuracy
- Fine-tuning pruned models to recover lost capability and benchmarking latency on hardware

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Torch-Pruning](https://github.com/VainF/Torch-Pruning)
  - Type: Structural Pruning Library
  - Language: English
  - Level: Intermediate
  - Why recommended: The leading general-purpose structural pruning toolkit for PyTorch, automatically tracing tensor dependency graphs to remove channels and layers across CNNs, Transformers, and LLMs.

### 🎓 Courses

- [MIT 6.5940: TinyML and Efficient Deep Learning Computing by Song Han](https://efficientml.ai/) — World-renowned MIT course covering pruning, quantization, neural architecture search, and efficient algorithms.

### ▶️ YouTube — English

- [Song Han / MIT: Video Guides & Tutorials](https://www.youtube.com/@hanlab)
  - Channel: Song Han / MIT
  - Language: English
  - Type: University Lecture
  - Level: Intermediate
  - Why: Prof. Song Han (MIT) explains the theory of pruning, the lottery ticket hypothesis, and hardware acceleration.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Efficient Deep Learning by Marion Le Borgne (O'Reilly)](https://www.oreilly.com/library/view/efficient-deep-learning/9781098105464/) — Comprehensive practical guide covering pruning, quantization, and hardware deployment.

### 💻 GitHub / Implementations

- [Torch-Pruning](https://github.com/VainF/Torch-Pruning) — Structural pruning for neural networks.
- [NNI](https://github.com/microsoft/nni) — Neural network intelligence for compression.
- [SparseML](https://github.com/neuralmagic/sparseml) — Sparsification library by Neural Magic.
- [Wanda](https://github.com/locuslab/wanda) — Pruning LLMs by weights and activations.
- [SliceGPT](https://github.com/microsoft/TransformerCompression) — Compress LLMs via sparse factorization.

## 📄 Foundational Papers

- [The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks](https://arxiv.org/abs/1803.03635) — Frankle and Carbin landmark paper winning ICLR Best Paper.
- [A Simple and Effective Pruning Approach for Large Language Models (Wanda)](https://arxiv.org/abs/2306.11695) — Sun et al. paper introducing weight x activation magnitude pruning.

### 🧪 Practice

- [PyTorch Pruning Tutorial](https://pytorch.org/tutorials/intermediate/pruning_tutorial.html) — Apply magnitude pruning to a convolutional network using built-in `torch.nn.utils.prune`.

### 🛠️ Projects

- [Prune an Open LLM with Wanda](https://github.com/locuslab/wanda) — Apply 50% unstructured or 2:4 structured pruning to a 7B parameter model in 10 minutes without backpropagation.

## 🧭 Recommended Learning Path

1. Understand why unstructured pruning requires specialized sparse hardware kernels to achieve actual speedups.
2. Learn structured pruning: Removing entire attention heads or feed-forward channels.
3. Use Torch-Pruning to trace dependency graphs and prune a ResNet or Vision Transformer.
4. Explore Wanda and SliceGPT for fast post-training pruning of large language models.
5. Fine-tune pruned models with LoRA to recover downstream benchmark accuracy.

## ⭐ Top 3 Resources

1. Torch-Pruning (General PyTorch Structural Pruning)
2. MIT 6.5940 EfficientML Course (Song Han)
3. Wanda (Locus Lab / Carnegie Mellon University)

