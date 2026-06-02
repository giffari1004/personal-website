export default function Footer() {
  return (
    <footer className="bg-base-100 border-t border-base-content/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="#"
          className="font-black text-lg tracking-tighter text-base-content"
        >
          GIFAR<span className="text-primary">.</span>DEV
        </a>

        <p className="text-base-content/30 text-xs tracking-widest">
          © 2026 GIFAR Dev. Built with precision.
        </p>

        <div className="flex items-center gap-6">
          {["GitHub", "LinkedIn", "Twitter"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-xs text-base-content/40 hover:text-primary transition-colors tracking-wide font-medium"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
