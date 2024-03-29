import React, { useState } from "react";
import { getNPeople } from "@/app/lib/actions";
import ProfilePicture from "@/app/ui/components/ProfilePicture";
import Draggable from "@/app/ui/components/membermanagement/Draggable";

interface Person {
  id: number;
  name: string;
  photo: string;
}

export default function SearchPeople() {
  const people = getNPeople(7);
  const [peopleToDisplay, setPeopleToDisplay] = useState<Person[]>([]);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const search = e.target.value;
    if (search === "" || search === null) {
      setPeopleToDisplay([]);
      return;
    }
    const filteredPeople = people.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    setPeopleToDisplay(filteredPeople);
  }

  return (
    <div className="flex panel-light p-2 h-full w-[250px] items-center flex-col gap-2">
      {/* search box */}
      <input
        type="text"
        placeholder="Search people"
        onChange={handleSearch}
        className="w-[225] rounded-sm"
      />

      {/* display people */}
      <div className="flex flex-col w-full gap-1">
        {peopleToDisplay?.map((person, index) => (
          <Draggable dragObject={person} key={index}>
            <div className="flex p-1 w-full items-center gap-1 border border-indigo-200">
              <ProfilePicture
                size={32}
                imageUrl={person.photo}
                alt={person.name}
                id={person.id}
              />
              <p>{person.name}</p>
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
}
