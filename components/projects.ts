export interface Project {
  id: number;
  title: string;
  lead: string;
  description: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 7,
    title: "TryHackMe",
    lead: "I pursued this",
    description: "to understand how real-world systems can be attacked and defended. Reaching the top 1% on TryHackMe reflects years of exploring security, networking, operating systems, and offensive techniques through hands-on challenges.",
    tags: ["Cybersecurity", "Top 1%", "Research", "2021 - 2026"],
    link: "https://tryhackme.com/p/Vyvi",
  },
  {
    id: 1,
    title: "Tardis",
    lead: "I built this",
    description: "to understand whether train delays can be predicted before they happen. By training machine learning models on SNCF data, I explored how patterns hidden in historical journeys can reveal future disruptions.",
    tags: ["AI", "Machine Learning", "EPITECH", "2026"],
    link: "https://github.com/Nicolas-Rvr25/Tardis",
  },
  {
    id: 2,
    title: "Game of Life",
    lead: "I built this",
    description: "to understand how complex behaviour can emerge from simple rules. Implemented entirely in assembly on a custom bootloader, it explores the foundations of computation with almost no abstraction layers.",
    tags: ["Assembly", "Simulation", "Bootloader", "2026"],
    link: "https://github.com/vyyvii/OS-game-of-life",
  },
  {
    id: 5,
    title: "42sh",
    lead: "I built this",
    description: "to understand how modern command-line environments work. Recreating a Unix-like shell from scratch forced me to explore parsing, processes, signals, and the mechanisms behind everyday terminal interactions.",
    tags: ["Systems", "Unix", "C", "EPITECH", "2026"],
    link: "https://github.com/aurelien-schir/42sh-temp",
  },
  {
    id: 6,
    title: "MyWorld",
    lead: "I built this",
    description: "to understand how virtual worlds are created and manipulated. Developing a world editor in C allowed me to explore rendering, user interaction, and the tools behind game development workflows.",
    tags: ["Graphics", "C", "Game Development", "EPITECH", "2026"],
  },
  {
    id: 4,
    title: "Portfolio",
    lead: "I built this",
    description: "to understand how ideas, projects, and curiosity can be communicated through design. Rather than showcasing technologies, it explores how storytelling can reveal the motivations behind what we build.",
    tags: ["Design", "Web", "2026"],
    link: "https://github.com/vyyvii/portfolio",
  },
  {
    id: 3,
    title: "IApprennons",
    lead: "I built this",
    description: "to understand how artificial intelligence can support learning. The project helps both students and teachers by adapting explanations, generating educational content, and making knowledge more accessible.",
    tags: ["AI", "Education", "2025"],
    link: "https://github.com/IApprenonsNDB/Application",
  },
];
