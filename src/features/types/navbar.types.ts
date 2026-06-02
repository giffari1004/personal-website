export type Theme = "dark" | "light";

export interface NavLink {
  label: string;
  href: string;
}

export interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export interface NavLinksProps {
  links: NavLink[];
}
