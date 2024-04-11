"use client";

import BackBtn from "./BackBtn";
import Social from "./Social";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, z } from "zod";
import { RegisterSchema } from "@/schemas/index";
import FormError from "../FormError";
import FormSuccess from "../FormSuccess";
import { register } from "@/actions/register";
import { useTransition, useState } from "react";
import Link from "next/link";

export function RegisterForm() {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    },
  });

  function onSubmit(data: z.infer<typeof RegisterSchema>) {
    setError("");
    setSuccess("");

    startTransition(() => {
      register({ values: data }).then((response: any) => {
        console.log(response);
        setError(response.error || "");
        setSuccess(response.success || "");
      });
    });
  }

  const mainWrapperClass =
    "flex flex-row items-center justify-center gap-4 min-h-[70%] bg-white  uppercase w-[600px] rounded-lg";

  return (
    <div className={mainWrapperClass}>
      <div className="flex h-full flex-col w-1/3">
        <div className="flex flex-col grow"></div>
        <div className="flex flex-col text-xs">
          <p>Already have an account?</p>
          <Link href="/auth/login">
            <h2 className="text-blue-950 text-bold text-2xl">Sign In</h2>
          </Link>
        </div>
        <div className="flex flex-col grow"></div>
        <div className="flex justify-center">
          <img src="/logo/URLSHARE.png" className="w-[150px]" alt="" />
        </div>
      </div>
      <div className="flex flex-col h-full w-2/3 gradientBorder p-4 gap-3 rounded-lg">
        <form
          className="flex flex-col gap-2  max-w-md p-4 rounded-md"
          onSubmit={form.handleSubmit((data) => onSubmit(data))}
        >
          <h1 className="text-xl font-semibold text-gray-500">Register</h1>
          {/* with z message */}

          <input
            className="rounded-md border-gray-300"
            type="text"
            placeholder="Name"
            {...form.register("name")}
            disabled={isPending}
          />
          <p className="text-red-500 text-xs">
            {form.formState.errors.name?.message}
          </p>

          <input
            className="rounded-md border-gray-300"
            type="email"
            placeholder="Email"
            {...form.register("email")}
            disabled={isPending}
          />
          <p className="text-red-500 text-xs">
            {form.formState.errors.email?.message}
          </p>
          <input
            className="rounded-md border-gray-300"
            type="password"
            placeholder="Password"
            {...form.register("password")}
            disabled={isPending}
          />
          <p className="text-red-500 text-xs">
            {form.formState.errors.password?.message}
          </p>
          <input
            className="rounded-md border-gray-300"
            type="password"
            placeholder="Confirm password"
            {...form.register("confirmPassword")}
            disabled={isPending}
          />
          <p className="text-red-500 text-xs">
            {form.formState.errors.confirmPassword?.message}
          </p>

          <FormSuccess message={success} />
          <FormError message={error} />
          <button
            className="btn w-full bg-navy-800 text-white rounded-xl p-2 bg-blue-950"
            type="submit"
            disabled={isPending}
          >
            Create account
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-800">Or Register with</p>

        <Social />
        <BackBtn message="Back to login" backToHref="/auth/login" />
      </div>
    </div>
  );
}
