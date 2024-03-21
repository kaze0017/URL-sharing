"use client";
import { useState } from "react";
import { FiLink } from "react-icons/fi";
import { MdOutlineCategory } from "react-icons/md";
import { sharedLinks } from "@/app/lib/placeholder-data";
import SharedLinkCard from "@/app/ui/components/cards/SharedLinkCard";

export default function page() {
  const [links, setLinks] = useState(sharedLinks);
  // const [displayStyle, setDisplayStyle] = useState<"grid" | "list">("list");

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = event.target.value;
    const filteredLinks = sharedLinks.filter((sharedLink) =>
      sharedLink.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setLinks(filteredLinks);
  }
  return (
    <div className="panel-light h-full w-full grow p-4 flex flex-col overflow-auto">
      {/* Top Controllers */}
      <div className="p-2 mb-4 border-b border-indigo-600 flex w-full uppercase">
        {/* left */}
        <div className="flex gap-2 items-center">
          <FiLink className="text-indigo-600 text-3xl font-bold ml-2" />
          <h1 className="text-indigo-600 text-3xl font-bold ml-2">Links</h1>
        </div>
        <div className="flex grow"></div>
        {/* right */}
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <FiLink className="text-indigo-600 text-2xl font-bold ml-2" />
            <h2>Links</h2>
          </div>
          <div className="flex flex-col items-center">
            <MdOutlineCategory className="text-indigo-600 text-2xl font-bold ml-2" />
            <h2>Categories</h2>
          </div>
        </div>
      </div>
      <div className="panel-light flex flex-col grow w-full justify-start ">
        {/* Main Controller */}
        <div className="flex w-full items-center uppercase p-4">
          {/* Left */}
          <div className="left flex gap-10">
            <h3 className="">Create a link</h3>
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
        <div className="flex flex-col overflow-y-auto">
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
    </div>
  );
}
