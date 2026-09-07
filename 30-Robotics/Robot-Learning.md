# Robot Learning

> Robot Learning unites imitation learning, reinforcement learning, and Vision-Language-Action (VLA) foundation models to allow robots to acquire physical skills directly from demonstrations.

## 🎯 What to Learn

- Vision-Language-Action (VLA) foundation models: OpenVLA, Octo, RT-1, and RT-2 (Google DeepMind)
- Diffusion Policy: Modeling complex multimodal action distributions with denoising diffusion
- Action Chunking with Transformers (ACT): ALOHA bimanual teleoperation and imitation learning
- Hugging Face LeRobot: Open-source toolkit for real-world robot learning and dataset curation
- Teleoperation systems and hardware recipes (SO-100, Mobile ALOHA)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [LeRobot: State-of-the-art Robot Learning with PyTorch (Hugging Face)](https://github.com/huggingface/lerobot)
  - Type: Official Toolkit & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: LeRobot aims to democratize robotics as Hugging Face did for NLP, providing open-source implementations of ACT and Diffusion Policy, pre-trained models, and low-cost hardware assembly guides.

### 📖 Documentation & References

- [LeRobot Documentation](https://huggingface.co/docs/lerobot/index) — Guides on teleoperation recording, model training (ACT, Diffusion Policy), and robot evaluation.
- [OpenVLA Documentation](https://openvla.github.io/) — An open-source generalist vision-language-action model trained on 970k robot demonstrations.
- [Octo Model Documentation](https://octo-models.github.io/) — Open-source generalist robot policy model supporting diverse sensor inputs and actions.

### 🎓 Courses

- [Robot Learning (Stanford CS 224R / CS 337)](https://cs337.stanford.edu/) — Chelsea Finn's Stanford course covering imitation learning, offline RL, and robot foundation models.

### ▶️ YouTube — English

- [Hugging Face: Video Guides & Tutorials](https://www.youtube.com/@HuggingFace)
  - Channel: Hugging Face
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Hands-on walkthrough assembling low-cost 3D-printed arms, recording teleop data, and training an ACT policy.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Imitation Learning for Robotics](https://link.springer.com/) — Foundational theory on behavioral cloning, DAgger, and inverse reinforcement learning.

### 💻 GitHub / Implementations

- [huggingface/lerobot](https://github.com/huggingface/lerobot) — Making AI for robotics more accessible with PyTorch models and datasets.
- [openvla/openvla](https://github.com/openvla/openvla) — OpenVLA: An Open-Source Vision-Language-Action Model by Stanford, UC Berkeley, and CMU.
- [tonyzhaozh/act](https://github.com/tonyzhaozh/act) — Action Chunking with Transformers (ACT) implementation for bimanual manipulation.

## 📄 Foundational Papers

- [Diffusion Policy: Visuomotor Policy Learning via Action Diffusion](https://arxiv.org/abs/2303.04137) — Chi et al. (RSS 2023 Best Paper Finalist) establishing diffusion models as powerful visuomotor policies.
- [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware (ALOHA)](https://arxiv.org/abs/2304.13705) — Zhao et al. (RSS 2023) landmark paper introducing ALOHA and Action Chunking with Transformers (ACT).

### 🧪 Practice

- [LeRobot Dataset Hub](https://huggingface.co/lerobot) — Download and visualize real-world robot teleoperation datasets with cameras, joint states, and actions.

### 🛠️ Projects

- [Autonomous Coffee Pod Sorting with LeRobot & SO-100](https://github.com/huggingface/lerobot) — Assemble a $250 3D-printed SO-100 robot arm, record 50 teleoperation demonstrations of sorting objects, and train an ACT policy to perform the task autonomously.

## 🧭 Recommended Learning Path

1. Understand the behavioral cloning bottleneck: compounding errors over extended horizons.
2. Study Action Chunking: predicting a trajectory chunk of future joint positions rather than single-step actions.
3. Learn Diffusion Policy: denoising continuous action sequences conditioned on visual camera observations.
4. Train an ACT or Diffusion Policy model using Hugging Face LeRobot on a public demonstration dataset.
5. Evaluate real-world success rates on physical hardware or in MuJoCo simulation.

## ⭐ Top 3 Resources

1. LeRobot (huggingface/lerobot)
2. OpenVLA (openvla/openvla)
3. Diffusion Policy Paper (Chi et al.)

