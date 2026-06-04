# 🚀 Primal Fernando — Portfolio Website

A modern, dark-themed full-stack developer portfolio built with **React + Vite + Tailwind CSS + Three.js**.

## ✨ Features

- **Animated Loading Screen** with progress bar
- **Three.js Hero** — floating 3D geometry (torus, sphere, cubes)
- **Stars Background** — interactive canvas
- **Smooth Framer Motion** animations throughout
- **5 Full Sections**: Hero → About → Skills → Experience → Projects → Contact
- **3-Tab Projects**: Academic | Workplace | Personal
- **Contact Form** with EmailJS integration
- **Fully Responsive** (mobile-first)
- **Netlify-ready** deployment config

---

## 📁 Project Structure

```
primal-portfolio/
├── public/
│   └── Primal_Fernando_Resume.pdf     ← Drop your resume PDF here
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── primal-photo.jpg       ← Your profile photo
│   │       ├── primal-about.jpg       ← About section photo (optional)
│   │       └── projects/              ← Project screenshots
│   │           ├── railway-system.png
│   │           ├── inventory-mern.png
│   │           ├── car-game.png
│   │           └── task-manager.png
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── StarsCanvas.jsx        ← Three.js starfield
│   │   │   ├── FloatingCube.jsx       ← Hero 3D element
│   │   │   └── SkillsCanvas.jsx       ← Skills 3D balls
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── SectionWrapper.jsx
│   ├── constants/
│   │   └── index.js                   ← ⭐ ALL YOUR DATA LIVES HERE
│   ├── utils/
│   │   └── motion.js                  ← Framer Motion variants
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
└── package.json
```

---

## 🛠️ Setup & Installation

### Step 1 — Prerequisites
Make sure you have installed:
- **Node.js** v18+ → https://nodejs.org
- **Git** → https://git-scm.com

### Step 2 — Clone / Create the project
```bash
# Create the project folder and navigate into it
cd primal-portfolio

# Install all dependencies
npm install
```

### Step 3 — Run locally
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

---

## 🎨 Customization Guide

### 1. Update Your Personal Info
Open `src/constants/index.js` and update:

```js
export const HERO_DATA = {
  linkedin: 'https://www.linkedin.com/in/YOUR-ACTUAL-URL', // ← Fix this
  github: 'https://github.com/YOUR-USERNAME',              // ← Fix this
  resume: '/Primal_Fernando_Resume.pdf',
  // ...
};
```

### 2. Add Your Profile Photo
1. Copy your photo to `src/assets/images/primal-photo.jpg`
2. Open `src/components/sections/About.jsx`
3. Find the comment `{/* IMAGE PLACEHOLDER */}`
4. Replace the placeholder div with:
```jsx
<img 
  src="/src/assets/images/primal-photo.jpg" 
  alt="Primal Fernando" 
  className="w-full h-full object-cover" 
/>
```

### 3. Add Project Screenshots
1. Copy screenshots to `src/assets/images/projects/`
2. In `src/constants/index.js`, update each project's `image` field:
```js
image: '/src/assets/images/projects/railway-system.png',
```

### 4. Add Work Experience
In `src/constants/index.js`, fill in `EXPERIENCE_DATA`:
```js
export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: 'Tech Corp Pvt Ltd',
    role: 'Software Engineer Intern',
    period: 'June 2024 – August 2024',
    location: 'Colombo, Sri Lanka',
    type: 'Internship',
    description: [
      'Built REST APIs using Node.js and Express for the customer portal.',
      'Reduced page load time by 40% by implementing lazy loading.',
    ],
    technologies: ['React', 'Node.js', 'MongoDB'],
    logo: null, // or '/src/assets/images/company-logo.png'
    current: false,
  },
];
```

### 5. Add Personal Projects
Same pattern in `PROJECTS_DATA.personal`:
```js
personal: [
  {
    id: 'ps-1',
    title: 'My Awesome Side Project',
    description: 'Short description for the card.',
    longDesc: 'Full description when expanded.',
    technologies: ['React', 'Firebase'],
    github: 'https://github.com/your-repo',
    live: 'https://your-project.netlify.app',
    image: '/src/assets/images/projects/my-project.png',
    featured: true,
  },
],
```

### 6. Add Your Resume PDF
Drop your resume PDF into the `public/` folder:
```
public/Primal_Fernando_Resume.pdf
```

---

## 📧 Setting Up the Contact Form (EmailJS)

1. Go to https://emailjs.com → Create free account
2. Add a **Gmail service**
3. Create an **email template** (use variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`)
4. Get your **Service ID**, **Template ID**, **Public Key**
5. Install: `npm install @emailjs/browser` (already in package.json)
6. Open `src/components/sections/Contact.jsx`
7. Find the commented EmailJS block and uncomment it, filling in your keys

---

## 🚀 Deployment to Netlify

### Option A — Netlify Drop (Easiest)
```bash
npm run build
```
Then drag the `dist/` folder to https://app.netlify.com/drop

### Option B — GitHub + Netlify (Recommended — Auto deploys on push)

```bash
# 1. Create a GitHub repo and push
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/primal-portfolio.git
git push -u origin main

# 2. Go to https://app.netlify.com → "Add new site" → "Import from Git"
# 3. Connect GitHub → Select repo
# 4. Build settings (auto-detected from netlify.toml):
#    Build command: npm run build
#    Publish directory: dist
# 5. Click Deploy!
```

### Option C — Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir dist
```

---

## 🔧 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:5173 |
| `npm run build` | Build for production (output: dist/) |
| `npm run preview` | Preview the production build locally |

---

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `react` + `react-dom` | UI framework |
| `vite` | Ultra-fast build tool |
| `tailwindcss` | Utility-first CSS |
| `three` | 3D graphics engine |
| `@react-three/fiber` | React renderer for Three.js |
| `@react-three/drei` | Three.js helpers (Float, Torus, etc.) |
| `framer-motion` | Smooth animations |
| `react-type-animation` | Typing effect in Hero |
| `react-intersection-observer` | Scroll-triggered animations |
| `maath` | Math utilities for Three.js stars |
| `@emailjs/browser` | Contact form emails |

---

## 🎨 Color System

| Variable | Value | Usage |
|----------|-------|-------|
| `--accent` | `#00d4ff` | Cyan — Primary accent, links |
| `--accent2` | `#7b2fff` | Purple — Secondary accent |
| `--accent3` | `#ff2d78` | Pink — Tertiary / highlights |
| `--primary` | `#0a0a0f` | Main background |
| `--secondary` | `#0d0d18` | Alternate section background |
| `--surface` | `#111128` | Card backgrounds |
| `--text` | `#e8e8f0` | Main text |
| `--textMuted` | `#7a7a9a` | Secondary text |

---

## 💡 Tips for Recruiters Impact

1. **Add a real photo** — Recruiters connect with faces
2. **Add project screenshots** — Visual proof beats text
3. **Update GitHub links** — Recruiters will check your code quality
4. **Update LinkedIn URL** — Make it your actual profile
5. **Add work experience ASAP** — Even internships count
6. **Set up EmailJS** — So recruiters can reach you directly from the site
7. **Custom domain** — Get a free `.netlify.app` subdomain like `primalfernando.netlify.app`

---

Built with ❤️ by Primal Fernando
