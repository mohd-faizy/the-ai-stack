# Environmental Monitoring

> Geospatial machine learning frameworks, satellite imagery segmentation, and planetary-scale Earth observation platforms.

## 🎯 What to Learn

- Multispectral satellite imagery: Optical bands (RGB, Near-Infrared, Short-Wave Infrared), SAR (Synthetic Aperture Radar), and thermal sensors
- TorchGeo: PyTorch library providing specialized datasets, transforms, and samplers for geospatial and satellite data
- Microsoft Planetary Computer: Petabyte-scale cloud-native catalog of environmental data accessible via STAC API
- SatCLIP & Prithvi (NASA & IBM): Geospatial foundation models learning location-aware visual representations
- Environmental tasks: Deforestation detection, wildfire boundary tracking, flood mapping, and crop yield forecasting
- Vegetation indices: Normalized Difference Vegetation Index (NDVI) and water index calculations

## 📚 Best Learning Resources

### 🥇 Best Overall

- [TorchGeo](https://github.com/microsoft/torchgeo)
  - Type: Geospatial ML Library
  - Language: English
  - Level: Intermediate
  - Why recommended: The premier PyTorch-based library for geospatial machine learning, offering geospatial datasets (Sentinel, Landsat), spatial indexing, and multispectral data loaders.

### 🎓 Courses

- [Earth Observation & Machine Learning Course (University of Zurich)](https://www.geo.uzh.ch/) — Hands-on tutorials on analyzing satellite imagery with Python and deep learning.

### ▶️ YouTube — English

- [Microsoft Developer / PyData: Video Guides & Tutorials](https://www.youtube.com/@MicrosoftDeveloper)
  - Channel: Microsoft Developer / PyData
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Adam Stewart (creator of TorchGeo) explains how to handle multispectral GeoTIFFs and train segmentation models.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Applied Remote Sensing with Python by Colin Brooks et al.](https://www.routledge.com/) — Comprehensive guide to working with raster datasets, satellite bands, and spatial analysis.

### 💻 GitHub / Implementations

- [Microsoft Planetary Computer](https://github.com/microsoft/PlanetaryComputer) — Earth observation and analytics.
- [TorchGeo](https://github.com/microsoft/torchgeo) — PyTorch for geospatial data.
- [Radiant MLHub](https://github.com/radiantearth) — Open geospatial training data.
- [SatCLIP](https://github.com/microsoft/satclip) — Satellite image embeddings.

## 📄 Foundational Papers

- [TorchGeo: Deep Learning With Geospatial Data](https://arxiv.org/abs/2111.08872) — Stewart et al. paper establishing the standard PyTorch geospatial ecosystem.
- [SatCLIP: Global Vision-Language-Location Pre-training](https://arxiv.org/abs/2311.17127) — Klemmer et al. paper connecting satellite imagery to global geographic coordinates.

### 🧪 Practice

- [Planetary Computer Explorer](https://planetarycomputer.microsoft.com/explore) — Explore global satellite imagery layers, vegetation indexes, and land cover maps in the browser.

### 🛠️ Projects

- [Automated Amazon Deforestation Tracker](https://github.com/microsoft/torchgeo) — Train a U-Net on Sentinel-2 multispectral imagery using TorchGeo to segment areas of forest loss over time.

## 🧭 Recommended Learning Path

1. Understand multispectral satellite bands (Red, Green, Blue, NIR, SWIR) and compute NDVI.
2. Learn how to query the SpatioTemporal Asset Catalog (STAC) using Python `pystac-client`.
3. Load and crop geospatial rasters with TorchGeo data loaders.
4. Train a semantic segmentation model on land cover classification.
5. Deploy models on the Microsoft Planetary Computer Hub.

## ⭐ Top 3 Resources

1. TorchGeo (Microsoft & PyTorch Ecosystem)
2. Microsoft Planetary Computer
3. NASA-IBM Prithvi (Geospatial Foundation Model)

