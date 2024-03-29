"use client";
import React from "react";
import { getNPeople } from "@/app/lib/actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TreeChart from "@/app/ui/components/membermanagement/TreeChart";
import SearchPeople from "@/app/ui/components/membermanagement/SearchPeople";

const people = getNPeople(7);

const orgData = {
  id: 31,
  name: "John Doe",
  photo: people[4].photo,
  children: [
    {
      id: 32,
      name: "Jane Smith",
      photo: people[2].photo,
      children: [
        {
          id: 33,
          name: "John Smith",
          photo: people[3].photo,
          children: [
            {
              id: 34,
              name: "Jane Doe",
              photo: people[4].photo,
            },
            {
              id: 35,
              name: "Jane Doe",
              photo: people[5].photo,
            },
          ],
        },
      ],
    },
    {
      id: 36,
      name: "Jane Smith",
      photo: people[6].photo,
    },
    {
      id: 37,
      name: "Jane Smith",
      photo: people[3].photo,
      children: [
        {
          id: 38,
          name: "John Smith",
          photo: people[6].photo,
          children: [
            {
              id: 39,
              name: "Jane Doe",
              photo: people[5].photo,
            },
            {
              id: 40,
              name: "Jane Doe",
              photo: people[4].photo,
            },
          ],
        },
      ],
    },
  ],
};

export default function Page() {
  const data = orgData;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-full w-full p-2 gap-2">
        {/* <DraggableBlocks /> */}
        <SearchPeople />
        <TreeChart data={data} />
      </div>
    </DndProvider>
  );
}
