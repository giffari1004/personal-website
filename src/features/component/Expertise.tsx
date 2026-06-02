export default function Expertise() {
  const values = [
    {
      title: "Technical Precision",
      desc: `Setiap baris kode yang saya tulis selalu berorientasi pada
              struktur yang bersih, rapi, dan arsitektur database yang solid.
              Dengan latar belakang di bidang Sistem Informasi, fokus utama saya
              adalah membangun aplikasi web yang tidak hanya menyelesaikan
              masalah nyata, tetapi juga mudah dikembangkan untuk jangka
              panjang.`,
    },
    {
      title: "Reliable Execution",
      desc: `Mulai dari proyek akademis hingga ritme sprint yang cepat di
              program bootcamp, ketepatan waktu dan logika yang kuat adalah
              standar kerja saya. Saya menghadapi setiap tantangan development
              dengan pendekatan analitis untuk memastikan hasil akhir
              benar-benar sesuai dengan kebutuhan pengguna.`,
    },
  ];

  return (
    <section id="skills" className="py-28 bg-base-100 relative overflow-hidden">
      {/* Subtle divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-base-content/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black tracking-tight text-base-content mb-16">
          Expertise <span className="text-primary">&</span> Values
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Value cards */}
          <div className="space-y-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="group border border-base-content/10 hover:border-primary/40 p-6 transition-all duration-300 hover:bg-base-200/50 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-1 h-full bg-primary/40 group-hover:bg-primary transition-colors duration-300 self-stretch min-h-10" />
                  <div>
                    <h3 className="font-bold text-base-content mb-2 tracking-tight">
                      {v.title}
                    </h3>
                    <p className="text-base-content/50 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Bio paragraph */}
          <div className="space-y-4 text-base-content/60 text-sm text-justify leading-relaxed">
            <p>
              Sebagai lulusan Sistem Informasi dari Universitas Gunadarma
              sekaligus calon Full-Stack Software Developer, saya terbiasa
              menjembatani kebutuhan logika bisnis dengan implementasi teknis.
              Salah satu pengalaman berharga saya adalah merancang dan membangun
              website pengelolaan dana masjid. Melalui proyek tersebut, saya
              berhasil mengimplementasikan alur data yang transparan, aman, dan
              mudah digunakan untuk manajemen keuangan rumah ibadah.
            </p>
            <p>
              Saat ini, saya sedang memperdalam serta mempertajam keahlian
              teknis saya melalui program Full-Stack Software Development di
              Purwadhika. Tantangan terbaru yang sedang saya kerjakan adalah
              menyusun personal website serta website company profile yang
              profesional dan responsif.
            </p>
            <p>
              Saya percaya bahwa sebuah produk digital yang hebat lahir dari
              kombinasi antara akurasi teknis dan pemahaman mendalam terhadap
              arsitektur sistem. Baik dalam membangun sistem manajemen internal
              maupun platform web publik, saya selalu berkomitmen untuk
              menghadirkan performa yang stabil dan kode yang berkualitas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
