import { timeline } from "../constant/careerTimelineData";

export default function CareerTimeline() {
  return (
    <section className="py-28 bg-base-200/20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-base-content/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-base-content/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black tracking-tight text-base-content text-center mb-20">
          Career <span className="text-primary">Timeline</span>
        </h2>

        <div className="relative">
          {/* Center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`lg:grid lg:grid-cols-2 lg:gap-16 relative ${
                  i % 2 === 0 ? "" : "lg:mt-8"
                }`}
              >
                {/* Left content (even items) */}
                {i % 2 === 0 ? (
                  <>
                    <div className="lg:text-right lg:pr-16 mb-4 lg:mb-0">
                      <div className="group border border-base-content/10 hover:border-primary/30 p-6 transition-all duration-300 hover:bg-base-200/50 inline-block w-full text-left lg:text-right">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-primary/70 mb-2 font-bold">
                          {item.period}
                        </p>
                        <h3 className="font-black text-base-content text-lg tracking-tight mb-1">
                          {item.role}
                        </h3>
                        <p className="text-primary/60 text-xs tracking-widest uppercase mb-3 font-medium">
                          {item.company}
                        </p>
                        <p className="text-base-content/50 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="hidden lg:flex items-center justify-start absolute left-1/2 top-8 -translate-x-1/2">
                      <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 ring-offset-2 ring-offset-base-100" />
                    </div>

                    <div className="hidden lg:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden lg:block" />

                    {/* Dot */}
                    <div className="hidden lg:flex items-center justify-start absolute left-1/2 top-8 -translate-x-1/2">
                      <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 ring-offset-2 ring-offset-base-100" />
                    </div>

                    <div className="lg:pl-16">
                      <div className="group border border-base-content/10 hover:border-primary/30 p-6 transition-all duration-300 hover:bg-base-200/50">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-primary/70 mb-2 font-bold">
                          {item.period}
                        </p>
                        <h3 className="font-black text-base-content text-lg tracking-tight mb-1">
                          {item.role}
                        </h3>
                        <p className="text-primary/60 text-xs tracking-widest uppercase mb-3 font-medium">
                          {item.company}
                        </p>
                        <p className="text-base-content/50 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
