"use client";

import BackBtn from "./BackBtn";
import Social from "./Social";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoginSchema } from "@/schemas/index";
import FormError from "../FormError";
import FormSuccess from "../FormSuccess";

export function LoginForm() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof LoginSchema>) {
    console.log(data);
  }
  const mainWrapperClass = "flex flex-col items-center justify-center gap-4";

  return (
    <div className={mainWrapperClass}>
      <form
        className="flex flex-col gap-2 w-full max-w-md p-4 bg-white rounded-md shadow-md"
        onSubmit={form.handleSubmit((data) => onSubmit(data))}
      >
        <h1 className="text-2xl font-semibold text-gray-800">Login</h1>
        {/* with z message */}
        <input
          className="input"
          type="email"
          placeholder="Email"
          {...form.register("email")}
        />
        <p className="text-red-500 text-xs">
          {form.formState.errors.email?.message}
        </p>
        <input
          className="input"
          type="password"
          placeholder="Password"
          {...form.register("password")}
        />
        <p className="text-red-500 text-xs">
          {form.formState.errors.password?.message}
        </p>
        <FormSuccess message="" />
        <FormError message="" />
        <button className="btn w-full bg-blue-800 text-white" type="submit">
          Login
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-800">Or login with</p>

      <Social />
      <BackBtn />
    </div>
  );
}
