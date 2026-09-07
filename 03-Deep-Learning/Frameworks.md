# Deep Learning Frameworks

> Deep learning frameworks provide high-performance numerical computing, automatic differentiation, and GPU/TPU acceleration primitives to design, train, and deploy neural networks.

## 🎯 What to Learn

- PyTorch imperative dynamic computational graphs vs JAX functional pure transformations
- Tensor creation, GPU device allocation, strides, and memory layout
- Building neural network modules using `torch.nn.Module` and parameter initialization
- Writing clean training loops: forward pass, loss computation, zero_grad, backward, and optimizer step
- JAX ecosystem: JIT compilation (`jax.jit`), vectorization (`jax.vmap`), and parallelization (`jax.pmap`)
- Accelerated linear algebra (XLA) and torch.compile graph optimization
- Mixed precision training with PyTorch `torch.amp` and bfloat16 numerical stability

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Practical Deep Learning for Coders by fast.ai (Jeremy Howard)](https://course.fast.ai/)
  - Type: Course & Interactive Book
  - Language: English
  - Level: Beginner to Intermediate
  - Why recommended: Jeremy Howard teaches deep learning top-down with unmatched intuition, showing how to achieve world-class results before peeling back the layers to PyTorch internals.

### 📖 Documentation & References

- [PyTorch Official Documentation & Tutorials](https://pytorch.org/tutorials/) — The official, world-class documentation covering 60-minute blitz to production serving.
- [JAX Documentation](https://jax.readthedocs.io/en/latest/) — Autograd and XLA compiler for high-performance machine learning research.
- [Keras Documentation](https://keras.io/) — High-level deep learning API running seamlessly on top of JAX, PyTorch, or TensorFlow.

### 🎓 Courses

- [Neural Networks: Zero to Hero by Andrej Karpathy](https://karpathy.ai/zero-to-hero.html) — Build neural network foundations from scalar autograd to full GPT architectures in PyTorch.
- [Deep Learning Specialization by Andrew Ng (DeepLearning.AI)](https://www.deeplearning.ai/courses/deep-learning-specialization/) — The definitive 5-course foundational deep learning curriculum covering CNNs, RNNs, and optimization.

### ▶️ YouTube — English

- [Neural Networks: Zero to Hero Playlist](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ)
  - Channel: Andrej Karpathy
  - Language: English
  - Type: Playlist
  - Level: Beginner to Advanced
  - Why: Legendary code-first series building micrograd, makemore, WaveNet, batch norm, and nanoGPT.
- [PyTorch for Deep Learning & Machine Learning Full Course](https://www.youtube.com/watch?v=V_xro1bcAuA)
  - Channel: freeCodeCamp.org (Daniel Bourke)
  - Language: English
  - Type: Course
  - Level: Beginner
  - Why: 26-hour comprehensive hands-on PyTorch course covering tensors, computer vision, and custom datasets.

### ▶️ YouTube — Hindi / Hinglish

- [100 Days of Deep Learning in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Comprehensive 100-day Hindi deep learning course covering ANN, CNN, RNN, and PyTorch.


### 📚 Books

- [Deep Learning by Ian Goodfellow, Yoshua Bengio, and Aaron Courville](https://www.deeplearningbook.org/) — The definitive academic textbook on deep learning theory, available freely online.
- [Programming PyTorch for Deep Learning by Ian Pointer](https://www.oreilly.com/library/view/programming-pytorch-for/9781492045342/) — Practical hands-on guide to building and deploying PyTorch models.

### 💻 GitHub / Implementations

- [mohd-faizy/DeepLearning_Specialization_with_TensorFlow](https://github.com/mohd-faizy/DeepLearning_Specialization_with_TensorFlow) — Hands-on neural network implementations, backprop derivations, and deep learning architectures with TensorFlow.
- [mohd-faizy/the-incredible-pytorch](https://github.com/mohd-faizy/the-incredible-pytorch) — The Incredible PyTorch: curated collection of tutorials, papers, architectures, and community resources.
- [mohd-faizy/PyTorch-Essentials](https://github.com/mohd-faizy/PyTorch-Essentials) — Complete journey from PyTorch fundamentals to advanced custom layers, autograd mechanics, training loops, and dynamic graph inspection.
- [PyTorch](https://github.com/pytorch/pytorch) — Dynamic computational graph deep learning framework.
- [TensorFlow](https://github.com/tensorflow/tensorflow) — End-to-end machine learning platform.
- [JAX](https://github.com/jax-ml/jax) — High-performance numerical computing with XLA.
- [Keras](https://github.com/keras-team/keras) — Multi-backend deep learning API.
- [PaddlePaddle](https://github.com/PaddlePaddle/Paddle) — Industrial deep learning platform.
- [MXNet](https://github.com/apache/mxnet) — Deep learning framework (Apache).
- [Caffe2](https://github.com/pytorch/pytorch) — Production deep learning (merged into PyTorch).
- [OneFlow](https://github.com/Oneflow-Inc/oneflow) — Deep learning framework optimized for distributed training.
- [MindSpore](https://github.com/mindspore-ai/mindspore) — AI computing framework by Huawei.

### 🧪 Practice

- [PyTorch Blitz Tutorial Notebooks](https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html) — Interactive beginner tutorial building an image classification network.

### 🛠️ Projects

- [Build nanoGPT from Scratch](https://github.com/karpathy/nanoGPT) — Train a medium-sized generative transformer model on OpenWebText using pure PyTorch.

## 🧭 Recommended Learning Path

1. Understand tensors, dimensions, broadcasting rules, and GPU tensor allocations.
2. Build a multi-layer perceptron from scratch, deriving backpropagation with pencil and paper.
3. Construct modular networks with `torch.nn.Module`, understanding parameters and submodules.
4. Train a Convolutional Neural Network (CNN) on CIFAR-10 with data augmentation and validation.
5. Optimize training speed using mixed-precision (`torch.cuda.amp.autocast`) and `torch.compile`.

## ⭐ Top 3 Resources

1. [fast.ai Practical Deep Learning for Coders](https://course.fast.ai/) — The most practical, empowering deep learning course ever created.
2. [Karpathy's Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html) — Masterclass in writing clean, intuitive PyTorch code from ground zero.
3. [PyTorch Official Tutorials](https://pytorch.org/tutorials/) — Authoritative reference for modern deep learning engineering.

