# State Space Models

> Linear-time sequence models, selective state spaces, and sub-quadratic alternatives to the transformer attention mechanism.

## 🎯 What to Learn

- The quadratic bottleneck of Transformers: Self-attention scales as $O(N^2)$ in context length $N$
- State Space Models (SSMs): Continuous-time linear dynamical systems discretized for sequence processing ($h'(t) = A h(t) + B x(t)$)
- Structured State Spaces (S4 - Gu et al.): HiPPO matrix initialization enabling long-range dependencies over 10,000+ tokens
- Mamba (Albert Gu & Tri Dao): Selective State Spaces ($S6$) with input-dependent parameters and hardware-aware GPU associative scans
- RWKV: Receptance Weighted Key Value architecture combining parallelized RNN training with fast linear inference
- Hybrid architectures (Jamba): Interleaving Mamba layers with Transformer attention and Mixture-of-Experts

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Mamba (Albert Gu & Tri Dao)](https://github.com/state-spaces/mamba)
  - Type: State Space Architecture Standard
  - Language: English
  - Level: Advanced
  - Why recommended: The breakthrough sub-quadratic sequence modeling architecture by Albert Gu and Tri Dao, delivering 5x higher inference throughput than Transformers and linear $O(N)$ scaling with sequence length.

### 🎓 Courses

- [Stanford CS25: Transformers United (Mamba Lecture by Albert Gu)](https://web.stanford.edu/class/cs25/) — Albert Gu walks through the mathematical derivation of state space models and the Mamba architecture.

### ▶️ YouTube — English

- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Deep Dive
  - Level: Advanced
  - Why: Visual masterclass explaining the continuous-to-discrete conversion, selection mechanism, and parallel GPU scan.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Deep Learning Systems by Tianqi Chen & Zico Kolter](https://dlsyscourse.org/) — Covers sequence modeling, recurrence, and hardware-aware associative scan compilation.

### 💻 GitHub / Implementations

- [Mamba](https://github.com/state-spaces/mamba) — Linear-time sequence modeling.
- [S4](https://github.com/state-spaces/s4) — Structured state spaces for sequence modeling.
- [RWKV](https://github.com/BlinkDL/RWKV-LM) — RNN with transformer-level performance.
- [Jamba](https://huggingface.co/ai21labs/AI21-Jamba-1.5-Mini) — Hybrid SSM-transformer model.

## 📄 Foundational Papers

- [Mamba: Linear-Time Sequence Modeling with Selective State Spaces](https://arxiv.org/abs/2312.00752) — Albert Gu and Tri Dao landmark paper introducing the selective state space architecture.
- [Transformers are RNNs: Fast Autoregressive Completion with Linear Attention](https://arxiv.org/abs/2006.16236) — Katharopoulos et al. paper establishing the connection between recurrent updates and linearized attention.

### 🧪 Practice

- [Mamba Hugging Face Quickstart](https://huggingface.co/state-spaces/mamba-130m) — Load and run text generation with pre-trained Mamba models in 10 lines of Python.

### 🛠️ Projects

- [Train a 130M Mamba Language Model](https://github.com/state-spaces/mamba) — Pre-train a small Mamba sequence model on Wikitext-103 and benchmark tokens-per-second inference speed against a comparable GPT-2 model.

## 🧭 Recommended Learning Path

1. Understand why self-attention requires $O(N^2)$ memory for $N$ tokens.
2. Review linear dynamical systems: State equation and output equation.
3. Learn how Mamba makes state transitions input-dependent (Selective State Space).
4. Study how the parallel scan algorithm enables fast parallel training on GPUs.
5. Run Mamba-2 and compare inference throughput against standard Transformer models.

## ⭐ Top 3 Resources

1. Mamba (Albert Gu & Tri Dao / CMU & Together AI)
2. Umar Jamil's Mamba Mathematical Breakdown
3. RWKV (Receptance Weighted Key Value)

