import "@/app/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const mainPanelWrapper =
    "flex flex-col h-full w-full items-center justify-center text-center w-full p-5 panel-light px-8 text-gray-900 min-w-fit";
  return <main className={mainPanelWrapper}>{children}</main>;
}
