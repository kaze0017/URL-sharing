// import React from "react";
// import CardHot from "@/app/ui/components/cards/CardHot";
// import { getTopSharedLinks, getTopCategories } from "@/app/lib/actions";
// import { SharedLinkType } from "@/app/lib/interfaces";
// import CategoryHot from "@/app/ui/components/cards/CategoryHot";
import HotSharedLinks from "./panelTop/HotSharedLinks";
import HotCategories from "./panelTop/HotCategories";

export default function PanelTop() {
  // get top shared links
  // const topSharedLinks = getTopSharedLinks();

  // get top categories
  // const topCategories = getTopCategories();
  // Panel Top Wrapper
  // const panelTopWrapper =
  //   "flex flex-col items-center w-full panel-light text-gray-900 justify-evenly p-2 gap-2";
  // const hotCardsWrapper =
  // "flex flex-row items-center w-full text-gray-900 justify-evenly";

  // const hotCategoriesWrapperClass = "hotCategoriesWrapper";
  // const hotCategoriesWrapperClass =
  //   "flex flex-row items-center w-full overflow-scroll pb-2";
  return (
    <div className="panel-light p-2 flex flex-col gap-1 overflow-auto">
      <HotSharedLinks />
      <HotCategories />
    </div>
  );
}
