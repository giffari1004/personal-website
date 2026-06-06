import { z } from "zod";

// Definisikan skema validasi sesuai kebutuhan Anda
export const contactSchema = z.object({
  name: z.string().min(2, { message: "Nama minimal harus 2 karakter" }),
  email: z.string().email({ message: "Format email tidak valid" }),
  message: z.string().min(10, { message: "Pesan minimal harus 10 karakter" }),
});

// Jenis tipe data otomatis dari Zod jika diperlukan
// export type ContactFormData = z.infer<typeof contactSchema>;
