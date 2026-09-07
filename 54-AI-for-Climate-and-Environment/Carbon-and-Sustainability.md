# Carbon & Sustainability

> Software packages, power telemetry profilers, and green AI engineering practices to measure and reduce the carbon footprint of AI model training.

## 🎯 What to Learn

- The energy footprint of AI: Compute-intensive LLM pre-training vs inference emissions
- CodeCarbon: Python package that estimates hardware power consumption (CPU, GPU, RAM) and translates it to CO2 equivalents based on local grid carbon intensity
- CarbonTracker: Tool for tracking and predicting the energy consumption and carbon footprint of training deep learning models
- Zeus (University of Michigan & Symbiotic Lab): Deep learning energy measurement and optimization framework for GPU clusters
- Grid carbon intensity APIs: Regional variations in renewable vs coal/gas energy mixes
- Green AI best practices: Training in low-carbon cloud regions (hydro/nuclear) and scheduling batch jobs during peak solar/wind hours

## 📚 Best Learning Resources

### 🥇 Best Overall

- [CodeCarbon](https://github.com/mlco2/codecarbon)
  - Type: Carbon Tracking Tool
  - Language: English
  - Level: Beginner
  - Why recommended: The leading open-source tool developed by Climate Change AI and Mila, allowing developers to track emissions from Python code with a simple decorator and automatic grid carbon intensity lookup.

### 🎓 Courses

- [Climate Change AI: Machine Learning for Energy Systems](https://www.climatechange.ai/) — Covers electricity grid modeling, renewable integration, and sustainable computing.

### ▶️ YouTube — English

- [Hugging Face / Sasha Luccioni: Video Guides & Tutorials](https://www.youtube.com/@HuggingFace)
  - Channel: Hugging Face / Sasha Luccioni
  - Language: English
  - Type: Talk
  - Level: Beginner
  - Why: Sasha Luccioni (Climate Lead at Hugging Face) explains how to measure model training emissions and choose cleaner compute regions.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Building Green Software by Anne Currie et al. (O'Reilly)](https://www.oreilly.com/library/view/building-green-software/9781098150617/) — A practical guide to carbon-efficient programming, cloud architecture, and measurement.

### 💻 GitHub / Implementations

- [CodeCarbon](https://github.com/mlco2/codecarbon) — Track CO2 emissions from computing.
- [CarbonTracker](https://github.com/lfwa/carbontracker) — Energy and carbon tracking.
- [Zeus](https://github.com/ml-energy/zeus) — Energy optimization for DNN training.

## 📄 Foundational Papers

- [Energy and Policy Considerations for Deep Learning in NLP](https://arxiv.org/abs/1906.02243) — Strubell et al. landmark paper that first brought the massive carbon and energy footprint of training AI to public attention.
- [Estimating the Carbon Footprint of BLOOM, a 176B Parameter Language Model](https://arxiv.org/abs/2211.02001) — Luccioni et al. paper conducting the most comprehensive empirical audit of foundation model lifecycle emissions.

### 🧪 Practice

- [CodeCarbon 2-Line Integration](https://codecarbon.io/) — Add `@track_emissions` decorator to any Python function and view estimated kg CO2 emitted.

### 🛠️ Projects

- [Automated Low-Carbon Training Scheduler](https://github.com/mlco2/codecarbon) — Build a script that checks regional electricity grid APIs and launches GPU training jobs when local renewable energy generation is highest.

## 🧭 Recommended Learning Path

1. Understand the sources of AI energy consumption: GPU compute, memory transfer, and data center cooling.
2. Install CodeCarbon and track emissions of a PyTorch training run.
3. Learn how regional grid carbon intensity varies by geography and time of day.
4. Explore cloud region selection: Choosing hydro-powered regions over coal-dominated regions.
5. Use GPU power capping (e.g. `nvidia-smi -pl`) to reduce energy by 20% with minimal throughput loss.

## ⭐ Top 3 Resources

1. CodeCarbon (Mila & Climate Change AI)
2. Zeus (Deep Learning Energy Optimization)
3. Sasha Luccioni's Research on Model Emissions

