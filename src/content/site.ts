export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  tone: "sand" | "sage" | "blush";
  icon: "Rocket" | "Layers" | "Database" | "GraduationCap";
  iconColor: "rust" | "ink";
  value: string;
  numericTarget?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface ExpertiseItem {
  id: string;
  tone: "blush" | "sage" | "sand";
  icon: "Target" | "Settings" | "BarChart3" | "Users";
  title: string;
  lines: string[];
}

export interface WorkPreviewItem {
  id: string;
  number: string;
  slug: string;
  tone: "blush" | "sage" | "sand";
  title: string;
  subtitle: string;
  meta: string;
  ctaText: string;
  ctaVariant: "primary" | "outline";
  illustrationType: "mlense" | "amazon" | "msc";
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  dates: string;
  monogram: string;
  badgeTone: "sage" | "sand" | "blush";
  expandedText: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  grade: string;
  icon: "Crown" | "GraduationCap";
}

export const siteConfig = {
  name: "Dhara Patadia",
  monogram: "DP",
  title: "Dhara Patadia — AI Product Ownership & Operations",
  roleSubtitle: "AI Product Ownership & Operations",
  tagline: "Turning complex AI ideas into products people can use.",
  location: "Cambridge, UK",
  email: "patadiadhara79@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/dhara-patadia-617947188",
  cvPath: "/Dhara_Patadia_CV.pdf",
  seoDescription:
    "AI product lead in Cambridge, UK, turning complex AI ideas into products people can use: MLense launch, AI operations at Amazon, MSc Big Data Science (Distinction).",

  navItems: [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],

  hero: {
    location: "Cambridge, UK",
    nameLine1: "Dhara",
    nameLine2: "Patadia",
    subtitle: "AI Product Ownership & Operations",
    tagline: "Turning complex AI ideas into products people can use.",
    primaryCta: { label: "Explore my work →", href: "#work" },
    secondaryCta: { label: "View CV", href: "/Dhara_Patadia_CV.pdf" },
  },

  stats: [
    {
      id: "stat-mlense",
      tone: "sand",
      icon: "Rocket",
      iconColor: "rust",
      value: "12 weeks",
      numericTarget: 12,
      suffix: " weeks",
      label: "MLense production launch",
    },
    {
      id: "stat-tasks",
      tone: "sage",
      icon: "Layers",
      iconColor: "ink",
      value: "7",
      numericTarget: 7,
      label: "ML task types",
    },
    {
      id: "stat-datapoints",
      tone: "blush",
      icon: "Database",
      iconColor: "ink",
      value: "~5,000",
      prefix: "~",
      numericTarget: 5000,
      label: "Data points reviewed monthly",
    },
    {
      id: "stat-msc",
      tone: "sand",
      icon: "GraduationCap",
      iconColor: "ink",
      value: "Distinction",
      label: "MSc Big Data Science",
    },
  ] as StatItem[],

  about: {
    eyebrow: "ABOUT",
    heading: "From product vision to reliable AI.",
    paragraph:
      "I work across AI product delivery, data quality and adoption. My experience spans launching MLense at Data Pixel and supporting multimodal machine-learning data at Amazon.",
    cardTitle: "Writing, community and curiosity.",
    cardText:
      "Outside of work, I enjoy exploring ideas through writing, being part of community initiatives and staying curious. It helps me bring a broader perspective to the work I do.",
    pills: ["Author", "Tennis", "Baking"],
  },

  expertise: {
    eyebrow: "EXPERTISE & TOOLS",
    heading: "What I bring to the table.",
    cards: [
      {
        id: "exp-po",
        tone: "blush",
        icon: "Target",
        title: "Product Ownership",
        lines: [
          "Define product strategy",
          "Prioritise roadmaps",
          "Drive delivery and adoption",
        ],
      },
      {
        id: "exp-ops",
        tone: "sage",
        icon: "Settings",
        title: "AI Operations",
        lines: [
          "Support data quality",
          "Manage annotation workflows",
          "Enable scalable operations",
        ],
      },
      {
        id: "exp-process",
        tone: "sand",
        icon: "BarChart3",
        title: "Process Improvement",
        lines: [
          "Identify bottlenecks",
          "Streamline workflows",
          "Build practical solutions",
        ],
      },
      {
        id: "exp-collab",
        tone: "sage",
        icon: "Users",
        title: "Stakeholder Collaboration",
        lines: [
          "Work across technical and non-technical teams",
          "Align on goals and outcomes",
          "Support clear communication",
        ],
      },
    ] as ExpertiseItem[],
    toolsHeading: "Tools I work with:",
    tools: [
      "Notion",
      "Asana",
      "Excel",
      "PowerPoint",
      "Slack",
      "Teams",
      "ChatGPT",
      "Claude",
    ],
  },

  selectedWork: {
    eyebrow: "SELECTED WORK",
    heading: "Decisions. Delivery. Impact.",
    viewAllCta: { label: "View all work →", href: "/work" },
    items: [
      {
        id: "work-mlense",
        number: "01",
        slug: "mlense",
        tone: "blush",
        title: "MLense",
        subtitle: "No-code AutoML product launch",
        meta: "Roadmap to production in 12 weeks.",
        ctaText: "View case study →",
        ctaVariant: "primary",
        illustrationType: "mlense",
      },
      {
        id: "work-amazon",
        number: "02",
        slug: "amazon-guidance",
        tone: "sage",
        title: "Amazon",
        subtitle: "Improving how teams share resolved issues",
        meta: "Proposal under review. 4 teams mapped.",
        ctaText: "View case study →",
        ctaVariant: "outline",
        illustrationType: "amazon",
      },
      {
        id: "work-msc",
        number: "03",
        slug: "msc-research",
        tone: "sand",
        title: "MSc Research",
        subtitle: "Multimodal content prediction",
        meta: "500 videos, 79% lower average error vs metadata-only baseline.",
        ctaText: "View case study →",
        ctaVariant: "outline",
        illustrationType: "msc",
      },
    ] as WorkPreviewItem[],
  },

  experience: {
    eyebrow: "EXPERIENCE & EDUCATION",
    heading: "The journey so far.",
    workHeading: "Work experience",
    items: [
      {
        id: "exp-amazon",
        company: "Amazon",
        role: "Senior ML Data Associate II",
        dates: "Nov 2025 – Present",
        monogram: "A",
        badgeTone: "sage",
        expandedText:
          "Monthly multimodal annotation and quality review, supporting machine-learning models with high-quality data across audio, image, video and text. Work with cross-functional teams to resolve edge cases and improve data quality at scale.",
      },
      {
        id: "exp-datapixel",
        company: "Data Pixel",
        role: "AI Product Lead",
        dates: "Nov 2024 – Nov 2025",
        monogram: "DP",
        badgeTone: "blush",
        expandedText:
          "Owned MLense, a no-code AutoML platform covering 7 machine-learning task types. Led 2 developers and a 5-person marketing agency through 6 two-week sprints, taking the product from proof of concept to production launch on Google Cloud in 12 weeks.",
      },
      {
        id: "exp-satv",
        company: "Satv-Script",
        role: "Business Analyst Intern",
        dates: "Mar 2023 – Apr 2023",
        monogram: "S",
        badgeTone: "sand",
        expandedText:
          "Mapped use cases for a client's existing product and turned the findings into written summaries and presentations for the client team.",
      },
    ] as ExperienceItem[],

    educationHeading: "Education",
    education: [
      {
        id: "edu-qmul",
        institution: "Queen Mary University of London",
        degree: "MSc Big Data Science",
        grade: "Distinction",
        icon: "Crown",
      },
      {
        id: "edu-atmiya",
        institution: "Atmiya University",
        degree: "B.Tech Computer Engineering",
        grade: "First Class with Distinction",
        icon: "GraduationCap",
      },
    ] as EducationItem[],
  },

  contact: {
    eyebrow: "CONTACT",
    heading: "Let's talk about better AI products.",
    email: "patadiadhara79@gmail.com",
    linkedInLabel: "LinkedIn",
    linkedInUrl: "https://www.linkedin.com/in/dhara-patadia-617947188",
    cvLabel: "View CV",
    location: "Cambridge, UK",
  },

  footer: {
    name: "Dhara Patadia",
    meta: "AI Product Ownership & Operations · Cambridge, UK",
  },
};
