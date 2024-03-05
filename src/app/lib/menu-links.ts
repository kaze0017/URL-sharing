interface menuLink {
  id: number;
  title: string;
  url: string;
}

const menuLinks: menuLink[] = [
  {
    id: 2,
    title: "Link Management",
    url: "/link-management",
  },
  {
    id: 3,
    title: "Member Management",
    url: "/member-management",
  },
  {
    id: 4,
    title: "Settings",
    url: "/settings",
  },
  {
    id: 5,
    title: "Reports",
    url: "/reports",
  },
  {
    id: 6,
    title: "Logout",
    url: "/logout",
  },
];

export default menuLinks;
