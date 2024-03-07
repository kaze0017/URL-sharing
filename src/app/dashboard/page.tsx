export default function Page() {
  // CSS Classes
  const mainPanelWrapper =
    "flex flex-row grow items-center w-full p-5 panel-light text-gray-900";
  return (
    <div className={mainPanelWrapper}>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard</p>
    </div>
  );
}
