import "@/app/globals.css";

import PanelRight from "../ui/home/PanelRight";
import PanelLeft from "../ui/home/PanelLeft";
export default function Layout({ children }: { children: React.ReactNode }) {
  // CSS Classes
  const mainClass =
    "flex flex-row gap-1 pb-2 transition-500 w-full h-full p-1 overflow-hidden";
  const leftSectionWrapper = "h-full transition-500 ";
  const midSectionWrapper = "grow h-full transition-500  overflow-hidden";
  const rightSectionWrapper = "h-full transition-500 ";

  return (
    <main className={mainClass}>
      <div className={leftSectionWrapper}>
        <PanelLeft />
      </div>
      <div className={midSectionWrapper}>{children}</div>
      <div className={rightSectionWrapper}>{<PanelRight />}</div>
    </main>
  );
}
