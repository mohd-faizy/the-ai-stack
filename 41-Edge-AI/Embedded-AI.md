# Embedded AI & TinyML

> Techniques and runtimes for running ultra-low-power machine learning models on microcontrollers, sensor nodes, and IoT hardware with under 256KB of memory.

## 🎯 What to Learn

- TinyML constraints: Operating within micro-watts of power and kilobytes of SRAM/Flash storage
- TensorFlow Lite for Microcontrollers (TFLite Micro): C++ runtime with zero dynamic memory allocation and no OS dependency
- Edge Impulse: End-to-end cloud and CLI platform for collecting sensor data, training models, and deploying C++ libraries
- MicroTVM: Compiling deep learning models to bare-metal microcontrollers without an operating system
- Keyword spotting, anomaly detection in industrial vibrations, and gesture recognition on IMU sensors
- Integer-only quantization (INT8 weights and activations) for DSP and microcontroller execution

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Edge Impulse](https://www.edgeimpulse.com/)
  - Type: Embedded ML Platform
  - Language: English
  - Level: Beginner
  - Why recommended: The leading development platform for machine learning on edge devices, enabling developers to build, test, and deploy TinyML models to microcontrollers with ease.

### 🎓 Courses

- [Harvard CS249r: Tiny Machine Learning (TinyML on edX)](https://www.edx.org/professional-certificate/harvardx-tiny-machine-learning) — Taught by Prof. Vijay Janapa Reddi covering TinyML fundamentals, embedded sensors, and deployment.

### ▶️ YouTube — English

- [Shawn Hymel / Edge Impulse: Video Guides & Tutorials (Shawn Hymel / Edge Impulse)](https://www.youtube.com/results?search_query=Shawn%20Hymel%20%2F%20Edge%20Impulse%20Shawn%20Hymel%20%2F%20Edge%20Impulse%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Shawn Hymel / Edge Impulse
  - Language: English
  - Type: Course / Playlist
  - Level: Beginner
  - Why: Engaging step-by-step introduction to accelerometer sensor classification, wake-word detection, and Arduino deployment.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [TinyML: Machine Learning with TensorFlow Lite on Arduino by Pete Warden and Daniel Situnayake](https://www.oreilly.com/library/view/tinyml/9781492052036/) — The definitive foundational textbook on building ultra-low-power machine learning models on microcontrollers.

### 💻 GitHub / Implementations

- [TensorFlow Lite Micro](https://github.com/tensorflow/tflite-micro) — ML for microcontrollers.
- [Edge Impulse](https://github.com/edgeimpulse) — Embedded ML platform.
- [TinyML](https://github.com/mit-han-lab/tinyml) — Efficient ML for edge devices.
- [microTVM](https://github.com/apache/tvm) — TVM for microcontrollers.

### 🧪 Practice

- [Edge Impulse Smartphone Sensor Studio](https://studio.edgeimpulse.com/) — Connect your smartphone as an IoT device to collect live sensor data and train a gesture recognizer in the browser.

### 🛠️ Projects

- [Wake Word Detector on Arduino / ESP32](https://github.com/tensorflow/tflite-micro/tree/main/tensorflow/lite/micro/examples/micro_speech) — Train a compact 20KB convolutional network to detect 'yes' and 'no' audio commands on an embedded microphone.

## 🧭 Recommended Learning Path

1. Understand microcontroller memory constraints: Distinguish Flash (code storage) from SRAM (runtime activations).
2. Collect and preprocess sensor data using Edge Impulse Studio.
3. Train an integer-only quantized neural network model (INT8).
4. Compile TFLite Micro code into an Arduino sketch or C++ firmware.
5. Flash to an ESP32 or Raspberry Pi Pico and measure inference latency and power draw.

## ⭐ Top 3 Resources

1. TinyML by Pete Warden & Daniel Situnayake (Book)
2. Edge Impulse (Embedded ML Development Platform)
3. TensorFlow Lite for Microcontrollers (C++ Runtime)

