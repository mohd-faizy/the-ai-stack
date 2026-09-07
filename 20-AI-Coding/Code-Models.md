# Code Models

> Code foundation models are pre-trained on massive source code corpora, syntax trees, and commit histories to master multilingual syntax, algorithmic reasoning, and code completion.

## 🎯 What to Learn

- Leading open code models: DeepSeek-Coder-V2, Qwen2.5-Coder, StarCoder2, Codestral
- Fill-in-the-Middle (FIM) training objectives for inline code completion
- Long-context code reasoning (128k context windows for entire repositories)
- Multi-language tokenization and syntax tree representations
- Evaluating code models: HumanEval, MBPP, and RepoBench benchmarks

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Qwen2.5-Coder: Powerful Code Foundation Model](https://github.com/QwenLM/Qwen2.5-Coder)
  - Type: Open-Source Model Family & Docs
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: Qwen2.5-Coder (Alibaba) delivers state-of-the-art open code intelligence across 0.5B to 32B parameter scales, rivaling proprietary models on HumanEval, MultiPL-E, and repo-level tasks.

### 📖 Documentation & References

- [Qwen2.5-Coder Documentation](https://qwenlm.github.io/blog/qwen2.5-coder-family/) — Architectural overview, benchmark leaderboards, and vLLM / Ollama serving guides.
- [DeepSeek-Coder Documentation](https://github.com/deepseek-ai/DeepSeek-Coder-V2) — Mixture-of-Experts code intelligence supporting 300+ programming languages.
- [BigCode StarCoder2 Docs](https://huggingface.co/blog/starcoder2) — Transparently trained, permissively licensed open code foundation models.

### 🎓 Courses

- [Neural Networks for Code (Stanford CS 224N)](https://web.stanford.edu/class/cs224n/) — Lectures on code syntax modeling, tree representations, and code generation.

### ▶️ YouTube — English

- [Matthew Berman: Video Guides & Tutorials](https://www.youtube.com/@MatthewBerman)
  - Channel: Matthew Berman
  - Language: English
  - Type: Model Review
  - Level: Beginner to Intermediate
  - Why: Hands-on benchmarking of Qwen2.5-Coder on complex coding tasks and local Ollama deployment.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Deep Learning for Coders](https://course.fast.ai/) — Jeremy Howard and Sylvain Gugger practical guide to training and deploying neural networks.

### 💻 GitHub / Implementations

- [QwenLM/Qwen2.5-Coder](https://github.com/QwenLM/Qwen2.5-Coder) — Qwen2.5-Coder is the code version of Qwen2.5, the open-source code LLM.
- [deepseek-ai/DeepSeek-Coder-V2](https://github.com/deepseek-ai/DeepSeek-Coder-V2) — Breaking the Barrier of Closed-Source Models in Code Intelligence.
- [bigcode-project/starcoder2](https://github.com/bigcode-project/starcoder2) — StarCoder2: Open-source code foundation models trained on 600+ programming languages.

## 📄 Foundational Papers

- [Evaluating Large Language Models Trained on Code](https://arxiv.org/abs/2107.03374) — Chen et al. (OpenAI 2021) seminal Codex paper introducing HumanEval and Pass@k evaluation.
- [Qwen2.5-Coder Technical Report](https://arxiv.org/abs/2409.12186) — Hui et al. (2024) comprehensive report detailing large-scale synthetic code data, FIM objectives, and instruction tuning.

### 🧪 Practice

- [BigCode Evaluation Harness](https://github.com/bigcode-project/bigcode-evaluation-harness) — Framework to evaluate code generation models on HumanEval, MultiPL-E, and MBPP.

### 🛠️ Projects

- [Local Self-Hosted Code Copilot](https://github.com/TabbyML/tabby) — Deploy Qwen2.5-Coder-7B with Ollama or Tabby to provide sub-100ms FIM autocomplete in VS Code.

## 🧭 Recommended Learning Path

1. Understand Fill-in-the-Middle (FIM) training objectives: `<PRE>`, `<SUF>`, `<MID>` tokens.
2. Serve Qwen2.5-Coder-7B locally using Ollama or vLLM with FlashAttention-2.
3. Integrate the local model into Continue or Tabby extension for real-time autocomplete.
4. Run the BigCode evaluation harness on custom code prompts.
5. Fine-tune a code model with LoRA on internal company APIs and coding conventions.

## ⭐ Top 3 Resources

1. Qwen2.5-Coder (Alibaba)
2. DeepSeek-Coder-V2 (deepseek-ai)
3. Evaluating Large Language Models Trained on Code (Chen et al. / Codex)

