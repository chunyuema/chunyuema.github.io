import { SkillTheme } from "../types/skills";

export const skillThemes: SkillTheme[] = [
  {
    id: "enterprise-dev",
    title: "Enterprise_Development",
    icon: "HiCode",
    description: "Cloud-native application logic and framework implementation.",
    years: 3,
    skills: [
      { name: "Java (SpringBoot)", hasProductionExp: true },
      { name: "TypeScript / JS (React, NodeJS)", hasProductionExp: true },
      { name: "Python (Django)", hasProductionExp: true }
    ]
  },
  {
    id: "container-orchestration",
    title: "Containerization_&_Orchestration",
    icon: "HiChip",
    description: "Containerized deployment and high-availability orchestration.",
    years: 3,
    skills: [
      { name: "Docker", hasProductionExp: true },
      { name: "Kubernetes", hasProductionExp: true },
      { name: "AWS ECS / EKS", hasProductionExp: true }
    ]
  },
  {
    id: "iac",
    title: "Infrastructure_as_Code",
    icon: "HiCloud",
    description: "Automated provisioning and cloud infrastructure management.",
    years: 3,
    skills: [
      { name: "Terraform", hasProductionExp: true },
      { name: "AWS CloudFormation", hasProductionExp: true },
      { name: "AWS CDK", hasProductionExp: true }
    ]
  },
  {
    id: "system-reliability",
    title: "System_Reliability_&_Networking",
    icon: "HiRefresh",
    description: "Availability monitoring, CI/CD, and network configuration.",
    years: 3,
    skills: [
      { name: "CI/CD Pipeline", hasProductionExp: true },
      { name: "Nginx / Route53", hasProductionExp: true },
      { name: "AWS VPC Networking", hasProductionExp: true }
    ]
  },
  {
    id: "distributed-arch",
    title: "Distributed_Architecture",
    icon: "HiLightningBolt",
    description: "Communication patterns and architectural designs for scale.",
    years: 3,
    skills: [
      { name: "REST / gRPC", hasProductionExp: true },
      { name: "Event-Driven Arch", hasProductionExp: true },
      { name: "Architectural Patterns", hasProductionExp: true }
    ]
  },
  {
    id: "persistence",
    title: "Data_Persistence_&_Messaging",
    icon: "HiDatabase",
    description: "State management, relational modeling, and high-throughput messaging.",
    years: 3,
    skills: [
      { name: "PostgreSQL / MySQL", hasProductionExp: true },
      { name: "MongoDB / Redis", hasProductionExp: true },
      { name: "Kafka Messaging", hasProductionExp: false }
    ]
  },
  {
    id: "certifications",
    title: "Industry_Certifications",
    icon: "HiBadgeCheck",
    description: "Verified professional certifications and industry knowledge.",
    years: 1,
    skills: [
      { name: "AWS Certified DevOps Associate (DVA-C02)", hasProductionExp: true }
    ]
  }
];

export const currentlyExploring = [
  { name: "Rust", focus: "Systems Programming" },
  { name: "MPI / OpenMP", focus: "High Performance Computing" }
];
