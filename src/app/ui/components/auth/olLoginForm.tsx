// "use client";

// import BackBtn from "./BackBtn";
// import Social from "./Social";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { set, z } from "zod";
// import { LoginSchema } from "@/schemas/index";
// import FormError from "../FormError";
// import FormSuccess from "../FormSuccess";
// import { login } from "@/actions/login";
// import { useTransition, useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export function LoginForm() {
//   const [error, setError] = useState<string>("");
//   const [success, setSuccess] = useState<string>("");
//   const [isPending, startTransition] = useTransition();

//   const form = useForm<z.infer<typeof LoginSchema>>({
//     resolver: zodResolver(LoginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const router = useRouter();

//   function onSubmit(data: z.infer<typeof LoginSchema>) {
//     setError("");
//     setSuccess("");

//     startTransition(() => {
//       login({ values: data }).then((response: any) => {
//         console.log(response);
//         setError(response.error || "");
//         setSuccess(response.success || "");
//         if (response.success) {
//           localStorage.setItem("token", response.success);
//         }
//       });
//     });
//   }
//   const [state, setState] = useState({
//     email: "",
//     password: "",
//     rememberMe: false,
//     isPending: false,
//     success: "",
//     error: "",
//   });

//   async function handleSubmit(event: any) {
//     event.preventDefault();
//     const { email, password } = state;
//     // Add form validation logic if needed
//     try {
//       // Perform form submission action with 'no-cors' mode
//       const response = await fetch("http://18.191.29.19:8000/auth/login/", {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });
//       if (response.ok) {
//         console.log("Login successful");
//       } else {
//         console.error("Login failed");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   }

//   function redirect() {
//     router.push("/dashboard");
//   }

//   useEffect(() => {
//     if (success) {
//       redirect();
//     }
//   }, [success]);

//   const mainWrapperClass =
//     "flex flex-row items-center justify-center gap-4 min-h-[70%] bg-white  uppercase w-[600px] rounded-lg";

//   return (
//     <div className={mainWrapperClass}>
//       <div className="flex flex-col h-full w-2/3 gradientBorder p-4 gap-3 rounded-lg">
//         <form
//           className="flex flex-col gap-2  max-w-md p-4 rounded-md"
//           // onSubmit={form.handleSubmit((data) => onSubmit(data))}
//           onSubmit={handleSubmit}
//         >
//           <h1 className="text-xl font-semibold text-gray-500">SIGN IN</h1>

//           <label htmlFor="username">Username:</label>
//           <input type="text" name="username" required />
//           <br />
//           <label htmlFor="password">Password:</label>
//           <input type="password" name="password" required />
//           <br />
//           <button type="submit">Login</button>

//           {/* with z message */}
//           {/* <input
//             className="input rounded-md border-gray-300 "
//             type="text"
//             placeholder="Email"
//             {...form.register("email")}
//             disabled={isPending}
//           />
//           <p className="text-red-500 text-xs">
//             {form.formState.errors.email?.message}
//           </p>
//           <input
//             className="input rounded-md border-gray-300"
//             type="password"
//             placeholder="Password"
//             {...form.register("password")}
//             disabled={isPending}
//           />
//           <p className="text-red-500 text-xs">
//             {form.formState.errors.password?.message}
//           </p>
//           <div className="flex items-center gap-1 justify-between text-xs">
//             <div className="flex items-center gap-1 text-xs">
//               <label htmlFor="remember" className="text-gray-800">
//                 Remember me
//               </label>
//               <input
//                 type="checkbox"
//                 className="rounded-md border-gray-300"
//                 id="remember"
//               />
//             </div>
//             <p className="text-blue-800 text-xs cursor-pointer ">
//               Forgot password?
//             </p>
//           </div> */}
//           <FormSuccess message={success} />
//           <FormError message={error} />
//           <button
//             className="btn w-full bg-navy-800 text-white rounded-xl p-2 bg-blue-950"
//             type="submit"
//             disabled={isPending}
//           >
//             SIGN IN
//           </button>
//         </form>

//         {/* ----- OR ----- */}
//         <div className="flex w-full items-center gap-2 text-gray-500 text-xs">
//           <div className="grow h-0.5 bg-gray-500"></div>
//           <p>OR</p>
//           <div className="grow h-0.5 bg-gray-500"></div>
//         </div>

//         <Social />
//         <BackBtn
//           message="Sign in with different ways"
//           backToHref="/auth/register"
//         />
//       </div>
//       <div className="flex h-full flex-col w-1/3">
//         <div className="flex flex-col grow"></div>
//         <div className="flex flex-col text-xs">
//           <p>Don&apos;t have an account?</p>
//           <Link href="/auth/register">
//             <h2 className="text-blue-950 text-bold text-2xl">Sign Up</h2>
//           </Link>
//         </div>
//         <div className="flex flex-col grow"></div>
//         <div className="flex justify-center">
//           <img src="/logo/URLSHARE.png" className="w-[150px]" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function olLoginForm() {
  return <div>olLoginForm</div>;
}
