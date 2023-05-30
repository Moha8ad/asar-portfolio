import { Apps, GitHub, Layers, OpenInNew } from "@mui/icons-material";
import work from "../assets/work.jpeg";
import discover from "../assets/discover.jpeg";
import create from "../assets/create.jpeg";
import play from "../assets/play.avif";
import plan from "../assets/plan.jpeg";

export const apps = [
  {
    id: 1,
    label: "Work",
    apps: [
      {
        id: 11,
        title: "Coming soon...",
        techStack: ["--"],
        library: ["--"],
      },
    ],
    imageUrl: work,
  },
  {
    id: 2,
    label: "Explore",
    apps: [
      {
        id: 21,
        title: "Pictoria",
        techStack: ["React", "Redux", "Javascript"],
        library: [
          "axios",
          "express",
          "bcrypt",
          "moment",
          "react-google-login",
          "Material UI",
        ],
        demoUrl: "https://asar-pictoria.netlify.app",
        repoUrl: "https://github.com/Moha8ad/pictoria-client",
      },
      {
        id: 22,
        title: "Quotify",
        techStack: ["React", "Redux", "JavaScript"],
        library: ["Material UI", "Styled-component"],
        demoUrl: "https://asar-quotify.netlify.app/",
        repoUrl: "https://github.com/Moha8ad/quotify",
      },
    ],
    imageUrl: discover,
  },
  {
    id: 3,
    label: "Create",
    apps: [
      {
        id: 31,
        title: "Pixel Art",
        url: "https://asar-pixart.netlify.app",
        techStack: ["React", "Redux", "JavaScript"],
        library: [
          "Material UI",
          "html-to-image",
          "react-draggable",
          "redux-persist",
        ],
        demoUrl: "https://asar-pixart.netlify.app",
        repoUrl: "https://github.com/Moha8ad/pixel-art",
      },
      {
        id: 32,
        title: "Memeland",
        techStack: ["React", "Redux", "JavaScript"],
        library: [
          "axios",
          "express",
          "Material UI",
          "html-to-image",
          "react-colorful",
        ],
        demoUrl: "https://asar-memeland.netlify.app",
        repoUrl: "https://github.com/Moha8ad/meme-generator-client",
      },
    ],
    imageUrl: create,
  },
  {
    id: 4,
    label: "Play",
    apps: [
      {
        id: 41,
        title: "Match Time",
        techStack: ["React", "JavaScript"],
        library: ["Styled-component"],
        demoUrl: "https://asar-match-time.netlify.app",
        repoUrl: "https://github.com/Moha8ad/match-time",
      },
      {
        id: 42,
        title: "Snakes and Ladder",
        techStack: ["React", "JavaScript"],
        library: ["Bootstrap", "Sass"],
        demoUrl: "https://asar-snakes-ladders.netlify.app",
        repoUrl: "https://github.com/Moha8ad/snakes-and-ladders",
      },
    ],
    imageUrl: play,
  },
  {
    id: 5,
    label: "Plan",
    apps: [
      {
        id: 51,
        title: "Timed",
        techStack: ["React", "JavaScript"],
        library: ["Sass"],
        demoUrl: "https://asar-timed.netlify.app/",
        repoUrl: "https://github.com/Moha8ad/timed",
      },
      {
        id: 52,
        title: "G5 Kit",
        techStack: ["React", "JavaScript"],
        library: ["Sass"],
        demoUrl: "https://asar-g5.netlify.app/",
        repoUrl: "https://github.com/Moha8ad/g5",
      },
    ],
    imageUrl: plan,
  },
];

export const isPreview = "Live Preview";
export const isRepository = "Repository";

export const isTechStack = "Tech Stack";
export const isLibrary = "Library";

export const appDetailsSections = [
  {
    id: "1",
    title: isPreview,
    icon: <OpenInNew />,
  },
  {
    id: "2",
    title: isRepository,
    icon: <GitHub />,
  },
  {
    id: "3",
    title: isTechStack,
    icon: <Layers />,
  },
  {
    id: "4",
    title: isLibrary,
    icon: <Apps />,
  },
];
