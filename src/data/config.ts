const config = {
  title: "Mohammed Thalib TM | DevOps Engineer",
  description: {
    long: "I’m a DevOps Engineer focused on building reliable, scalable, and automated infrastructure. I enjoy working across the full DevOps lifecycle—from containerization and orchestration to CI/CD automation and cloud deployment. I work with technologies like Docker, Kubernetes, Jenkins, Git, AWS, and Shell Scripting, and I follow both Agile and Waterfall methodologies depending on the project needs. I’m passionate about solving engineering problems with clean automation, efficient pipelines, and production-ready infrastructure. Recently, I’ve been working on end-to-end DevOps/SRE projects using CI/CD, IaC, containerization, observability, and cloud-native tooling on both Ubuntu and Windows environments. I love constantly learning new tools, improving deployment workflows, and ensuring systems run smoothly and securely. My goal is to engineer infrastructure that is fast, maintainable, and resilient.",
    short:
      "I’m a DevOps Engineer focused on building reliable, scalable, and automated infrastructure.",
  },
  keywords: [
    "Mohammed Thalib TM",
    "Mohammed Thalib",
    "DevOps Engineer",
    "DevOps",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Git",
    "AWS",
    "Shell Scripting",
    "CI/CD",
    "IaC",
    "SRE",
  ],
  author: "Mohammed Thalib TM",
  email: "md.thalib.dev@gmail.com",
  site: "https://thalib.dev",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/mt-thalib",
    github: "https://github.com/thalib-dev",
    instagram: "https://www.instagram.com/thalib_mt"
  },
};
export { config };
