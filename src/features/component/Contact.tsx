import { useContactForm } from "../hooks/useContactForm";
import ContactForm from "./contact/ContactForm";
import SuccessMessage from "./contact/SuccessMessage";

export default function Contact() {
  const { form, sent, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="py-28 bg-base-200/20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-base-content/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-base-content leading-tight mb-6">
              Let's build something{" "}
              <span className="text-primary">extraordinary.</span>
            </h2>
            <p className="text-base-content/50 text-sm leading-relaxed mb-10 max-w-sm">
              Ready to start your next project? Get in touch for a consultation
              or just to say hello.
            </p>
            <div className="flex items-center gap-3 text-base-content/50 text-sm cursor-pointer hover:text-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium tracking-wide">hello@gifar.dev</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="border border-base-content/30 p-8">
            {sent ? (
              <SuccessMessage />
            ) : (
              <ContactForm
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
