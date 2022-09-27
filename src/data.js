// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLink,
} from "react-icons/fa";
import { SiJavascript, SiStyledcomponents, SiRedux } from "react-icons/si";
import Logo from "./images/logo.svg";
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

export { HeroLight as Light };
export { HeroDark as Dark };

export const githubUsername = "graydevon";

export const Blog = <FaLink />;


export const moreInfo =
  "Welcome to my porfolio! Im currently a student at University Of Minnesota's Coding Bootcamp. I really enjoy coding and hope in the future to put it in uses i can help others.";

export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <SiStyledcomponents className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <SiRedux className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
];

export const resume = null;

export const filteredProjects = ["example-1", "example-2", "example-3"];

export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
