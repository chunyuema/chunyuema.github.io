import { SkillCategory } from "../types/skills";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming_Languages",
    icon: "HiCode",
    description: "Core logic implementation and application framework expertise.",
    skills: [
      {
        name: "Enterprise_Development",
        years: 3,
        items: [
          { name: "Java (SpringBoot)", hasProductionExp: true, proficiency: "Advanced" },
          { name: "TypeScript / JS (React, NodeJS)", hasProductionExp: true, proficiency: "Advanced" },
          { name: "Python (Django)", hasProductionExp: true, proficiency: "Proficient" }
        ]
      },
      {
        name: "Systems_Development",
        years: 1,
        items: [
          { name: "C++", hasProductionExp: false, proficiency: "Intermediate" }
        ]
      }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud_&_DevOps",
    icon: "HiCloud",
    description: "Cloud-native infrastructure and automated provisioning for high-availability environments.",
    skills: [
      {
        name: "Containerization",
        years: 3,
        items: [
          { name: "Docker", hasProductionExp: true, proficiency: "Advanced" },
          { name: "Kubernetes", hasProductionExp: true, proficiency: "Advanced" },
          { name: "AWS ECS", hasProductionExp: true, proficiency: "Advanced" },
          { name: "AWS EKS", hasProductionExp: true, proficiency: "Advanced" }
        ]
      },
      {
        name: "Infrastructure_as_Code",
        years: 3,
        items: [
          { name: "Terraform", hasProductionExp: true, proficiency: "Advanced" },
          { name: "AWS CloudFormation", hasProductionExp: true, proficiency: "Advanced" },
          { name: "AWS CDK", hasProductionExp: true, proficiency: "Advanced" }
        ]
      },
      {
        name: "System_Reliability",
        years: 3,
        items: [
          { name: "CI/CD Pipeline", hasProductionExp: true, proficiency: "Advanced" },
          { name: "Nginx", hasProductionExp: true, proficiency: "Proficient" },
          { name: "AWS VPC", hasProductionExp: true, proficiency: "Proficient" },
          { name: "Route53", hasProductionExp: true, proficiency: "Proficient" }
        ]
      }
    ]
  },
  {
    id: "distributed-systems",
    title: "Distributed_Systems",
    icon: "HiLightningBolt",
    description: "Architecture patterns for resilient, high-availability distributed systems.",
    skills: [
      {
        name: "Microservices_Architecture",
        years: 3,
        items: [
          { name: "REST", hasProductionExp: true, proficiency: "Advanced" },
          { name: "gRPC", hasProductionExp: true, proficiency: "Advanced" }
        ]
      },
      {
        name: "Design_Patterns",
        years: 2,
        items: [
          { name: "Event-Driven Arch", hasProductionExp: true, proficiency: "Proficient" },
          { name: "Architectural Patterns", hasProductionExp: true, proficiency: "Proficient" },
          { name: "Distributed Consensus", hasProductionExp: false, proficiency: "Intermediate" }
        ]
      }
    ]
  },
  {
    id: "data-persistence",
    title: "Data_&_Databases",
    icon: "HiDatabase",
    description: "State management, relational modeling, and high-throughput messaging.",
    skills: [
      {
        name: "Persistence_Layers",
        years: 3,
        items: [
          { name: "PostgreSQL", hasProductionExp: true, proficiency: "Advanced" },
          { name: "MySQL", hasProductionExp: true, proficiency: "Advanced" },
          { name: "MongoDB", hasProductionExp: true, proficiency: "Proficient" },
          { name: "Redis", hasProductionExp: true, proficiency: "Proficient" }
        ]
      },
      {
        name: "Messaging_&_Streaming",
        years: 1,
        items: [
          { name: "Kafka", hasProductionExp: false, proficiency: "Intermediate" }
        ]
      }
    ]
  },
  {
    id: "certifications",
    title: "Certifications",
    icon: "HiBadgeCheck",
    description: "Professional certifications and verified industry knowledge.",
    skills: [
      {
        name: "AWS_Specialization",
        years: 1,
        items: [
          { name: "AWS Certified DevOps Associate (DVA-C02)", hasProductionExp: true, proficiency: "Advanced" }
        ]
      }
    ]
  }
];

export const currentlyExploring = [
  { name: "Rust", focus: "Systems Programming" },
  { name: "MPI / OpenMP", focus: "High Performance Computing" }
];
