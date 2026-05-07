import { SkillTheme } from "../types/skills";

export const skillThemes: SkillTheme[] = [
  // PILLAR 1: DISTRIBUTED SYSTEMS (The Macro Layer - Build & Orchestrate)
  {
    id: "languages-backend",
    pillarId: "availability",
    title: "Cloud_Native_Development",
    description: "Building scalable service logic and data persistence layers.",
    years: 3,
    skills: [
      { name: "Java (Spring Boot)", hasProductionExp: true },
      { name: "TypeScript / NodeJS", hasProductionExp: true },
      { name: "Python (Django/FastAPI)", hasProductionExp: true },
      { name: "PostgreSQL / DynamoDB", hasProductionExp: true },
      { name: "Redis / ElastiCache", hasProductionExp: true },
    ],
  },
  {
    id: "orchestration",
    pillarId: "availability",
    title: "Container_&_Orchestration",
    description:
      "Architecting high-availability clusters and containerized lifecycles.",
    years: 3,
    skills: [
      { name: "Kubernetes", hasProductionExp: true },
      { name: "Docker & Containerd", hasProductionExp: true },
      { name: "AWS ECS / Fargate", hasProductionExp: true },
      { name: "Nomad / Consul", hasProductionExp: false },
    ],
  },
  {
    id: "iac-cloud",
    pillarId: "availability",
    title: "Infrastructure_As_Code",
    icon: "HiCloud",
    description: "Automated provisioning and cloud-native resource management.",
    years: 3,
    skills: [
      { name: "Terraform", hasProductionExp: true },
      { name: "AWS CDK (TS/Java)", hasProductionExp: true },
      { name: "CloudFormation", hasProductionExp: true },
      { name: "Ansible", hasProductionExp: true },
    ],
  },
  {
    id: "arch-patterns",
    pillarId: "availability",
    title: "Distributed_Patterns",
    icon: "HiLightningBolt",
    description:
      "Communication protocols and architectural designs for global scale.",
    years: 3,
    skills: [
      { name: "gRPC & Protobuf", hasProductionExp: true },
      { name: "Event-Driven (SQS/SNS)", hasProductionExp: true },
      { name: "RESTful API Design", hasProductionExp: true },
      { name: "Kafka Messaging", hasProductionExp: false },
    ],
  },

  // PILLAR 2: OBSERVABILITY & RELIABILITY (The Transparency Layer - Monitor & Stabilize)
  {
    id: "sre-core",
    pillarId: "observability",
    title: "Reliability_Engineering",
    icon: "HiShieldCheck",
    description: "Continuous delivery and proactive system health monitoring.",
    years: 3,
    skills: [
      { name: "GitHub Actions", hasProductionExp: true },
      { name: "SLIs / SLOs / SLAs", hasProductionExp: true },
      { name: "AWS CloudWatch / Metrics", hasProductionExp: true },
      { name: "eBPF (Deep Insights)", hasProductionExp: false },
    ],
  },
  {
    id: "networking",
    pillarId: "observability",
    title: "Systems_Networking",
    icon: "HiRefresh",
    description:
      "Connectivity and traffic management across distributed environments.",
    years: 3,
    skills: [
      { name: "AWS VPC Networking", hasProductionExp: true },
      { name: "Nginx / Proxy Configuration", hasProductionExp: true },
      { name: "Route53 / DNS", hasProductionExp: true },
      { name: "Service Mesh (Istio)", hasProductionExp: false },
    ],
  },

  // PILLAR 3: HPC & SYSTEMS (The Micro Layer - Optimize & Squeeze)
  {
    id: "low-level",
    pillarId: "hpc",
    title: "Systems_Programming",
    icon: "HiChip",
    description:
      "Hardware-aware software development and close-to-metal optimization.",
    years: 2,
    skills: [
      { name: "Rust", hasProductionExp: false },
      { name: "C++", hasProductionExp: false },
      { name: "Memory Management", hasProductionExp: true },
      { name: "Linux Kernel Fundamentals", hasProductionExp: false },
    ],
  },
  {
    id: "parallel-compute",
    pillarId: "hpc",
    title: "Parallel_Execution",
    icon: "HiChip",
    description:
      "Utilizing many-core architectures for high-velocity computation.",
    years: 1,
    skills: [
      { name: "OpenMP", hasProductionExp: false },
      { name: "MPI (Message Passing)", hasProductionExp: false },
      { name: "SIMD / Vectorization", hasProductionExp: false },
      { name: "CUDA (Foundations)", hasProductionExp: false },
      { name: "GPU Acceleration", hasProductionExp: false },
    ],
  },
];

export const currentlyExploring = [];
