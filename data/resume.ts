export interface CourseItem {
  name: string;
  description: string;
  proficiency: 1 | 2 | 3 | 4 | 5;
  useCase: string;
}

export interface EducationCourseGroup {
  area: string;
  courses: CourseItem[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  honors: string[];
  coursework: EducationCourseGroup[];
}

export const education: Education = {
  school: "University of Wisconsin–Madison",
  degree: "B.S. Computer Science & Biology",
  period: "August 2024 — May 2028",
  gpa: "3.9",
  honors: ["Dean's List: Fall 2024, Spring 2025, Fall 2025"],
  coursework: [
    {
      area: "Computer Science",
      courses: [
        {
          name: "Data Structures",
          proficiency: 5,
          description: "Core structures: linked lists, trees, graphs, hash maps, heaps, and their algorithmic complexity.",
          useCase: "Foundation for every project. Efficient data organization underpins the Kafka pipeline, ML preprocessing, and scheduling work at Leidos.",
        },
        {
          name: "Advanced Algorithms",
          proficiency: 5,
          description: "Algorithm design and complexity analysis: dynamic programming, greedy methods, divide-and-conquer, graph traversal, and NP-hardness.",
          useCase: "Applied directly at Leidos: used dynamic programming and state space reduction to optimize satellite observation scheduling across multi-objective constraint problems.",
        },
        {
          name: "Deep Learning",
          proficiency: 4,
          description: "Neural network architectures, backpropagation, CNNs, RNNs, Transformers, and training at scale with PyTorch.",
          useCase: "Core to the scVI/scANVI/scGen model selection work at Kendziorski, the Transformer-based reasoning layer in the Self-Improving LLM Agent, and the skin cancer classifier at Inspirit AI.",
        },
        {
          name: "Machine Learning",
          proficiency: 5,
          description: "Supervised and unsupervised learning, model evaluation, neural networks, and ensemble methods.",
          useCase: "Core to the skin cancer classifier at Inspirit AI, the miRcore cancer detection model, and the LLM agent pipeline at Kendziorski.",
        },
        {
          name: "Artificial Intelligence",
          proficiency: 4,
          description: "Search, constraint satisfaction, Bayesian reasoning, and foundations of intelligent agent design.",
          useCase: "Foundation for the LLM agent orchestration work at Kendziorski and the Self-Improving LLM Agent's failure-driven feedback loop.",
        },
        {
          name: "Linear Algebra",
          proficiency: 4,
          description: "Vectors, matrices, transformations, eigensystems, and their applications to data analysis.",
          useCase: "Core to ML model internals and the matrix operations in the bioinformatics pipelines at Kendziorski.",
        },
        {
          name: "Machine Organization and Programming",
          proficiency: 4,
          description: "How processors execute instructions: memory hierarchy, caching, pipelining, assembly, and system-level memory management.",
          useCase: "Informs performance decisions when profiling Python and C++ code in compute-heavy bioinformatics and simulation work.",
        },
        {
          name: "Intro to Computer Engineering",
          proficiency: 3,
          description: "Digital logic, circuits, memory systems, and the hardware-software boundary underlying modern computing.",
          useCase: "Background for reasoning about low-level performance in GPU-accelerated pipelines and hardware constraints at Leidos.",
        },
        {
          name: "Operating Systems",
          proficiency: 4,
          description: "Processes, threads, memory management, file systems, and concurrency primitives.",
          useCase: "Background for the Docker and Kubernetes work at Leidos and for reasoning about containerization and service isolation.",
        },
        {
          name: "Database Management Systems",
          proficiency: 3,
          description: "Relational model, SQL, indexing, transaction handling, and an introduction to NoSQL systems.",
          useCase: "Background for MongoDB usage in the Leidos Kafka pipeline, SQL queries over the 45M-record CMS/MEPS datasets in Lotus Health, and SQL work across backend projects.",
        },
        {
          name: "Cryptography",
          proficiency: 2,
          description: "Symmetric and asymmetric encryption, hash functions, digital signatures, and protocol security proofs.",
          useCase: "Foundational for reasoning about data security in HIPAA-adjacent systems and secure transmission in distributed architectures.",
        },
        {
          name: "Differential Equations",
          proficiency: 3,
          description: "Ordinary differential equations, modeling dynamic systems, and numerical solution methods.",
          useCase: "Mathematical backbone for modeling continuous biological processes and understanding ODE-based simulation in ecological and genomics contexts.",
        },
        {
          name: "Discrete Mathematics",
          proficiency: 3,
          description: "Logic, proof techniques, combinatorics, graph theory, and set theory.",
          useCase: "Theoretical backbone for algorithm analysis, the ICD-10 comorbidity graph structure in Lotus Health, and formal reasoning about system correctness.",
        },
      ],
    },
    {
      area: "Biology",
      courses: [
        {
          name: "Bioinformatics",
          proficiency: 5,
          description: "Sequence alignment, RNA-seq analysis, genomics pipelines, and biological databases.",
          useCase: "Directly applied at Kendziorski lab: the pipeline integrates CARD, Seurat, and Scanpy for spatial transcriptomics analysis of glioblastoma data.",
        },
        {
          name: "Computational Biology",
          proficiency: 4,
          description: "Mathematical modeling of biological systems, network analysis, and data-driven approaches to biology.",
          useCase: "Shapes the system design for the LLM agent pipeline and informed the spatial deconvolution approach used with CARD.",
        },
        {
          name: "Genetics",
          proficiency: 4,
          description: "Heredity, gene expression, mutation, and population genetics.",
          useCase: "Foundation for interpreting microRNA expression data in the miRcore cancer detection project and gene-level results at Kendziorski.",
        },
        {
          name: "Cell Biology",
          proficiency: 3,
          description: "Cellular structure, organelle function, signaling pathways, and the cell cycle.",
          useCase: "Context for interpreting cell-type annotations and spatial expression patterns in the transcriptomics work.",
        },
      ],
    },
  ],
};

export interface HighSchoolEntry {
  school: string;
  period: string;
  coursework: EducationCourseGroup[];
}

export const highSchool: HighSchoolEntry = {
  school: "South Brunswick High School",
  period: "September 2020 — June 2024",
  coursework: [
    {
      area: "Computer Science",
      courses: [
        {
          name: "Computer Science Capstone",
          description: "Senior course surveying industry frameworks across game design, computer vision, machine learning, and web development. Included panels with working engineers, university professors, and college students.",
          proficiency: 3,
          useCase: "Earliest structured exposure to ML and applied research; sparked the trajectory into CS + Biology and the work at Inspirit AI, miRcore, and the Kendziorski Lab.",
        },
        {
          name: "AP Computer Science A",
          description: "Object-oriented programming in Java: classes, inheritance, data structures, and algorithmic problem solving at the AP level.",
          proficiency: 4,
          useCase: "Built the Java foundation used in the USTA Tournament Explorer Android app and early programming projects.",
        },
        {
          name: "AP Computer Science Principles",
          description: "Broad survey of computing concepts: algorithms, data, the internet, and the societal impact of technology.",
          proficiency: 3,
          useCase: "Introduced computational thinking and problem decomposition before diving into language-specific CS work.",
        },
        {
          name: "Android Application Development",
          description: "Built native Android apps covering UI design patterns, activity lifecycle, data persistence, and REST API integration with real-world services.",
          proficiency: 3,
          useCase: "Direct foundation for the USTA Tournament Explorer, a native Android app fetching live tournament data via GraphQL and rendering it in a navigable list.",
        },
        {
          name: "Virtual Reality",
          description: "Explored VR development fundamentals including 3D scene construction, spatial interaction design, and headset SDK integration for immersive experiences.",
          proficiency: 2,
          useCase: "Introduced spatial computing and 3D thinking applied later in game development and simulation work at UW-Madison.",
        },
        {
          name: "Game Development",
          description: "Designed and shipped interactive games covering game loops, physics systems, entity management, collision detection, and AI agent behavior.",
          proficiency: 3,
          useCase: "Core preparation for the Ecological Conservation Game, a C++/Raylib real-time simulation with competing AI bots and environmental mechanics.",
        },
        {
          name: "Web Development",
          description: "Full-stack fundamentals: HTML, CSS, JavaScript, and introductory frameworks for building interactive, data-driven web applications.",
          proficiency: 3,
          useCase: "Groundwork for the SAT Generator React.js frontend, FastAPI backend, and this portfolio site.",
        },
      ],
    },
    {
      area: "Mathematics & Science",
      courses: [
        {
          name: "AP Statistics",
          description: "Probability, hypothesis testing, regression, sampling distributions, and statistical inference at the AP level.",
          proficiency: 4,
          useCase: "Statistical foundation for the k-fold cross-validation and p-value analysis in the miRcore cancer detection model, and for feature engineering in ML projects.",
        },
        {
          name: "AP Biology",
          description: "Molecular biology, genetics, evolution, ecology, and cellular processes at the AP level.",
          proficiency: 3,
          useCase: "Early biological context for the genomics and microRNA work at Kendziorski and miRcore, and motivation for pursuing the CS + Biology double major.",
        },
      ],
    },
  ],
};

export interface Project {
  id: string;
  title: string;
  description: string;
  detail: string;
  tags: string[];
  github?: string;
  note?: string;
  imageSrc?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tags?: string[];
  imageSrc?: string;
}

export interface ExperienceSection {
  key: string;
  label: string;
  items: ExperienceItem[];
}

export interface Skill {
  name: string;
  description: string;
  proficiency: 1 | 2 | 3 | 4 | 5;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const experienceSections: ExperienceSection[] = [
  {
    key: "systems",
    label: "Systems & Infrastructure",
    items: [
      {
        company: "Leidos",
        role: "Software Engineer Intern",
        period: "May 2025 — Present",
        bullets: [
          "Applied system design principles to optimize multi-objective satellite scheduling via memoization and dynamic programming in Python, then rewrote the engine in Rust for the team's production microservice ecosystem to meet strict reliability and latency requirements.",
          "Designed a scalable Kafka event-driven data pipeline persisting to MongoDB with at-least-once delivery and full system decoupling for mission-critical satellite operations.",
          "Containerized a Docker test suite on Kubernetes via GitHub Actions CI/CD, writing pytest coverage across boundary conditions and fault injection to catch regressions before production.",
          "Built a Claude Code MCP plugin from scratch on top of an institutional knowledge graph mapping team ontologies and service dependencies, serving 30 engineers across a multi-team defense program.",
        ],
        tags: ["Python", "Kafka", "Kubernetes", "Docker", "MongoDB", "Dynamic Programming", "GitHub Actions", "CI/CD", "Rust", "Neo4j"],
        imageSrc: "/images/experience/leidos.jpg",
      },
    ],
  },
  {
    key: "research",
    label: "Research & Biotech",
    items: [
      {
        company: "The Kendziorski Lab — UW-Madison",
        role: "Student Research Intern",
        period: "September 2025 — Present",
        bullets: [
          "Built end-to-end ML pipeline for single-cell RNA sequencing (scRNA-seq), next-generation sequencing (NGS), and spatial transcriptomics using PyTorch/TensorFlow deep learning; agentic framework selects and evaluates models across scVI/scANVI/scGen/AmortizedLDA for scalable production genomics, cutting GPU runtime from 80 to 27 minutes (300% reduction) on identical hardware; tracked via Weights & Biases.",
          "Built TransferAgent, automating natural language processing (NLP) literature synthesis and cross-paper validity scoring across ~500 clinical genomics papers; cut review time by ~60%; collaborated with clinicians on clinical genomics impact.",
          "Co-authored an ongoing clinical genomics publication targeting a peer-reviewed computational biology journal, validating model performance and pipeline reproducibility for glioblastoma gene therapy research across a 10-person interdisciplinary lab.",
        ],
        tags: ["Python", "R", "LLM APIs", "Scanpy", "Seurat", "CARD", "scRNA-seq", "scVI", "scANVI", "Weights & Biases", "GitHub Actions"],
        imageSrc: "/images/experience/kendziorski.jpg",
      },
      {
        company: "Inspirit AI",
        role: "Machine Learning Research Intern",
        period: "Sep 2022 — Mar 2023",
        bullets: [
          "Built skin cancer detection pipeline (OpenCV + scikit-learn, NumPy/Pandas) achieving 95% classification accuracy on ~70,000 dermoscopic images; published as first author on 'Early Skin Cancer Detection Improvement' through Inspirit AI.",
          "Trained and validated Random Forest classifier on miRNA sequences achieving 95% predictive accuracy (p < 0.05); validated via stratified k-fold cross-validation for cancer cell likelihood prediction.",
        ],
        tags: ["Python", "scikit-learn", "OpenCV", "Decision Tree", "KNN", "ML Research"],
        imageSrc: "/images/experience/inspirit.jpg",
      },
    ],
  },
  {
    key: "entrepreneurial",
    label: "Leadership",
    items: [
      {
        company: "Princeton Racket Club",
        role: "Tennis Coach & Tournament Director",
        period: "May 2024 — Aug 2024",
        bullets: [
          "Directed 8 regional tournaments (380+ match entries, 100% on-time initialization) while coaching 3 classes of 8-10 athletes ages 8-65, in a dual tournament director and head coach role.",
          "Guided 3 junior athletes to 150+ regional ranking points and 5 adults up a full 0.5 NTRP competitive level through data-driven, skill-adapted coaching regimens.",
        ],
        tags: ["Leadership", "Communication", "Event Management"],
        imageSrc: "/images/experience/princeton.jpg",
      },
      {
        company: "Tennis Racket Stringing Services",
        role: "Founder",
        period: "Jan 2019 — Present",
        bullets: [
          "Founded and scaled an independent racket stringing business to 45+ clients, servicing 12-20 rackets monthly with a premium 2-day turnaround tier alongside the standard 3-4 day SLA.",
          "Grew the client base through multi-channel grassroots marketing: word-of-mouth referrals, flyers at local parks, high school team referral discounts, and an Instagram page of stringing craftsmanship.",
        ],
        tags: ["Entrepreneurship", "Operations", "Client Relations", "Inventory Management"],
        imageSrc: "/images/experience/stringing.jpg",
      },
    ],
  },
];

export interface Accomplishment {
  title: string;
  organization: string;
  result: string;
  period: string;
  bullets: string[];
  tags?: string[];
  imageSrc?: string;
}

export const accomplishments: Accomplishment[] = [
  {
    title: "TEL: Spatial Intelligence Ideathon",
    organization: "UW-Madison",
    result: "2nd Place, 2-Person Team",
    period: "Jul 2026",
    bullets: [
      "Placed 2nd at a competitive UW-Madison ideathon, pitching a dual-product airport accessibility platform combining ZaiNAr sub-meter indoor positioning with SGA AR spatial computing.",
      "Designed a B2B tool giving airline staff real-time sub-meter wheelchair-passenger tracking between gates, paired with a B2C app letting family track accessible relatives through the terminal.",
    ],
    tags: ["Spatial Computing", "AR", "Accessibility", "Product Design"],
    imageSrc: "/images/accomplishments/tel-spatial-intelligence.png",
  },
];

export const projects: Project[] = [
  {
    id: "self-improving-agent",
    title: "Self-Improving LLM Agent",
    description: "Failure-driven agent that learns from its own mistakes. Tested on 5,000+ tasks, consistently outperforming ReAct by 15 percentage points.",
    detail: "Architected failure-driven self-improvement loop for LLM agents across a 5,000+ task benchmark, outperforming ReAct baseline by 15pp via RAG-enhanced retrieval and Transformer neural network reasoning; built AgentBench + LLM-as-judge eval infrastructure with GitHub Actions CI/CD. Optimized inference via fine-tuning, task horizon tuning, and parameter search; built provider-agnostic serving abstraction supporting end-to-end ML pipeline scaled to horizon 20. Engineered LLM-as-judge harness scoring 7 dimensions; implemented novel repeated_failure_rate metric to quantify self-improvement efficacy.",
    tags: ["Python", "LLM APIs", "RAG", "Transformers", "AgentBench", "Inference Optimization", "GitHub Actions", "CI/CD"],
    github: "https://github.com/AkashGogate/SelfImprovingLLMAgent",
    imageSrc: "/images/projects/self-improving-agent.png",
  },
  {
    id: "lotus-health",
    title: "Lotus Health",
    description: "Financial risk engine over a 1,080-node ICD-10 comorbidity graph, querying 45 million insurance records to compute 5-year disease cost paths.",
    detail: "Built probabilistic disease cost engine on a 1,080-node ICD-10 comorbidity graph across 45M records; RAG pipeline with semantic similarity search over the graph as vector database; full-stack React/Cytoscape.js frontend with real-time voice symptom input via Deepgram. Designed scalable system architecture separating NLP inference (Groq Llama) from deterministic financial logic (Python engine); ensures ACID-compliant, hallucination-free outputs — production-grade software design. Integrates with HIPAA-compliant, EHR-adjacent clinical decision support workflows; RAG matches patient symptoms to ICD-10 risk profiles via SQL-queried healthcare data; all outputs auditable.",
    tags: ["Python", "SQL", "RAG", "ICD-10", "React.js", "Cytoscape.js", "Deepgram", "HealthTech", "FinTech"],
    github: "https://github.com/AkashGogate/lotus-health",
    note: "Honorable mention — MadData (UW-Madison hackathon)",
    imageSrc: "/images/projects/lotus-health.png",
  },
  {
    id: "kendziorski",
    title: "LLM Agent Pipeline — Spatial Transcriptomics",
    description: "End-to-end ML pipeline for scRNA-seq, NGS, and spatial transcriptomics. Agentic framework selects and evaluates models across scVI/scANVI/scGen/AmortizedLDA; cut GPU computation 300%.",
    detail: "Built at the Kendziorski Lab (UW-Madison). End-to-end ML pipeline for single-cell RNA sequencing (scRNA-seq), next-generation sequencing (NGS), and spatial transcriptomics using PyTorch/TensorFlow deep learning; agentic framework selects and evaluates models across scVI/scANVI/scGen/AmortizedLDA for scalable production genomics, cutting GPU computation 300%; all experiments tracked via Weights & Biases. Companion TransferAgent automates NLP literature synthesis and cross-paper validity scoring for computational biology paper review, cutting reviewer time by ~60%; collaborated with clinicians on clinical genomics impact.",
    tags: ["Python", "PyTorch", "LLM APIs", "Scanpy", "Seurat", "CARD", "scVI", "scANVI", "NGS", "Spatial Transcriptomics", "R", "Weights & Biases", "Research"],
    note: "Research project — no public repo",
    imageSrc: "/images/projects/llm-pipeline.jpg",
  },
  {
    id: "sat-generator",
    title: "SAT Practice Test Generator",
    description: "GPT-4o tutor that finds your weak SAT domains and generates exam-matched practice questions on demand.",
    detail: "Built full-stack SAT prep app (TypeScript/JavaScript/React.js + Node.js/FastAPI); integrated GPT-4o generative AI for adaptive question generation via REST API with session state, scoring, and configurable difficulty; agile version control. Backend separates LLM integration layer, API layer, and session management; clean object-oriented design with stateful session logic and auditable answer validation pipeline.",
    tags: ["TypeScript", "React.js", "Node.js", "FastAPI", "GPT-4o", "Python"],
    github: "https://github.com/AkashGogate/SATPracticeTestGenerator",
    imageSrc: "/images/projects/sat-generator.jpg",
  },
  {
    id: "hand-tracking",
    title: "Computer Vision Hand Tracking System",
    description: "Real-time hand gesture and joint angle tracking pipeline using OpenCV and MediaPipe. Outputs biomechanical data for clinical motion capture, rehabilitation, and sports performance analysis.",
    detail: "Built real-time hand gesture and joint angle tracking pipeline (OpenCV + MediaPipe); outputs biomechanical data for clinical motion capture, rehabilitation monitoring, and sports performance analysis. Processes live webcam input with OpenCV for frame capture and MediaPipe for hand landmark detection; outputs joint positions, wrist orientation, and finger positions at video frame rate. Dual application: sports coaching (quantitative grip and swing feedback) and clinical biomechanics.",
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    github: "https://github.com/AkashGogate/HandOrientationTracking",
    imageSrc: "/images/projects/hand-tracking.jpg",
  },
  {
    id: "eco-game",
    title: "Ecological Conservation Game",
    description: "Multi-threaded C++ simulation where AI bots compete for survival under configurable ecological constraints.",
    detail: "Built a multi-threaded, AI-driven multi-agent C++ simulation with Raylib; autonomous bots exhibit emergent behaviors under ecological constraints with a real-time game loop. Bots compete for resources under configurable constraints (food scarcity, predation, territory), producing emergent behavior from simple rule sets. Demonstrates carrying capacity, predator-prey dynamics, and resource competition through interactive simulation.",
    tags: ["C++", "Raylib", "Game AI", "Multi-Agent", "Simulation"],
    github: "https://github.com/AkashGogate/EcologicalConservationBots",
    imageSrc: "/images/projects/eco-game.jpg",
  },
  {
    id: "usta-explorer",
    title: "USTA Tournament Explorer",
    description: "Android app for browsing and filtering USTA tennis tournaments by region, level, and surface.",
    detail: "Built Android app in Java consuming USTA's GraphQL API to surface local tournament data via REST API; sole developer end-to-end. Uses Android SDK and HttpURLConnection to retrieve local tournament listings, registration deadlines, and location data; redirects to the USTA site for registration.",
    tags: ["Android SDK", "Java", "GraphQL", "Mobile"],
    github: "https://github.com/AkashGogate/myUSTA",
    note: "APK available — see GitHub",
    imageSrc: "/images/projects/usta-explorer.jpg",
  },
  {
    id: "mircore",
    title: "microRNA Cancer Detection (miRcore)",
    description: "Random forest classifier on microRNA expression profiles to predict cancer biomarkers. 95% accuracy (p < 0.05).",
    detail: "Trained and validated Random Forest in R on micro-RNA expression sequences achieving 95% predictive accuracy (p < 0.05); validated via stratified k-fold cross-validation for cancer cell likelihood prediction. Feature space consists of miRNA expression levels as numeric predictors for binary classification, trained on public genomics datasets via Bioconductor.",
    tags: ["R", "Bioconductor", "Random Forest", "microRNA", "Genomics", "Research"],
    note: "Research project — no public repo",
    imageSrc: "/images/projects/mircore.jpg",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python",     proficiency: 5, description: "Primary language across every project. Built LLM pipelines at Kendziorski, event-driven systems at Leidos, ML classifiers at Inspirit AI, and the Lotus Health financial risk engine." },
      { name: "TypeScript", proficiency: 4, description: "Used for the SAT Generator frontend and this portfolio site. Prefer TypeScript over plain JavaScript for any project where type safety prevents runtime errors." },
      { name: "R",          proficiency: 4, description: "Statistical computing for bioinformatics. Ran microRNA expression analysis for the miRcore cancer detection model and cell-type clustering at Kendziorski." },
    ],
  },
  {
    category: "Infrastructure",
    skills: [
      { name: "Docker",         proficiency: 4, description: "Built and maintained containerized environments at Leidos. Used daily for reproducible builds and test suite management across a Kubernetes cluster." },
      { name: "GitHub Actions", proficiency: 4, description: "CI/CD automation at Leidos (test suite deployment) and Kendziorski (reproducible pipeline deployment). Manages the full benchmark pipeline for the Self-Improving LLM Agent." },
      { name: "REST APIs",      proficiency: 4, description: "Designed and consumed REST endpoints across multiple projects. Used FastAPI for the SAT Generator backend and HttpURLConnection in the Android app." },
    ],
  },
  {
    category: "ML & Data",
    skills: [
      { name: "Machine Learning", proficiency: 4, description: "Core discipline across Inspirit AI, miRcore, and the Kendziorski pipeline. Ranges from classical classifiers to LLM-driven agentic research systems." },
      { name: "PyTorch",          proficiency: 4, description: "Deep learning framework for the scVI/scANVI model work at Kendziorski and the Transformer-based reasoning in the Self-Improving LLM Agent." },
      { name: "LLM APIs",         proficiency: 4, description: "GPT-4o for the SAT Generator and OpenAI/Claude/Groq APIs for the LLM agent pipelines at Kendziorski and in Lotus Health." },
      { name: "NumPy",            proficiency: 4, description: "Array computing backbone for bioinformatics work at Kendziorski. Used in matrix operations and data transformation pipelines for single-cell data." },
      { name: "Pandas",           proficiency: 4, description: "Data manipulation across the Kendziorski pipeline. Cleans, filters, and reshapes genomics dataframes before analysis." },
      { name: "Scikit-learn",     proficiency: 4, description: "Built a skin cancer detection classifier at Inspirit AI reaching 95% accuracy using Decision Tree and KNN on dermoscopic image features." },
      { name: "Decision Trees",     proficiency: 4, description: "Classical classifier used in the Inspirit AI skin cancer detection pipeline. Implemented with scikit-learn on dermoscopic image features, cross-validated for generalization." },
      { name: "Cross-Validation",   proficiency: 4, description: "Applied stratified k-fold cross-validation at Inspirit AI (95% skin cancer accuracy) and miRcore (95% microRNA accuracy) to validate model generalization." },
    ],
  },
  {
    category: "Agentic & LLM",
    skills: [
      { name: "RAG",        proficiency: 4, description: "Retrieval-augmented generation as the retrieval layer in both the Self-Improving LLM Agent (task context retrieval) and Lotus Health (ICD-10 symptom-to-node mapping)." },
      { name: "LLM Agents", proficiency: 4, description: "Orchestrated multi-step agentic systems at Kendziorski (model selection pipeline) and in the Self-Improving Agent (failure-driven self-improvement loop)." },
    ],
  },
  {
    category: "Bioinformatics & Genomics",
    skills: [
      { name: "Scanpy", proficiency: 4, description: "Python library for single-cell analysis. Handles preprocessing, clustering, and differential expression in the Kendziorski LLM agent pipeline." },
      { name: "Seurat", proficiency: 4, description: "R toolkit for single-cell RNA-seq. Used at Kendziorski for cell clustering, normalization, and expression visualization across spatial transcriptomics data." },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "GitHub", proficiency: 4, description: "Version control and code collaboration across every project. Comfortable with branching, pull requests, code review, and CI/CD workflows." },
    ],
  },
  {
    category: "Leadership & Product",
    skills: [
      { name: "Leadership",       proficiency: 4, description: "Directed 8 regional tennis tournaments and coached 3 athlete classes ages 8-65 as Tournament Director at Princeton Racket Club, holding dual director and head coach responsibilities." },
      { name: "Communication",    proficiency: 4, description: "Pitched a dual-product airport accessibility platform to judges at the TEL Spatial Intelligence Ideathon, placing 2nd, and translated coaching feedback into skill-adapted regimens for athletes ranging from juniors to adults." },
      { name: "Entrepreneurship", proficiency: 4, description: "Founded and scaled an independent tennis racket stringing business to 45+ clients, building the service tiers and marketing from the ground up." },
    ],
  },
];
