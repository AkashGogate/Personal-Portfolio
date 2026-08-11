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
  gpa: "3.8",
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
        {
          name: "Statistics for the Life Sciences",
          proficiency: 4,
          description: "Probability, hypothesis testing, regression, and sampling distributions, with the underlying mathematics taught alongside biological applications.",
          useCase: "Statistical foundation for the k-fold cross-validation and p-value analysis in the miRcore cancer detection model, and for feature engineering across ML projects.",
        },
      ],
    },
    {
      area: "Software & Product Development",
      courses: [
        {
          name: "Computer Science Capstone",
          description: "Senior course surveying industry frameworks across game design, computer vision, machine learning, and web development. Included panels with working engineers, university professors, and college students.",
          proficiency: 3,
          useCase: "Earliest structured exposure to ML and applied research; sparked the trajectory into CS + Biology and the work at Inspirit AI, miRcore, and the Kendziorski Lab.",
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
        period: "May 2025 - Present",
        bullets: [
          "Leidos' satellite fleet needed to schedule competing observation requests against a shared set of ground assets, a classic multi-objective optimization problem. I applied dynamic programming and memoization in Python to prototype a scheduling engine, then rewrote the entire engine in Rust once the approach proved out, since the team's production microservice ecosystem demanded stricter reliability and lower latency than a Python service could guarantee at scale.",
          "To keep scheduling decoupled from the rest of the satellite operations stack, I designed an event-driven data pipeline on Kafka with at-least-once delivery semantics, persisting results to MongoDB. That decoupling meant any one service could fail or redeploy without taking down the mission-critical scheduling path around it.",
          "I containerized the team's test suite with Docker and ran it on Kubernetes, wiring the whole thing into GitHub Actions CI/CD. Writing pytest coverage across boundary conditions and deliberate fault injection meant regressions got caught in CI before they ever reached production.",
          "Separately, I built a Claude Code MCP plugin from scratch on top of an institutional knowledge graph mapping the team's ontologies and service dependencies. It now serves roughly 30 engineers across a multi-team defense program, giving them a shared, queryable map of how services relate instead of relying on tribal knowledge.",
          "I also built a solo Android ATAK (tactical mapping) plugin from scratch over four weeks, adding voice-activated situational awareness for field operations. Speech recognition had to run fully offline, on-device, for security, so I integrated a local whisper.cpp model into a command pipeline that classifies spoken reports against two structured formats, a UXO (unexploded ordnance) report and a 9-line MEDEVAC request, then extracts location and threat details from natural speech and plots the result on live tactical maps in about 10 seconds end to end. It hit 100% accuracy on marker-type classification and about 5% average word error rate across both schemas.",
          "I also contributed to the team's distributed media pipeline, a multi-service system spanning MongoDB, S3, a CDN layer, and Kafka for tactical communication media. I owned data ingestion and storage: writing the Kafka consumer that processed incoming topic data, optimizing MongoDB schemas for cleaner data structuring, and building the S3 upload and delete handlers.",
          "Separately, I built a natural-language query tool for aircraft fleet readiness, a React frontend on top of DuckDB for fast analytical SQL and Redis for sub-second caching, so operators could ask plain-English questions about fleet status and get an answer without knowing the underlying schema.",
          "I also extended the team's REST API for querying stored tactical event data, adding five new filter dimensions (unit ID, callsign, event type, time window, and geographic area) while keeping full backward compatibility with the existing endpoints. I documented it in OpenAPI/Swagger and got the new code path to over 90% test coverage.",
        ],
        tags: ["Python", "Kafka", "Kubernetes", "Docker", "MongoDB", "Dynamic Programming", "GitHub Actions", "CI/CD", "Rust", "Neo4j", "Whisper", "ATAK", "REST API", "DuckDB", "Redis", "AWS S3"],
        imageSrc: "/images/experience/leidos.jpg",
      },
    ],
  },
  {
    key: "research",
    label: "Research & Biotech",
    items: [
      {
        company: "The Kendziorski Lab, UW-Madison",
        role: "Student Research Intern",
        period: "September 2025 - Present",
        bullets: [
          "The lab's spatial transcriptomics work spans single-cell RNA sequencing (scRNA-seq), next-generation sequencing (NGS), and spatial transcriptomics data, each of which suits different model architectures. I built an end-to-end ML pipeline in PyTorch and TensorFlow with an agentic layer that automatically selects and evaluates the right model (scVI, scANVI, scGen, or AmortizedLDA) for a given dataset, with every run tracked in Weights & Biases. Tuning that pipeline for scale cut GPU runtime from 80 minutes down to 27 on identical hardware, a roughly 300% reduction that matters when the lab is iterating across dozens of datasets.",
          "Keeping up with clinical genomics literature was its own bottleneck, so I built TransferAgent to automate NLP-based literature synthesis and cross-paper validity scoring across roughly 500 clinical genomics papers. It cut review time by about 60%, and I worked directly with clinicians in the lab to make sure the synthesis reflected clinical relevance, not just statistical significance.",
          "That pipeline work is now feeding into an ongoing clinical genomics publication targeting a peer-reviewed computational biology journal, where I've been validating model performance and pipeline reproducibility for glioblastoma gene therapy research across a 10-person interdisciplinary lab.",
        ],
        tags: ["Python", "R", "LLM APIs", "Scanpy", "Seurat", "CARD", "scRNA-seq", "scVI", "scANVI", "Weights & Biases", "GitHub Actions"],
        imageSrc: "/images/experience/kendziorski.jpg",
      },
      {
        company: "Inspirit AI",
        role: "Machine Learning Research Intern",
        period: "Sep 2022 - Mar 2023",
        bullets: [
          "I built a skin cancer detection pipeline using OpenCV for image preprocessing and scikit-learn (with NumPy/Pandas handling the data wrangling) that reached 95% classification accuracy across roughly 70,000 dermoscopic images. That work became my first published paper, 'Early Skin Cancer Detection Improvement,' through Inspirit AI.",
          "In parallel, I trained and validated a Random Forest classifier on miRNA sequences for cancer cell likelihood prediction, reaching 95% predictive accuracy at p < 0.05, validated with stratified k-fold cross-validation to make sure the result generalized rather than overfitting to one split of the data.",
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
        period: "May 2024 - Aug 2024",
        bullets: [
          "I held a dual role as tournament director and head coach at Princeton Racket Club: directing 8 regional tournaments end to end (380+ match entries, every one starting on time) while also coaching 3 classes of 8-10 athletes spanning ages 8 to 65.",
          "On the coaching side, I built data-driven, skill-adapted regimens for individual athletes rather than running one generic program for everyone. That approach guided 3 junior athletes to over 150 regional ranking points combined and helped 5 adult players climb a full 0.5 NTRP competitive level.",
        ],
        tags: ["Leadership", "Communication", "Event Management"],
        imageSrc: "/images/experience/princeton.jpg",
      },
      {
        company: "Tennis Racket Stringing Services",
        role: "Founder",
        period: "Jan 2019 - Present",
        bullets: [
          "I founded an independent racket stringing business from scratch and scaled it to 45+ regular clients, servicing 12-20 rackets a month across two service tiers: a standard 3-4 day turnaround and a premium 2-day option for players who needed their racket back fast.",
          "Growing the client base meant leaning on grassroots channels rather than paid marketing: word-of-mouth referrals, flyers at local parks, referral discounts through high school tennis teams, and an Instagram page showcasing the stringing craftsmanship itself.",
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
    detail: "Built a full-stack SAT prep app (React.js/TypeScript + FastAPI) covering all 3 SAT sections (Math, Reading, Writing), with 5 pre-cached test sets per section (75 questions total) and GPT-4o adaptive question generation layered on top for score prediction and unscored practice modes. Backend separates the LLM integration, REST API, and session-state layers, with a rubric-based answer validation pipeline and per-session difficulty recalibration. Tested by friends and family beyond solo development.",
    tags: ["TypeScript", "React.js", "Node.js", "FastAPI", "GPT-4o", "Python"],
    github: "https://github.com/AkashGogate/SATPracticeTestGenerator",
    imageSrc: "/images/projects/sat-generator.jpg",
  },
  {
    id: "hand-tracking",
    title: "Computer Vision Hand Tracking System",
    description: "Real-time hand gesture and joint angle tracking pipeline using OpenCV and MediaPipe. Outputs biomechanical data for clinical motion capture, rehabilitation, and sports performance analysis.",
    detail: "Built a real-time biomechanical tracking pipeline (OpenCV + MediaPipe) running at 60 FPS with sub-2-second end-to-end latency, tracking all 21 hand landmarks alongside full-body pose simultaneously. Computes joint angles in degrees from 3D landmark coordinates, classifies hand gestures from configuration topology, and outputs structured multi-channel data for sports performance analysis and clinical motion capture.",
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    github: "https://github.com/AkashGogate/HandOrientationTracking",
    imageSrc: "/images/projects/hand-tracking.jpg",
  },
  {
    id: "eco-game",
    title: "Ecological Conservation Game",
    description: "10,000-agent C++ simulation with spatial hashing and GPU-instanced rendering, sustaining 60+ FPS as bots evolve across generations.",
    detail: "Built a 10,000+ agent ecological simulation in C++ with Raylib, sustaining a locked 60+ FPS across a 10,000x10,000 unit world. Used spatial hashing to cut per-frame proximity checks from O(N squared) to O(N), an Entity Component System with a Struct-of-Arrays memory layout for cache-friendly agent data, and GPU-instanced rendering to draw all 10,000 agents in a single draw call. Four species (two base, two emergent hybrids) evolve speed, size, food-collection radius, and predation capability across generations through a reproduction and interbreeding system, producing emergent multi-generational behavior with no scripted behavior trees.",
    tags: ["C++", "Raylib", "Game AI", "Multi-Agent", "Simulation"],
    github: "https://github.com/AkashGogate/EcologicalConservationBots",
    imageSrc: "/images/projects/eco-game.jpg",
  },
  {
    id: "usta-explorer",
    title: "USTA Tournament Explorer",
    description: "Android app for discovering USTA tennis tournaments with an interactive map, radius filtering, and NTRP skill-level matching.",
    detail: "Built an Android app in Java consuming USTA's GraphQL API to surface tournament discovery data: 7+ data points per tournament (signup links, competitive level, distance from user, ball type, draw size, registration status, eligibility), an interactive map for geographic browsing, a configurable radius filter, and an NTRP skill-rating filter for finding tournaments at the right competitive level. Sole developer end-to-end.",
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
