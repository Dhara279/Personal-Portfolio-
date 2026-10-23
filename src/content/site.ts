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
  /** Official logo file (public/logos). Without one, the letter tile is shown. */
  logo?: LogoImage;
  badgeTone: "sage" | "sand" | "blush";
  expandedText: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  grade: string;
  icon: "Crown" | "GraduationCap";
  /** Official logo file (public/logos). Without one, the icon is shown. */
  logo?: LogoImage;
}

/** Display size of a logo in CSS pixels (keeps its original aspect ratio). */
export interface LogoImage {
  src: string;
  width: number;
  height: number;
}

export const siteConfig = {
  name: "Dhara Patadia",
  monogram: "DP",
  title: "Dhara Patadia · AI Strategist | Product Owner | AI Operations",
  roleSubtitle: "AI Strategist | Product Owner | AI Operations",
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
    subtitle: "AI Strategist | Product Owner | AI Operations",
    tagline:
      "I connect business needs with practical AI solutions - from shaping product direction to delivery and day-to-day operations.",
    primaryCta: { label: "Explore my work", href: "#work" },
    secondaryCta: { label: "View CV", href: "/Dhara_Patadia_CV.pdf" },
  },

  stats: [
    {
      id: "stat-strategy",
      tone: "sand",
      icon: "Layers",
      iconColor: "rust",
      value: "AI Strategy",
      label: "Pre-built recommendation templates to guide model training.",
    },
    {
      id: "stat-mlense",
      tone: "sage",
      icon: "Rocket",
      iconColor: "ink",
      value: "12 weeks",
      numericTarget: 12,
      suffix: " weeks",
      label: "MLense roadmap to production",
    },
    {
      id: "stat-datapoints",
      tone: "blush",
      icon: "Database",
      iconColor: "ink",
      value: "~5,000",
      prefix: "~",
      numericTarget: 5000,
      label: "Data points reviewed monthly at Amazon",
    },
    {
      id: "stat-msc",
      tone: "sand",
      icon: "GraduationCap",
      iconColor: "ink",
      value: "MSc · Distinction",
      label: "Big Data Science",
    },
  ] as StatItem[],

  about: {
    eyebrow: "ABOUT",
    heading: "From strategy and product vision to reliable AI.",
    paragraph:
      "I work across AI strategy, product delivery, data quality and adoption. My experience spans launching MLense at Data Pixel and supporting multimodal machine-learning data at Amazon. At MLense, my strategy work included developing pre-built recommendation templates to guide model training.",
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
          "MVP scoping and roadmaps",
          "Sprint planning and acceptance criteria",
          "Change requests and user feedback loops",
        ],
      },
      {
        id: "exp-ops",
        tone: "sage",
        icon: "Settings",
        title: "AI Operations",
        lines: [
          "Develop pre-built recommendation templates to guide model training",
          "Translate AI strategy into practical workflows",
          "Support data quality and resolve annotation edge cases",
        ],
      },
      {
        id: "exp-process",
        tone: "sand",
        icon: "BarChart3",
        title: "Process Improvement",
        lines: [
          "Business needs into requirements",
          "Impact analysis and implementation plans",
          "Pilot-first rollout",
        ],
      },
      {
        id: "exp-collab",
        tone: "sage",
        icon: "Users",
        title: "Stakeholder Collaboration",
        lines: [
          "Requirements gathering and client demos",
          "Presentations for technical and non-technical audiences",
          "Onboarding and mentoring",
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
    viewAllCta: { label: "View all work", href: "/work" },
    items: [
      {
        id: "work-mlense",
        number: "01",
        slug: "mlense",
        tone: "blush",
        title: "MLense",
        subtitle: "No-code AutoML product launch",
        meta: "Roadmap to production in 12 weeks.",
        ctaText: "View case study",
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
        ctaText: "View case study",
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
        ctaText: "View case study",
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
        logo: { src: "/logos/companies/amazon.svg", width: 54, height: 16 },
        badgeTone: "sage",
        expandedText:
          "Monthly multimodal annotation and quality review, supporting machine-learning models with high-quality data across audio, image, video and text. Work with cross-functional teams to resolve edge cases and improve data quality at scale.",
      },
      {
        id: "exp-datapixel",
        company: "Data Pixel",
        role: "AI Product Lead",
        dates: "Nov 2024 – Nov 2025",
        monogram: "D",
        logo: { src: "/logos/companies/data-pixel.png", width: 28, height: 25 },
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
        logo: { src: "/logos/companies/satv-script.png", width: 54, height: 17 },
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
        logo: { src: "/logos/education/qmul.svg", width: 87, height: 23 },
      },
      {
        id: "edu-atmiya",
        institution: "Atmiya University",
        degree: "B.Tech Computer Engineering",
        grade: "First Class with Distinction",
        icon: "GraduationCap",
        logo: { src: "/logos/education/atmiya.png", width: 30, height: 34 },
      },
    ] as EducationItem[],
  },

  contact: {
    eyebrow: "CONTACT",
    heading: "Let’s talk about better AI strategies and products.",
    email: "patadiadhara79@gmail.com",
    linkedInLabel: "LinkedIn",
    linkedInUrl: "https://www.linkedin.com/in/dhara-patadia-617947188",
    cvLabel: "View CV",
    location: "Cambridge, UK",
  },

  footer: {
    name: "Dhara Patadia",
    meta: "AI Strategist | Product Owner | AI Operations · Cambridge, UK",
  },
};
