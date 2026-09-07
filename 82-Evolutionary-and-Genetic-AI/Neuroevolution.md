# Neuroevolution

> Neuroevolution applies evolutionary algorithms to optimize neural network weights, topologies, and hyperparameters, enabling reinforcement learning and policy search without gradient computation.

## 🎯 What to Learn

- Fixed-topology weight evolution vs. topology and weight evolving algorithms (TWEANNs)
- NEAT (NeuroEvolution of Augmenting Topologies): Historical markings, speciation, and complexification
- HyperNEAT and Compositional Pattern Producing Networks (CPPNs) for geometric representations
- Evolution Strategies at scale: OpenAI ES (Salimans et al.) as an alternative to deep RL
- Hardware-accelerated neuroevolution: EvoJAX and EvoTorch

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Evolving Neural Networks through Augmenting Topologies (Kenneth Stanley)](http://eplex.cs.ucf.edu/neat_page/)
  - Type: Landmark Research & Resource Hub
  - Language: English
  - Level: Intermediate
  - Why recommended: Kenneth Stanley's official NEAT portal contains original software implementations, papers, and tutorials that founded the modern field of topology-evolving neural networks.

### 📖 Documentation & References

- [NEAT-Python Documentation](https://neat-python.readthedocs.io/) — Popular and well-documented Python implementation of the NEAT algorithm.
- [EvoJAX Documentation](https://evojax.readthedocs.io/) — Hardware-accelerated neuroevolution toolkit running neural evolution entirely on GPU/TPU in JAX.
- [EvoTorch Documentation](https://evotorch.ai/) — PyTorch-based evolutionary computation library developed by IDSIA.

### 🎓 Courses

- [Evolutionary Deep Learning & Neuroevolution (Lecture Series)](https://www.youtube.com/watch?v=0ZGbIKd0XrM) — Academic lectures on evolving neural topologies and genetic representations in AI.

### ▶️ YouTube — English

- [The AI Hacker / Tech Explained: Video Guides & Tutorials (The AI Hacker / Tech Explained)](https://www.youtube.com/results?search_query=The%20AI%20Hacker%20%2F%20Tech%20Explained%20The%20AI%20Hacker%20%2F%20Tech%20Explained%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: The AI Hacker / Tech Explained
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Clear animation and explanation of historical markings, speciation, and structural mutations in NEAT.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Neuroevolution: A Survey](https://link.springer.com/) — Comprehensive academic survey detailing 30 years of evolving artificial neural networks.

### 💻 GitHub / Implementations

- [CodeReclaimers/neat-python](https://github.com/CodeReclaimers/neat-python) — A pure Python implementation of NEAT (NeuroEvolution of Augmenting Topologies).
- [google/evojax](https://github.com/google/evojax) — Hardware-accelerated neuroevolution toolkit in JAX by Google Brain.

## 📄 Foundational Papers

- [Evolving Neural Networks through Augmenting Topologies](https://direct.mit.edu/evco/article/10/2/99/1123/Evolving-Neural-Networks-through-Augmenting) — Stanley and Miikkulainen (Evolutionary Computation 2002) seminal paper introducing NEAT.
- [Evolution Strategies as a Scalable Alternative to Reinforcement Learning](https://arxiv.org/abs/1703.03864) — Salimans, Ho, Chen, Sidor, and Sutskever (OpenAI 2017) showing ES scales across hundreds of CPU/GPU cores on Atari and MuJoCo tasks.

### 🧪 Practice

- [NEAT-Python Flappy Bird & CartPole Examples](https://github.com/CodeReclaimers/neat-python/tree/master/examples) — Hands-on projects evolving neural networks to master classic control environments.

### 🛠️ Projects

- [Autonomous Vehicle Driving Agent via NEAT](https://github.com/CodeReclaimers/neat-python) — Evolve a neural network from scratch without backpropagation to steer a simulated race car around dynamic tracks.

## 🧭 Recommended Learning Path

1. Understand the limitations of gradient descent in sparse, deceptive reward environments.
2. Learn the 3 core innovations of NEAT: innovation numbers, speciation via fitness sharing, and starting minimal.
3. Train an agent to solve CartPole using NEAT-Python without backpropagation.
4. Study OpenAI's Evolution Strategies and how parallel workers estimate natural gradients.
5. Use EvoJAX to scale neuroevolution to millions of parameter evaluations on GPUs.

## ⭐ Top 3 Resources

1. Evolving Neural Networks through Augmenting Topologies (Kenneth Stanley)
2. NEAT-Python (neat-python.readthedocs.io)
3. Evolution Strategies as a Scalable Alternative to RL (OpenAI)

