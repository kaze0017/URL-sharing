import React from "react";
import { FiTrendingUp } from "react-icons/fi";
import { PiShareFatThin } from "react-icons/pi";
import { IoPricetagOutline } from "react-icons/io5";



interface SortProps {
  setSort: React.Dispatch<React.SetStateAction<string>>;
}


export default function Sort({ setSort }: SortProps) {
  const wrapperClass =
    "text-xs uppercase flex w-[600px] mx-auto gap-4 justify-center items-center border-b border-gray-800 pb-2";
  const btnClass = "text-gray-700 flex gap-1 justify-center items-center";
  return (
    <div className={wrapperClass}>
      <div className={btnClass} onClick={() => setSort("saved")}>
        <IoPricetagOutline className="text-lg" />
        <p>Most Saved</p>
      </div>
      <div className={btnClass} onClick={() => setSort("rank")}>
        <FiTrendingUp className="text-lg" />
        <p>Most Rank</p>
      </div>
      <div className={btnClass} onClick={() => setSort("shared")}>
        <PiShareFatThin className="text-lg" />
        <p>Most Shared</p>
      </div>
    </div>
  );
}
