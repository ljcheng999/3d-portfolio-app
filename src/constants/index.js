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
      "I highly recommend Johnny as a Software Engineer. He worked for me and I would have hired him if I had any openings. As an intern, he quickly came up to speed with the work our team was doing. He was highly motivated, worked on his own but knew when to ask for help, and was quickly contributing changes to our application which were deployed to production. He would be an asset to any team.",
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
    imgPath: "/images/logos/docker-logo.png",
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
    imgPath: "/images/logos/docker-logo.png",
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

const techStackIcons = [
  {
    name: "Kubernetes",
    iconPath: "/images/logos/k8s-logo2.png",
  },
  {
    name: "Public Cloud",
    iconPath: "/models/aws.glb",
    scale: 0.3,
    rotation: [0, 0, 0],
  },
  {
    name: "Terraform",
    iconPath: "/images/logos/terraform.png",
  },
  {
    name: "Docker",
    // iconPath: "/images/logos/docker.png",
    iconPath: "/models/docker.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Datadog",
    iconPath: "/images/logos/datadog.png",
    // name: "Golang",
    // iconPath: "/models/gopher.glb",
    // scale: 1,
    // rotation: [0, 11, 0],
  },
  {
    name: "Argo",
    iconPath: "/images/logos/argocd.png",
    // name: "Golang",
    // iconPath: "/models/gopher.glb",
    // scale: 1,
    // rotation: [0, 11, 0],
  },
  {
    name: "React",
    iconPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Golang",
    iconPath: "/images/logos/golang-logo.png",
    // name: "Golang",
    // iconPath: "/models/gopher.glb",
    // scale: 1,
    // rotation: [0, 11, 0],
  },
  {
    name: "Python",
    iconPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Nodejs",
    iconPath: "/images/logos/nodejs.png",
    // name: "Golang",
    // iconPath: "/models/gopher.glb",
    // scale: 1,
    // rotation: [0, 11, 0],
  },
  // {
  //   name: "Project Manager",
  //   iconPath: "/images/logos/git.svg",
  // },
];

const testimonials = [
  {
    name: "Jacob Withhold",
    review:
      "I needed an impressive website to expand my advertising and customer base for my tutoring company. I had initially decided to create a website myself using a website template platform. However, I didn't have enough time to design everything myself, and the prices were surprisingly high. Johnny took care of creating website for me after an initial consultation, and then I got to tell him what I liked and didn't like about the prototype in a short conversation. Johnny fixed everything to my exact specifications and the website looks great. I have all the functions I need, and he was able to get my website up and running in a short period of time. The price was quite affordable compared to other offers I got and even compared to the monthly/yearly costs of using a website template platform. I'm very satisfied with the overall experience, and would recommend Johnny to anyone",
    imgPath: "/images/jacob-withhold.jpg",
    // imgPath: "/images/client1.png",
  },
  {
    name: "Wade Jackson",
    review:
      "Johnny was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client3.png",
  },
];

const socialMedias = [
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/ljcheng999",
  },
  {
    name: "gitlab",
    imgPath: "/images/gitlab.png",
    link: "https://gitlab.com/jcheng-tech-919",
  },
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/chch6597/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link: "https://www.facebook.com/zheng.q.qiang.7",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/chenhao-cheng/",
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
  testimonials,
  socialMedias,
};
