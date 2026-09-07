# Safety Evaluation

> Frameworks, datasets, and automated red-teaming suites to quantify toxic generation, jailbreak vulnerabilities, bias, and dangerous capabilities in AI systems.

## 🎯 What to Learn

- Harm categories: CBRN (chemical, biological, radiological, nuclear), cyberattacks, hate speech, and self-harm
- Safety benchmarks: HarmBench, ToxiGen, RealToxicityPrompts, and Do-Not-Answer
- Automated red-teaming and adversarial jailbreak generation
- Evaluating refusals: Measuring False Refusal Rate (FRR) vs Attack Success Rate (ASR)
- UK AISI Inspect: Inspect AI framework for automated model safety evaluation
- Quantifying bias, fairness, and stereotyping across demographic groups

## 📚 Best Learning Resources

### 🥇 Best Overall

- [HarmBench](https://github.com/centerforaisafety/HarmBench)
  - Type: Safety Benchmark & Test Suite
  - Language: English
  - Level: Advanced
  - Why recommended: Standardized evaluation framework by the Center for AI Safety for automated red teaming and measuring jailbreak robustness.

### 🎓 Courses

- [DeepLearning.AI: Red Teaming LLM Applications](https://www.deeplearning.ai/short-courses/red-teaming-llm-applications/) — Practical training on automated red-teaming and safety evaluation with Garak.

### ▶️ YouTube — English

- [Center for AI Safety: Video Guides & Tutorials](https://www.youtube.com/@centerforaisafety)
  - Channel: Center for AI Safety
  - Language: English
  - Type: Talk
  - Level: Advanced
  - Why: Technical presentation on Attack Success Rate (ASR) metrics and adversarial robustness evaluation.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Human Compatible: Artificial Intelligence and the Problem of Control by Stuart Russell](https://people.eecs.berkeley.edu/~russell/hc.html) — Foundational conceptual text on alignment, objective specification, and safe AI systems.

### 💻 GitHub / Implementations

- [HarmBench](https://github.com/centerforaisafety/HarmBench) — Standardized evaluation of LLM safety.
- [ToxiGen](https://github.com/microsoft/TOXIGEN) — Implicit toxicity generation dataset.
- [Inspect AI](https://github.com/UKGovernmentBEIS/inspect_ai) — AI safety evaluation framework by UK AISI.

## 📄 Foundational Papers

- [HarmBench: A Standardized Evaluation Framework for Automated Red Teaming](https://arxiv.org/abs/2402.04249) — Standardizes attack suites and evaluation protocols to reliably measure LLM safety against jailbreaks.
- [Universal and Transferable Adversarial Attacks on Aligned Language Models](https://arxiv.org/abs/2307.15043) — Demonstrated automated suffix generation that circumvents safety alignment across proprietary and open models.

### 🧪 Practice

- [Inspect AI Quickstart](https://github.com/UKGovernmentDataScience/inspect_ai) — Write and execute an automated model safety evaluation task in Python.

### 🛠️ Projects

- [Automated Safety Evaluation Pipeline](https://github.com/centerforaisafety/HarmBench) — Evaluate open-weights models against HarmBench test prompts and generate an ASR scorecard.

## 🧭 Recommended Learning Path

1. Understand safety taxonomy: Severe harm categories vs benign refusals.
2. Measure Attack Success Rate (ASR) and False Refusal Rate (FRR).
3. Run UK AISI Inspect AI for structured safety evaluations.
4. Evaluate adversarial attacks using Garak and HarmBench.
5. Incorporate safety regression tests into deployment pipelines.

## ⭐ Top 3 Resources

1. HarmBench (Center for AI Safety)
2. UK AISI Inspect AI (Open-source evaluation framework)
3. DeepLearning.AI Red Teaming LLM Applications Course

