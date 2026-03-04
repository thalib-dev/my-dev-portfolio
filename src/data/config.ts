const config = {
  title: "Mohammed Thalib TM | DevOps Engineer",
  description: {
    long: "I’m Mohammed Thalib TM, a Junior Software Engineer with 8 months of experience focused on building reliable, scalable infrastructure and intelligent applications. Currently, I work as a Software Engineer at UC Operations LLC, where I specialize in automating complex data processing workflows using GCP and Firebase. As a solo contributor, I've successfully deployed over 5 zero-bug cloud API projects and am now contributing to the development of an advanced ML-powered chatbot. My technical sweet spot lies in combining cloud architecture (AWS, GCP) with robust backend technologies (Python, Node.js) and modern DevOps practices (CI/CD, Terraform). Whether it's architecting a zero-downtime deployment pipeline or building custom automation bots, I am passionate about engineering systems that are fast, maintainable, and resilient.",
    short: "I’m a Junior Software Engineer with 8 months of experience focused on building reliable, scalable, and automated infrastructure.",
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
