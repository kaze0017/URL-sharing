import React, { use, useEffect, useState } from "react";
import { getSharedLinks } from "@/app/lib/actions";
import SliderGrid from "@/app/ui/components/sliders/SliderGrid";
import CardImgIconS from "@/app/ui/components/cards/CardImgIconS";
import SliderFlexWrapper from "@/app/ui/components/sliders/SliderFlexWrapper";
import { SharedLinkType } from "@/app/lib/interfaces";
import Controls from "./wall/Controls";
import { set } from "zod";

export default function Wall() {
  const [sharedLinks, setSharedLinks] = useState<SharedLinkType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = React.useState("");

  useEffect(() => {
    setSharedLinks(getSharedLinks());
  }, []);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);

useEffect(() => {
  // Filter the shared links based on the query
  const filteredLinks = getSharedLinks().filter((sharedLink) =>
    sharedLink.title.toLowerCase().includes(query.toLowerCase())
  );
  setSharedLinks(filteredLinks);
}, [query]);

  return (
    <div className="w-full flex flex-col gap-2 p-2">
      <Controls query={query} setQuery={setQuery} />
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="/loading.svg"
            alt="loading"
            width="200px"
            className="mx-auto"
          />
        </div>
      ) : (
        <SliderFlexWrapper
          sharedLinks={sharedLinks}
          CardComponent={CardImgIconS}
          setIsLoading={setIsLoading}
        />
      )}
    </div>
  );
}
