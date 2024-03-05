import LeftPanel from "../ui/home/left-panel";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="h-screen flex flex-row justify-start border-2 border-blue-500">
        <LeftPanel />
        <div className="flex-1 p-6 text-white border-1 border-solid">
          {children}
        </div>
      </div>
    </main>
  );
}
