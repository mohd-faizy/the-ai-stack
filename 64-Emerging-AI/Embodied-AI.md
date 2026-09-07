# Embodied AI

> Physical intelligence, robotic learning foundations, Vision-Language-Action (VLA) models, and open-source teleoperation hardware.

## 🎯 What to Learn

- Vision-Language-Action (VLA) models: Processing visual camera observations and natural language instructions to output continuous robotic motor actions
- Hugging Face LeRobot: Open-source robotics ecosystem providing state-of-the-art imitation learning (ACT, Diffusion Policy) and affordable hardware (SO-100 arm)
- OpenVLA (Stanford): 7B open-source vision-language-action model pre-trained on the Open X-Embodiment dataset controlling diverse robot embodiments
- Google DeepMind RT-2 (Robotics Transformer 2): Vision-language-action model showing web-scale pretraining transfers to physical robotic manipulation
- Imitation learning algorithms: Action Chunking with Transformers (ACT) and Diffusion Policy
- Teleoperation and affordable hardware: Bimanual ALOHA, SO-100 3D-printed robotic arm, and real-time servo control

## 📚 Best Learning Resources

### 🥇 Best Overall

- [LeRobot (Hugging Face)](https://github.com/huggingface/lerobot)
  - Type: Robotics & Embodied AI Ecosystem
  - Language: English
  - Level: Intermediate
  - Why recommended: Hugging Face's groundbreaking open-source robotics platform, providing state-of-the-art imitation learning algorithms (ACT, Diffusion Policy), low-cost hardware designs ($100 3D-printed arms), and shared dataset hubs.

### 🎓 Courses

- [Stanford CS223A: Introduction to Robotics](https://cs223a.stanford.edu/) — Foundations of spatial kinematics, dynamics, forward/inverse kinematics, and motor control.

### ▶️ YouTube — English

- [Hugging Face / Remi Cadene: Video Guides & Tutorials](https://www.youtube.com/@HuggingFace)
  - Channel: Hugging Face / Remi Cadene
  - Language: English
  - Type: Walkthrough
  - Level: Beginner
  - Why: Remi Cadene (creator of LeRobot) demonstrates building an affordable 3D-printed robot arm and training it to pick and place objects.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Probabilistic Robotics by Sebastian Thrun, Wolfram Burgard, and Dieter Fox (MIT Press)](https://mitpress.mit.edu/9780262201629/probabilistic-robotics/) — The definitive bible on state estimation, particle filters, SLAM, and robot uncertainty.

### 💻 GitHub / Implementations

- [LeRobot](https://github.com/huggingface/lerobot) — ML for real-world robotics.
- [OpenVLA](https://github.com/openvla/openvla) — Vision-language-action model.
- [RT-2](https://github.com/google-deepmind) — Robotic transformers.
- [Habitat](https://github.com/facebookresearch/habitat-sim) — Embodied AI simulation.
- [ALOHA](https://github.com/tonyzhaozh/aloha) — Low-cost bimanual teleoperation.

## 📄 Foundational Papers

- [RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control](https://arxiv.org/abs/2307.15818) — Google DeepMind paper demonstrating that co-training on web-scale VQA and robotics data enables generalized physical manipulation.
- [OpenVLA: An Open-Source Vision-Language-Action Model](https://arxiv.org/abs/2406.09246) — Kim et al. paper introducing the leading open 7B VLA foundation model.

### 🧪 Practice

- [LeRobot Simulation Tutorial](https://github.com/huggingface/lerobot#getting-started) — Train an Action Chunking with Transformers (ACT) policy in an interactive MuJoCo physics simulation in Python.

### 🛠️ Projects

- [Train a Real-World Robot Arm with LeRobot](https://github.com/huggingface/lerobot) — Record 50 teleoperated demonstrations with an inexpensive SO-100 robot arm and train a Diffusion Policy to sort colored blocks autonomously.

## 🧭 Recommended Learning Path

1. Understand the difference between software agents and embodied agents (physics, friction, latency, safety).
2. Learn the Vision-Language-Action (VLA) architecture: Vision backbone + LLM + Action head.
3. Explore Action Chunking with Transformers (ACT) and Diffusion Policy for imitation learning.
4. Install LeRobot and train an imitation policy in the Aloha Gym simulated environment.
5. Build or assemble an affordable physical robot arm (SO-100) and collect teleoperated training data.

## ⭐ Top 3 Resources

1. LeRobot (Hugging Face Open Robotics Ecosystem)
2. OpenVLA (Stanford 7B VLA Model)
3. DeepMind RT-2 Landmark Research Paper

