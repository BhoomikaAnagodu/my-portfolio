import Experience_Icon from "../assets/experience.png";
import Education_Icon from "../assets/education.png";
import Certificate_Icon from "../assets/certificate.png";
import React_Icon from "../assets/tech-stack/React.svg";
import Nextjs_Icon from "../assets/tech-stack/Next.js.svg";
import JavaScript_Icon from "../assets/tech-stack/JavaScript.svg";
import TypeScript_Icon from "../assets/tech-stack/TypeScript.svg";
import HTML5_Icon from "../assets/tech-stack/HTML5.svg";
import CSS3_Icon from "../assets/tech-stack/CSS3.svg";
import Redux_Icon from "../assets/tech-stack/Redux.svg";
import Tailwind_Icon from "../assets/tech-stack/Tailwind_CSS.svg";
import Vite_Icon from "../assets/tech-stack/Vite.svg";
import Parcel_Icon from "../assets/tech-stack/parcel.png";
import Bootstrap_Icon from "../assets/tech-stack/Bootstrap.svg";
import Material_UI_Icon from "../assets/tech-stack/Material_UI.svg";
import Storybook_Icon from "../assets/tech-stack/Storybook.svg";
import GraphQL_Icon from "../assets/tech-stack/GraphQL.svg";
import Jest_Icon from "../assets/tech-stack/Jest.svg";
import Jira_Icon from "../assets/tech-stack/Jira.svg";
import Docker_Icon from "../assets/tech-stack/Docker.svg";
import Confluence_Icon from "../assets/tech-stack/Confluence.svg";
import CircleCI_Icon from "../assets/tech-stack/CircleCI.svg";
import Ant_Design_Icon from "../assets/tech-stack/Ant_Design.svg";
import Good_Food from "../assets/projects/Good_Food.webp";
import Photo_Log from "../assets/projects/Photo_Log.webp";

export const NAV_ITEMS = [
  {
    label: "Home",
    value: "home",
  },
  {
    label: "About",
    value: "about",
  },
  {
    label: "Experience",
    value: "experience",
  },
  {
    label: "Skills",
    value: "skills",
  },
  {
    label: "Projects",
    value: "projects",
  },
  {
    label: "Contact",
    value: "contact",
  },
];

export const ABOUT_CARD_ITEMS = [
  {
    icon: Experience_Icon,
    heading: "Experience",
    desc: "5+ years Frontend Development",
  },
  {
    icon: Education_Icon,
    heading: "Education",
    desc: "Bachelor of Engineering in Computer Science",
  },
  {
    icon: Certificate_Icon,
    heading: "Certificate",
    desc: "React - NamasteDev.com",
  },
];

export const TECH_STACK = [
  {
    icon: React_Icon,
    name: "React",
  },
  {
    icon: Nextjs_Icon,
    name: "Next.js",
  },
  {
    icon: JavaScript_Icon,
    name: "JavaScript",
  },
  {
    icon: TypeScript_Icon,
    name: "TypeScript",
  },
  {
    icon: HTML5_Icon,
    name: "HTML",
  },
  {
    icon: CSS3_Icon,
    name: "CSS",
  },
  {
    icon: Redux_Icon,
    name: "Redux",
  },
  {
    icon: Tailwind_Icon,
    name: "Tailwind CSS",
  },
  {
    icon: Parcel_Icon,
    name: "Parcel",
  },
  {
    icon: Vite_Icon,
    name: "Vite",
  },
  {
    icon: Bootstrap_Icon,
    name: "Bootstrap",
  },
  {
    icon: Material_UI_Icon,
    name: "Material UI",
  },
  {
    icon: GraphQL_Icon,
    name: "GraphQL",
  },
  {
    icon: Storybook_Icon,
    name: "Storybook",
  },
  {
    icon: Jest_Icon,
    name: "Jest",
  },
  {
    icon: Jira_Icon,
    name: "Jira",
  },
  {
    icon: Docker_Icon,
    name: "Docker",
  },
  {
    icon: Confluence_Icon,
    name: "Confluence",
  },
  {
    icon: CircleCI_Icon,
    name: "CircelCI",
  },
  {
    icon: Ant_Design_Icon,
    name: "Ant Design",
  },
];

export const EXPERIENCE_LIST = [
  {
    designation: "Senior Software Engineer",
    company_name: "Walmart Global Technology Services India Private Limited",
    location: "Bangalore",
    description: `<p><span class="font-medium">Led feature development and architectural improvements</span> on the onboarding platform after transitioning to a full-time role. Took greater ownership of core frontend modules, drove technical decisions around <span class="font-medium">code quality, reusability,</span> and <span class="font-medium">scalability,</span> and mentored newer developers on best practices in <span class="font-medium">React, TypeScript,</span> and <span class="font-medium">Tailwind CSS.</span> Actively collaborated in cross-functional teams to align UI/UX decisions with business requirements. Improved build performance and enhanced accessibility compliance, contributing to a more maintainable and robust product ecosystem.</p>`,
    timeline: "Mar 2024 - Dec 2024",
  },
  {
    designation:
      "Frontend Developer (as a Vendor through Xebia IT Architects India Private Ltd)",
    company_name: "Walmart Global Technology Services India Private Limited",
    location: "Bangalore",
    description: `<p><span class="font-medium">Built and maintained a scalable onboarding platform</span> using <span class="font-medium">Micro Frontend architecture</span> to support modular, multi-team development. As a vendor engineer, I contributed to the platform’s foundational structure and helped deliver seamless, end-to-end onboarding flows. Developed <span class="font-medium">accessible, responsive UIs</span> using <span class="font-medium">React, TypeScript,</span> and <span class="font-medium">component-driven development,</span> with a strong focus on performance, reusability, and cross-service integration. Collaborated closely with design, product, and engineering teams to ensure alignment across teams and business goals.</p>`,
    timeline: "Apr 2022 - Mar 2024",
  },
  {
    designation: "Consultant (as Frontend Developer)",
    company_name: "Xebia IT Architects India Private Limited",
    location: "Bangalore",
    description: `<p>As a Frontend Developer, built <span class="font-medium">reusable React components</span> using <span class="font-medium">TypeScript</span> and <span class="font-medium">Redux</span>. Delivered key features such as a <span class="font-medium">global calendar</span> to enhance <span class="font-medium">user engagement</span>, optimized <span class="font-medium">application performance</span>, and fixed <span class="font-medium">critical bugs</span>. Mentored <span class="font-medium">junior developers</span> and contributed to efficient, high-quality product delivery in <span class="font-medium">Agile environments</span>.</p>`,
    timeline: "Nov 2021 - Mar 2024",
  },
  {
    designation: "React Developer",
    company_name: "3Embed Software Technologies Private Limited",
    location: "Bangalore",
    description: `<p>Developed <span class="font-medium">flexible</span> and <span class="font-medium">well-structured user interfaces</span> using <span class="font-medium">React.js</span> and <span class="font-medium">Next.js</span> frameworks, creating <span class="font-medium">reusable components</span> with <span class="font-medium">Material UI</span>, <span class="font-medium">Ant Design</span>, and custom <span class="font-medium">CSS</span>. Implemented advanced features such as <span class="font-medium">multi-selection filters</span>, <span class="font-medium">server-side rendering</span>, <span class="font-medium">dynamic routing</span>, and <span class="font-medium">calendar scheduling</span>. Collaborated with clients to gather requirements and contributed to <span class="font-medium">project planning</span> and documentation. Utilized tools like <span class="font-medium">Moment.js</span> for date operations, <span class="font-medium">JIRA</span> and <span class="font-medium">Trello</span> for bug tracking, and optimized performance to enhance user experience across devices and browsers.</p>`,
    timeline: "Jul 2019 - Oct 2021",
  },
  {
    designation: "Service Executive - Cataloger ",
    company_name:
      "Prione Business Services Limited (A Catamaran and Amazon Joint Venture)",
    location: "Bangalore",
    description: `<p>Collected and enhanced <span class="font-medium">product information</span> according to <span class="font-medium">Amazon guidelines</span> to improve <span class="font-medium">clarity</span> and <span class="font-medium">customer appeal</span>. Took ownership as <span class="font-medium">QC point of contact</span>, efficiently resolving <span class="font-medium">escalations</span> and ensuring <span class="font-medium">timely file uploads</span>. Contributed to <span class="font-medium">process improvement</span> by analyzing <span class="font-medium">approval delays</span> and performed both <span class="font-medium">execution</span> and <span class="font-medium">quality checks</span> to maintain <span class="font-medium">high accuracy</span> and reduce <span class="font-medium">error rates</span>.</p>`,
    timeline: "Jun 2015 - Feb 2018",
  },
];

export const PROJECTS_LISTING = [
  {
    name: "Good Food",
    image: Good_Food,
    description:
      "A streamlined food delivery web app featuring restaurant listings, detailed restaurant pages, and an intuitive cart experience.",
    tech_stack: ["React", "Redux", "Parcel", "Tailwind CSS"],
    github_link: "https://github.com/BhoomikaAnagodu/GoodFood",
    live_website_link: "https://goodf00d.netlify.app/",
  },
  {
    name: "Photo Log",
    image: Photo_Log,
    description:
      "A intuitive photo search app that helps you find stunning, high-resolution images in seconds. Browse through millions of beautiful, royalty-free photos curated from talented photographers around the world.",
    tech_stack: ["React", "Vite", "Tailwind CSS", "Firebase Auth"],
    github_link: "https://github.com/BhoomikaAnagodu/photoLog",
    live_website_link: "https://photol0g.netlify.app/",
  },
];
