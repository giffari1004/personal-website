const projects = [
  {
    title: "Masjid Financial Management System",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    stats: [
      { label: "Team", value: "8" },
      { label: "MongoDB", value: "4" },
      { label: "AWS", value: "3" },
    ],
    problem:
      "Pengurus masjid menghadapi kendala dalam transparansi keuangan dan keterlambatan laporan bulanan, sehingga menurunkan tingkat kepercayaan jamaah dalam menyalurkan infak.",
    tech_detail:
      "Membangun sistem informasi kas terintegrasi yang mampu menyajikan laporan keuangan secara real-time dan aman, dengan optimasi performa agar ringan diakses melalui HP jamaah.",
    actions:
      "Mengembangkan website menggunakan React pada frontend untuk antarmuka yang dinamis, dikombinasikan dengan Node.js dan database relasional untuk manajemen pencatatan arus kas (masuk/keluar) serta otomasi laporan keuangan.",
    result:
      "Meningkatkan transparansi dan efisiensi pelaporan kas sebesar 100% (real-time), serta mempermudah jamaah dalam memantau alokasi dana masjid kapan saja tanpa hambatan teknis.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
];

export default function FeaturedWork() {
  return (
    <section id="portfolio" className="py-28 bg-base-100 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-base-content/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-3xl font-black tracking-tight text-base-content">
            Featured <span className="text-primary">Work</span>
          </h2>
          <span className="text-xs tracking-[0.2em] uppercase text-base-content/30 font-medium">
            / Selected Projects
          </span>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group border border-base-content/10 hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 lg:p-10 space-y-6">
                  <div>
                    <h3 className="text-xl font-black text-base-content mb-4 tracking-tight">
                      {project.title}
                    </h3>

                    {/* Stats row */}
                    <div className="flex gap-6 mb-6">
                      {project.stats.map((stat, j) => (
                        <div key={j} className="text-center">
                          <div className="text-lg font-black text-primary">
                            {stat.value}
                          </div>
                          <div className="text-[10px] tracking-widest text-base-content/40 uppercase">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 text-sm">
                    {[
                      { label: "Problem", text: project.problem },
                      { label: "Tech", text: project.tech_detail },
                      { label: "Actions", text: project.actions },
                      { label: "Result", text: project.result },
                    ].map(({ label, text }) => (
                      <div key={label}>
                        <span className="text-[10px] font-black tracking-[0.15em] uppercase text-primary/70 block mb-1">
                          {label}
                        </span>
                        <p className="text-base-content/50 leading-relaxed">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-primary/70 hover:text-primary transition-colors font-bold group/link"
                  >
                    View Case Study
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden min-h-64 lg:min-h-auto bg-base-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-r from-base-100 via-transparent to-transparent pointer-events-none" />
                  {/* Color overlay */}
                  <div className="absolute inset-0 bg-primary/5 mix-blend-screen pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
