import "@/app/globals.css";
import PanelRight from "../ui/home/PanelRight";
import PanelLeft from "../ui/home/PanelLeft";
import PanelMiddle from "../ui/home/PanelMiddle";
export default function Layout({ children }: { children: React.ReactNode }) {
  // CSS Classes
  const mainClass =
    "flex flex-row gap-1 pb-2 transition-500 w-screen h-screen p-1";
  const leftSectionWrapper = "flex flex-col h-full transition-500";
  const midSectionWrapper =
    "flex flex-col w-full h-full overflow-y-auto transition-500";
  const rightSectionWrapper = "flex flex-col h-full transition-500 ";

  return (
    <main className={mainClass}>
      <div className={leftSectionWrapper}>
        <PanelLeft />
      </div>
      <div className={midSectionWrapper}>
        {children}
      </div>
      <div className={rightSectionWrapper}>
        <PanelRight />
      </div>
    </main>
  );
}
