const testimonials = [
  {
    quote:
      "Gifar's attention to detail is unparalleled. He didn't just build what we asked for; he improved our entire technical strategy. Truly a partner in our success.",
    name: "Sarah Chen",
    title: "CTO, XYZ Retail",
    initials: "SC",
    color: "bg-blue-500",
  },
  {
    quote:
      "Technically brilliant and a great communicator. Gifar delivered our complex backend migration ahead of schedule and with zero downtime.",
    name: "James Miller",
    title: "Founder, Innovate Digital",
    initials: "JM",
    color: "bg-amber-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-base-100 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-base-content/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group border border-base-content/10 hover:border-primary/30 p-8 transition-all duration-300 hover:bg-base-200/40 relative"
            >
              {/* Quote mark */}
              <div className="text-6xl font-black text-primary/20 leading-none mb-4 group-hover:text-primary/30 transition-colors">"</div>

              <p className="text-base-content/60 text-sm leading-relaxed mb-8 italic">
                {t.quote}
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center`}>
                  <span className="text-base-content font-black text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-base-content text-sm">{t.name}</p>
                  <p className="text-base-content/40 text-xs tracking-wide">{t.title}</p>
                </div>
              </div>

              {/* Accent bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
