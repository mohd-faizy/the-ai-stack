# Privacy

> Privacy in AI protects individual training data points from extraction, reconstruction, or membership inference attacks through cryptographic techniques, data sanitization, and differential privacy guarantees.

## 🎯 What to Learn

- Membership inference attacks and model inversion techniques
- Training data memorization in Large Language Models
- Differential privacy definitions (epsilon, delta bounds)
- Private gradient clipping and DP-SGD mechanisms
- Machine unlearning and the right to be forgotten in neural networks

## 📚 Best Learning Resources

### 🥇 Best Overall

- [CS 860: Algorithms for Private Data Analysis (Gautam Kamath)](https://www.gautamkamath.com/courses/cs860-fa2020.html)
  - Type: University Course & Lectures
  - Language: English
  - Level: Advanced
  - Why recommended: Rigorous, comprehensive university curriculum exploring the mathematical foundations and algorithmic mechanisms of differential privacy.

### 📖 Documentation & References

- [Opacus Documentation](https://opacus.ai/) — PyTorch's official library for training models with differential privacy using DP-SGD.
- [TensorFlow Privacy](https://www.tensorflow.org/responsible_ai/privacy/guide) — Official TensorFlow guide and library for private machine learning.
- [OpenDP Project](https://opendp.org/) — Harvard-led open-source suite of statistical and data analysis tools with differential privacy guarantees.

### 🎓 Courses

- [CS 860 - Private Data Analysis (UWaterloo)](https://www.gautamkamath.com/courses/cs860-fa2020.html) — Comprehensive graduate course covering DP definitions, mechanisms, and machine learning privacy.

### ▶️ YouTube — English

- [Gautam Kamath: Video Guides & Tutorials (Gautam Kamath)](https://www.youtube.com/results?search_query=Gautam%20Kamath%20Gautam%20Kamath%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Gautam Kamath
  - Language: English
  - Type: Playlist
  - Level: Advanced
  - Why: Exhaustive lecture series on private statistics, composition theorems, and private SGD.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [The Algorithmic Foundations of Differential Privacy](https://www.cis.upenn.edu/~aaroth/Papers/privacybook.pdf) — Cynthia Dwork and Aaron Roth's seminal textbook establishing the mathematical framework of differential privacy.

### 💻 GitHub / Implementations

- [pytorch/opacus](https://github.com/pytorch/opacus) — Train PyTorch models with Differential Privacy with minimal code overhead.
- [OpenDP/opendp](https://github.com/opendp/opendp) — Community-developed differential privacy tools for privacy-preserving computations.

## 📄 Foundational Papers

- [Deep Learning with Differential Privacy](https://arxiv.org/abs/1607.00133) — Abadi et al. (Google Brain) landmark paper introducing DP-SGD and the moments accountant.
- [Extracting Training Data from Large Language Models](https://arxiv.org/abs/2012.07805) — Carlini et al. demonstration of verbatim memorization and private data extraction from generative LLMs.

### 🧪 Practice

- [Opacus Tutorials](https://opacus.ai/tutorials/) — Interactive notebooks on DP fine-tuning of vision models and language models.

### 🛠️ Projects

- [Differentially Private LLM Fine-Tuning](https://github.com/huggingface/dp-transformers) — Fine-tune a Hugging Face transformer with DP-SGD to prevent extraction of confidential training records.

## 🧭 Recommended Learning Path

1. Understand privacy attack vectors: membership inference, attribute inference, and verbatim extraction.
2. Master the mathematical definition of (epsilon, delta)-differential privacy.
3. Learn how DP-SGD modifies standard backpropagation (per-sample gradient clipping + Gaussian noise).
4. Implement differential privacy in a PyTorch training loop using Opacus PrivacyEngine.
5. Explore privacy-utility trade-offs across different epsilon privacy budgets.

## ⭐ Top 3 Resources

1. Opacus (PyTorch DP Library)
2. The Algorithmic Foundations of Differential Privacy (Dwork & Roth)
3. CS 860: Algorithms for Private Data Analysis (Kamath)

