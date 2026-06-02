import type { NavLinksProps } from "../../types/navbar.types";

export default function MobileMenu({ links }: NavLinksProps) {
  return (
    <div className="md:hidden dropdown dropdown-end">
      <button tabIndex={0} className="btn btn-ghost btn-sm text-base-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-200 rounded-box z-10 w-48 p-2 shadow-xl mt-2"
      >
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
