import React from "react";
import PanelTop from "./midPanel/PanelTop";
import PanelMain from "./midPanel/PanelMain";

export default function PanelMiddle() {
  const wrapperClass = "flex flex-col gap-2 w-full h-full overflow-hidden";
  return (
    <div className={wrapperClass}>
      <PanelTop />
      <PanelMain />
    </div>
  );
}
