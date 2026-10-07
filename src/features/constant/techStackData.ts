import type { StackItem } from "../types/techStackData.types";

export const stacks: StackItem[] = [
  {
    category: "Front-End",
    iconName: "front-end",
    tags: ["HTML", "CSS", "JS", "TS", "REACT", "NEXT", "AXIOS"],
    color: "text-blue-400",
  },
  {
    category: "Back-End",
    iconName: "back-end",
    tags: ["NODE.JS", "EXPRESS", "TS", "POSTGRESQL"],
    color: "text-green-400",
  },
  {
    category: "Tools",
    iconName: "devops",
    tags: ["DOCKER", "GIT", "CI/CD"],
    color: "text-orange-400",
  },
];
