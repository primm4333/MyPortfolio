// ============================================================
// PRIMAL FERNANDO - PORTFOLIO DATA (UPDATED 2026)
// ============================================================

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_DATA = {
  name: 'Primal Fernando',
  tagline: 'Full Stack Developer',
  roles: [
    'Full Stack Developer',
    'MERN Stack Engineer',
    'Spring Boot Developer',
    'IoT Systems Builder',
    'AI/ML Enthusiast',
    'React Specialist',
  ],
  description:
    'Associate Full Stack Developer at Ollcode Pvt Ltd — architecting enterprise IoT systems, Spring Boot backends, and React frontends for clients across Singapore & Sri Lanka.',
  email: 'ashenprimal02@gmail.com',
  phone: '076 6094 071',
  linkedin: 'https://www.linkedin.com/in/primal-fernando-672972231',
  github: 'https://github.com/primm4333',
  resume: '/Primal_Fernando_Resume.pdf',
  location: 'Negombo, Sri Lanka',
};

export const ABOUT_DATA = {
  description: [
    "I'm Primal Fernando, a results driven Full Stack Developer currently contributing as Associate Full Stack Developer at Ollcode Pvt Ltd, building enterprise grade web and IoT applications for clients across Singapore and Sri Lanka.",
    'My stack spans the full spectrum: React & Spring Boot for production systems, MERN for rapid full-stack delivery, multi protocol IoT integration (BACnet, Modbus, SNMP), real time TimescaleDB pipelines, and AI-powered systems using YOLOv8 on Raspberry Pi.',
    "Final-year BSc (Hons) IT undergraduate at SLIIT (2026). I've shipped a 10,000+ signal-point IoT BMS to a Singapore engineering team, rescued critical production systems, and built AI road safety research from scratch.",
  ],
  stats: [
    { value: '10+', label: 'Projects Shipped' },
    { value: '15+', label: 'Technologies' },
    { value: '1.5+', label: 'Years at Ollcode' },
    { value: '2', label: 'Certifications' },
  ],
  image: null,
};

export const SKILLS_DATA = [
  {
    category: 'Frontend',
    icon: '🌐',
    color: 'accent',
    skills: ['React.js', 'React Native', 'React Vite', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'accent2',
    skills: ['Spring Boot', 'Node.js', 'Express.js', 'Java', 'Python', 'FastAPI', 'REST APIs'],
  },
  {
    category: 'Database & Streaming',
    icon: '🗄️',
    color: 'accent3',
    skills: ['TimescaleDB', 'MongoDB', 'PostgreSQL', 'MySQL', 'Apache Kafka', 'Redis'],
  },
  {
    category: 'IoT & Protocols',
    icon: '📡',
    color: 'accent',
    skills: ['BACnet', 'Modbus', 'SNMP', 'Raspberry Pi', 'GPS Integration', 'RBAC Engine'],
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    color: 'accent2',
    skills: ['YOLOv8 Nano', 'Python ML', 'AI Disease Prediction', 'Model Training', 'Edge AI', 'Claude Code'],
  },
  {
    category: 'Mobile & Tools',
    icon: '📱',
    color: 'accent3',
    skills: ['Kotlin', 'Android Studio', 'Git', 'GitHub', 'Postman', 'Docker', 'Swagger UI'],
  },
];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: 'Ollcode Pvt Ltd',
    role: 'Associate Full Stack Developer',
    period: 'January 2025 – Present',
    location: 'Sri Lanka (Clients: Singapore & Sri Lanka)',
    type: 'Full-time',
    description: [
      'Architected a custom IoT Building Management System (BMS) for a Singapore electrical engineering team — integrating BACnet, Modbus, and SNMP to manage 10,000+ real-time signal points across large commercial buildings.',
      'Engineered a fully dynamic, runtime-configurable RBAC (Role-Based Access Control) engine and designed a high-performance TimescaleDB schema for continuous time-series ingestion and historical analytics.',
      'Delivered MVP on schedule; application currently under live acceptance testing with the Singapore engineering team. Packaged as a standalone .exe for on-premise deployment.',
      'Rescued the Shop Eka product after a codebase incident: reverse-engineered missing Express.js API endpoints and migrated the frontend from HTML/CSS to React.js, preserving all original UI behavior.',
      'Modernized two Oryza Group hospitality websites (Kent Cottage & Banana Bunks) — converted server-rendered Express.js frontends to lightweight React applications, reducing page load latency, both delivered ahead of deadline.',
    ],
    technologies: ['Spring Boot', 'React.js', 'TimescaleDB', 'BACnet', 'Modbus', 'Kafka', 'Redis', 'RBAC', 'Express.js'],
    logo: null,
    current: true,
  },
];

export const PROJECTS_DATA = {
  workplace: [
    {
      id: 'wp-1',
      title: 'Custom IoT Building Management System — Tapro Singapore',
      description:
        'Enterprise-grade BMS interface for an electrical engineering team to centralize monitoring and control of IoT devices across large commercial buildings from a single dashboard.',
      longDesc:
        'A fully dynamic, enterprise-scale IoT BMS serving a Singapore electrical engineering team. Integrated multi-protocol IoT connectivity (BACnet, Modbus, SNMP) managing 10,000+ real-time signal points. Engineered a runtime-configurable RBAC engine, designed a high-performance TimescaleDB schema for time-series ingestion and historical analytics, and developed Excel-based bulk import/export. Packaged as a standalone .exe for on-premise deployment. MVP delivered on schedule — currently under live acceptance testing with the Singapore team.',
      technologies: ['Spring Boot', 'React.js', 'TimescaleDB', 'BACnet', 'Modbus', 'SNMP', 'Kafka', 'Redis', 'RBAC'],
      github: null,
      live: null,
      image: null,
      featured: true,
    },
    {
      id: 'wp-2',
      title: 'Shop Eka Platform Revamp',
      description:
        'Rescued a critical company product after a codebase incident caused partial backend loss. Reverse-engineered missing API endpoints and migrated the frontend from HTML/CSS to React.js.',
      longDesc:
        'After a sudden codebase incident destroyed part of the backend, reverse-engineered all missing Express.js API endpoints by analyzing the existing frontend behavior, then fully migrated the frontend from raw HTML/CSS to a modern React.js application — preserving every original UI element and workflow without downtime.',
      technologies: ['Express.js', 'React.js', 'REST APIs', 'Node.js'],
      github: null,
      live: null,
      image: null,
      featured: true,
    },
    {
      id: 'wp-3',
      title: 'Oryza Group Website Revamps — Kent Cottage & Banana Bunks',
      description:
        'Modernized two premium hospitality websites for Oryza Group by converting server-rendered Express.js frontends to lightweight React applications, cutting load latency, both delivered ahead of deadline.',
      longDesc:
        "Oryza Group's hospitality properties needed a fresh digital presence. Converted Kent Cottage (Nuwara Eliya) and Banana Bunks (Mirissa) from dynamic Express.js server-rendered sites to fully React-based SPAs — significantly reducing bundle size, improving page load speed, and enhancing long-term maintainability. Both delivered ahead of the client's deadline.",
      technologies: ['React.js', 'Express.js', 'Performance Optimization', 'JavaScript'],
      github: null,
      live: null,
      image: null,
      featured: false,
    },
  ],
  personal: [
    {
      id: 'ps-1',
      title: 'AI-Powered Road Hazard Detection & Mapping System',
      description:
        'Final-year research project: an intelligent IoT-driven road safety system that autonomously detects and crowdsources real-time road hazards using edge AI on Raspberry Pi.',
      longDesc:
        'An end-to-end IoT road safety platform. A Raspberry Pi 4 unit captures road images every 2 seconds, running a custom-trained YOLOv8 Nano model (merged 3 datasets for accuracy) to detect potholes, construction zones, and traffic incidents. GPS coordinates with TTL expiration logic auto-purge stale hazard reports. A React Native mobile app with a geofenced 2 km community validation system lets users accept/reject reports. Kafka & Redis handle real-time event streaming to a Python/MongoDB backend.',
      technologies: ['YOLOv8 Nano', 'Raspberry Pi 4', 'React Native', 'Python', 'MongoDB', 'Kafka', 'Redis', 'GPS'],
      github: null,
      live: null,
      image: null,
      featured: true,
    },
    {
      id: 'ps-2',
      title: 'Kafka & Redis High-Throughput Data Streaming System',
      description:
        'Stress-tested a massively parallel data pipeline using Apache Kafka and Redis caching, validating zero data loss under high-concurrency workloads persisted into TimescaleDB.',
      longDesc:
        'Engineered a high-concurrency data pipeline to master Kafka and Redis at scale. Simulated massively parallel nested-loop workloads producing thousands of simultaneous outputs, routing all data through Kafka topics and Redis caching layers into a TimescaleDB time-series database — achieving zero data loss and zero lag under extreme load.',
      technologies: ['Spring Boot', 'Apache Kafka', 'Redis', 'TimescaleDB', 'PostgreSQL', 'Java'],
      github: 'https://github.com/primm4333/loopsWithKafka',
      live: null,
      image: null,
      featured: true,
    },
    {
      id: 'ps-3',
      title: 'Microservices Architecture — Online Learning Platform',
      description:
        'Built a fully functional distributed learning platform with 6 independent Python FastAPI services orchestrated through an API gateway with per-service MongoDB isolation.',
      longDesc:
        'A hands-on distributed systems project demonstrating microservices architecture. Built 6 independent Python FastAPI services (user management, courses, content, payments, notifications, analytics) orchestrated through a central API gateway. Each service has its own MongoDB instance for data isolation. JWT token authentication, Swagger UI for endpoint testing, and full inter-service communication patterns.',
      technologies: ['Python', 'FastAPI', 'MongoDB', 'JWT', 'Swagger UI', 'API Gateway', 'Microservices', 'Claude Code'],
      github: 'https://github.com/primm4333/skillverse',
      live: null,
      image: null,
      featured: false,
    },
    {
      id: 'ps-4',
      title: 'Task Manager Mobile App',
      description:
        'A modern To-Do list Android application using Kotlin with SQLite persistence, full CRUD operations, and a polished Material Design UI exploring Kotlin–Java interoperability.',
      longDesc:
        'A feature-rich Kotlin task management app with SQLite local persistence. Supports task creation, editing, deletion, and status tracking with smooth Material Design UI transitions. Explored Kotlin–Java interoperability patterns throughout development.',
      technologies: ['Kotlin', 'Java', 'SQLite', 'Android Studio', 'Material Design', 'CRUD'],
      github: 'https://github.com/primm4333/Task-Management-Mobile-App',
      live: null,
      image: null,
      featured: false,
    },
  ],
  academic: [
    {
      id: 'ac-1',
      title: 'ElectriGen — Showroom Sales Management System',
      description:
        'Automated invoice generation, sales analytics, and email notification workflows for Devolca Electricals with PIN-secured record deletion and Postman-tested REST endpoints.',
      longDesc:
        'A comprehensive MERN stack showroom management system for Devolca Electricals. Features automated invoice creation with real-time calculations, email notification workflows via Nodemailer, PIN-based security for record deletion, and a full analytics dashboard. All REST API endpoints tested with Postman.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Nodemailer', 'PIN Verification', 'Postman'],
      github: 'https://github.com/senithudara/ElectriGen-ICS',
      live: null,
      image: null,
      featured: true,
    },
    {
      id: 'ac-2',
      title: 'MediZ — Smart Hospital Management System',
      description:
        'Patient record module with AI-driven symptom-based disease prediction for trainee physicians and automated PDF medical report generation.',
      longDesc:
        "Patient data management feature for a smart hospital system. Allows doctors to search patient records by name or NIC, review full medical history, and generate downloadable PDF reports. Includes an AI agent that predicts the most probable disease from 4 input symptoms — designed to assist trainee physicians in clinical decision-making.",
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AI Prediction', 'PDF Generation'],
      github: 'https://github.com/orgs/maha-gedara/repositories',
      live: null,
      image: null,
      featured: true,
    },
    {
      id: 'ac-3',
      title: 'SkillVerse — Social Learning Platform',
      description:
        'Full-featured social learning platform with post publishing, skills marketplace, Google OAuth authentication, developed leveraging Claude Code AI agent.',
      longDesc:
        'A social media-style learning platform built with Spring Boot backend and React Vite frontend. Features include post publishing, comment/like system, skills marketplace, user profile management, and Google OAuth authentication. Developed using Claude Code AI agent — embracing modern AI-assisted full-stack development workflows.',
      technologies: ['Spring Boot', 'React Vite', 'Tailwind CSS', 'Google OAuth', 'Claude Code', 'MongoDB'],
      github: 'https://github.com/orgs/maha-gedara/repositories',
      live: null,
      image: null,
      featured: true,
    },
    {
      id: 'ac-4',
      title: 'Car City — Mobile Car Racing Game',
      description:
        'Android car racing game with a real-world scoring system featuring live scores, persistent high-score tracking using Kotlin and SharedPreferences.',
      longDesc:
        'A Kotlin-based Android car game featuring smooth car animations, collision detection, difficulty scaling, real-time live score updates, and a persistent high-score leaderboard stored via Android SharedPreferences.',
      technologies: ['Kotlin', 'Android', 'SharedPreferences', 'Android Studio', 'Mobile Game'],
      github: 'https://github.com/primm4333/Car-City',
      live: null,
      image: null,
      featured: false,
    },
  ],
};

export const EDUCATION_DATA = [
  {
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    degree: 'BSc (Hons) in Information Technology',
    period: '2022 – 2026',
    description: 'Studying software engineering, distributed systems, databases, algorithms, and AI/ML. Final-year research on IoT-based road hazard detection using YOLOv8.',
    logo: null,
  },
  {
    institution: 'Maris Stella College, Negombo',
    degree: 'G.C.E. Advanced Level',
    period: '2021',
    description: 'Combined Maths (S), Physics (S), ICT (C)',
    logo: null,
  },
  {
    institution: 'Maris Stella College, Negombo',
    degree: 'G.C.E. Ordinary Level',
    period: '2018',
    description: "Achieved 8A's and 1B",
    logo: null,
  },
];

export const CERTIFICATIONS_DATA = [
  {
    title: 'AI and Machine Learning',
    issuer: 'Certification Authority',
    date: '2023',
    credentialUrl: null,
  },
  {
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    date: '2023',
    credentialUrl: null,
  },
];

export const REFERENCES_DATA = [
  {
    name: 'Damith Chinthaka Liyanaarachchi',
    role: 'Staff SDET Engineer',
    company: 'Circles (PVT) Ltd',
    email: 'damithroc@gmail.com',
    phone: '0752591160',
  },
  {
    name: 'Dr. Dinuka Wijendra',
    role: 'Senior Lecturer',
    company: 'Sri Lanka Institute of Information Technology',
    email: 'dinuka.w@sliit.lk',
    phone: null,
  },
];
