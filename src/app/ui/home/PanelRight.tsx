"use client";
import React from "react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { inter } from "../fonts";

interface PanelLeftProps {
  className?: string;
}

export default function PanelRight(props: PanelLeftProps) {
  const [toggledCollapse, setToggleCollapse] = useState(false);

  function handelRightPanelToggle() {
    setToggleCollapse(!toggledCollapse);
  }

  // panel css classes
  const panelWrapper = `flex flex-col justify-start items-center gap-1 pb-2  transition-500 h-full overflow-y-auto
  ${toggledCollapse ? "pl-1 pr-1" : "pl-2 pr-2"} relative
  panel-light
  text-gray-900`;
  const toggleButtonClasses = `flex flex-row-reverse cursor-pointer p-4 text-gray items-center w-full h-6 
  ${!toggledCollapse ? "justify-start" : "justify-center"}
  `;
  const textBoxClass = `text-center ${toggledCollapse ? "w-52" : "w-16"}`;

  return (
    <div className={panelWrapper}>
      <div
        id="RightPanelToggleBtn"
        className={toggleButtonClasses}
        onClick={() => handelRightPanelToggle()}
      >
        {!toggledCollapse ? (
          <FiX className="text-2xl text-gray-800" />
        ) : (
          <FiMenu className="text-2xl text-gray-800 text-center" />
        )}
      </div>
      <div className={textBoxClass}>Panel-right</div>
    </div>
  );
}
