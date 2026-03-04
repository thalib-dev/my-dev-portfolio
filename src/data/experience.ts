export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
}

export const experienceData: Experience[] = [
  {
    title: "Software Engineer",
    company: "UC Operations LLC (Remote)",
    date: "Dec 2025 - Present",
    description: "Automated data processing workflows using cloud APIs across 5+ successful projects as a solo contributor, ensuring zero-bug deployments. Currently developing an advanced ML-powered chatbot. Tech stack includes JavaScript, Python, Firebase, Google Cloud APIs, Git/GitHub, and CI/CD pipelines.",
  },
  {
    title: "DevOps Intern",
    company: "Springer Capital (Remote)",
    date: "Oct 2025 - Feb 2026",
    description: "Assisted in the design and implementation of CI/CD pipelines, contributing to a 50% reduction in deployment times. Supported the management of cloud infrastructure on AWS for high availability. Helped automate infrastructure provisioning using Terraform and Ansible, and participated in regular security audits and system resource optimization.",
  },
];
