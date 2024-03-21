import React from "react";
import AddLinkForm from "@/app/ui/components/linkmanagement/AddLinkForm";

export default function page() {
  const wrapperClass =
    "flex flex-col gap-2 w-full h-full overflow-hidden items-center justify-center";
  return <div className={wrapperClass}>
    <AddLinkForm />
  </div>;
}
