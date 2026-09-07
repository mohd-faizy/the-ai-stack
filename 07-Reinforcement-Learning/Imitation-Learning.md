# Imitation Learning

> Imitation learning trains autonomous agents to mimic expert demonstrations directly, bypassing the need for manually designed reward functions.

## 🎯 What to Learn

- Behavioral Cloning (BC) as supervised learning on state-action demonstration pairs
- Compounding errors and covariate shift in Behavioral Cloning (DAGGER algorithm)
- Inverse Reinforcement Learning (IRL): inferring the hidden reward function underlying expert actions
- Generative Adversarial Imitation Learning (GAIL) and adversarial matching of occupancy measures
- Learning from demonstrations in robotics: Diffusion Policy and Action Chunking with Transformers (ACT)
- Open-source physical AI frameworks: Hugging Face LeRobot

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Hugging Face LeRobot: State-of-the-art Robotics and Imitation Learning](https://github.com/huggingface/lerobot)
  - Type: Framework & Hardware Ecosystem
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: LeRobot democratizes physical robotics and imitation learning, providing battle-tested implementations of ACT, Diffusion Policy, and teleoperation datasets.

### 📖 Documentation & References

- [Hugging Face LeRobot Documentation](https://github.com/huggingface/lerobot) — Comprehensive guides for recording robot demonstrations and training imitation policies.
- [Imitation Library Documentation](https://imitation.readthedocs.io/en/latest/) — Clean PyTorch implementations of BC, DAgger, GAIL, and AIRL.

### 🎓 Courses

- [Berkeley CS285 - Lecture on Imitation Learning & DAgger](http://rail.eecs.berkeley.edu/deeprlcourse/) — Sergey Levine's graduate lecture on distribution shift and inverse RL.

### ▶️ YouTube — English

- [Sergey Levine (Berkeley): Video Guides & Tutorials (Sergey Levine (Berkeley))](https://www.youtube.com/results?search_query=Sergey%20Levine%20(Berkeley)%20Sergey%20Levine%20(Berkeley)%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Sergey Levine (Berkeley)
  - Language: English
  - Type: University Lecture
  - Level: Intermediate
  - Why: Rigorous explanation of why behavioral cloning drifts off distribution and how DAgger queries the expert.

### ▶️ YouTube — Hindi / Hinglish

- [Reinforcement Learning Crash Course in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvbMK0_fdp0DZHZKm4Q1slAB)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Nitish Singh explains MDP, Bellman equations, Q-learning, and policy gradients in Hinglish.


### 📚 Books

- [Algorithms for Decision Making (Kochenderfer, Wheeler, Wray) — Chapter 21: Imitation Learning](https://algorithmsbook.com/) — Free comprehensive textbook covering behavioral cloning and inverse reinforcement learning.

### 💻 GitHub / Implementations

- [imitation](https://github.com/HumanCompatibleAI/imitation) — Clean implementations of imitation learning algorithms.
- [robomimic](https://github.com/ARISE-Initiative/robomimic) — Robot learning from demonstration.
- [DAgger](https://github.com/HumanCompatibleAI/imitation) — Dataset aggregation for imitation learning.

### 🧪 Practice

- [Gymnasium Mujoco Humanoid Demonstrations](https://imitation.readthedocs.io/) — Train imitation learning agents to mimic expert human walking trajectories.

### 🛠️ Projects

- [Train a Robotic Arm with Diffusion Policy](https://github.com/huggingface/lerobot) — Collect 50 teleoperated demonstrations and train a diffusion policy to pick and place objects.

## 🧭 Recommended Learning Path

1. Understand Behavioral Cloning (BC) and why small errors accumulate exponentially over time.
2. Study DAgger (Dataset Aggregation) to collect expert actions on student-visited states.
3. Explore Inverse Reinforcement Learning (IRL) and Maximum Entropy IRL.
4. Understand GAIL: using GAN discriminators to distinguish agent trajectories from expert demonstrations.
5. Deploy modern Diffusion Policy with Hugging Face LeRobot for multi-modal robotic manipulation.

## ⭐ Top 3 Resources

1. [Hugging Face LeRobot](https://github.com/huggingface/lerobot) — The premier modern open-source library for robotics and imitation learning.
2. [imitation library](https://github.com/HumanCompatibleAI/imitation) — High-quality modular PyTorch implementations of classical imitation algorithms.
3. [Diffusion Policy (Chi et al.)](https://diffusion-policy.cs.columbia.edu/) — Breakthrough approach representing robot action distributions via diffusion models.

