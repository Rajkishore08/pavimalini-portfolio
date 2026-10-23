/**
 * Centralized Portfolio Data for Pavimalini T
 * Single source of truth based strictly on the official resume.
 */

export interface SkillItem {
  name: string;
  category: 'Programming Languages' | 'Frameworks' | 'Databases' | 'Tools';
  description?: string;
  docUrl: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  description: string;
  responsibilities: string[];
  tags: string[];
  companyUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  toolsUsed: string[];
  features: string[];
  githubUrl: string;
  liveDemoUrl: string;
  hasCustomMockup: boolean;
  image?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization?: string;
  location?: string;
  year?: string;
  type: 'award' | 'hackathon' | 'leadership';
  proofUrl?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degreeOrQualification: string;
  duration: string;
  scoreLabel: string;
  score: string;
  location: string;
}

export interface LeadershipItem {
  id: string;
  organization: string;
  position: string;
  duration: string;
  focus: string;
}

// Configurable Links (as required: placeholders clearly configurable, no invented URLs)
export const CONFIG = {
  LINKEDIN_URL: "https://linkedin.com/in/pavimalini-t", // Configurable placeholder
  GITHUB_URL: "https://github.com/pavimalini-t",       // Configurable placeholder
  TECHNO_TENANT_GITHUB: "",                            // Placeholder as required
  TECHNO_TENANT_DEMO: "",                              // Placeholder as required
  ADAPTIVE_VEHICLE_GUIDE_GITHUB: "",                   // Placeholder as required
  ADAPTIVE_VEHICLE_GUIDE_DEMO: "",                     // Placeholder as required
};

export const PERSONAL_INFO = {
  name: "Pavimalini T",
  shortName: "Pavimalini",
  monogram: "PT",
  degree: "MSc Software Systems [Integrated]",
  institution: "Coimbatore Institute of Technology",
  location: "Coimbatore, India",
  email: "tpavimalini@gmail.com",
  phone: "+91 9344831541",
  cleanPhone: "+919344831541",
  resumePath: "https://drive.google.com/file/d/1w3_cPRsprfsPFBhoUUSSuu_ibNRlsqZf/view?usp=sharing",
  resumeDriveUrl: "https://drive.google.com/file/d/1w3_cPRsprfsPFBhoUUSSuu_ibNRlsqZf/view?usp=sharing",
  resumePdfPath: "/resume.pdf",
  profileImage: "/images/pavimalini.jpg",
  availabilityStatus: "Open to Opportunities",
  identities: [
    "Full Stack Developer",
    "Product Designer",
    "Creative Problem Solver"
  ],
  hero: {
    eyebrow: "HELLO, I'M PAVIMALINI",
    headingMain: "Designing experiences.",
    headingHighlight: "Building meaningful",
    headingEnd: "digital products.",
    subheading:
      "I'm Pavimalini T, an MSc Software Systems student passionate about full-stack development, product design, and solving real-world problems through technology."
  },
  about: {
    title: "A little about me",
    subtitle: "Engineering scalable code with refined product aesthetics",
    paragraph1:
      "I'm an enthusiastic MSc Software Systems student with a passion for full-stack development and product design. I enjoy working with core programming fundamentals, exploring new technologies, and solving real-world problems through thoughtful digital experiences.",
    paragraph2:
      "My interests lie at the intersection of software engineering, product thinking, and user experience. I enjoy transforming ideas into functional, intuitive, and visually appealing applications.",
    pillars: [
      {
        title: "Full Stack Developer",
        desc: "Architecting reliable, high-performance backends and reactive frontends with modern frameworks.",
        icon: "Layers"
      },
      {
        title: "Product Designer",
        desc: "Creating intuitive UI layouts, design systems, and delightful user experiences with Figma.",
        icon: "Palette"
      },
      {
        title: "Creative Problem Solver",
        desc: "Combining algorithmic fundamentals, AI RAG workflows, and clean design thinking to build impactful solutions.",
        icon: "Sparkles"
      }
    ]
  }
};

/**
 * SKILLS & TECHNOLOGIES
 * STRICT REQUIREMENT: Only skills explicitly mentioned in resume:
 * Languages: Python
 * Frameworks: React, Node.js, Express.js
 * Databases: MySQL, Supabase
 * Tools: Git, GitHub, Figma
 */
export const SKILLS_DATA: SkillItem[] = [
  // Programming Languages
  {
    name: "Python",
    category: "Programming Languages",
    description: "Core programming, backend APIs, data handling, and AI/RAG integration",
    docUrl: "https://www.python.org/doc/",
    iconName: "python"
  },
  // Frameworks
  {
    name: "React",
    category: "Frameworks",
    description: "Component-driven frontend architecture, hooks, and responsive state management",
    docUrl: "https://react.dev/",
    iconName: "react"
  },
  {
    name: "Node.js",
    category: "Frameworks",
    description: "Scalable server-side JavaScript runtime for API services and full-stack systems",
    docUrl: "https://nodejs.org/en/docs",
    iconName: "nodejs"
  },
  {
    name: "Express.js",
    category: "Frameworks",
    description: "Fast, unopinionated, minimalist web framework for RESTful microservices",
    docUrl: "https://expressjs.com/",
    iconName: "express"
  },
  // Databases
  {
    name: "MySQL",
    category: "Databases",
    description: "Relational schema design, SQL query optimization, and structured persistence",
    docUrl: "https://dev.mysql.com/doc/",
    iconName: "mysql"
  },
  {
    name: "Supabase",
    category: "Databases",
    description: "Postgres-backed backend-as-a-service, real-time subscriptions, and auth integration",
    docUrl: "https://supabase.com/docs",
    iconName: "supabase"
  },
  // Tools
  {
    name: "Git",
    category: "Tools",
    description: "Distributed version control, branching strategies, and repository management",
    docUrl: "https://git-scm.com/doc",
    iconName: "git"
  },
  {
    name: "GitHub",
    category: "Tools",
    description: "Code collaboration, pull requests, issue tracking, and CI/CD automation",
    docUrl: "https://docs.github.com/",
    iconName: "github"
  },
  {
    name: "Figma",
    category: "Tools",
    description: "UI/UX wireframing, high-fidelity interactive prototyping, and design systems",
    docUrl: "https://help.figma.com/",
    iconName: "figma"
  }
];

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-01",
    company: "Create Digital Solutions",
    role: "Full Stack Developer Intern",
    location: "Coimbatore, Tamil Nadu",
    duration: "June 2025 – November 2025",
    description:
      "Architected a scalable POS and inventory management platform using Next.js, React, and Supabase, implementing optimized billing workflows, automated GST calculation, UPI QR payments, and real-time inventory tracking.",
    responsibilities: [
      "Engineered role-based access control (RBAC) to enforce secure multi-tiered permissions across cashiers, managers, and system administrators.",
      "Built automated real-time low-stock alerts and proactive replenishment notifications to eliminate stockouts.",
      "Implemented comprehensive customer loyalty, credit management, and recurring balance tracking.",
      "Developed automated WhatsApp receipt delivery integration enabling a streamlined, paperless checkout experience."
    ],
    tags: [
      "Next.js",
      "React",
      "Supabase",
      "POS",
      "Inventory Management",
      "GST",
      "UPI Payments"
    ],
    companyUrl: "https://createdigital.in" // optional fallback
  },
  {
    id: "exp-02",
    company: "Snippet Script",
    role: "Product Designer",
    duration: "January 2026 – March 2026",
    description:
      "Designed responsive website layouts for desktop and mobile platforms, focusing on usability, visual consistency, and user experience.",
    responsibilities: [
      "Created and iterated on UI/UX designs and high-fidelity prototypes in Figma, incorporating feedback and usability considerations.",
      "Established cohesive typographic scales, component color libraries, and responsive grid layouts.",
      "Conducted user experience evaluations and simplified navigation structures for enhanced digital product conversion."
    ],
    tags: [
      "UI/UX Design",
      "Responsive Design",
      "Prototyping",
      "User Experience"
    ]
  },
  {
    id: "exp-03",
    company: "TIA IT",
    role: "Full Stack Developer Intern",
    location: "Coimbatore, India",
    duration: "March 2024 – May 2024",
    description:
      "Developed 12+ RESTful APIs using Node.js, Express.js, MongoDB, and JOI for an internal course and faculty management tool, implementing scalable backend architecture and schema validation.",
    responsibilities: [
      "Developed 12+ RESTful APIs using Node.js, Express.js, MongoDB, and JOI for an internal course and faculty management tool, implementing scalable backend architecture and schema validation.",
      "Optimized secure JWT-authenticated APIs while collaborating with an 8-member cross-functional team using Git for version control and code collaboration."
    ],
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "JOI",
      "Git"
    ]
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "techno-tenant",
    title: "Techno Tenant",
    category: "Full Stack Development",
    tagline: "Intelligent Property & Rent Management Dashboard",
    description:
      "Developed a property and rent management application enabling landlords to manage properties, tenants, rent collections, pending balances, expenses, and real-time financial analytics through an interactive dashboard.",
    toolsUsed: [
      "React",
      "TypeScript",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Hosting",
      "Progressive Web App (PWA)"
    ],
    features: [
      "Multi-property and unit configuration with real-time occupancy status indicators",
      "Automated rent collection tracking, payment schedules, and instant receipt generation",
      "Pending balance alerts and automated tenant payment reminder notifications",
      "Granular expense tracking categorization and net cash flow financial analytics",
      "Progressive Web App (PWA) architecture ensuring offline access and native-like mobile installability",
      "Secure role-based access with Firebase Authentication and Cloud Firestore security rules"
    ],
    githubUrl: CONFIG.TECHNO_TENANT_GITHUB,
    liveDemoUrl: CONFIG.TECHNO_TENANT_DEMO,
    hasCustomMockup: true,
    image: "/images/techno-tenant.png"
  },
  {
    id: "adaptive-vehicle-guide",
    title: "Adaptive Vehicle Guide",
    category: "AI / RAG / Full Stack Development",
    tagline: "Multi-Hop Agentic AI Advisor & Diagnostics",
    description:
      "Developed AutoRAG, an adaptive vehicle service and troubleshooting advisor that handles simple, medium, and complex queries using direct LLM generation, single-step RAG, and agentic multi-hop RAG.",
    toolsUsed: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "pgvector",
      "NVIDIA NIM API",
      "Mem0"
    ],
    features: [
      "Adaptive Query Routing: Dynamically categorizes customer vehicle symptoms into direct LLM, single-step semantic retrieval, or multi-hop agentic search",
      "Agentic Multi-Hop RAG: Deconstructs complex multi-symptom mechanical faults into iterative reasoning sub-queries with verifiable citations",
      "Vector Embeddings with pgvector: High-speed semantic similarity matching against OEM technical service manuals and diagnostic diagrams",
      "Contextual Memory via Mem0: Preserves vehicle history, previous repairs, and driver driving profiles across conversational sessions",
      "FastAPI High-Throughput Service: Async streaming response endpoints integrated with NVIDIA NIM API inference acceleration",
      "Interactive Diagnostics UI: Live vehicle health gauges, diagnostic tree visualization, and step-by-step repair guides"
    ],
    githubUrl: CONFIG.ADAPTIVE_VEHICLE_GUIDE_GITHUB,
    liveDemoUrl: CONFIG.ADAPTIVE_VEHICLE_GUIDE_DEMO,
    hasCustomMockup: true
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-01",
    title: "Best Club Secretary of the Year (2025–26)",
    year: "2025–2026",
    type: "leadership",
    organization: "CIT Student Clubs"
  },
  {
    id: "ach-02",
    title: "Winner — HackVerse 5.0 (Avalanche Track)",
    organization: "NITK, Surathkal",
    location: "Surathkal, Karnataka",
    year: "HackVerse 5.0",
    type: "hackathon"
  },
  {
    id: "ach-03",
    title: "Runner Up — CryptoShield 2k24 Hackathon",
    organization: "Amrita Vishwa Vidyapeetham",
    location: "Chennai, Tamil Nadu",
    year: "2024",
    type: "hackathon"
  },
  {
    id: "ach-04",
    title: "Winner — Altruisty Design Challenge",
    organization: "Altruisty",
    year: "Design Excellence",
    type: "award"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-01",
    institution: "Coimbatore Institute of Technology",
    degreeOrQualification: "MSc Software Systems [Integrated]",
    duration: "2022 – Present",
    scoreLabel: "CGPA",
    score: "8.16 (Till 8th Semester)",
    location: "Coimbatore, India"
  },
  {
    id: "edu-02",
    institution: "Adharsh Vidhyalaya Matric Hr. Sec School",
    degreeOrQualification: "Higher Secondary Certificate (HSC)",
    duration: "2021 – 2022",
    scoreLabel: "Percentage",
    score: "82.5%",
    location: "Coimbatore, India"
  }
];

export const LEADERSHIP_POSITIONS: LeadershipItem[] = [
  {
    id: "lead-01",
    organization: "Google Developer Groups, CIT",
    position: "Secretary",
    duration: "December 2025 – June 2026",
    focus: "Leading executive operations, technical developer summits, workshop schedules, and student developer outreach."
  },
  {
    id: "lead-02",
    organization: "Google Developer Groups, CIT",
    position: "Design Lead",
    duration: "September 2025 – November 2025",
    focus: "Directing the visual design language, event branding assets, UI collateral, and creative promotional campaigns."
  },
  {
    id: "lead-03",
    organization: "Student Developers Cell, CIT",
    position: "Digital Illustrator",
    duration: "September 2024 – August 2025",
    focus: "Creating vector graphics, digital editorial illustrations, and interactive visual storyboards for campus software products."
  }
];
