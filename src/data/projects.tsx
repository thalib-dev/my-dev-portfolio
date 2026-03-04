import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiAmazonaws,
  SiNginx,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <Image src="/assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" width={24} height={24} />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <Image src="/assets/icons/icons8-java.svg" alt="Java" width={24} height={24} />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws />,
  },
  nginx: {
    title: "Nginx",
    bg: "black",
    fg: "white",
    icon: <SiNginx />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  { // 01. AWS Java Deployment project
    id: "awsjavadeploy",
    category: "Cloud Architecture",
    title: "Deploy Java Application on AWS",
    src: "/assets/projects-screenshots/awsjavadeploy/dvp1.png",
    screenshots: ["dvp1.png"],
    live: "https://github.com/thalib-dev/MY-DEVOPS-PROJECTS",
    github: "https://github.com/thalib-dev/MY-DEVOPS-PROJECTS",
    skills: {
      frontend: [PROJECT_SKILLS.nginx, PROJECT_SKILLS.aws],
      backend: [PROJECT_SKILLS.java, PROJECT_SKILLS.maven],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            This project demonstrates a production-grade deployment of a Java web application on AWS.
            It features a multi-tiered architecture with Nginx web servers, Apache Tomcat application
            servers, and managed services like Amazon ElastiCache and RDS. The infrastructure is
            designed for high availability and scalability using Auto Scaling Groups and Network
            Load Balancers across multiple Availability Zones.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/awsjavadeploy/dvp1.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 02. FinanceMe project
    id: "financeme",
    category: "DevOps in Banking and Finance",
    title: "FinanceMe: Complete DevOps Capstone Project",
    src: "/assets/projects-screenshots/financeme/1.png",
    screenshots: ["/assets/projects-screenshots/financeme/1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.maven,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://github.com/Abhiz2411/FinanceMe-Devops-Project-01",
    github: "https://github.com/Abhiz2411/FinanceMe-Devops-Project-01",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            FinanceMe: Complete DevOps Capstone Project
          </TypographyP>
          <TypographyP className="font-mono ">
            This project demonstrates the deployment of a DevOps pipeline for a global banking and
            financial services provider, FinanceMe. The company transitioned from a monolithic
            architecture to a microservice-based architecture to handle increased traffic and
            scaling challenges. The project involves automating infrastructure provisioning, build
            and deployment processes, and continuous monitoring using modern DevOps tools and
            AWS services.?
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Architecture </TypographyH3>
          <p className="font-mono mb-2">
            The project is divided into three main phases:
            1.Automating Infrastructure Provisioning
            2.Build and Deployment Automation
            3.Continuous Monitoring
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/financeme/1.png`,
              `${BASE_PATH}/financeme/2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Automating Infrastructure Provisioning</TypographyH3>
          <p className="font-mono mb-2">
            Terraform is used to create 4 AWS EC2 instances:
            Jenkins Master Node (for CI/CD pipeline management)
            Build Server (for application and Docker image builds)
            Production Server (for deploying Dockerized applications)
            Monitoring Server (for continuous monitoring of Build and Prod servers)
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/financeme/4_A.png`,
              `${BASE_PATH}/financeme/4.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Build and Deployment Automation</TypographyH3>

          <p className="font-mono mb-2">
            Jenkins is configured for a CI/CD pipeline:
            Jenkins Master Node is responsible for pipeline orchestration.
            Build Server is configured as a Jenkins Slave Node to handle application builds and Docker image creation.
            Ansible is used for automating deployment to the Prod server, where the application is deployed using an Ansible client-server model.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/financeme/5.png`,
              `${BASE_PATH}/financeme/6.png`,
              `${BASE_PATH}/financeme/7.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Continuous Monitoring </TypographyH3>
          <p className="font-mono mb-2">
            Prometheus and Grafana are used for real-time monitoring:
            Node Exporter is installed on both Build and Prod servers to collect server metrics (CPU, Disk Space, Memory Utilization).
            Grafana Dashboard is created to visualize these metrics for continuous monitoring.
          </p>
          <SlideShow images={[
            `${BASE_PATH}/financeme/3.png`,
            `${BASE_PATH}/financeme/8.png`,
            `${BASE_PATH}/financeme/9.png`,
            `${BASE_PATH}/financeme/10.png`,
          ]} />
        </div>
      );
    },
  },
  { // 03. Portfolio project
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/myportfolio/landing.png",
    screenshots: ["assets/projects-screenshots/myportfolio/landing.png"],
    live: "https://thalib-dev.vercel.app",
    github: "https://github.com/thalib-dev/my-dev-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/landing.png`,
              `${BASE_PATH}/myportfolio/projects.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/myportfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/projects.png`,
              `${BASE_PATH}/myportfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },

];
export default projects;