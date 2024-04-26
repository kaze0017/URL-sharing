import "@/app/globals.css";
import SidebarNav from "@/app/ui/setting/SidebarNav";
import { FiSliders } from "react-icons/fi";
import PageTitle from "@/app/ui/components/PageTitle";
import Page from "../page";
import menuLinks from "@/app/lib/menu-links";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="panel-light w-full h-full overflow-hidden flex flex-col">
      <PageTitle menu={menuLinks[3]} />
      <div className="flex flex-grow  gap-2 overflow-hidden px-2 pb-2">
        <SidebarNav />
        <div className="panel-light flex-grow">{children}</div>
      </div>
    </div>
  );
}
