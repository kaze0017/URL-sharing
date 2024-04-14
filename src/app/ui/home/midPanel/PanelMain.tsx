import React from "react";
import ActionBtns from "./mainPanel/ActionBtns";
import Feed from "./mainPanel/Feed";
import { inter } from "../../fonts";

interface Props {
  mode: string;
}

export default function PanelMain(props: Props) {
  const wrapperClass = "flex flex-col grow gap-1 overflow-hidden";
  return (
    <div className={wrapperClass}>
      <Feed mode={props.mode} />
      {/* <ActionBtns /> */}
    </div>
  );
}
