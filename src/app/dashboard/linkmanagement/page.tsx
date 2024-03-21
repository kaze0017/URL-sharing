"use client";
import { useState } from "react";

import Link from "next/link";

import { sharedLinks } from "@/app/lib/placeholder-data";
import SharedLinkCard from "@/app/ui/components/cards/SharedLinkCard";

export default function Page() {
  const [links, setLinks] = useState(sharedLinks);
  // const [displayStyle, setDisplayStyle] = useState<"grid" | "list">("list");

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = event.target.value;
    const filteredLinks = sharedLinks.filter((sharedLink) =>
      sharedLink.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setLinks(filteredLinks);
  }
  const mainWrapperClass =
    "h-full flex flex-col gap-1 panel-light overflow-hidden";

  const feedWrapperClass =
    "h-full panel-light flex flex-col grow w-full justify-start overflow-hidden";

  const displayWrapperClass = "flex flex-col overflow-y-auto";

  return (
    <div className={feedWrapperClass}>
      {/* Main Controller */}
      <div className="flex w-full items-center uppercase p-4">
        {/* Left */}
        <div className="left flex gap-10">
          <Link href="/dashboard/linkmanagement/createlink">Create a link</Link>
          <h3 className="">View size</h3>
          <h3 className="">Link types</h3>
          <h3 className="">Select columns</h3>
        </div>
        <div className="flex grow"></div>
        {/* Right */}
        <div className="">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md p-2"
            onChange={handleSearch}
          />
        </div>
      </div>
      {/* Display */}
      <div className={displayWrapperClass}>
        <div className="flex flex-wrap gap-2 justify-start p-2 overflow-auto">
          {links.map((link, index) => (
            <SharedLinkCard
              key={index}
              sharedLink={link}
              variant="list"
              size="medium"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
