import type { NavLinksProps, NavLink } from "../../types/navbar.types";

const getLinkClass = (label: string): string => {
  const base = "text-sm font-medium tracking-wide transition-colors duration-200 hover:text-primary";
  const active = "text-primary border-b border-primary pb-0.5";
  const inactive = "text-base-content/60 hover:text-base-content";

  return `${base} ${label === "Contact" ? active : inactive}`;
};

export default function NavLinks({ links }: NavLinksProps) {
  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link: NavLink) => (
        <a                                    
          key={link.label}                    
          href={link.href}                    
          className={getLinkClass(link.label)}
        >
          {link.label}
        </a>                                  
      ))}
    </div>
  );
}