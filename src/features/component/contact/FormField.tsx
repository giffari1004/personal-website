import type { FormFieldProps } from "../../types/contact.types";

const inputClass =
  "input input-bordered bg-base-100 border-base-content/30 shadow-lg focus:border-primary rounded-none text-sm placeholder:text-base-content/30 h-11";

const textareaClass =
  "textarea textarea-bordered bg-base-100 border-base-content/30 mx-5 shadow-lg focus:border-primary rounded-none text-sm placeholder:text-base-content/30 resize-none leading-relaxed";

export default function FormField({
  label,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
}: FormFieldProps) {
  return (
    <div className="form-control">
      <label className="label pb-1">
        <span className="text-[10px] tracking-widest uppercase text-base-content/40 font-bold">
          {label}
        </span>
      </label>

      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          rows={5}
          className={textareaClass}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className={inputClass}
        />
      )}
    </div>
  );
}
