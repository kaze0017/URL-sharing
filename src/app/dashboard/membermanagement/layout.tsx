import "@/app/globals.css";
import menuLinks from "@/app/lib/menu-links";
import PageTitle from "@/app/ui/components/PageTitle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="panel-light w-full h-full overflow-hidden">
      <PageTitle menu={menuLinks[2]} />
      {children}
    </div>
  );
}
