interface Project {
  id: ProjectId;
  title: string;
  subtitle: string;
  platforms: ProjectPlatform[];
  image: string;
  style?: string;
}

export enum ProjectId {
  TravelApp = "TravelApp",
  programmingClass = "programmingClass",
  OurHive = "OurHive",
  BondiiApp = "BondiiApp",
  Project5 = "Project5",
}
export interface ProjectPlatform {
  link: string;
  platform: PlatformsAvailable;
}

export enum PlatformsAvailable {
  Web = "Web",
  Mobile = "Mobile",
  Desktop = "Desktop",
  Backend = "Backend",
  GitHub = "GitHub",
}

export const projects: Project[] = [
  {
    id: ProjectId.TravelApp,
    title: "Travel App",
    subtitle: "Aumentar S.A.S",
    platforms: [
      {
        link: "",
        platform: PlatformsAvailable.Web,
      },
      {
        link: "",
        platform: PlatformsAvailable.Mobile,
      },
    ],
    image:
      "https://www.gematsu.com/wp-content/uploads/2023/09/Game-Page-Featured_Sekiro-Shadows-Die-Twice.jpg",
    style: "row-span-2",
  },
  {
    id: ProjectId.programmingClass,
    title: "Clase de Programación: TypeScript",
    subtitle: "Universidad Distrital Francisco José de Caldas",
    platforms: [
      {
        link: "",
        platform: PlatformsAvailable.Web,
      },
    ],
    image:
      "https://www.gematsu.com/wp-content/uploads/2023/09/Game-Page-Featured_Sekiro-Shadows-Die-Twice.jpg",
    style: "grid grid-cols-2 grid-rows-1 gap-4 row-span-1",
  },
  {
    id: ProjectId.Project5,
    title: "Project 5",
    subtitle: "Project 5 subtitle",
    platforms: [
      {
        link: "",
        platform: PlatformsAvailable.Web,
      },
      {
        link: "",
        platform: PlatformsAvailable.Mobile,
      },
    ],
    image:
      "https://www.gematsu.com/wp-content/uploads/2023/09/Game-Page-Featured_Sekiro-Shadows-Die-Twice.jpg",
    style: "grid",
  },
  {
    id: ProjectId.OurHive,
    title: "Our Hive - Emotional App",
    subtitle: "Universidad Distrital Francisco José de Caldas",
    platforms: [
      {
        link: "",
        platform: PlatformsAvailable.Web,
      },
      {
        link: "",
        platform: PlatformsAvailable.Mobile,
      },
      {
        link: "",
        platform: PlatformsAvailable.GitHub,
      },
    ],
    image:
      "https://www.gematsu.com/wp-content/uploads/2023/09/Game-Page-Featured_Sekiro-Shadows-Die-Twice.jpg",
    style: "row-span-2",
  },
  {
    id: ProjectId.BondiiApp,
    title: "Bondii App",
    subtitle: "Bondii S.A.S",
    platforms: [
      {
        link: "",
        platform: PlatformsAvailable.Web,
      },
      {
        link: "",
        platform: PlatformsAvailable.Mobile,
      },
    ],
    image:
      "https://www.gematsu.com/wp-content/uploads/2023/09/Game-Page-Featured_Sekiro-Shadows-Die-Twice.jpg",
  },
];
