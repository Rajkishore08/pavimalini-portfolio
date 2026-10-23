# Pavimalini T — Premium Personal Portfolio

A world-class, production-ready personal portfolio website for **Pavimalini T**, an MSc Software Systems student at Coimbatore Institute of Technology, Full Stack Developer, and Product Designer.

Built with **Next.js (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and the bespoke **Shy Blue Aesthetic Design System**.

---

## 🎨 Design System — Shy Blue Aesthetic

Designed to feel calm, sophisticated, creative, and professional with soft blue gradients, delicate borders, glassmorphic panels, and refined typography.

| Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Primary Background** | `#F5F9FF` | Clean, airy canvas with subtle background grid & dot patterns |
| **Soft Blue** | `#E3EEFF` | Glassmorphic card backdrops, badge fills, subtle accents |
| **Shy Blue** | `#A8C7FA` | Thin borders, glowing focus states, interactive highlights |
| **Primary Blue** | `#6B9FE8` | Gradients, button hovers, dynamic timeline indicators |
| **Deep Blue** | `#315A91` | Primary CTA gradients, section headings, active indicators |
| **Midnight Blue** | `#172C4D` | Monogram text, dark pill contrast, high-priority headings |
| **Text Primary** | `#1D2B42` | High-contrast readable body & title text |
| **Text Secondary** | `#6F8099` | Muted subtitles, metadata descriptions, timestamps |

### Typography
- **Headings**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) / [Sora](https://fonts.google.com/specimen/Sora)
- **Body Text**: [Inter](https://fonts.google.com/specimen/Inter)
- **Monospace Accents**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

---

## 📂 Architecture & Sections

This website is architected as an accessible, high-performance single-page web app with smooth-scroll navigation:

1. **Navigation (`Navbar.tsx`)**: Floating translucent glass bar with `PT` monogram, responsive hamburger drawer, active section highlighting, and *Let's Connect* CTA.
2. **Hero (`Hero.tsx`)**: Eyebrow, gradient heading, availability badge (`Open to Opportunities`), Pavimalini's portrait enclosed in a glowing card with floating developer & designer micro-cards, plus direct resume viewer/download buttons.
3. **About Me (`About.tsx`)**: Personal story, core pillars (*Full Stack Developer*, *Product Designer*, *Creative Problem Solver*), and minimal candidate profile card.
4. **Skills & Technologies (`Skills.tsx`)**: Interactive category filter tabs (*Languages, Frameworks, Databases, Tools*), tech icons, upward hover transitions, and official documentation links. Strictly adheres to resume facts:
   - **Languages**: Python
   - **Frameworks**: React, Node.js, Express.js
   - **Databases**: MySQL, Supabase
   - **Tools**: Git, GitHub, Figma
5. **Work Experience (`Experience.tsx`)**: Vertical timeline showcasing:
   - **Create Digital Solutions** — Full Stack Developer Intern (Next.js, React, Supabase, POS, Inventory Management, GST, UPI Payments, RBAC, WhatsApp receipts)
   - **Snippet Script** — Product Designer (UI/UX Design, Responsive Layouts, Prototyping, Figma)
   - **TIA IT** — Full Stack Developer Intern (Node.js, Express.js, MongoDB, RESTful APIs, JWT, JOI, Git)
6. **Featured Projects (`Projects.tsx` & `ProjectModal.tsx`)**:
   - **Techno Tenant**: Property & Rent Management Dashboard (React, TypeScript, Firebase Auth, Cloud Firestore, Firebase Hosting, PWA) with custom interactive dashboard mockup.
   - **Adaptive Vehicle Guide / AutoRAG**: Adaptive vehicle service & troubleshooting advisor with agentic multi-hop RAG (Python, FastAPI, React, TypeScript, pgvector, NVIDIA NIM API, Mem0) with custom diagnostic advisor mockup.
   - Interactive modal on click with deep architecture walkthrough and configurable links.
7. **Achievements (`Achievements.tsx`)**:
   - Best Club Secretary of the Year (2025–26)
   - Winner — HackVerse 5.0 (Avalanche Track), NITK, Surathkal
   - Runner Up — CryptoShield 2k24 Hackathon, Amrita Vishwa Vidyapeetham, Chennai
   - Winner — Altruisty Design Challenge
8. **Education (`Education.tsx`)**:
   - Coimbatore Institute of Technology — MSc Software Systems [Integrated] (2022 – Present) | CGPA: 8.16
   - Adharsh Vidhyalaya Matric Hr. Sec School — Higher Secondary Certificate (2021 – 2022) | 82.5%
9. **Beyond the Code (`Leadership.tsx`)**:
   - GDG CIT — Secretary (Dec 2025 – June 2026)
   - GDG CIT — Design Lead (Sep 2025 – Nov 2025)
   - Student Developers Cell CIT — Digital Illustrator (Sep 2024 – Aug 2025)
10. **Contact (`Contact.tsx`)**:
    - Direct verified email (`tpavimalini@gmail.com`) with one-click copy button
    - Direct phone (`+91 9344831541`) with one-click copy button
    - Client-validated form with mailto fallback and celebratory confetti animation
11. **Footer (`Footer.tsx`)**:
    - Monogram, copyright, quick links, and smooth back-to-top button.

---

## ⚙️ Configuration & Single Source of Truth

All personal details, URLs, and data are centralized in:
[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)

To configure project repositories, demos, and social URLs, update the `CONFIG` object:

```typescript
export const CONFIG = {
  LINKEDIN_URL: "https://linkedin.com/in/pavimalini-t",
  GITHUB_URL: "https://github.com/pavimalini-t",
  TECHNO_TENANT_GITHUB: "",
  TECHNO_TENANT_DEMO: "",
  ADAPTIVE_VEHICLE_GUIDE_GITHUB: "",
  ADAPTIVE_VEHICLE_GUIDE_DEMO: "",
};
```

The resume PDF is located in `public/resume.pdf` and serves directly at `/resume.pdf`.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Production Build & Deployment to Vercel

```bash
# Test production build
npm run build
```

Ready for zero-config deployment to [Vercel](https://vercel.com):
1. Push repository to GitHub.
2. Import project in Vercel.
3. Framework Preset: **Next.js**.
4. Click **Deploy**.
