# Physics & Scientific Computing

> Physics-Informed Neural Networks (PINNs), neural operators, and differentiable scientific computing libraries that solve complex differential equations at incredible speeds.

## 🎯 What to Learn

- Physics-Informed Neural Networks (PINNs): Embedding PDE residuals directly into loss functions via automatic differentiation
- Fourier Neural Operators (FNO): Learning mappings between infinite-dimensional function spaces with mesh-independence
- DeepXDE: Versatile Python library for solving forward and inverse problems involving differential equations with PINNs
- NVIDIA Modulus: Industrial physics-ML platform combining PINNs and neural operators for fluid dynamics and heat transfer
- Differentiable physics simulation: JAX-MD and PhiFlow for fluid mechanics and molecular dynamics
- Solving the Navier-Stokes, wave, and heat equations 10,000x faster than traditional finite-element methods

## 📚 Best Learning Resources

### 🥇 Best Overall

- [DeepXDE](https://github.com/luluxing/deepxde)
  - Type: PINNs Framework
  - Language: English
  - Level: Intermediate
  - Why recommended: The premier open-source library for physics-informed deep learning, supporting ODEs, PDEs, integro-differential equations, and multiple backends (PyTorch, JAX, TensorFlow).

### 🎓 Courses

- [Brown University / CRUNCH Seminars: Physics-Informed Machine Learning](https://www.youtube.com/@crunchgroup4204) — George Karniadakis' world-renowned seminar series on PINNs and scientific machine learning.

### ▶️ YouTube — English

- [Steve Brunton: Video Guides & Tutorials](https://www.youtube.com/@SteveBrunton)
  - Channel: Steve Brunton
  - Language: English
  - Type: Lecture
  - Level: Intermediate
  - Why: Steve Brunton (University of Washington) provides an intuitive and mathematically sound overview of PINNs.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Data-Driven Science and Engineering by Steven L. Brunton and J. Nathan Kutz (Cambridge)](http://databookuw.com/) — The foundational textbook connecting machine learning, dynamical systems, and scientific computing.

### 💻 GitHub / Implementations

- [JAX-MD](https://github.com/jax-md/jax-md) — End-to-end differentiable molecular dynamics.
- [DeepXDE](https://github.com/lululxvi/deepxde) — Physics-informed neural networks.
- [NVIDIA Modulus](https://github.com/NVIDIA/modulus) — Physics ML framework.
- [Fourier Neural Operator](https://github.com/neuraloperator/neuraloperator) — Learning in function spaces.
- [PhiFlow](https://github.com/tum-pbs/PhiFlow) — Differentiable PDE solver.

## 📄 Foundational Papers

- [Physics-informed neural networks: A deep learning framework for solving forward and inverse problems](https://www.sciencedirect.com/science/article/pii/S0021999118307125) — Raissi, Perdikaris, and Karniadakis landmark paper establishing modern PINNs.
- [Fourier Neural Operator for Parametric Partial Differential Equations](https://arxiv.org/abs/2010.08895) — Li, Kovachki, Azizzadenesheli, Anandkumar et al. paper introducing mesh-independent FNOs.

### 🧪 Practice

- [DeepXDE 1D Wave Equation Tutorial](https://deepxde.readthedocs.io/en/latest/demos/pinn_forward/wave.1d.html) — Solve a 1D wave equation with PINNs in 30 lines of Python code.

### 🛠️ Projects

- [Fluid Flow Simulation Around an Airfoil with Fourier Neural Operator](https://github.com/neuraloperator/neuraloperator) — Train an FNO to predict 2D Navier-Stokes velocity and pressure fields around arbitrary geometry.

## 🧭 Recommended Learning Path

1. Review partial differential equations (PDEs): Boundary conditions and initial value problems.
2. Understand automatic differentiation and how $partial u / partial x$ is computed with autograd.
3. Build a simple PINN in PyTorch to solve the 1D harmonic oscillator.
4. Learn DeepXDE for complex geometries and Robin/Neumann boundary conditions.
5. Explore Fourier Neural Operators (FNO) to generalize across continuous function spaces.

## ⭐ Top 3 Resources

1. DeepXDE (George Karniadakis Lab)
2. Steve Brunton's Data-Driven Science Lectures & Book
3. Fourier Neural Operator (Caltech / Anima Anandkumar)

