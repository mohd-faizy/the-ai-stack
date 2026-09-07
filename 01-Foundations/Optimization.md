# Optimization

> Numerical optimization is the computational engine of learning, finding model parameter configurations that minimize empirical risk and satisfy constraints.

## 🎯 What to Learn

- Formulation of objective functions, loss functions, and constraints
- Convexity: convex sets, convex functions, and Jensen's inequality
- Gradient Descent: batch, mini-batch, and stochastic gradient descent (SGD)
- First-order momentum methods: Nesterov, AdaGrad, RMSprop, Adam, AdamW
- Second-order optimization: Newton's method, Quasi-Newton (BFGS, L-BFGS), and Hessian-free methods
- Lagrangian duality, KKT (Karush-Kuhn-Tucker) conditions, and constrained optimization
- Hyperparameter optimization: grid search, random search, Bayesian optimization (Tree-structured Parzen Estimators), and Hyperband

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Stanford EE364a: Convex Optimization I (Prof. Stephen Boyd)](https://web.stanford.edu/~boyd/cvxbook/)
  - Type: University Course & Book
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: The premier global reference on convex optimization by Stephen Boyd and Lieven Vandenberghe, providing both theoretical depth and computational algorithms.

### 📖 Documentation & References

- [CVXPY Documentation](https://www.cvxpy.org/) — Python-embedded modeling language for convex optimization problems.
- [Optuna Documentation](https://optuna.readthedocs.io/en/stable/) — Hyperparameter optimization framework with state-of-the-art pruning and sampling.
- [Google OR-Tools](https://developers.google.com/optimization) — Software suite for combinatorial optimization, integer programming, and constraint satisfaction.

### 🎓 Courses

- [Stanford EE364a Lectures](https://www.youtube.com/playlist?list=PL3940DD956CDF0622) — Full lecture videos from Stanford University by Prof. Stephen Boyd.
- [DeepLearning.AI: Improving Deep Neural Networks (Hyperparameter Tuning)](https://www.deeplearning.ai/courses/deep-learning-specialization/) — Andrew Ng's clear breakdown of Adam, RMSprop, learning rate decay, and batch norm.

### ▶️ YouTube — English

- [Stanford University: Video Guides & Tutorials](https://www.youtube.com/@StanfordOnline)
  - Channel: Stanford University
  - Language: English
  - Type: Course
  - Level: Intermediate to Advanced
  - Why: Master convex functions, duality, semidefinite programming, and interior-point methods directly from the author.
- [Gradient Descent, Step-by-Step](https://www.youtube.com/watch?v=sDv4f4s2SB8)
  - Channel: StatQuest with Josh Starmer
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Intuitive, visual explanation of gradient descent, learning rates, and partial derivative calculations.

### ▶️ YouTube — Hindi / Hinglish

- [Maths & Statistics for Machine Learning in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvbYFaaeLY28cWeqV-3vADST)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Nitish Singh covers linear algebra, calculus, probability, and optimization in Hindi.


### 📚 Books

- [Convex Optimization by Stephen Boyd and Lieven Vandenberghe](https://web.stanford.edu/~boyd/cvxbook/) — Free comprehensive textbook that redefined how engineering and computer science teach optimization.
- [Algorithms for Optimization by Mykel J. Kochenderfer and Tim A. Wheeler (MIT Press)](https://algorithmsbook.com/optimization/) — Modern algorithmic perspective with Julia code covering deterministic and stochastic search.

### 💻 GitHub / Implementations

- [CVXPY](https://github.com/cvxpy/cvxpy) — Convex optimization in Python.
- [Optuna](https://github.com/optuna/optuna) — Hyperparameter optimization framework.
- [scipy.optimize](https://github.com/scipy/scipy) — Optimization algorithms within SciPy.
- [OR-Tools](https://github.com/google/or-tools) — Google's operations research tools.
- [Nevergrad](https://github.com/facebookresearch/nevergrad) — Gradient-free optimization.
- [Ax](https://github.com/facebook/Ax) — Adaptive experimentation platform.
- [Hyperopt](https://github.com/hyperopt/hyperopt) — Distributed hyperparameter optimization.
- [Ray Tune](https://github.com/ray-project/ray) — Scalable hyperparameter tuning.

### 🧪 Practice

- [CVXPY Tutorials & Examples](https://www.cvxpy.org/examples/index.html) — Interactive optimization problem formulations in portfolio allocation, SVMs, and control.

### 🛠️ Projects

- [Implement AdamW and L-BFGS from Scratch](https://github.com/pytorch/pytorch/blob/main/torch/optim/adamw.py) — Build custom PyTorch optimizer classes adhering to the torch.optim API.
- [Automated Hyperparameter Sweep with Optuna & Weights & Biases](https://optuna.org/) — Set up distributed Bayesian optimization tuning learning rate schedules and weight decay.

## 🧭 Recommended Learning Path

1. Understand unconstrained optimization, stationary points, gradients, and Hessians.
2. Implement basic 1D and 2D gradient descent and visualize convergence trajectories.
3. Explore momentum, adaptive learning rates (AdaGrad, RMSprop), and understand Adam vs AdamW.
4. Study constrained optimization: Lagrange multipliers, primal-dual formulations, and KKT conditions.
5. Deploy Bayesian optimization with Optuna to automate model tuning pipelines.

## ⭐ Top 3 Resources

1. [Stanford EE364a Convex Optimization (Boyd)](https://web.stanford.edu/~boyd/cvxbook/) — The quintessential graduate-level optimization reference.
2. [Optuna Framework](https://optuna.org/) — State-of-the-art open source hyperparameter optimization library.
3. [Algorithms for Optimization (MIT Press)](https://algorithmsbook.com/optimization/) — Most modern, practical algorithmic textbook on numerical optimization.

