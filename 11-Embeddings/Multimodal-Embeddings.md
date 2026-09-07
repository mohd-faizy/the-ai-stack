# Multimodal Embeddings

> Unified vector spaces that map diverse data modalities—text descriptions, photographic images, audio waveforms, and video clips—into shared geometric representations.

## 🎯 What to Learn

- Contrastive Language-Image Pre-training (CLIP): dual encoders and symmetric cross-entropy loss
- SigLIP (Sigmoid Loss for Language Image Pre-Training): replacing global softmax with pairwise sigmoid loss
- Cross-modal retrieval: searching images with text queries and finding matching audio for video frames
- ImageBind (Meta AI): binding six modalities (image, text, audio, depth, thermal, IMU) into a single embedding space
- OpenCLIP ecosystem: open-weights reproductions of CLIP trained on LAION datasets
- Zero-shot classification and multimodal zero-shot transfer learning

## 📚 Best Learning Resources

### 🥇 Best Overall

- [OpenCLIP: Open-Source Implementation of CLIP (LAION / OpenCLIP)](https://github.com/mlfoundations/open_clip)
  - Type: Framework & Model Zoo
  - Language: English
  - Level: Intermediate
  - Why recommended: OpenCLIP is the premier open-source repository containing state-of-the-art vision-language contrastive models trained on billions of image-text pairs with extensive benchmarking.

### 📖 Documentation & References

- [OpenCLIP Documentation](https://github.com/mlfoundations/open_clip) — Official guides on loading ViT-B/L/G/H checkpoints and running zero-shot classification.
- [ImageBind Documentation (Meta AI)](https://github.com/facebookresearch/ImageBind) — Meta's holistic representation model learning a single joint embedding space across six modalities.

### 🎓 Courses

- [Stanford CS231n - Lecture on Multimodal Deep Learning (Vision & Language)](https://cs231n.stanford.edu/) — Justin Johnson covers CLIP, visual grounding, and multimodal contrastive learning.

### ▶️ YouTube — English

- [CLIP: Connecting Text and Images (OpenAI Paper Explained)](https://www.youtube.com/watch?v=T9XSU0pKX2E)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate
  - Why: In-depth review of OpenAI's seminal paper, contrastive loss matrices, and zero-shot ImageNet classification.
- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Architecture Deep Dive
  - Level: Intermediate to Advanced
  - Why: Clear mathematical explanation of how sigmoid loss decouples batch size from normalization, speeding up training.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Learning Transferable Visual Models From Natural Language Supervision (Radford et al. - CLIP Paper)](https://arxiv.org/abs/2103.00020) — The landmark OpenAI research paper that founded modern multimodal representation learning.

### 💻 GitHub / Implementations

- [CLIP](https://github.com/openai/CLIP) — Contrastive image-text representations by OpenAI.
- [OpenCLIP](https://github.com/mlfoundations/open_clip) — Open-source CLIP implementation.
- [SigLIP](https://github.com/google-research/big_vision) — Sigmoid loss for language-image pre-training.
- [ImageBind](https://github.com/facebookresearch/ImageBind) — Multimodal binding across six modalities.
- [EVA-CLIP](https://github.com/baaivision/EVA) — Improved CLIP training by BAAI.
- [MetaCLIP](https://github.com/facebookresearch/MetaCLIP) — Meta's demystified CLIP data curation.

### 🧪 Practice

- [OpenCLIP Zero-Shot Image Classification Demo](https://github.com/mlfoundations/open_clip) — Evaluate open-source CLIP models on custom image directories without training.

### 🛠️ Projects

- [Natural Language Cross-Modal Video & Image Search Engine](https://github.com/mlfoundations/open_clip) — Index 50,000 personal photos with OpenCLIP embeddings in Qdrant, enabling queries like 'sunsets on a rocky beach'.

## 🧭 Recommended Learning Path

1. Understand the contrastive loss matrix: maximizing diagonal pair similarities while minimizing off-diagonal negatives.
2. Extract image features with Vision Transformers (ViT) and text features with Transformer encoders.
3. Explore SigLIP: replacing global batch softmax with independent per-pair binary cross-entropy.
4. Implement zero-shot classification by computing cosine similarity against prompt templates ('a photo of a {class}').
5. Deploy cross-modal semantic search pairing OpenCLIP with high-performance vector databases.

## ⭐ Top 3 Resources

1. [OpenCLIP](https://github.com/mlfoundations/open_clip) — The definitive open-source vision-language contrastive embedding toolkit.
2. [CLIP Paper (OpenAI)](https://arxiv.org/abs/2103.00020) — The seminal foundational research paper that created multimodal AI.
3. [ImageBind (Meta AI)](https://github.com/facebookresearch/ImageBind) — Breakthrough joint embedding space spanning six sensory modalities simultaneously.

