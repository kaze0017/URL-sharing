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
    id: 1,
    title: "Dashboard",
    url: "/dashboard",
    icon: FiLink,
  },
  {
    id: 2,
    title: "Link Management",
    url: "/dashboard/linkmanagement",
    icon: FiLink,
  },
  {
    id: 3,
    title: "Member Management",
    url: "/dashboard/membermanagement",
    icon: BiLogoGraphql,
  },
  {
    id: 4,
    title: "Settings",
    url: "/dashboard/settings",
    icon: FiSliders,
  },
  {
    id: 5,
    title: "Reports",
    url: "/dashboard/reports",
    icon: FaRegChartBar,
  },
  {
    id: 6,
    title: "Logout",
    url: "/dashboard/logout",
    icon: FiLogOut,
  },
];

export default menuLinks;
