"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas/index";

export async function register({
  values,
}: {
  values: z.infer<typeof RegisterSchema>;
}) {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: validatedFields.error };
  }

  return { success: "Email sent" };
}
