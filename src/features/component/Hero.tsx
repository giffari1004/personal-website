export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden bg-base-100"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow accent */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-10 bg-primary pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs tracking-[0.2em] uppercase text-base-content/50 font-medium">
                Available for hire
              </span>
            </div>

            <h1 className="font-black leading-none tracking-tight mb-6">
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-base-content">
                GIFAR Dev
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-primary leading-tight">
                Full-Stack Web
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-primary leading-tight">
                Developer.
              </span>
            </h1>

            <p className="text-base-content/50 text-base leading-relaxed max-w-lg mb-10">
              Menghadirkan solusi web berkinerja tinggi dan mudah dikembangkan
              sesuai kebutuhan bisnis. Dedikasi pada kode yang rapi dan presisi
              demi menciptakan pengalaman pengguna terbaik.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="btn btn-primary rounded-none px-8 font-bold tracking-widest text-xs uppercase hover:scale-105 transition-transform"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="btn btn-outline border-base-content/20 text-base-content/60 rounded-none px-8 font-bold tracking-widest text-xs uppercase hover:border-primary hover:text-primary hover:bg-transparent transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="relative shrink-0">
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-primary/20 rounded-none pointer-events-none" />
            <div className="absolute -inset-8 border border-primary/10 rounded-none pointer-events-none" />

            <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 overflow-hidden bg-base-300">
              {/* Placeholder photo */}
              <img
                src="../../assets/images/foto-profile.jpeg"
                alt="Gifar Dev"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none" />
            </div>

            {/* Corner accent */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-primary" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
