export interface CaseStudyMeta {
  role: string;
  timeline: string;
  team: string;
  status: string;
}

export interface CaseStudyOverviewItem {
  label: string;
  text: string;
}

export interface CaseStudySection {
  id: string;
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  notice?: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
  note?: string;
}

export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tone: "blush" | "sage" | "sand";
  summary: string;
  meta: CaseStudyMeta;
  overview: CaseStudyOverviewItem[];
  sections: CaseStudySection[];
  metrics: CaseStudyMetric[];
  visualType: "mlense" | "amazon" | "msc";
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "mlense",
    number: "01",
    shortTitle: "MLense",
    title: "MLense: No-code AutoML product launch",
    tone: "blush",
    summary:
      "Taking a no-code AutoML platform from proof of concept to production launch on Google Cloud in 12 weeks.",
    meta: {
      role: "AI Product Lead, Data Pixel Ltd",
      timeline: "Nov 2024 – Nov 2025",
      team: "2 developers + a 5-person marketing agency",
      status: "Launched: v1.0 on Google Cloud",
    },
    overview: [
      {
        label: "The problem",
        text: "Model building was slow, a problem I saw first-hand. MLense set out to let business analysts and domain experts train and explain models in the browser, without coding.",
      },
      {
        label: "The approach",
        text: "I built the roadmap around that problem, shipped a working MVP in month one, then ran six two-week sprints, each with agreed scope and acceptance criteria.",
      },
      {
        label: "The impact",
        text: "MLense went from proof of concept (v0.1) to production launch on Google Cloud (v1.0), with 70 automated tests passing and 6 security issues fixed.",
      },
    ],
    sections: [
      {
        id: "context",
        heading: "Context",
        paragraphs: [
          "Data Pixel Ltd was a UK start-up building no-code AI tools for business users. I owned its product, MLense: a no-code AutoML platform covering 7 machine-learning task types, built for business analysts and domain experts who don't code. I led 2 developers and a 5-person marketing agency.",
        ],
      },
      {
        id: "how-we-delivered",
        heading: "How we delivered",
        paragraphs: [
          "We ran delivery in 6 two-week sprints, each with agreed scope and acceptance criteria. I ran client demos and logged every change request in writing, from new features to UX fixes.",
        ],
      },
      {
        id: "what-set-mlense-apart",
        heading: "What set MLense apart",
        bullets: [
          "Gemini-powered recommendations that pre-build a model pipeline from an uploaded dataset.",
          "An assistant that explains results in plain English.",
        ],
      },
      {
        id: "built-to-be-self-serve",
        heading: "Built to be self-serve",
        bullets: [
          "4 pipeline templates, from beginner to expert.",
          "An in-platform documentation portal.",
          "An in-app feedback centre for bug reports and feature requests.",
          "An admin dashboard to review them.",
        ],
      },
      {
        id: "quality-and-go-to-market",
        heading: "Quality and go-to-market",
        paragraphs: [
          "MLense launched with 70 automated tests passing and 6 security issues fixed.",
          "I defined 3 target segments, led by business analysts and domain experts without coding skills, and wrote a 5-phase go-to-market plan, from LinkedIn content to performance partners. After a free launch, Pro and Team pricing was planned at US$29 and US$99 a month.",
        ],
      },
    ],
    metrics: [
      { value: "12 weeks", label: "Proof of concept to production", note: "v0.1 → v1.0" },
      { value: "7", label: "ML task types", note: "In the browser, no code" },
      { value: "70", label: "Automated tests", note: "Passing at launch" },
      { value: "6", label: "Security issues", note: "Fixed before launch" },
    ],
    visualType: "mlense",
  },
  {
    slug: "amazon-guidance",
    number: "02",
    shortTitle: "Amazon",
    title: "Amazon: Improving how teams share resolved issues",
    tone: "sage",
    summary:
      "A proposal to get resolved issues into the guidance teams work from, faster.",
    meta: {
      role: "Senior ML Data Associate II, Amazon (Cambridge, UK)",
      timeline: "Nov 2025 – Present",
      team: "Proposal author · impact mapped for 4 teams",
      status: "Proposal under review",
    },
    overview: [
      {
        label: "The problem",
        text: "Resolved SIM (issue-resolution) tickets took too long to reach the convention pages teams work from.",
      },
      {
        label: "The approach",
        text: "I proposed linking each SIM to its task on the convention page, so every team works from one current source of guidance.",
      },
      {
        label: "The impact",
        text: "The proposal is under review. Estimated gain: 80–85% in how well guidance is shared.",
      },
    ],
    sections: [
      {
        id: "context",
        heading: "Context",
        paragraphs: [
          "I annotate and quality-check about 5,000 multimodal training data points a month (audio, video, image and text) and resolve edge cases that fall outside the annotation guidelines. I noticed that resolved SIM tickets took too long to reach the convention pages teams work from.",
        ],
      },
      {
        id: "the-proposal",
        heading: "The proposal",
        paragraphs: [
          "Link each SIM to its task on the convention page, so every team works from one current source of guidance.",
        ],
      },
      {
        id: "the-change-plan",
        heading: "The change plan",
        bullets: [
          "Impact and benefits mapped for 4 teams.",
          "A 6-step implementation plan.",
          "A pilot on 1 live workflow before full rollout.",
          "A low-build alternative.",
        ],
      },
      {
        id: "feedback-loop-for-managers",
        heading: "A feedback loop for managers",
        paragraphs: [
          "With SIMs visible during L1 audits, tasks that cause repeated overturns show up early and can be fixed for the whole team in a huddle.",
        ],
      },
      {
        id: "notice",
        notice:
          "This proposal is under review. The impact figure is an estimate, and the diagram is conceptual.",
      },
    ],
    metrics: [
      { value: "4", label: "Teams", note: "Impact and benefits mapped" },
      { value: "6 steps", label: "Implementation plan", note: "Pilot first" },
      { value: "1", label: "Live workflow", note: "Piloted before full rollout" },
      { value: "80–85%", label: "Estimated gain", note: "In how well guidance is shared · under review" },
    ],
    visualType: "amazon",
  },
  {
    slug: "msc-research",
    number: "03",
    shortTitle: "MSc Research",
    title: "MSc Research: Multimodal content prediction",
    tone: "sand",
    summary:
      "Predicting YouTube view counts from metadata and LLM-scored transcripts.",
    meta: {
      role: "MSc dissertation",
      timeline: "Sep 2023 – Sep 2024",
      team: "Queen Mary University of London",
      status: "Completed · MSc Big Data Science, Distinction",
    },
    overview: [
      {
        label: "The question",
        text: "Could LLM-scored transcripts predict a YouTube video's view count better than metadata alone?",
      },
      {
        label: "The approach",
        text: "I hand-collected 500 videos and designed an 11-question LLM scoring framework that turned transcripts into model features, then compared 3 approaches.",
      },
      {
        label: "The result",
        text: "The LLM-scored model beat both the metadata-only baseline and a visual-only deep learning model, with 79% lower average error than the metadata-only baseline.",
      },
    ],
    sections: [
      {
        id: "the-dissertation",
        heading: "The dissertation",
        paragraphs: [
          "Multimodal AI for Predicting the Success of Content Creation: my MSc Big Data Science dissertation at Queen Mary University of London, awarded with Distinction.",
        ],
      },
      {
        id: "scoring-framework",
        heading: "An 11-question LLM scoring framework",
        paragraphs: [
          "I designed an 11-question framework (clarity, engagement, credibility and more) that used an LLM to score each transcript. The scores became features for the prediction model.",
        ],
      },
      {
        id: "three-approaches-compared",
        heading: "Three approaches compared",
        bullets: [
          "A metadata-only baseline.",
          "A visual-only deep learning model.",
          "A model using metadata plus LLM-scored transcripts.",
        ],
      },
      {
        id: "result",
        heading: "Result",
        paragraphs: [
          "The LLM-scored model beat both the metadata-only baseline and the visual-only model, with 79% lower average error than the metadata-only baseline.",
        ],
      },
    ],
    metrics: [
      { value: "79%", label: "Lower average error", note: "Vs the metadata-only baseline" },
      { value: "500", label: "Videos", note: "Hand-collected" },
      { value: "11", label: "Scoring questions", note: "Clarity, engagement, credibility and more" },
      { value: "3", label: "Approaches compared", note: "Metadata, visual, LLM-scored" },
    ],
    visualType: "msc",
  },
];
