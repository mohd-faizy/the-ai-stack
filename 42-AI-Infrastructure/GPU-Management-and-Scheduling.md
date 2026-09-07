# GPU Management & Scheduling

> Hardware scheduling policies, GPU virtualization technologies, and telemetry tools to optimize GPU cluster utilization and lower compute costs.

## 🎯 What to Learn

- NVIDIA GPU Operator: Automating the management of CUDA drivers, Container Toolkit, and NVIDIA system management interface on Kubernetes
- GPU virtualization: Multi-Instance GPU (MIG), NVIDIA vGPU, and time-slicing for sharing GPUs across lightweight workloads
- Run:ai: GPU orchestration platform providing dynamic fractional GPU pooling and workload prioritization
- Monitoring and telemetry: DCGM (Data Center GPU Manager), Prometheus GPU exporter, and `gpustat`
- Hardware interconnect topologies: PCIe Gen 4/5 vs NVLink (up to 900 GB/s bidirectional bandwidth) vs NVSwitch
- Diagnosing CUDA Out of Memory (OOM) errors, GPU throttling, and thermal issues

## 📚 Best Learning Resources

### 🥇 Best Overall

- [NVIDIA GPU Operator](https://github.com/NVIDIA/gpu-operator)
  - Type: Infrastructure Operator
  - Language: English
  - Level: Intermediate
  - Why recommended: The official NVIDIA Kubernetes operator that automates the provisioning and lifecycle of NVIDIA software components required to run GPU-accelerated workloads on Kubernetes.

### 🎓 Courses

- [NVIDIA Deep Learning Institute (DLI): Fundamentals of Accelerated Computing](https://www.nvidia.com/en-us/training/) — Hands-on training on CUDA architecture, GPU scheduling, and performance profiling.

### ▶️ YouTube — English

- [How Are Microchips Made?](https://www.youtube.com/playlist?list=PL6rx9p3tbsMuzMea5pSGb2JvQfe42eYYS)
  - Channel: Branch Education
  - Language: English
  - Type: 3D Animated Series
  - Level: Beginner to Advanced
  - Why: Visual 3D animations explaining silicon wafer fabrication, semiconductor packaging, GPU transistors, and memory bandwidth.
- [System Design Fundamentals](https://www.youtube.com/playlist?list=PLCRMIe5FDPsd0gVs500xeOewfySTsmEjf)
  - Channel: ByteByteGo
  - Language: English
  - Type: Course Series
  - Level: Intermediate
  - Why: Alex Xu breaks down distributed systems, cluster scheduling, load balancing, and high-throughput data processing.
- [NVIDIA Developer: Video Guides & Tutorials](https://www.youtube.com/@NVIDIADeveloper)
  - Channel: NVIDIA Developer
  - Language: English
  - Type: Tutorial
  - Level: Advanced
  - Why: NVIDIA engineers explain how to partition an A100/H100 into isolated hardware instances with MIG.

### ▶️ YouTube — Hindi / Hinglish

- [Generative AI On AWS Cloud](https://www.youtube.com/playlist?list=PLTDARY42LDV6T6qaFV7NfIS2xX18QWhHU)
  - Channel: Krish Naik Hindi
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Intermediate
  - Why: Provisioning GPU clusters, EC2 accelerator instances, and cloud AI infrastructure in Hindi.
- [AWS Foundations](https://www.youtube.com/playlist?list=PLseXYkzLxM8H-PA0ujhUawzt8S2a-h7Fc)
  - Channel: iNeuron Tech Hindi
  - Language: Hindi
  - Type: Course Playlist
  - Level: Beginner to Intermediate
  - Why: Cloud computing essentials, VM instances, storage, and distributed infrastructure in Hindi.


### 📚 Books

- [CUDA by Example by Jason Sanders and Edward Kandrot](https://developer.nvidia.com/cuda-example) — Foundations of GPU programming, thread blocks, and memory structures.

### 💻 GitHub / Implementations

- [Run:ai](https://github.com/run-ai) — GPU orchestration platform.
- [nvidia-docker](https://github.com/NVIDIA/nvidia-docker) — NVIDIA container runtime.
- [NVIDIA GPU Operator](https://github.com/NVIDIA/gpu-operator) — GPU management for Kubernetes.
- [gpustat](https://github.com/wookayin/gpustat) — Simple GPU status monitoring.

### 🧪 Practice

- [gpustat CLI Tool](https://github.com/wookayin/gpustat) — Install `pip install gpustat` and monitor real-time GPU utilization, memory usage, and user processes.

### 🛠️ Projects

- [Prometheus & Grafana GPU Telemetry Stack](https://github.com/NVIDIA/gpu-operator) — Deploy DCGM exporter on a Kubernetes cluster and build a Grafana dashboard tracking GPU utilization, power draw, and VRAM leaks.

## 🧭 Recommended Learning Path

1. Understand GPU physical hardware: SMs (Streaming Multiprocessors), HBM memory, and PCIe lanes.
2. Use `nvidia-smi` and `gpustat` for real-time process monitoring.
3. Understand Multi-Instance GPU (MIG) to slice physical GPUs into isolated hardware instances with dedicated memory.
4. Deploy the NVIDIA GPU Operator on a Kubernetes cluster with Helm.
5. Set up Grafana dashboards using DCGM metrics to track cluster utilization.

## ⭐ Top 3 Resources

1. NVIDIA GPU Operator
2. NVIDIA DCGM & Exporter
3. gpustat (Simple terminal GPU monitoring)

