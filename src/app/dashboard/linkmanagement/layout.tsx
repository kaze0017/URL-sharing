import "@/app/globals.css";

import { FiLink } from "react-icons/fi";
import { MdOutlineCategory } from "react-icons/md";
import Link from "next/link";
import menuLinks from "@/app/lib/menu-links";

import type { Metadata } from "next";
import PageTitle from "@/app/ui/components/PageTitle";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const wrapperClass =
    "grow h-full transition-500 overflow-hidden panel-light p-1 flex flex-col";
  const headerWrapperClass =
    "p-2 mb-4 border-b border-indigo-600 flex w-full uppercase";
  return (
    <div className={wrapperClass}>
      <PageTitle
        menu={menuLinks[1]}
        component={
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <FiLink className="text-indigo-600 text-2xl font-bold ml-2" />
              <h2>Links</h2>
            </div>
            <div className="flex flex-col items-center">
              <MdOutlineCategory className="text-indigo-600 text-2xl font-bold ml-2" />
              <h2>Categories</h2>
            </div>
          </div>
        }
      />
      <div className="flex flex-col flex-grow overflow-hidden">{children}</div>
    </div>
  );
}
