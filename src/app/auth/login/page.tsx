import { LoginForm } from "@/app/ui/components/auth/LoginForm";

export default function LoginPage() {
  // CSS Classes
  const mainPanelWrapper =
    "flex flex-col items-center p-5 panel-light text-gray-900 ";
  return (
    <div className={mainPanelWrapper}>
      <LoginForm />
    </div>
  );
}
