import React from "react";
import { FiEye } from "react-icons/fi";
import { FiCompass } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";

export default function ActionBtns() {
  return (
    <div className="flex flex-row w-full gap-2 items-center justify-center text-gray-600">
      <div className="flex grow ml-2 border border-gray-800"></div>
      <div className="flex flex-col items-center">
        <FiEye className="text-2xl" />
      </div>
      <div className="flex flex-col items-center">
        <FiCompass className="text-2xl" />
      </div>
      <div className="flex flex-col items-center">
        <FiTrendingUp className="text-2xl" />
      </div>
      <div className="flex grow mr-2 border border-gray-800"></div>
    </div>
  );
}
