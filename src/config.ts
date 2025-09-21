export const siteConfig = {
  name: "Juanpa",
  title: "Programmer | Fullstack student",
  description: "Portfolio website of Juanpa",
  accentColor: "#1d4ed8",
  social: {
    email: "contact@jpgp.es",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/Lokray06",
  },
  aboutMe:
    "Im a 19yo fullstack student based in Spain. But doesn't stop me from exploring other programming fields I'm more passionate about, like systems development, gamedev, computer graphics, etc.",
  skills: [
    { name: "Java", experienceYears: 2 },
    { name: "C#", experienceYears: 3 },
    { name: "Linux systems", experienceYears: 3 },
    { name: "Python", experienceYears: 3 }
  ],
  projects: [
    {
      category: "Personal",
      status: "In development",
      name: "Nebula",
      description:
        "An object-oriented programming language with a custom compiler that translates source code to LLVM IR. As an exploration into language design, Nebula combines a clean, high-level syntax—inspired by languages like Java and C#—with the goal of achieving native performance without a heavy virtual machine.",
      link: "https://github.com/Lokray06/nebula",
      skills: ["Java", "LLVM", "C++"],
    },

    // Minocraft
    {
      category: "Personal",
      status: "In development",
      name: "Minocraft",
      description:
        "A custom-built Minecraft-style voxel engine in Java using LWJGL. The project focuses on optimizing core mechanics to achieve higher performance than the original game, while replicating its a block-based sandbox environment.",
      link: "https://github.com/Lokray06/Minocraft",
      skills: ["Java", "OpenGL"],
    },

    // CRIS
    {
      category: "Personal",
      status: "Completed",
      name: "CRIS",
      description:
        "A Python-based steganography tool that securely hides and retrieves files within images using RSA encryption. The project demonstrates a method for encrypting a data-shuffling seed to ensure secure retrieval.",
      link: "https://github.com/Lokray06/CRIS",
      skills: ["Python", "Cryptography", "Steganography"],
    },

    // Arcane
    {
      category: "Personal",
      status: "In development",
      name: "Arcane",
      description:
        "A 3D game engine built from scratch in Java with LWJGL. The engine features a custom entity-component system and real-time rendering, providing a lightweight framework for game development.",
      link: "https://github.com/Lokray06/Arcane",
      skills: ["Java", "OpenGL", "LWJGL", "GLSL"],
    },
    // ENCASA App Suite
    {
      category: "Professional",
      status: "Completed",
      name: "ENCASA App Suite",
      description:
        "Led the development of a custom 3-app suite to streamline the company's incident tracking and management process. The solution integrated with existing company data sources and provided a RESTful API for external data visualization.",
      link: "NotPublic",
      skills: ["AutoHotkey", "PHP", "VBA", "APIs"],
    },
    // EPI Automation
    {
      category: "Professional",
      status: "Completed",
      name: "EPI Automation App",
      description:
        "Engineered a local server application using web technologies to automate the process of issuing personal protective equipment (PPE) to employees. The system auto-generates and digitally signs PDF records, streamlining a critical business process.",
      link: "NotPublic",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "PDF-Lib"],
    },
  ],
  experience: [
    {
      company: "ENCASA",
      title: "Systems Developer",
      dateRange: "Jun 2024 - Aug 2024",
      bullets: [
        "Built and maintained a custom application suite to manage internal incident reports, supplier communications, and quality control",
        "Leveraged existing company data in Excel to build a primary data source for a suite of applications, ensuring data continuity and accessibility",
        "Developed a local server application using web technologies to automate the process of signing and generating PDF documents for worker PPE"
      ],
    },
    {
      company: "ENCASA (Internship)",
      title: "Systems Developer Intern",
      dateRange: "May 2024 - Jun 2024",
      bullets: [
        "Led the development of a 3-app suite to streamline the company's INC tracking process, from registration to supplier reporting",
        "Architected a solution that integrated with the company's legacy data systems and provided a RESTful API for external data visualization",
        "Implemented new features and continued to expand the application's functionality based on evolving business needs"
      ],
    },
    {
      company: "Vinilo sevilla S.L. (Internship)",
      title: "Networking Intern",
      dateRange: "May 2022 - Jul 2022",
      bullets: [
        "Developed the company website with Wordpress",
        "Independently maintained the company's network infrastructure",
        "Developed some Python automation apps for the company's SEO, and local positioning",
        "Gained extensive experience in vinyl installation through multiple projects for clients like Shell, Real Maestranza de Sevilla, Real Club El Mercantil, and many more",
      ],
    },
  ],
  education: [
    {
      school: "Altair | ES",
      degree: "Vocational Training in Microcomputer Systems and Networks (Intermediate Level)",
      dateRange: "22/23 - 23/24",
      achievements: [
        "Graduated with 9.2",
        "Delegate representing all the school's vocational training students",
      ],
    },
    {
      school: "Altair | ES",
      degree: "Full Stack Development Certificate",
      dateRange: "24/25 - Current",
      achievements: [
        "Completed first year with an average grade of 9.8, demonstrating a strong grasp of core concepts",
        "Appointed by professors to mentor younger students, assisting them with coursework and improving their understanding of complex topics"
      ],
    },
  ],
};
