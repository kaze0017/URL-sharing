"use client";
import React from "react";
import SharedLinkCard from "@/app/ui/components/cards/SharedLinkCard";
import { getSharedLinks } from "@/app/lib/actions";
import { useState } from "react";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { FiList } from "react-icons/fi";

export default function Feed() {
  const sharedLinks = getSharedLinks();
  const [displayStyle, setDisplayStyle] = useState<"grid" | "list">("grid");

  return (
    <div className="panel-light grow p-1 pt-2 flex flex-col gap-1">
      <div className="controller flex gap-2 text-gray-900">
        <button
          className="text-ms text-gray-900"
          onClick={() => setDisplayStyle("grid")}
        >
          <TfiLayoutGrid3 />
        </button>
        <button
          className="text-ms text-gray-900"
          onClick={() => setDisplayStyle("list")}
        >
          <FiList />
        </button>
      </div>
      <div className="flex flex-wrap gap-1 justify-center">
        {sharedLinks.map((sharedLink, index) => (
          <SharedLinkCard
            key={index}
            // width="w-1/3"
            variant={displayStyle}
            size="medium"
            sharedLink={sharedLink}
          />
        ))}
      </div>
    </div>
  );
}
