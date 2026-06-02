import { useTheme } from "../hooks/useTheme";
import { useScrolled } from "../hooks/useScrolled";
import ThemeToggle from "./navbar/ThemeToggle";
import NavLinks from "./navbar/NavLinks";
import MobileMenu from "./navbar/MobileMenu";
import type { NavLink, Theme } from "../types/navbar.types";

const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experiences", href: "#experiences" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const scrolled = useScrolled();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-100/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-black text-xl tracking-tighter text-base-content"
        >
          GIFAR<span className="text-primary">.</span>DEV
        </a>

        {/* Desktop Links */}
        <NavLinks links={NAV_LINKS} />

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme as Theme} onToggle={toggleTheme} />

          <a
            href="#contact"
            className="hidden md:inline-flex btn btn-sm btn-outline border-base-content/30 text-base-content/60 hover:border-primary hover:text-primary hover:bg-transparent rounded-none text-xs tracking-widest"
          >
            RESUME
          </a>

          <MobileMenu links={NAV_LINKS} />
        </div>
      </div>
    </nav>
  );
}
