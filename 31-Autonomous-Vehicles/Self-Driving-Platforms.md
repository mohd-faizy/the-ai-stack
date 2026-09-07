# Self-Driving Platforms

> Self-driving platforms provide open software stacks, sensor interfaces, and vehicle actuation bridges that control steering, throttle, and braking on production vehicles.

## 🎯 What to Learn

- comma.ai openpilot: Open-source driver assistance system running on consumer cars
- Baidu Apollo: Enterprise-grade autonomous driving software stack and HD map integration
- Autoware: Open-source autonomous driving software built on ROS 2
- CAN bus reverse engineering, DBC files, and OBD-II vehicle interfacing
- Functional safety standards (ISO 26262) and watchdog fail-safe architectures

## 📚 Best Learning Resources

### 🥇 Best Overall

- [openpilot: Open Source Driver Assistance System (comma.ai)](https://github.com/commaai/openpilot)
  - Type: Production Open-Source System
  - Language: English
  - Level: Intermediate
  - Why recommended: comma.ai's openpilot is the most battle-tested open-source self-driving system in the world, with over 100 million real-world customer miles logged across 250+ car models.

### 📖 Documentation & References

- [openpilot Documentation](https://docs.comma.ai/) — Installation, supported vehicles, CAN bus communication, and software architecture.
- [Autoware Documentation](https://autowarefoundation.github.io/autoware-documentation/main/) — ROS 2-based autonomous driving platform covering localization, planning, and control.
- [Baidu Apollo Documentation](https://apollo.baidu.com/) — Enterprise autonomous driving platform with HD mapping, perception, and cyber RT.

### 🎓 Courses

- [Self-Driving Cars Specialization (University of Toronto / Coursera)](https://www.coursera.org/specializations/self-driving-cars) — Comprehensive 4-course curriculum covering state estimation, visual perception, and motion planning.

### ▶️ YouTube — English

- [comma.ai: Video Guides & Tutorials](https://www.youtube.com/@commaai)
  - Channel: comma.ai
  - Language: English
  - Type: Technical Talk
  - Level: Intermediate
  - Why: George Hotz and comma.ai engineers explain the vision-based end-to-end driving models and CAN actuation loops.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Creating Autonomous Vehicle Systems](https://www.morganclaypool.com/) — Liu, Tang, Zhang, and Gaudiot comprehensive technical overview of autonomous driving systems.

### 💻 GitHub / Implementations

- [commaai/openpilot](https://github.com/commaai/openpilot) — openpilot is an open source driver assistance system. Currently, openpilot performs the functions of Adaptive Cruise Control (ACC) and Automated Lane Centering (ALC).
- [autowarefoundation/autoware](https://github.com/autowarefoundation/autoware) — Autoware: An open-source software stack for self-driving vehicles built on ROS 2.
- [ApolloAuto/apollo](https://github.com/ApolloAuto/apollo) — An open autonomous driving platform by Baidu.

## 📄 Foundational Papers

- [Autoware on Board: Enabling Autonomous Vehicles with Open-Source Software](https://ieeexplore.ieee.org/document/8569947) — Kato et al. (IEEE 2018) seminal paper detailing the architecture of open-source autonomous driving.

### 🧪 Practice

- [openpilot Driving Simulator](https://github.com/commaai/openpilot/tree/master/tools/sim) — Test openpilot steering and speed control inside CARLA or desktop simulation.

### 🛠️ Projects

- [Autonomous Vehicle Driving Stack in CARLA](https://autowarefoundation.github.io/autoware-documentation/) — Deploy Autoware connected to the CARLA simulator to execute full-route autonomous navigation with traffic lights and pedestrian avoidance.

## 🧭 Recommended Learning Path

1. Learn the basics of vehicle dynamics (bicycle model, Ackermann steering).
2. Study the CAN (Controller Area Network) protocol and how steering/gas signals are decoded using DBC files.
3. Explore openpilot's vision model pipeline and longitudinal/lateral planners.
4. Run openpilot in desktop simulation connected to CARLA.
5. Understand ISO 26262 ASIL safety integrity levels and watchdog monitoring.

## ⭐ Top 3 Resources

1. openpilot (comma.ai)
2. Autoware (autowarefoundation/autoware)
3. University of Toronto Self-Driving Cars Specialization

