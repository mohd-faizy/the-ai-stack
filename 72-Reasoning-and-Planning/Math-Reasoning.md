# Math Reasoning

> Benchmark datasets, competition-level mathematics datasets, step-by-step problem solvers, and multimodal mathematical reasoning engines.

## 🎯 What to Learn

- Key mathematical benchmarks: GSM8K (grade school math), MATH (challenging high school competition math), and MathVista (multimodal)
- Minerva (Google Research): Solving quantitative reasoning problems with specialized pre-training on STEM arXiv papers
- Program-Aided Language Models (PAL) & Program-of-Thought: Offloading arithmetic calculations to a Python interpreter
- Self-consistency decoding: Sampling multiple diverse reasoning paths with temperature > 0 and selecting majority vote
- Process Reward Models (PRMs): Rewarding models for every correct intermediate step (PRM800K) rather than only the final answer
- Olympiad-level mathematical reasoning: AIME and IMO problem-solving with reinforcement-learned search

## 📚 Best Learning Resources

### 🥇 Best Overall

- [MATH Benchmark (Dan Hendrycks et al.)](https://github.com/hendrycks/math)
  - Type: Competition Mathematics Benchmark
  - Language: English
  - Level: Intermediate
  - Why recommended: The definitive 12,500-problem high school mathematics competition benchmark spanning algebra, geometry, calculus, and number theory with full step-by-step solutions.

### 🎓 Courses

- [Brilliant.org: Mathematical Thinking & Logic](https://brilliant.org/) — Interactive problem-solving courses strengthening competition math fundamentals.

### ▶️ YouTube — English

- [AI Explained / Google DeepMind: Video Guides & Tutorials](https://www.youtube.com/@DeepMind)
  - Channel: AI Explained / Google DeepMind
  - Language: English
  - Type: Analysis
  - Level: Advanced
  - Why: Technical breakdown of Process Reward Models, self-consistency sampling, and test-time compute scaling on MATH benchmarks.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [The Art and Craft of Problem Solving by Paul Zeitz](https://www.wiley.com/en-us/The+Art+and+Craft+of+Problem+Solving%2C+3rd+Edition-p-9781119228776) — The legendary competition math handbook teaching heuristics, strategies, and number theory.

### 💻 GitHub / Implementations

- [MathVista](https://github.com/lupantech/MathVista) — Mathematical reasoning in visual contexts.
- [MATH](https://github.com/hendrycks/math) — Math problem solving benchmark.
- [GSM8K](https://github.com/openai/grade-school-math) — Grade school math benchmark.

## 📄 Foundational Papers

- [Measuring Mathematical Problem Solving with the MATH Dataset](https://arxiv.org/abs/2103.03874) — Hendrycks et al. landmark paper introducing the MATH competition benchmark.
- [Let's Verify Step by Step (PRM800K)](https://arxiv.org/abs/2305.20050) — Lightman et al. OpenAI paper demonstrating that Process Reward Models significantly outperform Outcome Reward Models.

### 🧪 Practice

- [GSM8K Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) — Run an automated 8-shot evaluation of any open model on GSM8k in one command.

### 🛠️ Projects

- [Program-Aided Math Solver (PAL) in Python](https://github.com/reasoning-machines/pal) — Build a mathematical reasoning bot that generates Python code to solve algebraic word problems, executing the code to guarantee arithmetic accuracy.

## 🧭 Recommended Learning Path

1. Understand why naive autoregressive token prediction fails at multi-step mental arithmetic.
2. Explore Program-Aided Language Models (PAL) to offload calculations to Python.
3. Implement Self-Consistency decoding (majority voting over 10 CoT samples).
4. Study Process Reward Models (PRMs) and step-by-step verification.
5. Benchmark reasoning models against GSM8K and the MATH benchmark.

## ⭐ Top 3 Resources

1. MATH Benchmark (Dan Hendrycks et al.)
2. GSM8K (OpenAI)
3. Let's Verify Step by Step (OpenAI PRM Paper)

