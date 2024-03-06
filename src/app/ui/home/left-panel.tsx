"use client";
import { useState } from "react";
import ProfilePicture from "../components/ProfilePicture";
import { getOwner } from "@/app/lib/actions";
import NavButton from "@/app/ui/components/Buttons";
import menuLinks from "@/app/lib/menu-links";
import LogoProfile from "@/app/ui/components/LogoProfile";
import InfoReport from "@/app/ui/components/InfoReport";

const LeftPanel: React.FC = () => {
  // Hooks
  const [toggledCollapse, setToggleCollapse] = useState(false);

  // panel css classes
  const wrapperClasses = `h-100% flex flex-col justify-start items-center gap-4 pb-2 transition-500
  ${toggledCollapse ? "w-20" : "w-64"} relative
  panel-light
  text
  `;

  // toggle button css classes
  const toggleButtonClasses = `absolute top-2 right-2 cursor-pointer p-2 text-white bg-gray-800 rounded-full flex justify-center items-center w-6 h-6`;

  // Button wrapper css classes
  const panelBtnsWrapper = `flex flex-col gap-2`;

  //  Growing div css classes
  const growingDivClasses = `flex flex-grow`;

  const user = getOwner();

  // functions
  const handelLeftPanelToggle = () => {
    setToggleCollapse(!toggledCollapse);
  };

  return (
    <div className={wrapperClasses}>
      <div
        id="leftPanelToggleBtn"
        className={toggleButtonClasses}
        onClick={() => handelLeftPanelToggle()}
      >
        X
      </div>
      <div className="flex flex-col justify-start items-center pt-5 gap-2">
        <ProfilePicture
          size={64}
          imageUrl="https://randomuser.me/api/portraits/women/94.jpg"
          alt="profile"
        />
        <h2>{user.publications.links?.length}</h2>
        <h3>{user.name}</h3>
        <h4>{user.title}</h4>
        <h3>Publications</h3>
        <div className="flex flex-row gap-4">
          <InfoReport
            title="Categories"
            data={user.publications.categories?.length}
          />
          <InfoReport title="Links" data={user.publications.links?.length} />
        </div>
        <div className={panelBtnsWrapper}>
          {menuLinks.map((link) => (
            <NavButton
              key={link.id}
              link={link.url}
              icon={link.icon}
              toggledCollapse={toggledCollapse}
            >
              {link.title}
            </NavButton>
          ))}
        </div>
      </div>
      <div className={growingDivClasses}></div>
      <LogoProfile />
    </div>
  );
};

export default LeftPanel;
