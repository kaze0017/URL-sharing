import { LoginForm } from "@/app/ui/components/auth/LoginForm";
import FooterNav from "@/app/ui/components/auth/FooterNav";
export default function LoginPage() {
  // CSS Classes
  const mainPanelWrapper =
    "flex flex-col p-5 px-10 min-h-[90%] items-center uppercase panel-light text-gray-900 ";
  return (
    <div className={mainPanelWrapper}>
      <h2 className="w-full text-start p-2">
        <span className="text-gray-500">https://</span>
        <span className="text-red-400">welcome</span>
        <span className="text-blue-950">back</span>
        <span className="text-gray-500">.li</span>
      </h2>
      <LoginForm />
      <div className="flex grow"></div>
      {/* App stores */}
      <div>
        <h4>Install on your device</h4>

        <div className="flex gap-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.welcomebackli.app"
            target="_blank"
            rel="noreferrer"
            className="w-[200px]"
          >
            <img src="/logo/googleplay.png" alt="Google Play Store" />
          </a>
          <a
            href="https://apps.apple.com/us/app/welcomeback-li/id1588131263"
            target="_blank"
            rel="noreferrer"
            className="w-[200px]"
          >
            <img src="/logo/appstore.png" alt="App Store" />
          </a>
        </div>
      </div>

      <FooterNav />
    </div>
  );
}