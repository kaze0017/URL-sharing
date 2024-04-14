import Link from "next/link";

export default function BackBtn({
  message,
  backToHref,
}: {
  message: string;
  backToHref: string;
}) {
  return (
    <Link href={backToHref}>
      <p className="text-xs">{message}</p>
    </Link>
  );
}
