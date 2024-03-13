import React from "react";
import ActionBtns from "./mainPanel/ActionBtns";
import Feed from "./mainPanel/Feed";

export default function PanelMain() {
  return (
    <div className="flex flex-col grow gap-1">
      <Feed />
      <ActionBtns />
    </div>
  );
}
