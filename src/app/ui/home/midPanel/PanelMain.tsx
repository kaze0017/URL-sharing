import React from "react";
import ActionBtns from "./mainPanel/ActionBtns";
import Feed from "./mainPanel/Feed";

export default function PanelMain() {
  const wrapperClass = "flex flex-col grow gap-1 overflow-hidden";
  return (
    <div className={wrapperClass}>
      <Feed />
      <ActionBtns />
    </div>
  );
}
