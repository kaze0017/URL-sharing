import { IconType } from "react-icons";
import { FiLink, FiSliders, FiLogOut } from "react-icons/fi";
import { BiLogoGraphql } from "react-icons/bi";
import { FaRegChartBar } from "react-icons/fa";

export interface menuLinkInterface {
  id: number;
  title: string;
  url: string;
  icon?: IconType;
}

const menuLinks: menuLinkInterface[] = [
  {
    id: 2,
    title: "Link Management",
    url: "/link-management",
    icon: FiLink,
  },
  {
    id: 3,
    title: "Member Management",
    url: "/member-management",
    icon: BiLogoGraphql,
  },
  {
    id: 4,
    title: "Settings",
    url: "/settings",
    icon: FiSliders,
  },
  {
    id: 5,
    title: "Reports",
    url: "/reports",
    icon: FaRegChartBar,
  },
  {
    id: 6,
    title: "Logout",
    url: "/logout",
    icon: FiLogOut,
  },
];

export default menuLinks;
