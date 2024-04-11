"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas/index";

export async function login({
  values,
}: {
  values: z.infer<typeof LoginSchema>;
}) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: validatedFields.error };
  }

  return { success: "Email sent" };
}
