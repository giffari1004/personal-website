import { useState } from "react";
import { INITIAL_FORM } from "../constant/contactData";
import type { FormData } from "../types/contact.types";
import { contactSchema } from "../schemas/contact.schemas";

export function useContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [sent, setSent] = useState(false);

  // State baru untuk menampung pesan error per field
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // (Opsional) Hapus error secara realtime ketika user mulai mengetik ulang
    if (errors[name as keyof FormData]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Jalankan validasi menggunakan Zod
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      // Jika validasi gagal, kumpulkan semua errornya
      const formattedErrors: Partial<Record<keyof FormData, string>> = {};

      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof FormData;
        formattedErrors[path] = issue.message;
      });

      setErrors(formattedErrors);
      return; // Stop proses kirim data jika ada error
    }

    // Jika sukses lolos validasi, jalankan logika submit Anda
    setErrors({}); // Bersihkan error lawas
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm(INITIAL_FORM);
  };

  // Kembalikan objek 'errors' agar bisa dipakai di komponen UI
  return { form, sent, errors, handleChange, handleSubmit };
}
