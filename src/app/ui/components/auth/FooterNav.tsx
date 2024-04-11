import React from "react";
import Link from "next/link";

export default function FooterNav() {
  return (
    <div className="flex gap-2 uppercase text-xs w-full">
      <ul className="flex w-full gap-3 justify-content-center">
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms of Service</Link>
        <Link href="#">FEC</Link>
        <Link href="#">About</Link>
        <Link href="#">Verification</Link>
        <Link href="#">English</Link>
        <p>@2024 URLSHARE FROM FEC</p>
      </ul>
    </div>
  );
}
