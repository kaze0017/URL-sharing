"use client";
import React from "react";
import CardSharedLg from "@/app/ui/components/cards/home/CardSharedLg";
import { getSharedLinks } from "@/app/lib/actions";
import SliderGrid from "@/app/ui/components/sliders/SliderGrid";
import Search from "./shared/Search";
import Sort from "./shared/Sort";

export default function Shared() {
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState("saved");

  return (
    <div className="w-full flex flex-col gap-2 p-2">
      <Search query={query} setQuery={setQuery} />
      <Sort setSort={setSort} />
      <SliderGrid
        CardComponent={CardSharedLg}
        getData={getSharedLinks}
        cardSize="large"
        cardType="link"
        query={query}
        sort={sort}
      />
    </div>
  );
}
