const words = [
  { text: "Automation", imgPath: "/images/automation.gif" },
  { text: "Security", imgPath: "/images/cloud-security.png" },
  { text: "System", imgPath: "/images/system-info.png" },
  { text: "Environments", imgPath: "/images/public-cloud.png" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 43, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
];

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/k8s.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
];

const expCards = [
  {
    review:
      "JC is, hands down, one of the most dedicated and talented people I have ever worked with. He is incredibly responsive, and is always willing to help tackle any problem, no matter how complex it is. Not only is he incredibly smart, but he shares his knowledge and helps those around him learn. Truly, getting to work with JC is one of the reasons I love my job.",
    imgPath: "/images/logos/kojo-logo.webp",
    logoPath: "/images/logos/spectrum-logo.png",
    title: "Principal DevOps Engineer",
    companyName: "Charter Communications",
    date: "July 2024 - Present",
    responsibilities: [
      "Lead a team of 8 to do customer-facing platform transformation using AWS EKS and Terraform, improving developer productivity by 50%",
      "Created audit-friendly observability and monitoring stack using Datadog and Splunk, and and SLO monitors to proactively detect and respond to incidents",
      "Designed GitOps-based CI/CD pipelines with Helm to ensure seemless, faster and safer deployments",
      "Introduced automated remediation playbooks for common incidents, slashing MTTR by 40%.",
      "Improved frontend performance by implementing Angular SSR and optimized API calls.",
      "Integrated security best practices on Docker images and infrastructure, enabling compliance with PCI",
      "Achived GitOps self-healing infrastructure patterns to reduce manual intervention and downtime",
      "Modulized Terraform for cross-functional teams to provision cloud services",
    ],
  },
  {
    review:
      "I highly recommend Johnny as a Software Engineer. He worked for me as an intern and I would have hired him if I had any openings. As an intern, he quickly came up to speed with the work our team was doing. He was highly motivated, worked on his own but knew when to ask for help, and was quickly contributing changes to our application which were deployed to production. He would be an asset to any team.",
    imgPath: "/images/logos/pearson-logos.png",
    logoPath: "/images/logos/spectrum-logo.png",
    title: "Lead DevOps Engineer",
    companyName: "Charter Communications",
    date: "March 2022 - July 2024",
    responsibilities: [
      "Led a team of 5 to manage and support 140+ Kubernetes clusters with integrated security, policy enforcement, and network configuration",
      "Planned and built multi-region cloud infrastructure and automated disaster recovery solutions",
      "Implemented security scanning scripts and Dockerized images for over 100 teams to use",
      "Designed and maintained highly available and centralized CI/CD pipelines for 100+ teams to use",
      "Optimized cloud costs, achieving annual savings of $400,000 while maintaining reliability standards.​",
      "Collaborated scalable, compliant infrastructure for highly regulated environments, ensuring PCI compliance.",
      "Developed Kubernetes platform automation using Terraform, Helm, and ArgoCD,",
      "Introduced network security controls and Zero Trust policies, enhancing cloud security posture.",
    ],
  },
  {
    review:
      "JC played a pivotal role in optimizing our CI/CD pipelines, which led to a 55% increase in processing efficiency. He is not only a highly skilled DevOps person but also a fantastic team player, always willing to help whenever people need.",
    imgPath: "",
    logoPath: "/images/logos/spectrum-logo.png",
    title: "DevOps Engineer",
    companyName: "Charter Communications",
    date: "March 2021 - March 2022",
    responsibilities: [
      "Developed Terraform modules and service templates to standardize cloud provisioning",
      "Instrumented services with Prometheus metrics and built alerting based on golden signals",
      "Built and maintained Terraform modules for VPCs, IAM, and Kubernetes clusters",
      "Enhanced system observability and alerting on Prometheus and Grafana, ensuring proactive issue detection.​",
      "Achived automation scripts in Python and Golang to streamline security auditing and infrastructure provisioning.",
      "Implemented network security best practices, ensuring compliance with financial industry regulations.",
      "Collaborated custom Kubernetes operators in Golang to help auto-import to Cluster Manager",
      "Optimized API performance and database query efficiency, reducing latency by 30%",
    ],
  },
  {
    review:
      "Johnny showed great aptitude for learning new things and diving right into work. In our short time together he was asked to do a lot that was new and unfamiliar and he worked hard to get the task done. He always took the time to understand what was being asked of him and showed a lot of growth as a developer. I would definitely work with him again",
    imgPath: "/images/logos/quantum-metric-logo.png",
    logoPath: "/images/logos/spectrum-logo.png",
    title: "FullStack Developer",
    companyName: "Charter Communications",
    date: "December 2020 - March 2021",
    responsibilities: [
      "Built internal DevOps tools to automate deployments, monitoring, and cloud infrastructure.​",
      "Developed internal React and Golang applications for enterprise applications and monitoring.​",
      "Automated AWS environment setup, reducing manual effort and ensuring consistency.​",
      "Contributed Terraform modules to standardize infrastructure provisioning.",
    ],
  },
  {
    review:
      "Johnny showed great passion for not only learning our application but our tools and framework. Johnny worked hard to grasp the material and get his tasks done in a timely fashion. He shows great potential as a developer and I would definitely work with him again.",
    imgPath: "/images/logos/empower-logo.png",
    logoPath: "/images/logos/spectrum-logo.png",
    title: "Automation Engineer",
    companyName: "Charter Communications",
    date: "July 2019 - December 2020",
    responsibilities: [
      "Implemented CI/CD pipelines with security checks, ensuring compliance before deployment.​",
      "Integrated JIRA automation with VMware for cloud resource provisioning.​",
      "Developed internal React and Vue applications for enterprise application monitoring.​",
      "Built backend GraphQL and RESTful APIs, improving data retrieval performance.",
      "Automated cloud deployments using Terraform, reducing infrastructure provisioning time",
    ],
  },
  {
    review:
      "I had the pleasure of working alongside Johnny at PetraShare Corp. During our time collaborating on various projects, I was consistently impressed by Johnny's deep and practical knowledge of Kubernetes.",
    imgPath: "",
    logoPath: "/images/logos/docker-logo.png",
    title: "Software Developer",
    companyName: "PetraShare Corp",
    date: "June 2017 - July 2019",
    responsibilities: [
      "Developed corporate frontend and backend applications using React, Vue, Python, and MongoDB.​",
      "Built backend RESTful APIs, improving data retrieval performance.​",
      "Gained hands-on experience in Scrum project management with Jira.​",
    ],
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

export {
  words,
  counterItems,
  navLinks,
  logoIconsList,
  abilities,
  expCards,
  techStackIcons,
  techStackImgs,
  // expLogos,
  // testimonials,
  // socialImgs,
};
