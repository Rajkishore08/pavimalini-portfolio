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

export interface AreaOfInterestItem {
  id: string;
  title: string;
  description: string;
  icon: string;
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

// Configurable Links
export const CONFIG = {
  LINKEDIN_URL: "https://linkedin.com/in/pavimalini-t",
  GITHUB_URL: "https://github.com/pavimalini-t",
  TECHNO_TENANT_GITHUB: "",
  TECHNO_TENANT_DEMO: "",
  CITY_TWIN_GITHUB: "",
  CITY_TWIN_DEMO: "",
  STUDENT_ANALYTICS_GITHUB: "",
  STUDENT_ANALYTICS_DEMO: "",
  PRIVASEC_GITHUB: "",
  PRIVASEC_DEMO: "",
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
    "AI & Full-Stack Developer",
    "Product Designer",
    "Product Innovation & Research"
  ],
  hero: {
    eyebrow: "HELLO, I'M PAVIMALINI",
    headingMain: "Designing experiences.",
    headingHighlight: "Building intelligent",
    headingEnd: "digital solutions.",
    subheading:
      "AI and Full-Stack Developer with hands-on experience in building web applications, AI-powered solutions, and scalable software products using React, TypeScript, Node.js, and Firebase. Experienced in end-to-end product development, rapid prototyping, and integrating AI into practical applications."
  },
  about: {
    title: "A little about me",
    subtitle: "AI and Full-Stack Developer passionate about research, product innovation, and real-world solutions",
    paragraph1:
      "AI and Full-Stack Developer with hands-on experience in building web applications, AI-powered solutions, and scalable software products using React, TypeScript, Node.js, and Firebase. Experienced in end-to-end product development, rapid prototyping, and integrating AI into practical applications.",
    paragraph2:
      "Passionate about research, emerging technologies, product innovation, and building solutions that address real-world problems. Currently pursuing MSc Software Systems [Integrated] at Coimbatore Institute of Technology with an 8.16 CGPA.",
    pillars: [
      {
        title: "AI & Full-Stack Developer",
        desc: "Building scalable web apps, RESTful APIs, and AI-powered solutions with React, TypeScript, Node.js, and Firebase.",
        icon: "Layers"
      },
      {
        title: "Product Designer",
        desc: "Designing responsive website layouts for desktop and mobile platforms, focusing on usability, visual consistency, and user experience with Figma.",
        icon: "Palette"
      },
      {
        title: "Research & Product Innovation",
        desc: "Passionate about research, emerging technologies, digital twins, and building intelligent solutions that solve real-world problems.",
        icon: "Sparkles"
      }
    ]
  }
};

/**
 * AREAS OF INTEREST
 * Directly from the official resume
 */
export const AREAS_OF_INTEREST: AreaOfInterestItem[] = [
  {
    id: "interest-01",
    title: "Full Stack Development & UI/UX",
    description: "Designing responsive, intuitive user interfaces and architecting high-throughput, maintainable frontend and backend systems.",
    icon: "Layers"
  },
  {
    id: "interest-02",
    title: "AI and Intelligent System",
    description: "Applying machine learning, Gemini AI LLM reasoning, anomaly detection, and predictive analytics to solve complex challenges.",
    icon: "Brain"
  },
  {
    id: "interest-03",
    title: "Product Development and Research Innovation",
    description: "Iterating from concept to deployment with rapid prototyping, 3D digital twins, and privacy-preserving cyber defense architectures.",
    icon: "Sparkles"
  },
  {
    id: "interest-04",
    title: "Database Management",
    description: "Designing optimized relational schemas, NoSQL document models, and real-time synchronization pipelines with MySQL, PostgreSQL, and Supabase.",
    icon: "Database"
  }
];

/**
 * SKILLS & TECHNOLOGIES
 * STRICT REQUIREMENT: Only skills explicitly mentioned in the resume:
 * Languages: Python, C++
 * Frameworks: React, Node.js, Express.js, FastAPI
 * Databases: MySQL, Supabase
 * Tools: PowerBI, Git, GitHub, Figma
 */
export const SKILLS_DATA: SkillItem[] = [
  // Programming Languages
  {
    name: "Python",
    category: "Programming Languages",
    description: "Backend architectures, machine learning models, FastAPI services, and AI data processing",
    docUrl: "https://www.python.org/doc/",
    iconName: "python"
  },
  {
    name: "C++",
    category: "Programming Languages",
    description: "Algorithmic problem-solving, high-performance computing, data structures, and system fundamentals",
    docUrl: "https://en.cppreference.com/",
    iconName: "cpp"
  },
  // Frameworks
  {
    name: "React",
    category: "Frameworks",
    description: "Component-driven frontend architecture, hooks, and reactive user interfaces",
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
    description: "Fast, minimalist web framework for RESTful microservices and routing logic",
    docUrl: "https://expressjs.com/",
    iconName: "express"
  },
  {
    name: "FastAPI",
    category: "Frameworks",
    description: "High-performance modern Python web framework for asynchronous ML & AI microservices",
    docUrl: "https://fastapi.tiangolo.com/",
    iconName: "fastapi"
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
    name: "PowerBI",
    category: "Tools",
    description: "Business intelligence reporting, interactive dashboards, and executive data visualizations",
    docUrl: "https://powerbi.microsoft.com/",
    iconName: "powerbi"
  },
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
    duration: "Jun 2025 – Nov 2025",
    description:
      "Architected a scalable POS and inventory management platform using Next.js, React, and Supabase implementing optimized billing workflows, automated GST calculation, UPI QR payments, and real-time inventory tracking.",
    responsibilities: [
      "Architected a scalable POS and inventory management platform using Next.js, React, and Supabase implementing optimized billing workflows, automated GST calculation, UPI QR payments, and real-time inventory tracking.",
      "Engineered RBAC, low-stock alerts, customer loyalty and credit management, and automated WhatsApp receipts, enabling a streamlined, paperless checkout experience."
    ],
    tags: [
      "Next.js",
      "React",
      "Supabase",
      "POS",
      "Inventory Management",
      "GST Calculation",
      "UPI Payments",
      "RBAC",
      "WhatsApp Receipts"
    ],
    companyUrl: "https://createdigital.in"
  },
  {
    id: "exp-02",
    company: "Snippet Script",
    role: "Product Designer",
    duration: "Jan 2026 – Mar 2026",
    description:
      "Designed responsive website layouts for desktop and mobile platforms, focusing on usability, visual consistency, and user experience.",
    responsibilities: [
      "Designed responsive website layouts for desktop and mobile platforms, focusing on usability, visual consistency, and user experience.",
      "Created and iterated on UI/UX designs and prototypes, incorporating design improvements based on feedback and usability considerations."
    ],
    tags: [
      "UI/UX Design",
      "Figma",
      "Responsive Layouts",
      "User Experience",
      "Prototyping",
      "Design Systems"
    ]
  },
  {
    id: "exp-03",
    company: "TIA",
    role: "Full Stack Developer Intern",
    location: "Coimbatore, Tamil Nadu",
    duration: "Mar 2024 – May 2024",
    description:
      "Developed responsive web application features using Node.js, Express.js, and MongoDB, designing RESTful APIs and securing user access with JWT authentication.",
    responsibilities: [
      "Developed responsive web application features using Node.js, Express.js, and MongoDB.",
      "Designed and implemented RESTful APIs to enable seamless communication between frontend and backend systems.",
      "Integrated JWT-based authentication and Joi validation to ensure secure user access and data integrity."
    ],
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "JWT Authentication",
      "Joi Validation",
      "Git"
    ]
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "techno-tenant",
    title: "TechnoTenant",
    category: "Full Stack & Cloud PWA",
    tagline: "Property & Rent Management Dashboard",
    description:
      "Developed a property and rent management application enabling landlords to manage multiple properties, tenants, rent collections, pending balances, expenses, and financial analytics through an interactive dashboard.",
    toolsUsed: [
      "React",
      "TypeScript",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Hosting",
      "Progressive Web App (PWA)"
    ],
    features: [
      "Developed a property and rent management application enabling landlords to manage multiple properties, tenants, rent collections, pending balances, expenses, and financial analytics through an interactive dashboard",
      "Implemented tenant-wise payment tracking, partial rent payments, maintenance expense management, and real-time financial summaries to simplify day-to-day rental operations",
      "Integrated Firebase Authentication, Cloud Firestore real-time synchronization, and Firebase Hosting",
      "Designed Progressive Web App (PWA) technologies ensuring offline availability, fast load speeds, and cross-platform installation"
    ],
    githubUrl: CONFIG.TECHNO_TENANT_GITHUB,
    liveDemoUrl: CONFIG.TECHNO_TENANT_DEMO,
    hasCustomMockup: true,
    image: "/images/techno-tenant.png"
  },
  {
    id: "city-twin",
    title: "City Twin",
    category: "3D Digital Twin & AI/ML",
    tagline: "Underground Infrastructure 3D Visualization & Anomaly Detection",
    description:
      "Developed an interactive 3D digital twin platform to visualize underground utility networks, monitor IoT sensor data, detect infrastructure anomalies using AI/ML, and simulate scenarios through AR/VR.",
    toolsUsed: [
      "React",
      "TypeScript",
      "3D Visualization",
      "IoT Sensors",
      "AI/ML",
      "AR/VR",
      "Digital Twin Technology"
    ],
    features: [
      "Developed an interactive 3D digital twin platform to visualize underground utility networks in high spatial fidelity",
      "Integrated real-time IoT sensor telemetry monitoring across pressure, flow rate, and subterranean structural indicators",
      "Engineered AI/ML anomaly detection models to detect infrastructure anomalies and mitigate potential utility hazards",
      "Implemented scenario simulations through AR/VR for immersive field inspections and data-driven infrastructure management"
    ],
    githubUrl: CONFIG.CITY_TWIN_GITHUB,
    liveDemoUrl: CONFIG.CITY_TWIN_DEMO,
    hasCustomMockup: true
  },
  {
    id: "student-academic-analytics",
    title: "Student Academic Performance Analytics Platform",
    category: "AI & Predictive Analytics",
    tagline: "ML Backlog Risk Prediction & Gemini-Powered Academic Advisor",
    description:
      "Developed an academic analytics platform to monitor student performance, identify learning gaps, predict examination outcomes, and generate early warning alerts through interactive dashboards.",
    toolsUsed: [
      "Python",
      "React",
      "FastAPI",
      "Scikit-learn",
      "SQLite",
      "Google Gemini API"
    ],
    features: [
      "Processed an extensive dataset covering 2,000 students and 15,000 academic records for multi-semester performance analytics",
      "Implemented Random Forest models achieving 93.4% accuracy in backlog risk classification and examination outcome forecasting",
      "Integrated a Gemini-powered AI academic advisor for conversational guidance, personalized study recommendations, and tailored intervention strategies",
      "Designed real-time early warning alert dashboards to help educators identify learning gaps and support data-driven academic decisions"
    ],
    githubUrl: CONFIG.STUDENT_ANALYTICS_GITHUB,
    liveDemoUrl: CONFIG.STUDENT_ANALYTICS_DEMO,
    hasCustomMockup: true
  },
  {
    id: "privasec",
    title: "PRIVASEC – Cyber Defense Platform",
    category: "Cybersecurity & Intelligent Systems",
    tagline: "Privacy-Preserving Intelligent Defense & PII Anomaly Detection",
    description:
      "Developed an integrated cyber-defense platform featuring automated PII detection and masking, ML-based anomaly detection using Isolation Forest, risk scoring, adaptive MFA, and incident response.",
    toolsUsed: [
      "React",
      "TypeScript",
      "Python (FastAPI)",
      "PostgreSQL",
      "Redis",
      "Scikit-learn",
      "Microsoft Presidio",
      "AES-256-GCM",
      "Docker"
    ],
    features: [
      "Automated sensitive PII detection and real-time masking using Microsoft Presidio and cryptographic AES-256-GCM encryption",
      "Engineered ML-based anomaly detection using Isolation Forest for behavioral deviation and threat detection",
      "Implemented dynamic risk scoring engine triggering adaptive multi-factor authentication (MFA) and automated incident response",
      "Developed high-throughput asynchronous services using Python (FastAPI), PostgreSQL, Redis caching, and Docker containerization"
    ],
    githubUrl: CONFIG.PRIVASEC_GITHUB,
    liveDemoUrl: CONFIG.PRIVASEC_DEMO,
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
    title: "Winner – HackVerse 5.0 (Avalanche Track)",
    organization: "NITK, Surathkal",
    location: "Surathkal, Karnataka",
    year: "HackVerse 5.0",
    type: "hackathon"
  },
  {
    id: "ach-03",
    title: "Runner-Up – CryptoShield 2k24 Hackathon",
    organization: "Amrita Vishwa Vidyapeetham",
    location: "Chennai, Tamil Nadu",
    year: "2024",
    type: "hackathon"
  },
  {
    id: "ach-04",
    title: "Winner – Altruisty Design Challenge",
    organization: "Altruisty",
    year: "Design Challenge",
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
    duration: "Dec 2025 – June 2026",
    focus: "Coordinated club activities, managed team operations, and supported the planning and execution of technical events and community initiatives."
  },
  {
    id: "lead-02",
    organization: "Google Developer Groups, CIT",
    position: "Design Lead",
    duration: "Sep 2025 – Nov 2025",
    focus: "Led creative design initiatives and visual content creation for event promotions, social media, and club branding."
  },
  {
    id: "lead-03",
    organization: "Student Developers Cell, CIT",
    position: "Digital Illustrator",
    duration: "Sep 2024 – Aug 2025",
    focus: "Created digital illustrations and visual assets for technical events, promotional materials, and student activities."
  },
  {
    id: "lead-04",
    organization: "EBSB Club, CIT",
    position: "Creative Head",
    duration: "Sep 2024 – Aug 2025",
    focus: "Managed creative initiatives for club events, cultural activities, and promotional campaigns."
  }
];
