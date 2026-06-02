import { useState } from "react";
import type { FormData } from "../types/contact.types";

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  message: "",
};

export function useContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm(INITIAL_FORM);
  };

  return { form, sent, handleChange, handleSubmit };
}
