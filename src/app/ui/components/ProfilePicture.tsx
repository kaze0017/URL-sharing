import React from "react";
import Image from "next/image";
import { Person } from "@/app/lib/interfaces";
import Link from "next/link";

interface ProfilePictureProps {
  size?: number;
  imageUrl: string;
  alt: string;
  className?: string;
  id?: number;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  size = 32,
  imageUrl,
  alt,
  className,
  id = 2,
}) => {
  id = Math.floor(Math.random() * 6 + 1);
  return (
    <div
      className={`relative inline-block rounded-full overflow-hidden w-${size}px h-${size}px border-2 border-blue-500 ${className}`}
    >
      <Link href={`/dashboard/${id}`}>
        <Image
          src={imageUrl}
          alt={alt}
          width={size}
          height={size}
          className="object-cover transition-transform transform hover:scale-110"
        />
      </Link>
    </div>
  );
};

export default ProfilePicture;
