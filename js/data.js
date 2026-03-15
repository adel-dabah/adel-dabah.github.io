/**
 * data.js — All site content lives here.
 *
 * ┌─────────────────────────────────────────────────────────┐
 * │  This is the ONLY file you need to edit for content.    │
 * │  JS rendering logic lives in render.js (don't touch).  │
 * └─────────────────────────────────────────────────────────┘
 *
 * HOW TO:
 *   Disable a section  →  set  enabled: false
 *   Add an item        →  copy an object inside an array, change values
 *   Remove an item     →  delete the object (and its trailing comma)
 *   Reorder sections   →  change SECTIONS_ORDER array
 */

/* ── PROFILE ─────────────────────────────────────────────── */
const PROFILE = {
  name:     "Adel Dabah",
  role:     "Research Scientist · HPC · Combinatorial Optimization",
  photo:    "https://www.fz-juelich.de/profile/dabah_a/@@images/image-600-5e5fa7051aaa3a2fe86812d58f63f4dc.jpeg",
  bio:      `Research Scientist at <strong>Forschungszentrum Jülich</strong> (JSC),
             Jülich Supercomputing Centre, working in the ATML Accelerating Devices team.
             Focused on GPU-accelerated algorithms, HPC scientific applications, and
             combinatorial optimization for next-generation supercomputing architectures.`,
  location: "Jülich, Germany",
  email:    "a.dabah@fz-juelich.de",

  // type: "solid" | "outline"
  buttons: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=xGZCJkoAAAAJ&hl=en", type: "solid"   },
    { label: "LinkedIn",       url: "https://www.linkedin.com/in/adel-dabah-753939a6/",              type: "outline" },
  ],
};

/* ── STATS ───────────────────────────────────────────────── */
const STATS = {
  enabled: true,
  items: [
    { number: "21+",   label: "Publications" },
    { number: "138+",  label: "Citations"    },
    { number: "1,907", label: "Reads"        },
    { number: "10+",   label: "Yrs Research" },
  ],
};

/* ── RESEARCH INTERESTS ──────────────────────────────────── */
const INTERESTS = {
  enabled: true,
  // color: "blue" | "green" | "gold"
  tags: [
    { label: "High-Performance Computing",  color: "blue"  },
    { label: "Parallel Programming",        color: "blue"  },
    { label: "GPU Computing (CUDA)",        color: "blue"  },
    { label: "Combinatorial Optimization",  color: "green" },
    { label: "Job Shop Scheduling",         color: "green" },
    { label: "Metaheuristics & B&B",        color: "green" },
    { label: "Massive MIMO Detection",      color: "gold"  },
    { label: "Next-Gen Communications",     color: "gold"  },
    { label: "Evolutionary Algorithms",     color: "blue"  },
    { label: "Graph Edit Distance",         color: "green" },
  ],
  // Set to null to hide
  quote: `"Designing GPU-accelerated algorithms for optimization, AI, and decision-making at scale."`,
};

/* ── PUBLICATIONS ────────────────────────────────────────── */
const PUBLICATIONS = {
  enabled:    true,
  seeAllUrl:  "https://scholar.google.com/citations?user=xGZCJkoAAAAJ&hl=en",
  items: [
    {
      venue:   "Lecture Notes in CS · DIS 2025",
      year:    "2026",
      title:   "Learning-Based Approaches for Job Shop Scheduling Problems: A Review",
      authors: "Rihane K., <strong>Dabah A.</strong>, AitZai A.",
    },
    {
      venue:   "IEEE GLOBECOM 2023",
      year:    "2023",
      title:   "Efficient GPU-based Large MIMO Detection Algorithm for Next-Generation Communication Systems",
      authors: "<strong>Dabah A.</strong>, Rezki Z., Ltaief H., Keyes D., Alouini M.S.",
    },
    {
      venue:   "ISC High Performance 2023",
      year:    "2023",
      title:   "GPU-Based Low-Precision Detection Approach for Massive MIMO Systems",
      authors: "<strong>Dabah A.</strong>, Ltaief H., Rezki Z., Alouini M.S., Keyes D.",
    },
    {
      venue:   "IEEE IPDPS 2023",
      year:    "2023",
      title:   "Signal Detection for Large MIMO Systems Using Sphere Decoding on FPGAs",
      authors: "Hassan M.W., <strong>Dabah A.</strong>, Ltaief H., Fahmy S.A.",
    },
    {
      venue:   "SC '24 · JUPITER Benchmark",
      year:    "2024",
      title:   "Application-Driven Exascale: The JUPITER Benchmark Suite",
      authors: "Herten A., ..., <strong>Dabah A.</strong>, et al.",
    },
    {
      venue:   "Pattern Recognition Letters",
      year:    "2021",
      title:   "Efficient Approximate Approach for Graph Edit Distance Problem",
      authors: "<strong>Dabah A.</strong>, Chegrane I., Yahiaoui S. · Vol. 151, pp. 310–316",
    },
    {
      venue:   "Soft Computing · Springer",
      year:    "2019",
      title:   "Efficient Parallel Tabu Search for the Blocking Job Shop Scheduling Problem",
      authors: "<strong>Dabah A.</strong>, Bendjoudi A., AitZai A., Nouali-Taboudjemat N.",
    },
    {
      venue:   "IEEE IPDPS Workshops 2016",
      year:    "2016",
      title:   "GPU-Based Two Level Parallel B&B for the Blocking Job Shop Scheduling Problem",
      authors: "<strong>Dabah A.</strong>, Bendjoudi A., El Baz D., AitZai A.",
    },
  ],
};

/* ── EXPERIENCE & EDUCATION ──────────────────────────────── */
const EXPERIENCE = {
  enabled: true,
  // dot: "current" | "past" | "degree"
  items: [
    {
      year:  "2023–Now",
      title: "Research Scientist — ATML Accelerating Devices",
      where: "Forschungszentrum Jülich (JSC), Germany",
      desc:  "HPC scientific applications on next-generation supercomputing architectures, including the JUPITER exascale system.",
      dot:   "current",
    },
    {
      year:  "2021–2023",
      title: "Postdoctoral Fellow",
      where: "KAUST — CTL & ECRC, Saudi Arabia",
      desc:  "GPU-accelerated MIMO detection with Prof. Slim Alouini and Prof. David Keyes.",
      dot:   "past",
    },
    {
      year:  "2018–2021",
      title: "Researcher Fellow",
      where: "CERIST, Algiers, Algeria",
      desc:  "Research in combinatorial optimization and parallel computing methods.",
      dot:   "past",
    },
    {
      year:  "2014–2018",
      title: "Research Assistant & PhD Candidate USTHB",
      where: "CERIST + LAAS-CNRS, USTHB Algeria",
      desc:  "Parallel B&B and metaheuristics for scheduling; ",
      dot:   "past",
    },
    {
      year:  "2018",
      title: "PhD — Artificial Intelligence & Computer Science",
      where: "USTHB University, Algeria",
      desc:  "",
      dot:   "degree",
    },
    {
      year:  "2013",
      title: "Master's — Computer Science",
      where: "USTHB University, Algeria",
      desc:  "",
      dot:   "past",
    },
    {
      year:  "2010",
      title: "Engineering Degree — Computer Science",
      where: "USTHB University, Algeria",
      desc:  "",
      dot:   "past",
    },
  ],
};

/* ── BLOG POSTS ──────────────────────────────────────────── */
/*
 * To add a real post:
 *   1. Create a file at  blog/posts/your-slug.html  (copy template.html)
 *   2. Add an entry here with  url: "posts/your-slug.html"
 *
 * topic color: "blue" | "green" | "gold"
 * Set placeholder:true to render a dashed "coming soon" card.
 */
const BLOG = {
  enabled: true,

    { placeholder: true },
  ],
};

/* ── CONTACT LINKS ───────────────────────────────────────── */
const CONTACT = {
  enabled: true,
  items: [
    { icon: "🎓", label: "Scholar",      url: "https://scholar.google.com/citations?user=xGZCJkoAAAAJ&hl=en"    },
    { icon: "💼", label: "LinkedIn",     url: "https://www.linkedin.com/in/adel-dabah-753939a6/"                 },
    { icon: "⚡", label: "JSC Jülich",   url: "https://www.fz-juelich.de/profile/dabah_a"                       },
    { icon: "🏫", label: "KAUST (prev)", url: "https://cemse.kaust.edu.sa/profiles/adel-dabah"                   },
    { icon: "✉️", label: "Email",        url: "mailto:a.dabah@fz-juelich.de"                                   },
  ],
};

/* ── SECTIONS ORDER ──────────────────────────────────────── */
/* Reorder, add, or remove section keys to control the page. */
const SECTIONS_ORDER = [
  "interests",
  "publications",
  "experience",
  "blog",
  "contact",
];
