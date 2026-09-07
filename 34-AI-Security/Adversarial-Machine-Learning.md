# Adversarial Machine Learning

> Theoretical foundations and defense mechanisms against adversarial perturbations, evasion attacks, data poisoning, and model stealing across vision and deep learning systems.

## 🎯 What to Learn

- Evasion attacks: Fast Gradient Sign Method (FGSM), Projected Gradient Descent (PGD), and Carlini-Wagner (C&W)
- Black-box vs White-box attacks and transferable adversarial perturbations
- Data poisoning and backdoor attacks (Trojaning neural networks)
- Adversarial training: Minimax robust optimization and certified defenses
- Adversarial Robustness Toolbox (ART) by IBM and CleverHans by Goodfellow/Papernot
- Physical world adversarial attacks: Adversarial patches and 3D printed objects

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Adversarial Robustness Toolbox (ART - Linux Foundation)](https://github.com/Trusted-AI/adversarial-robustness-toolbox)
  - Type: Security Library
  - Language: English
  - Level: Advanced
  - Why recommended: The premier open-source Python library for machine learning security, providing 30+ attacks and defenses across vision, audio, tabular, and text models.

### 🎓 Courses

- [MIT 6.S978: Adversarial Machine Learning](https://madry-lab.github.io/robustness-course/) — Aleksander Madry's seminal MIT course on robust optimization and adversarial examples.

### ▶️ YouTube — English

- [Stanford Online / CVPR: Video Guides & Tutorials](https://www.youtube.com/@StanfordOnline)
  - Channel: Stanford Online / CVPR
  - Language: English
  - Type: Lecture
  - Level: Advanced
  - Why: Mathematical breakdown of PGD, gradient obfuscation pitfalls, and robust optimization.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Adversarial Robustness by Aleksander Madry (MIT Course Notes)](https://madry-lab.github.io/robustness-course/) — The definitive mathematical treatment of minimax formulation for adversarial robustness.

### 💻 GitHub / Implementations

- [Adversarial Robustness Toolbox](https://github.com/Trusted-AI/adversarial-robustness-toolbox) — Comprehensive adversarial ML library.
- [CleverHans](https://github.com/cleverhans-lab/cleverhans) — Adversarial examples research library.
- [FoolBox](https://github.com/bethgelab/foolbox) — Fast adversarial attacks for neural networks.
- [TextAttack](https://github.com/QData/TextAttack) — NLP adversarial attacks and augmentation.
- [Advertorch](https://github.com/BorealisAI/advertorch) — PyTorch adversarial attacks and defenses.

## 📄 Foundational Papers

- [Explaining and Harnessing Adversarial Examples](https://arxiv.org/abs/1412.6572) — Seminal paper by Goodfellow et al. introducing FGSM and explaining adversarial examples via linearity.
- [Towards Deep Learning Models Resistant to Adversarial Attacks](https://arxiv.org/abs/1706.06083) — Madry et al. paper establishing PGD as the universal first-order adversary and robust optimization.

### 🧪 Practice

- [IBM ART Notebooks](https://github.com/Trusted-AI/adversarial-robustness-toolbox/tree/main/notebooks) — Step-by-step Jupyter notebooks attacking ResNets and defenses using ART.

### 🛠️ Projects

- [Adversarial Defense Benchmark](https://github.com/Trusted-AI/adversarial-robustness-toolbox) — Train a ResNet-50 on CIFAR-10 with PGD adversarial training and measure clean vs robust accuracy.

## 🧭 Recommended Learning Path

1. Understand the geometry of high-dimensional space and linear explanations of adversarial vulnerability.
2. Implement FGSM and PGD from scratch in PyTorch.
3. Explore IBM ART and Foolbox for black-box and boundary attacks.
4. Implement robust training via minimax optimization.
5. Study backdoor attacks and watermarking techniques.

## ⭐ Top 3 Resources

1. Adversarial Robustness Toolbox (ART - IBM / Linux Foundation)
2. MIT 6.S978 Course on Adversarial Robustness (Aleksander Madry)
3. CleverHans (Original benchmarking library)

