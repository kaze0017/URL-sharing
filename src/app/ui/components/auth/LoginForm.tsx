"use client";
import Social from "./Social";
import FadeInOut from "./FadeInOut";

import { use, useState } from "react";

export default function LoginForm() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);

  const [formType, setFormType] = useState<"login" | "register">("login");
  // const mainWrapperClass =
  //   "flex flex-row items-center justify-between min-h-[70%] bg-white  uppercase w-[600px] rounded-lg";

  // const formClass = `flex flex-col h-full w-2/3 gradientBorder p-4 gap-3 rounded-lg`;

  // const leftMenuClass = `flex flex-col h-full w-1/3 p-4 gap-3 rounded-lg`;
  // const rightMenuClass = `flex flex-col h-full w-1/3 p-4 gap-3 rounded-lg`;
  const mainWrapperClass = "h-900 uppercase  overflow-x-hidden login-container";
  const leftMenuClass = `flex flex-col h-full login-left p-4 gap-3 rounded-lg transition-transform duration-1000`;
  const formClass = `relative formClass flex flex-col h-full login-middle gradientBorder p-4 gap-3  transition-transform duration-1000`;
  const rightMenuClass = `flex flex-col h-full login-right p-4 gap-3 rounded-lg transition-transform duration-1000`;

  const leftMenuTransformClass = "";
  // formType === "register" ? "translate-x-full" : "translate-x-0";
  const rightMenuTransformClass = "";
  // formType === "login" ? "translate-x-full" : "translate-x-0";

  const childDivClass = "flex h-full  rounded-lg login-wrapper login-form";
  const childDivTransformClass =
    formType === "register"
      ? "login-wrapper-translate transition-transform duration-1000"
      : "translate-x-0 transition-transform duration-1000 ";

  const inputClass = `rounded-md border-gray-300 w-full`;

  function handleShowRegister() {
    setFormType("register");
    setShowLogin(false);
    setTimeout(() => {
      setShowRegister(true);
    }, 500);
  }
  function handleShowLogin() {
    setFormType("login");
    setShowRegister(false);
    setTimeout(() => {
      setShowLogin(true);
    }, 500);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = "http://18.191.29.19:8000/auth/login/";
    const formData = {
      username: "mohammadmahdi_rezaei",
      password: "mohammadmahdi_newuser@01",
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle successful response
        console.log(data);
      })
      .catch((error) => {
        // Handle error
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  return (
    <div className={mainWrapperClass}>
      <div className={`${childDivClass} transform ${childDivTransformClass}`}>
        {/* left */}
        <div className={`${leftMenuClass} transform ${leftMenuTransformClass}`}>
          <div className="flex flex-col grow"></div>
          <div className="flex flex-col text-xs">
            <p>Don&apos;t have an account?</p>
            <button onClick={handleShowRegister}>
              <h2 className="text-blue-950 text-bold text-2xl">Sign Up</h2>
            </button>
          </div>
          <div className="flex flex-col grow"></div>
          <div className="flex justify-center">
            <img src="/logo/URLSHARE.png" className="w-[150px]" alt="" />
          </div>
        </div>
        {/* Form */}
        <div className={`${formClass}`}>
          {/* Login */}
          <div className="flex flex-grow"></div>
          <FadeInOut show={showLogin} duration={500}>
            <form
              className="flex flex-col gap-2  max-w-md p-4 rounded-md"
              onSubmit={(e) => onSubmit(e)}
            >
              <h1 className="text-xl font-semibold text-gray-500">SIGN IN</h1>

              <input
                className={`${inputClass}`}
                type="text"
                placeholder="User Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                disabled={isPending}
              />
              <input
                className={`${inputClass}`}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isPending}
              />

              <div className="flex items-center gap-1 justify-between text-xs">
                <div className="flex items-center gap-1 text-xs">
                  <label htmlFor="remember" className="text-gray-800">
                    Remember me
                  </label>
                  <input
                    type="checkbox"
                    className="rounded-md border-gray-300"
                    id="remember"
                  />
                </div>
                <p className="text-blue-800 text-xs cursor-pointer ">
                  Forgot password?
                </p>
              </div>

              <button
                className="btn w-full bg-navy-800 text-white rounded-xl p-2 bg-blue-950"
                type="submit"
                disabled={isPending}
              >
                SIGN IN
              </button>
            </form>
          </FadeInOut>
          {/* Register */}
          <FadeInOut show={showRegister} duration={500}>
            <form
              className="flex flex-col gap-2  max-w-md p-4 rounded-md"
              onSubmit={onSubmit}
            >
              <h1 className="text-xl font-semibold text-gray-500">Register</h1>
              <input
                className="rounded-md border-gray-300"
                type="text"
                placeholder="Name"
                disabled={isPending}
              />

              <input
                className="rounded-md border-gray-300"
                type="email"
                placeholder="Email"
                disabled={isPending}
              />

              <input
                className="rounded-md border-gray-300"
                type="password"
                placeholder="Password"
                disabled={isPending}
              />

              <input
                className="rounded-md border-gray-300"
                type="password"
                placeholder="Confirm password"
                disabled={isPending}
              />

              <button
                className="btn w-full bg-navy-800 text-white rounded-xl p-2 bg-blue-950"
                type="submit"
                disabled={isPending}
              >
                Create account
              </button>
            </form>
          </FadeInOut>
          {/* ----- OR ----- */}
          <div className="flex w-full items-center gap-2 text-gray-500 text-xs">
            <div className="grow h-0.5 bg-gray-500"></div>
            <p>OR</p>
            <div className="grow h-0.5 bg-gray-500"></div>
          </div>
          <Social />
          {/* <BackBtn
            message="Sign in with different ways"
            backToHref="/auth/register"
          /> */}
        </div>
        {/* Right */}
        <div
          className={`${rightMenuClass} transform ${rightMenuTransformClass}`}
        >
          <div className="flex flex-col grow"></div>
          <div className="flex flex-col text-xs">
            <p>Already have an account?</p>
            <button onClick={handleShowLogin}>
              <h2 className="text-blue-950 text-bold text-2xl">Sign In</h2>
            </button>
          </div>
          <div className="flex flex-col grow"></div>
          <div className="flex justify-center">
            <img src="/logo/URLSHARE.png" className="w-[150px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
