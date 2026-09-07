# Secure Computation

> Secure Computation enables machine learning inference and training directly over encrypted data using cryptographic primitives like Multi-Party Computation (MPC), Fully Homomorphic Encryption (FHE), and Zero-Knowledge Proofs.

## 🎯 What to Learn

- Fully Homomorphic Encryption (FHE) principles: BFV, CKKS schemes for approximate float arithmetic
- Multi-Party Computation (MPC) and Secret Sharing (Shamir, Beaver triples)
- Encrypted neural network inference: replacing non-linear activations with polynomial approximations
- Zero-Knowledge Proofs (ZKPs) for verifiable model inference (zkML)
- Performance bottlenecks and hardware acceleration for encrypted compute

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Concrete ML (Zama)](https://docs.zama.ai/concrete-ml)
  - Type: Official Framework & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: Concrete ML by Zama allows Python data scientists to compile scikit-learn, XGBoost, and PyTorch models to run directly on encrypted data using Fully Homomorphic Encryption (FHE) without needing cryptography expertise.

### 📖 Documentation & References

- [Concrete ML Documentation](https://docs.zama.ai/concrete-ml) — Guides for privacy-preserving machine learning with FHE-compiled models.
- [Microsoft SEAL](https://github.com/microsoft/SEAL) — Easy-to-use and powerful open-source homomorphic encryption library.
- [CrypTen (Facebook AI)](https://crypten.ai/) — Framework for privacy-preserving machine learning built on PyTorch.

### 🎓 Courses

- [Zama FHE Academy](https://www.zama.ai/fhe-academy) — Tutorials and educational videos on homomorphic encryption and privacy-preserving AI.

### ▶️ YouTube — English

- [Zama: Video Guides & Tutorials](https://www.youtube.com/@zama_fhe)
  - Channel: Zama
  - Language: English
  - Type: Tutorial / Talk
  - Level: Intermediate
  - Why: Clear introduction to executing neural network inference on encrypted inputs.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [A Pragmatic Introduction to Secure Multi-Party Computation](https://securecomputation.org/) — David Evans, Vladimir Kolesnikov, and Mike Rosulek foundational textbook on MPC.

### 💻 GitHub / Implementations

- [zama-ai/concrete-ml](https://github.com/zama-ai/concrete-ml) — Privacy-preserving machine learning framework using Fully Homomorphic Encryption.
- [facebookresearch/CrypTen](https://github.com/facebookresearch/CrypTen) — A PyTorch-based framework for privacy-preserving machine learning via MPC.

## 📄 Foundational Papers

- [Fully Homomorphic Encryption over the Integers](https://eprint.iacr.org/2009/616) — van Dijk, Gentry, Halevi, and Vaikuntanathan (2010) seminal breakthrough making homomorphic computation feasible.
- [CryptoNets: Applying Neural Networks to Encrypted Data with High Throughput and Accuracy](https://proceedings.mlr.press/v48/gilad-bachrach16.html) — Gilad-Bachrach et al. (ICML 2016) first practical demonstration of deep neural network evaluation on homomorphically encrypted data.

### 🧪 Practice

- [Concrete ML End-to-End Examples](https://github.com/zama-ai/concrete-ml/tree/release/main/use_case_examples) — Encrypted credit scoring, medical prediction, and encrypted sentiment classification.

### 🛠️ Projects

- [Encrypted Patient Health Risk Inference](https://docs.zama.ai/concrete-ml) — Deploy an encrypted XGBoost model where a hospital sends encrypted patient biomarkers to the cloud and receives encrypted predictions without the cloud server ever seeing plain data.

## 🧭 Recommended Learning Path

1. Learn the differences between encryption in transit/rest versus encryption in use (FHE and MPC).
2. Understand CKKS homomorphic scheme operations: encrypted addition, encrypted multiplication, and noise budget.
3. Study why non-linear functions (ReLU, Softmax) must be approximated with polynomials in FHE.
4. Train an XGBoost or PyTorch classifier and compile it to FHE using Concrete ML.
5. Benchmark encryption/decryption latency, cipher text expansion, and prediction accuracy.

## ⭐ Top 3 Resources

1. Concrete ML (Zama)
2. Microsoft SEAL
3. A Pragmatic Introduction to Secure Multi-Party Computation (Evans et al.)

