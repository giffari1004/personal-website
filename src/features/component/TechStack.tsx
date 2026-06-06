// TechStack.tsx
import { stacks } from "../constant/techStackData"; // Sesuaikan path relatif folder constant Anda

// 1. Buat pemetaan dari string ke komponen SVG asli Anda
const IconRenderer = ({ name }: { name: string }) => {
  const props = {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-5 h-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
  };

  switch (name) {
    case "front-end":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    case "back-end":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
          />
        </svg>
      );
    case "devops":
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default function TechStack() {
  return (
    <section id="experiences" className="py-28 bg-base-200/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-base-content/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-base-content/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black tracking-tight text-base-content text-center mb-16">
          Tech <span className="text-primary">Stack</span>
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {stacks.map((stack, i) => (
            <div
              key={i}
              className="group border border-base-content/10 hover:border-primary/30 p-6 transition-all duration-300 hover:bg-base-200/60 hover:-translate-y-1"
            >
              {/* Header */}
              <div className={`flex items-center gap-3 mb-5 ${stack.color}`}>
                {/* 2. Ganti stack.icon menjadi komponen pembantu kita */}
                <IconRenderer name={stack.iconName} />
                <span className="font-bold text-base-content text-sm tracking-wide">
                  {stack.category}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {stack.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge badge-outline border-base-content/20 text-base-content/50 text-[10px] tracking-widest font-bold rounded-none py-3 px-2 group-hover:border-primary/30 group-hover:text-primary/70 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
