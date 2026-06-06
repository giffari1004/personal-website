export type FormData = {
  name: string;
  email: string;
  message: string;
};

export interface ContactFormProps {
  form: FormData;
  errors: Partial<Record<keyof FormData, string>>; // Tambahkan tipe errors di props interface
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface FormFieldProps {
  label: string;
  name: keyof FormData;
  type?: "text" | "email" | "textarea";
  value: string;
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}
