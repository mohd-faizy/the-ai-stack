# Automatic Differentiation

> Automatic differentiation (autodiff) evaluates exact analytical derivatives of arbitrary computer programs, forming the foundational computational substrate of backpropagation and deep learning.

## 🎯 What to Learn

- Distinction between symbolic differentiation, numerical differentiation, and algorithmic autodiff
- Forward-mode automatic differentiation and dual numbers
- Reverse-mode automatic differentiation and computational directed acyclic graphs (DAGs)
- Vector-Jacobian Products (VJPs) vs Jacobian-Vector Products (JVPs)
- Dynamic computational graphs (PyTorch) vs static graph compilation (XLA, JAX, TensorFlow)
- Memory management during backward passes (checkpointing, gradient accumulation)
- Custom autograd functions and backward rule implementations

## 📚 Best Learning Resources

### 🥇 Best Overall

- [The Spelled-out Intro to Neural Networks and Backpropagation: Building micrograd by Andrej Karpathy](https://www.youtube.com/watch?v=VMj-3S1tku0)
  - Type: Code-First Deep Dive
  - Language: English
  - Level: Beginner to Intermediate
  - Why recommended: Karpathy builds an autograd scalar engine (micrograd) from scratch in pure Python, walking through every line of forward and backward passes.

### 📖 Documentation & References

- [PyTorch Autograd Mechanics](https://pytorch.org/docs/stable/notes/autograd.html) — Official deep dive into how PyTorch builds execution graphs and calculates gradients.
- [JAX Autodiff Cookbook](https://jax.readthedocs.io/en/latest/notebooks/autodiff_cookbook.html) — Exhaustive practical guide on grad, vjp, jvp, and linear transformations in JAX.
- [Autograd GitHub Repo](https://github.com/HIPS/autograd) — The original seminal Python library for automatic differentiation of native NumPy code.

### 🎓 Courses

- [Neural Networks: Zero to Hero by Andrej Karpathy](https://karpathy.ai/zero-to-hero.html) — Master deep learning starting with micrograd and scaling up to a complete GPT implementation.

### ▶️ YouTube — English

- [Building micrograd: The Spelled-Out Intro to Neural Networks](https://www.youtube.com/watch?v=VMj-3S1tku0)
  - Channel: Andrej Karpathy
  - Language: English
  - Type: Tutorial
  - Level: Beginner to Intermediate
  - Why: 2.5-hour masterclass demonstrating how scalar autograd engines construct DAGs and apply the chain rule.
- [Automatic Differentiation Explained](https://www.youtube.com/watch?v=wG_nF1awSSY)
  - Channel: Computerphile
  - Language: English
  - Type: Explainer
  - Level: Beginner
  - Why: Clear conceptual explanation of why autodiff is neither numerical approximation nor symbolic expansion.

### ▶️ YouTube — Hindi / Hinglish

- [Maths & Statistics for Machine Learning in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvbYFaaeLY28cWeqV-3vADST)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Nitish Singh covers linear algebra, calculus, probability, and optimization in Hindi.


### 📚 Books

- [Evaluating Derivatives: Principles and Techniques of Algorithmic Differentiation (Griewank & Walther)](https://epubs.siam.org/doi/book/10.1137/1.9780898717761) — The foundational mathematical monograph on algorithmic differentiation.

### 💻 GitHub / Implementations

- [JAX](https://github.com/jax-ml/jax) — Composable transformations of numerical programs.
- [Autograd](https://github.com/HIPS/autograd) — Automatic differentiation for Python and NumPy.
- [torch.autograd](https://github.com/pytorch/pytorch) — PyTorch's automatic differentiation engine.

### 🧪 Practice

- [micrograd Exercises](https://github.com/karpathy/micrograd) — Extend micrograd with tensor broadcasting and novel activation functions.

### 🛠️ Projects

- [Build a 2D Tensor Autograd Engine](https://github.com/karpathy/micrograd) — Upgrade micrograd from scalar values to 2D matrices supporting matrix multiplication backward passes.
- [Custom PyTorch Autograd Function](https://pytorch.org/tutorials/beginner/examples_autograd/two_step_layer.html) — Implement a custom non-differentiable or optimized CUDA op with explicit forward/backward methods.

## 🧭 Recommended Learning Path

1. Understand the chain rule from multivariable calculus and why numerical finite differences fail in high dimensions.
2. Build a computational graph with scalar node tracking (`data`, `grad`, `_prev`, `_op`).
3. Implement forward mode with dual numbers and understand why reverse mode is optimal for scalar loss functions.
4. Explore vector-Jacobian products (VJP) and how PyTorch and JAX propagate tensor gradients.
5. Investigate memory optimizations: gradient checkpointing and mixed-precision gradient scaling.

## ⭐ Top 3 Resources

1. [Karpathy's micrograd Video](https://www.youtube.com/watch?v=VMj-3S1tku0) — The best single video explanation of autodiff and backprop ever produced.
2. [JAX Autodiff Cookbook](https://jax.readthedocs.io/en/latest/notebooks/autodiff_cookbook.html) — The cleanest technical reference on functional autodiff transformations.
3. [PyTorch Autograd Mechanics Notes](https://pytorch.org/docs/stable/notes/autograd.html) — Crucial systems documentation for any PyTorch developer.

