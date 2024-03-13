import HotSharedLinks from "./topPanel/HotSharedLinks";
import HotCategories from "./topPanel/HotCategories";

export default function PanelTop() {
  return (
    <div className="panel-light p-2 flex flex-col gap-1 overflow-auto">
      <HotSharedLinks />
      <HotCategories />
    </div>
  );
}
