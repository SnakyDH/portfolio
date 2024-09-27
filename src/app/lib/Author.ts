type SocialMediaType = {
  name: string;
  url: string;
};

type AuthorType = {
  name: string;
  titles: string[];
  socialMedia: SocialMediaType[];
  skills: {
    web: string[];
    mobile: string[];
    backend: string[];
  };
};
export const Author = {
  name: "Daniel García Romero",
  titles: [
    "Software Developer",
    "Web Developer",
    "Mobile Developer",
    "FullStack Developer",
  ],
  socialMedia: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dangarciadh/",
    },
    {
      name: "GitHub",
      url: "https://github.com/SnakyDH",
    },
  ],
  skills: {
    web: ["Next.js", "React", "TailwindCSS", "Angular"],
    mobile: ["Flutter", "Android", "JetPack Compose", "React Native", "Expo"],
    backend: [
      "Node.js",
      "Express",
      "NestJS",
      "SQL",
      "Firebase",
      "MongoDB",
      "REST",
    ],
    language: [
      "Dart",
      "JavaScript",
      "TypeScript",
      "Kotlin",
      "Java",
      "PHP",
      "Git",
      "HTML",
      "CSS",
    ],
  },
};
