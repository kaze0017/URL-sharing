"use client";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Social() {
  return (
    <div className="flex items-center w-full gap-x-2 w-max-md">
      <button className="flex items-center justify-center w-full h-8 bg-gray-200 rounded-md">
        <FcGoogle className="mr-2" />
      </button>
      <button className="flex items-center justify-center w-full h-8 bg-gray-200 rounded-md">
        <FaFacebook className="mr-2" />
      </button>
    </div>
  );
}
