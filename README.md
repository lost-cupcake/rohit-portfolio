# 🧠 Rohit Kapoor — ML/AI Portfolio

> **Live Site:** [rohit-portfolio.vercel.app](https://rohit-portfolio.vercel.app)

A clean, modern portfolio built to showcase my ML/AI projects, skills, and experience — with a working resume viewer, project screenshot gallery, and a bonus Tic Tac Toe game 🎮

---

## ⚡ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **HTML5** | Structure & semantic markup |
| **CSS3** | Custom styling, animations, responsive layout |
| **Vanilla JavaScript** | All interactivity — zero frameworks, zero dependencies |
| **Google Fonts** | Clash Display · Bricolage Grotesque · Caveat |

### Features Built From Scratch
| Feature | How it works |
|---|---|
| **Scroll Reveal** | IntersectionObserver API — elements fade in as you scroll |
| **Project Screenshots** | File API + FileReader — drag & drop or click to upload |
| **Image Lightbox** | Custom modal — click any screenshot for full preview |
| **Resume Viewer** | Loads directly from `assets/resume.pdf` — view & download |
| **Tic Tac Toe** | Rule-based AI (win → block → center → corner → random) |
| **Responsive Layout** | CSS Grid + Flexbox — works on all screen sizes |

### Design Decisions
- **No frameworks** (no React, no Vue, no Bootstrap) — pure HTML/CSS/JS keeps it fast and simple to edit
- **CSS Variables** — all colors defined in `:root` so changing the theme takes 10 seconds
- **Base64-free** — images loaded from `assets/` folder, not embedded in code, keeping the HTML clean
- **Static site** — no backend needed, deploys anywhere (Vercel, Netlify, GitHub Pages)

---

## 📁 Project Structure

```
rohit-portfolio/
├── index.html          # Main page — edit content here
├── css/
│   └── style.css       # All styles — edit design here
├── js/
│   └── main.js         # All interactions — game, uploads, lightbox
├── assets/             # Drop your files here
│   ├── resume.pdf      # Your resume (must be named exactly this)
│   ├── proj1.png       # Neural Drive — Autonomous Driving
│   ├── proj2.png       # A/B Test & Uplift Modeling
│   ├── proj3.png       # Brain Tumor MRI Classifier
│   ├── proj4.png       # RAG Document Assistant
│   └── proj5.png       # Smart Manufacturing Dashboard
└── README.md
```

---

## 🚀 Projects Showcased

### 1. Neural Drive — Multi-Task Autonomous Driving Perception
- 35.7M parameter model from scratch
- Fuses 6 cameras (Swin-T + FPN + LSS BEV) + LiDAR (PointPillars)
- Windowed cross-modal attention: O(HW²) → O(HW·w²)
- 3D object detection + HD map segmentation (14 classes)
- **Stack:** PyTorch · Swin Transformer · PointPillars · nuScenes · timm

### 2. A/B Test & Uplift Modeling — Email Marketing
- 64K-customer RCT analysis with z-tests, Cohen's h, Bonferroni correction
- T-Learner meta-learner for individual treatment effects
- **216% ROI** vs 53% random — 4× net value from same budget
- **Stack:** XGBoost · SHAP · scikit-uplift · statsmodels · scipy

### 3. Brain Tumor MRI Classifier — Full Stack App
- ResNet18 fine-tuned on 7,023 MRI images · **95.75% accuracy · 0.99 ROC-AUC**
- Grad-CAM revealed & fixed a source-distribution shortcut
- Live FastAPI + React app with heatmap overlay
- **Stack:** PyTorch · ResNet18 · Grad-CAM · FastAPI · React · Vite

### 4. RAG-Powered Document Assistant
- ChromaDB + sentence-transformers (top-6) + cross-encoder reranking (top-4)
- LLM-as-judge eval harness: hallucination **18% → 4%**
- **Stack:** LangChain · ChromaDB · FastAPI · React

### 5. Smart Manufacturing Dashboard — IEEE Paper
- Isolation Forest anomaly detection + supply chain risk classifier
- **92.54% accuracy · 0.92 weighted F1** · Cloud deployed
- Published at IEEE Conference · JUIT 2025
- **Stack:** Scikit-learn · FastAPI · React

---

## 🏆 Achievements

- 🥇 **Top 100 globally** — NeurIPS Polymer Prediction Challenge
- 📐 **Top ranks** — Kaggle NeurIPS Math Misconception Competition
- ☁️ AWS Foundations of Prompt Engineering (May 2026)
- 🗄️ IBM SQL and Relational Databases 101 (May 2026)

---

## 📬 Contact

| Platform | Link |
|---|---|
| Email | [kapoornavneet96@gmail.com](https://mail.google.com/mail/?view=cm&to=kapoornavneet96@gmail.com) |
| LinkedIn | [linkedin.com/in/rohit-kapoor-9a145936a](https://www.linkedin.com/in/rohit-kapoor-9a145936a/) |
| GitHub | [github.com/lost-cupcake](https://github.com/lost-cupcake) |
| Kaggle | [kaggle.com/kyraku](https://www.kaggle.com/kyraku) |

---

*Built with ❤️ · No frameworks were harmed in the making of this portfolio*
