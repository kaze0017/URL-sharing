import React from "react";
import Image from "next/image";
import { Person } from "@/app/lib/interfaces";

interface ProfilePictureProps {
  size?: number;
  imageUrl: string;
  alt: string;
  className?: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  size = 32,
  imageUrl,
  alt,
  className,
}) => {
  return (
    <div
      className={`relative inline-block rounded-full overflow-hidden w-${size}px h-${size}px border-2 border-blue-500 ${className}`}
    >
      <Image
        src={imageUrl}
        alt={alt}
        width={size}
        height={size}
        className="object-cover transition-transform transform hover:scale-110"
      />
    </div>
  );
};

export default ProfilePicture;
