# Carbon & Energy Tracking

> Software libraries and real-time power telemetry profilers that quantify kilowatt-hours, electricity grid emissions, and carbon footprints of AI training and inference.

## 🎯 What to Learn

- The energy math of deep learning: Power (Watts) $	imes$ Time (Hours) = Energy (kWh); Energy $	imes$ Carbon Intensity ($gCO_2e/kWh$) = Total Emissions
- CodeCarbon: Open-source package estimating hardware power consumption (CPU, GPU, RAM) and mapping to regional grid emissions factors
- Zeus (University of Michigan & Symbiotic Lab): Deep learning energy measurement and automated optimization framework for GPU clusters
- Eco2AI & CarbonTracker: Lightweight Python profilers providing carbon footprint tracking for scientific reproducibility
- Marginal vs average carbon intensity: Real-time electricity grid APIs (Electricity Maps, WattTime)
- Generating verified emission badges and carbon declarations for academic publications

## 📚 Best Learning Resources

### 🥇 Best Overall

- [CodeCarbon](https://github.com/mlco2/codecarbon)
  - Type: Carbon Tracking Standard
  - Language: English
  - Level: Beginner
  - Why recommended: The leading open-source tool created by Climate Change AI, Mila, and BCG Gamma, allowing developers to track emissions from Python scripts with a simple decorator and automatic geographic grid lookup.

### 🎓 Courses

- [Climate Change AI: Machine Learning for Energy Systems](https://www.climatechange.ai/) — Lectures on electricity grid decarbonization and sustainable computing.

### ▶️ YouTube — English

- [Sasha Luccioni / Hugging Face: Video Guides & Tutorials](https://www.youtube.com/@HuggingFace)
  - Channel: Sasha Luccioni / Hugging Face
  - Language: English
  - Type: Talk
  - Level: Beginner
  - Why: Dr. Sasha Luccioni explains how to instrument training loops to measure energy consumption and select low-carbon cloud regions.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Building Green Software by Anne Currie et al. (O'Reilly)](https://www.oreilly.com/library/view/building-green-software/9781098150617/) — A practical guide to carbon-efficient programming, cloud architecture, and measurement.

### 💻 GitHub / Implementations

- [CodeCarbon](https://github.com/mlco2/codecarbon) — Track carbon emissions from ML.
- [CarbonTracker](https://github.com/lfwa/carbontracker) — Track energy and carbon footprint.
- [Zeus](https://github.com/ml-energy/zeus) — Energy optimization for deep learning.
- [Eco2AI](https://github.com/sb-ai-lab/Eco2AI) — Carbon emission tracking for ML.
- [experiment-impact-tracker](https://github.com/Breakend/experiment-impact-tracker) — Track compute impact of experiments.

## 📄 Foundational Papers

- [Energy and Policy Considerations for Deep Learning in NLP](https://arxiv.org/abs/1906.02243) — Strubell, Ganesh, and McCallum landmark paper that first brought AI energy footprints into public awareness.
- [Zeus: Understanding and Optimizing GPU Energy Consumption for Deep Learning](https://arxiv.org/abs/2208.06102) — You et al. paper introducing automated GPU power capping for deep learning.

### 🧪 Practice

- [CodeCarbon 2-Line Integration](https://codecarbon.io/) — Add `@track_emissions` decorator to any Python training function and print calculated $kg CO_2$.

### 🛠️ Projects

- [Grid-Aware Low-Carbon Training Scheduler](https://github.com/mlco2/codecarbon) — Build a Python script that polls the Electricity Maps API and launches multi-GPU training jobs only when regional renewable grid mix exceeds 70%.

## 🧭 Recommended Learning Path

1. Understand how GPUs report power draw via NVIDIA Management Library (NVML).
2. Instrument an existing PyTorch script using CodeCarbon's `EmissionsTracker`.
3. Learn the difference between energy consumption (Joules/kWh) and emissions ($gCO_2e$).
4. Apply GPU power capping with Zeus or `nvidia-smi -pl` to operate on the efficient frontier.
5. Publish carbon accounting declarations in research papers and model cards.

## ⭐ Top 3 Resources

1. CodeCarbon (Mila & Climate Change AI)
2. Zeus (Symbiotic Lab / University of Michigan)
3. Electricity Maps

