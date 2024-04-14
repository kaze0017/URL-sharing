"use client";
import React, { useEffect, useState } from "react";
import CardSharedMd from "@/app/ui/components/cards/home/CardSharedMd";
import CardSharedSm from "@/app/ui/components/cards/home/CardSharedSm";
import CardSharedXs from "@/app/ui/components/cards/home/CardSharedXs";
import { SharedLinkType } from "@/app/lib/interfaces";
import { getSharedLinks } from "@/app/lib/actions";
import SliderFlexWrapper from "@/app/ui/components/sliders/SliderFlexWrapper";

export default function Trend() {
  const [sharedLinks, setSharedLinks] = useState<SharedLinkType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setSharedLinks(getSharedLinks());
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [sharedLinks]);

  return (
    <SliderFlexWrapper
      sharedLinks={sharedLinks}
      CardComponent={CardSharedMd}
      setIsLoading={setIsLoading}
      multi={true}
    />
  );
}
