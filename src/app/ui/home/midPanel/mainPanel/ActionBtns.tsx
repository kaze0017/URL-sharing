import React from "react";
import { FiEye } from "react-icons/fi";
import { FiCompass } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";

export default function ActionBtns() {
  return (
    <div className="flex flex-row w-full gap-4 p-1 items-center justify-center text-gray-600 panel-light">
      <div className="flex  w-[25%] ml-2 border border-gray-600 "></div>
      <div className="flex flex-col items-center">
        <FiEye className="text-2xl" />
      </div>
      <div className="flex flex-col items-center">
        <FiCompass className="text-2xl" />
      </div>
      <div className="flex flex-col items-center">
        <FiTrendingUp className="text-2xl" />
      </div>
      <div className="flex w-[25%] mr-2 border border-gray-600 "></div>
    </div>
  );
}
