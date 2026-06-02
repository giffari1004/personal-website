import type { ContactFormProps } from "../../types/contact.types";
import FormField from "./FormField";

export default function ContactForm({
  form,
  onChange,
  onSubmit,
}: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField
          label="Name"
          name="name"
          type="text"
          value={form.name}
          placeholder="Your Name"
          onChange={onChange}
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          placeholder="email@example.com"
          onChange={onChange}
        />
      </div>

      <FormField
        label="Message"
        name="message"
        type="textarea"
        value={form.message}
        placeholder="Tell me about your project..."
        onChange={onChange}
      />

      <button
        type="submit"
        className="btn btn-primary w-full rounded-none font-black tracking-[0.15em] uppercase text-xs hover:scale-[1.02] transition-transform"
      >
        Send Message
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
      </button>
    </form>
  );
}
