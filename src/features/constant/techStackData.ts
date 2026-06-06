import type { StackItem } from "../types/techStackData.types";

export const stacks: StackItem[] = [
  {
    category: "Front-End",
    iconName: "front-end",
    tags: ["HTML", "CSS", "JS", "REACT", "ANGULAR"],
    color: "text-blue-400",
  },
  {
    category: "Back-End",
    iconName: "back-end",
    tags: ["NODE.JS", "EXPRESS", "LARAVEL", "POSTGRESQL"],
    color: "text-green-400",
  },
  {
    category: "DevOps",
    iconName: "devops",
    tags: ["DOCKER", "GIT", "AWS", "CI/CD"],
    color: "text-orange-400",
  },
];
