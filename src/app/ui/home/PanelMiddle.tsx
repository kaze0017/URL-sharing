import React from "react";
import PanelTop from "./midPanel/PanelTop";
import PanelMain from "./midPanel/PanelMain";

export default function PanelMiddle() {
  return (
    <div className="flex flex-col gap-2 w-full h-full overflow-auto">
      <PanelTop />
      <PanelMain />
    </div>
  );
}
