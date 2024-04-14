import "./globals.css";
import { LoginBtn } from "./ui/components/auth/LoginBtn";
export default function Home() {
  const mainPanelWrapper =
    "flex flex-col h-full w-full items-center justify-center text-center w-full p-5 panel-light text-gray-900";
  return (
    <main className={mainPanelWrapper}>
      <h1 className="text-6xl font-bold border-2 border-green-600">
        Welcome to Next.js
      </h1>
      <LoginBtn mode="modal">Click Me</LoginBtn>
    </main>
  );
}
