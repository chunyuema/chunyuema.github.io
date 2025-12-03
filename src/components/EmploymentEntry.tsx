export interface EmploymentEntry {
  company: string;
  position: string;
  location: string;
  dateRange: string;
  descriptionPoints: string[];
  logoUrl?: string;
}

export const employmentHistoryData: EmploymentEntry[] = [
  {
    company: "Amazon Web Services",
    position: "Software Engineer II",
    location: "Dublin, Ireland",
    dateRange: "Sep 2024 – Present",
    descriptionPoints: [
      "Designed Function API and CloudFormation support of Lambda Managed Instance (Re:Invent 2025), defining architectural details involving 4 microservices; Coordinated code implementation, infrastructure build, and test-driven feature release",
      "Led the rollout of Lambda CRUD-L APIs migration from a monolithic API layer into a microservice, building and automating multi-region infrastructure including VPC peering, DNS delegation, and cross-account resource access in 10+ AWS regions",
      "Designed zonal monitoring strategy, improved service scaling, and implemented graceful service shutdown sequences, managing 10+ full CI/CD pipelines for service and infrastructure deployments across AWS global regions",
      "Initiated the Lambda Control Plane (CP) knowledge transfer from Seattle to Dublin, creating 20+ in-depth technical documents for training; onboarded 7 SDEs to establish the Dublin-based function control plane team; led sprint planning and daily standups",
    ],
  },
  {
    company: "Amazon Web Services",
    position: "Software Engineer I",
    location: "Seattle, USA",
    dateRange: "Sep 2022 – Aug 2024",
    descriptionPoints: [
      "Owned the design and implementation of recursive loop detection APIs and CloudFormation support; coordinated testing and release with 5 SDEs and product management team, saving Lambda from annual customer reimbursement by $1–3 million",
      "Implemented function API and CloudFormation support for the IPv6 network protocol, enhancing global protocol compatibility",
      "Led compliance implementation of confused deputy security campaigns and produced risk analysis reports for internal teams",
      "Improved the regional availability of CreateFunction API (99.99% to 99.999%) by root causing IAM propagation delays",
    ],
  },
  {
    company: "Microsoft Azure",
    position: "Software Engineer Intern (Site Reliability Engineering)",
    location: "Seattle, USA",
    dateRange: "Jun 2022 – Aug 2022",
    descriptionPoints: [
      "Redesigned and implemented a deployment status dashboard of Azure Resource Manager (ARM) using React and .NET",
      "Optimized the frontend code to improve the dashboard responsiveness and reduced load on the backend APIs",
      "Reduced dashboard access time by 50% for on-call engineers through Azure Key Vault integration for authentication process",
    ],
  },
  {
    company: "Jina AI",
    position: "Software Engineer Intern (DevOps Engineering)",
    location: "Berlin, Germany",
    dateRange: "Jan 2022 – May 2022",
    descriptionPoints: [
      "Implemented unit and integration tests; created and maintained a CI/CD pipeline for Jina Cloud (JCloud) using GitHub Actions",
      "Used AWS CloudWatch for production metrics and logging; deployed Lambda and AWS SES for deployment status notifications",
    ],
  },
  {
    company: "Privacy Tech Lab",
    position: "Research Software Engineer",
    location: "Connecticut, USA",
    dateRange: "Jun 2021 – Jan 2022",
    descriptionPoints: [
      "Publication: Designing a Graphic User Interface for Global Privacy Control (DOI:10.56553/poppets-2024-0015)",
      "Developed a browser extension that attaches Do Not Track (DNT) signals to outgoing HTTP requests initiated from the browser",
      "Designed and implemented APIs to perform user registration, gather and store privacy choice decision data into Google Firestore",
      "Architected and implemented A/B testing to study user online privacy behaviors interacting with six different user interfaces",
    ],
  },
  {
    company: "Wesleyan Computational Biochemistry Lab",
    position: "Research Software Engineer",
    location: "Connecticut, USA",
    dateRange: "May 2020 – Jun 2021",
    descriptionPoints: [
      "Publication: Mutagenic Activation of GPX4: Approaches in Rational Design of Allosteric Drugs (DOI 10.1021/acsomega.2c01289)",
      "Automated batch protein molecular dynamics simulations using bash scripts, applying Markov State Model for data analysis",
    ],
  },
];
