import PanelRight from "../ui/home/PanelRight";
import PanelLeft from "../ui/home/PanelLeft";
import PanelTop from "../ui/home/PanelTop";

export default function Layout({ children }: { children: React.ReactNode }) {
  // CSS Classes
  const panelWrapper = "flex flex-row gap-1 pb-2 transition-500";
  const midSectionWrapper =
    "flex flex-col justify-between items-center grow p5 text-gray-900 gap-1";

  return (
    <main>
      <div className={panelWrapper}>
        <PanelLeft />
        <div className={midSectionWrapper}>
          <PanelTop />
          {children}
        </div>
        <PanelRight />
      </div>
    </main>
  );
}
