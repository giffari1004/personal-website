// contact/ContactForm.tsx
import type { ContactFormProps } from "../../types/contact.types";

export default function ContactForm({
  form,
  errors,
  onChange,
  onSubmit,
}: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* INPUT NAMA */}
      <div className="form-control w-full">
        <label className="label py-1">
          <span className="label-text font-bold text-sm text-base-content/80">
            Name
          </span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Your Name"
          // border-base-content/20 memastikan border terlihat konstan & adaptif di light/dark mode
          className={`input input-bordered w-full border-base-content/20 focus:border-primary focus:outline-hidden ${
            errors?.name ? "border-error focus:border-error" : ""
          }`}
        />
        {errors?.name && (
          <p className="text-error text-xs mt-1 font-medium">{errors.name}</p>
        )}
      </div>

      {/* INPUT EMAIL */}
      <div className="form-control w-full">
        <label className="label py-1">
          <span className="label-text font-bold text-sm text-base-content/80">
            Email
          </span>
        </label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="email@example.com"
          className={`input input-bordered w-full border-base-content/20 focus:border-primary focus:outline-hidden ${
            errors?.email ? "border-error focus:border-error" : ""
          }`}
        />
        {errors?.email && (
          <p className="text-error text-xs mt-1 font-medium">{errors.email}</p>
        )}
      </div>

      {/* INPUT PESAN */}
      <div className="form-control w-full">
        <label className="label py-1">
          <span className="label-text font-bold text-sm text-base-content/80">
            Your Message
          </span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="Tell me about your project..."
          className={`textarea textarea-bordered w-full h-32 border-base-content/20 focus:border-primary focus:outline-hidden ${
            errors?.message ? "border-error focus:border-error" : ""
          }`}
        />
        {errors?.message && (
          <p className="text-error text-xs mt-1 font-medium">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full mt-2 font-bold tracking-wide"
      >
        Send Message
      </button>
    </form>
  );
}
