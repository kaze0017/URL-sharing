import React from "react";
import Link from "next/link";

interface CardImgIconSProps {
  id: string;
  img: string;
  icon: React.ReactNode;
  title: string;
}

export default function CardImgIconS({ id, img, icon, title }: CardImgIconSProps) {
  // css Classes

  const cardWrapper = `border-solid border-1 border-gray-600 flex w-[150] aspect-video bg-white shadow-md rounded-md`;

  return (
    <Link href={`/category/${id}`}>
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover rounded-md"
      />
      {icon}
      <p className="text-xs w-2/5">{title}</p>
    </Link>
  );
}
