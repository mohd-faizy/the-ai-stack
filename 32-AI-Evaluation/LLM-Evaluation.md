# LLM Evaluation

> Standardized evaluation harnesses, automated benchmarks, and judge-based methodologies to evaluate the reasoning, factual accuracy, and task capabilities of large language models.

## 🎯 What to Learn

- Standard academic benchmarks: MMLU, GSM8K, ARC, HumanEval, and HellaSwag
- Evaluation harnesses: EleutherAI lm-evaluation-harness and Stanford HELM
- LLM-as-a-Judge protocols: Pairwise ranking, MT-Bench, and AlpacaEval
- Mitigating judge biases: Position bias, verbosity bias, and self-enhancement bias
- Crowdsourced human preference evaluation: LMSYS Chatbot Arena and Elo rating systems
- Instruction-following evaluation: IFEval and strict constraint compliance checking

## 📚 Best Learning Resources

### 🥇 Best Overall

- [EleutherAI LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness)
  - Type: Evaluation Framework
  - Language: English
  - Level: Intermediate
  - Why recommended: The de-facto industry standard harness for zero-shot and few-shot evaluation across over 60 standard academic benchmarks.

### 🎓 Courses

- [DeepLearning.AI: Evaluating and Debugging Generative AI](https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/) — Practical course by W&B on systematic evaluation, tracking, and continuous LLM validation.

### ▶️ YouTube — English

- [Stanford Online: Video Guides & Tutorials](https://www.youtube.com/@StanfordOnline)
  - Channel: Stanford Online
  - Language: English
  - Type: Lecture
  - Level: Intermediate
  - Why: In-depth Stanford CS lecture explaining HELM, standard benchmarks, and critical limitations of LLM evaluation.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Evaluating Machine Learning Models by Alice Zheng (O'Reilly)](https://www.oreilly.com/library/view/evaluating-machine-learning/9781492048756/) — Foundational guide to validation methodologies, metric selection, and statistical significance testing.

### 💻 GitHub / Implementations

- [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) — Comprehensive LLM evaluation framework.
- [OpenCompass](https://github.com/open-compass/OpenCompass) — LLM evaluation platform.
- [HELM](https://github.com/stanford-crfm/helm) — Holistic evaluation of language models.
- [Chatbot Arena](https://github.com/lm-sys/FastChat) — LLM benchmark via crowdsourced comparison.
- [AlpacaEval](https://github.com/tatsu-lab/alpaca_eval) — Automated LLM evaluation.
- [MT-Bench](https://github.com/lm-sys/FastChat) — Multi-turn benchmark for chat models.
- [BigBench](https://github.com/google/BIG-bench) — Beyond the imitation game benchmark.
- [IFEval](https://github.com/google-research/google-research) — Instruction following evaluation.
- [MMLU](https://github.com/hendrycks/test) — Massive multitask language understanding.
- [HumanEval](https://github.com/openai/human-eval) — Code generation evaluation.
- [EvalPlus](https://github.com/evalplus/evalplus) — Rigorous evaluation of code LLMs.

## 📄 Foundational Papers

- [Measuring Massive Multitask Language Understanding (MMLU)](https://arxiv.org/abs/2009.03300) — Seminal paper introducing the 57-subject benchmark that became the primary metric for LLM general knowledge.
- [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685) — Demonstrated that strong LLMs match human judgment consistency with >80% agreement on open-ended tasks.

### 🧪 Practice

- [LMSYS Chatbot Arena Leaderboard](https://chat.lmsys.org/?leaderboard) — Explore live community Elo ratings, win-rate matrices, and model comparison categories.

### 🛠️ Projects

- [Build an Automated Model Eval Suite](https://github.com/EleutherAI/lm-evaluation-harness) — Run a 5-benchmark automated test suite on an open-weights model using lm-eval and log results to wandb.

## 🧭 Recommended Learning Path

1. Master standard metrics (Perplexity, Exact Match, BLEU/ROUGE, Pass@k).
2. Run EleutherAI lm-eval on standard benchmarks (GSM8k, ARC, MMLU).
3. Implement an LLM-as-a-Judge pipeline with pairwise comparisons and position swapping.
4. Analyze judge failure modes (sycophancy, verbosity bias, self-preference).
5. Deploy an automated regression evaluation gate into model deployment CI/CD.

## ⭐ Top 3 Resources

1. EleutherAI LM Evaluation Harness (GitHub repo)
2. LMSYS Chatbot Arena & MT-Bench (Research & Leaderboard)
3. Stanford HELM (Holistic Evaluation Framework)

