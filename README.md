# Logesh P — Creative Engineering Portfolio (2026 Edition) 🚀

A high-performance, award-grade single-page portfolio website built for **Logesh P**, a B.Tech Artificial Intelligence and Data Science student at Anand Institute of Higher Technology, ML practitioner, and state athlete.

![Portfolio Banner](public/profile.png)

---

## 🌟 Tech Stack & Highlights

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with 2026 Dark Neon aesthetic (`#0a0a0f` dark slate, `#7c3aed` neon violet, `#22d3ee` neon cyan, `#f472b6` neon pink)
- **3D Graphics**: [Three.js](https://threejs.org/) interactive WebGL hero canvas with dynamic neon lighting, wireframe icosahedron, orbiting torus, ambient particle field, and mouse parallax tracking
- **Animations**: [Framer Motion](https://www.framer.com/motion/) spring physics, letter-by-letter 3D split text reveals, scroll-linked word highlights, and magnetic hover buttons
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/) buttery 60fps momentum scroll
- **Celebrations**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Sound Design**: Native browser **Web Audio API** synthesized audio micro-feedback (toggleable on/off anytime)
- **Typography**: Google Fonts — *Space Grotesk* (headings), *Inter* (body), *JetBrains Mono* (code accents)

---

## 📑 9 Full-Screen Sections

1. **Hero**:
   - Letter-by-letter 3D flip text reveal of `LOGESH P`
   - Real-time rotating typewriter roles
   - Interactive Three.js glowing geometric 3D scene
   - Cyberpunk holographic card displaying Logesh's official photograph (`/profile.png`)
   - "Open to Internships" pulsing radar badge & magnetic CTA buttons
2. **About Me**:
   - Word-by-word scroll-linked luminosity reveal
   - Side cards highlighting Mamallapuram heritage, bilingual fluency (Tamil Native, English Professional), and collegiate background
3. **Skills**:
   - Dual-row opposite-direction infinite marquee
   - Bento-grid layout with 3D tilt cards & category filtering (All, Languages, AI & Data Science, Tools, Soft Skills)
   - Real-time proficiency progress meters
4. **Education Timeline**:
   - Vertical animated progress timeline drawing smoothly on scroll
   - Anand Institute of Higher Technology (B.Tech AI & DS, 2024-2028), CTC 7-Month Programming Diploma, and High School benchmarks
5. **Projects & Experience**:
   - **MediMate**: Flagship Healthcare AI & Medication Management Web App (Google Gemini API, adherence analytics, audio alarms, low-stock warnings)
   - **DLK Technologies ML Internship**: End-to-end predictive modeling pipelines
   - **NLP Spam & Phishing Classifier**: Naive Bayes + TF-IDF model
   - **Titanic Survival Analytics**: Exploratory data science & ensemble classification
   - **Departmental Project Suite**: Team milestone coordination
   - Filterable tabs, 3D tilt, and full modal specification viewer
6. **Achievements (Sports & Extracurriculars)**:
   - Kho Kho Zonal Player & 4x District Athlete
   - District Winner — 100m Athletics Champion (Gold)
   - Volleyball Zonal Player & Competitive E-Sports Strategist
   - Celebratory confetti burst on initial scroll into view
   - Tagline: *"Beyond Code: Discipline, Teamwork, Stamina"*
7. **Certifications & Strengths**:
   - CTC Diploma in C and C++ Programming with animated light shine effect
   - DLK Technologies Machine Learning Workshop Certification
   - Strength pillars: Physical & Mental Resilience, Self-Discipline, Quick Learner, Problem Solver
8. **Résumé**:
   - 3D perspective flip card (interactive front/back view)
   - One-click CV modal preview with print functionality
   - Direct download button for `/resume.pdf`
9. **Contact & Collaboration**:
   - *"Let's Work Together"* headline
   - Real-time validated contact form with transmission status
   - Direct links to GitHub (`pandianlogesh795-bot`), LinkedIn, and Email (`pandianlogesh795@gmail.com`)
   - Anti-scrape privacy protection for phone number
   - Back-to-top floating control and footer

---

## 🏃 Easter Egg: Athlete Sprint Mode

- Press the **`K`** key on your keyboard anywhere on the page (or click the subtle **`[K] Athlete Mode`** pill at bottom-left) to trigger Logesh's custom Kho Kho celebratory runner animation and fireworks confetti!

---

## ⚡ Quick Start (Local Development)

### Prerequisites
- Node.js version 18+ or 20+
- npm version 9+

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the URL displayed in your terminal).

### 3. Production Build
```bash
npm run build
```
This generates the optimized bundle in `dist/`.

---

## 🚀 One-Click Vercel Deployment

### Method 1: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Method 2: Via GitHub & Vercel Dashboard
1. Push this folder to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: launch 2026 creative portfolio"
   git branch -M main
   git remote add origin https://github.com/pandianlogesh795-bot/logeshp.git
   git push -u origin main --force
   ```
2. Log into [vercel.com](https://vercel.com).
3. Click **"Add New Project"** and import the `logeshp` repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"** — your portfolio is live in under 60 seconds with SSL and global CDN!

---

## ✏️ How to Edit Content

- **Projects**: Edit `src/data/projects.ts` to add or update your GitHub repositories, descriptions, or live demo URLs.
- **Skills**: Edit `src/data/skills.ts` to tweak proficiency scores or add new tech tags.
- **Education & Diplomas**: Edit `src/data/timeline.ts`.
- **Sports & Achievements**: Edit `src/data/achievements.ts`.
- **Photo**: Replace `public/profile.png` with any new high-resolution photo.
- **Resume PDF**: Replace `public/resume.pdf` with any updated PDF document.
