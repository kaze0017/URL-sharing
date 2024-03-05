import { useState, useEffect } from "react";
import Image from "next/image";
import { Person } from "@/app/lib/interfaces";
import ProfilePicture from "./ProfilePicture";
import { getTopPeople } from "@/app/lib/actions";

function LogoProfile() {
  const defaultPerson: Person = {
    id: 0,
    name: "FAC Logo",
    title: "Circle",
    photo: "/logo/circle.png",
    publications: {
      links: [
        {
          title: "",
          url: "",
        },
        {
          title: "",
          url: "",
        },
      ],
      categories: ["Business", "Leadership"],
    },
  };
  //   three people all with the same data as defaultPerson
  const [people, setPeople] = useState<Person[]>([
    defaultPerson,
    defaultPerson,
    defaultPerson,
  ]);
  //   get top three people
  const topPeople = getTopPeople();
  //   set top three people
  useEffect(() => {
    setPeople(topPeople);
  }, [topPeople]);

  //   LogoProfile css Classes
  const logoProfileWrapper = `relative`;
  const logoProfilePersonTC = `absolute top-0 left-8`;
  const logoProfilePersonBL = `absolute bottom-0 left-0`;
  const logoProfilePersonBR = `absolute bottom-0 right-0`;
  return (
    <div className={logoProfileWrapper}>
      <div className={logoProfilePersonTC}>
        <ProfilePicture
          imageUrl={people[0].photo}
          alt={people[0].name}
          size={48}
        />
      </div>
      <div className={logoProfilePersonBL}>
        <ProfilePicture
          imageUrl={people[1].photo}
          alt={people[1].name}
          size={48}
        />
      </div>
      <div className={logoProfilePersonBR}>
        <ProfilePicture
          imageUrl={people[2].photo}
          alt={people[2].name}
          size={48}
        />
      </div>
      <Image
        src="/logo/fac-logo-bars.png"
        alt="Vercel Logo"
        width={120}
        height={120}
      />
    </div>
  );
}

export default LogoProfile;
