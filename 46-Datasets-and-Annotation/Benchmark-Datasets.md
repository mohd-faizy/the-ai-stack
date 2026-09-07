# Benchmark Datasets

> Foundational benchmark datasets that serve as the standard yardsticks for evaluating general intelligence, computer vision, and reasoning.

## 🎯 What to Learn

- Language benchmarks: MMLU (57 subjects), GSM8k (grade school math), HumanEval (Python coding), and ARC (Abstraction and Reasoning Corpus)
- Computer vision benchmarks: ImageNet (classification), MS COCO (detection and segmentation), and LVIS (long-tail instances)
- Multimodal benchmarks: MMMU (Massive Multi-discipline Multimodal Understanding) and MathVista
- The Goodhart's law problem in AI: When a measure becomes a target, it ceases to be a good measure
- Benchmark contamination and decontamination methodologies (n-gram overlap search)
- Dynamic benchmarks: LMSYS Chatbot Arena and SWE-bench

## 📚 Best Learning Resources

### 🥇 Best Overall

- [MMLU (Massive Multitask Language Understanding)](https://github.com/hendrycks/test)
  - Type: Foundational Benchmark
  - Language: English
  - Level: Intermediate
  - Why recommended: The seminal 57-subject multiple-choice benchmark created by Dan Hendrycks that became the universal standard for measuring LLM general knowledge.

### 🎓 Courses

- [Stanford CS224N: Natural Language Processing](https://web.stanford.edu/class/cs224n/) — Covers evaluation benchmarks, GLUE, SuperGLUE, and modern foundation model testing.

### ▶️ YouTube — English

- [AI Explained: Video Guides & Tutorials](https://www.youtube.com/@aiexplained-official)
  - Channel: AI Explained
  - Language: English
  - Type: Analysis
  - Level: Intermediate
  - Why: Rigorous technical breakdown of how standard AI benchmarks work, what they test, and their vulnerability to overfitting.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Evaluating Machine Learning Models by Alice Zheng](https://www.oreilly.com/library/view/evaluating-machine-learning/9781492048756/) — In-depth guide to metric selection, validation design, and benchmark interpretation.

### 💻 GitHub / Implementations

- [MMLU](https://github.com/hendrycks/test) — Massive multitask language understanding.
- [HumanEval](https://github.com/openai/human-eval) — Code generation benchmark.
- [COCO](https://github.com/cocodataset/cocoapi) — Object detection, segmentation benchmark.
- [ImageNet](https://github.com/pytorch/vision) — Large-scale visual recognition.
- [SuperGLUE](https://github.com/nyu-mll/jiant) — Language understanding benchmark.

## 📄 Foundational Papers

- [Measuring Massive Multitask Language Understanding (MMLU)](https://arxiv.org/abs/2009.03300) — Hendrycks et al. paper establishing the 57-subject benchmark spanning STEM, humanities, and social sciences.
- [Evaluating Large Language Models Trained on Code (HumanEval)](https://arxiv.org/abs/2107.03374) — Introduced Codex and the Pass@k metric for automated unit test execution evaluation.

### 🧪 Practice

- [Hugging Face Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) — Explore open model scores across MMLU-Pro, GSM8K, IFEval, and MuSR.

### 🛠️ Projects

- [Benchmark Contamination Checker](https://github.com/EleutherAI/lm-evaluation-harness) — Write a 13-gram overlap detector to check whether a training corpus has inadvertently memorized HumanEval test cases.

## 🧭 Recommended Learning Path

1. Understand the mechanics of major language benchmarks: MMLU, GSM8k, ARC, and HumanEval.
2. Explore computer vision benchmarks: ImageNet-1K, MS COCO, and ADE20K.
3. Understand Pass@1 vs Pass@10 with temperature sampling.
4. Study benchmark contamination and how pre-training on test splits inflates scores.
5. Track dynamic community benchmarks like LMSYS Chatbot Arena.

## ⭐ Top 3 Resources

1. Papers With Code Datasets Directory
2. MMLU Benchmark (Dan Hendrycks / UC Berkeley)
3. OpenAI HumanEval (Code generation benchmark)

