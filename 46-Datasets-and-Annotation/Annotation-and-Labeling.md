# Annotation & Labeling

> Open-source platforms, collaborative workspaces, and AI-assisted tools for annotating text, audio, image, and video data.

## 🎯 What to Learn

- Label Studio: Multi-modal annotation suite for audio, text, images, video, and time-series data with webhook integrations
- CVAT (Computer Vision Annotation Tool): High-performance browser-based video and image annotation with AI tracking
- Argilla: Human-in-the-loop annotation specifically tailored for LLM prompt-response evaluation and RLHF feedback
- Prodigy (Explosion): Scriptable, active learning annotation tool by the creators of spaCy
- Model-assisted labeling (Pre-labeling): Using foundational zero-shot models (SAM, Grounding DINO, Whisper) to draft labels
- Inter-annotator agreement metrics: Cohen's Kappa, Fleiss' Kappa, and quality control consensus

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Label Studio (Heartex)](https://github.com/HumanSignal/label-studio)
  - Type: Multi-modal Annotation Platform
  - Language: English
  - Level: Beginner
  - Why recommended: The most flexible open-source data labeling tool supporting all data types (text, vision, audio, time-series) with custom XML UI templates and ML backend integrations.

### 🎓 Courses

- [Coursera: Introduction to Machine Learning in Production (DeepLearning.AI)](https://www.coursera.org/) — Andrew Ng covers label consistency, labeling guidelines, and measuring human baseline performance.

### ▶️ YouTube — English

- [HumanSignal / FreeCodeCamp: Video Guides & Tutorials](https://www.youtube.com/@freecodecamp)
  - Channel: HumanSignal / FreeCodeCamp
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Complete walkthrough setting up Label Studio, connecting a pre-annotation model, and exporting ground truth.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Human-in-the-Loop Machine Learning by Robert Munro (Manning)](https://www.manning.com/books/human-in-the-loop-machine-learning) — The definitive guide to annotation strategies, active learning, and managing annotator consensus.

### 💻 GitHub / Implementations

- [Label Studio](https://github.com/HumanSignal/label-studio) — Multi-type data labeling platform.
- [CVAT](https://github.com/cvat-ai/cvat) — Computer vision annotation tool.
- [Labelme](https://github.com/wkentaro/labelme) — Image polygonal annotation.
- [Argilla](https://github.com/argilla-io/argilla) — Data curation for NLP and LLMs.
- [Prodigy](https://github.com/explosion/prodigy-recipes) — Annotation recipes for spaCy.
- [Universal Data Tool](https://github.com/UniversalDataTool/universal-data-tool) — Collaborative labeling.
- [Labelbox](https://github.com/Labelbox) — Training data management platform.
- [BRAT](https://github.com/nlplab/brat) — Rapid annotation tool for NLP.

### 🧪 Practice

- [Label Studio Interactive Playground](https://labelstud.io/playground) — Test XML-based interface design for NER, object detection, and RLHF ranking in the browser.

### 🛠️ Projects

- [AI-Assisted Object Detection Labeling Pipeline](https://labelstud.io/guide/ml.html) — Connect Segment Anything (SAM) or YOLOv8 to Label Studio as an ML backend to pre-annotate 1,000 images automatically.

## 🧭 Recommended Learning Path

1. Establish strict labeling instructions and edge-case ambiguity guidelines.
2. Deploy Label Studio or CVAT using Docker.
3. Connect a pre-trained model to auto-generate draft annotations (Model-in-the-Loop).
4. Calculate Inter-Annotator Agreement (Cohen's Kappa) across multi-annotator reviews.
5. Export labeled data into standard formats (COCO, YOLO, ChatML) for training.

## ⭐ Top 3 Resources

1. Label Studio (HumanSignal)
2. CVAT (Computer Vision Annotation Tool)
3. Human-in-the-Loop Machine Learning by Robert Munro (Book)

