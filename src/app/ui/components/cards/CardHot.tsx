"use client";
import { SharedLinkType } from "@/app/lib/interfaces";

export interface CardHotProps {
  link: SharedLinkType;
  variant: "small" | "medium" | "large" | "xlarge";
}

function CardHot({ link, variant }: CardHotProps) {
  // CSS Classes
  let width;
  switch (variant) {
    case "small":
      width = "w-1/12";
      break;
    case "medium":
      width = "w-3/12";
      break;
    case "large":
      width = "w-5/12";
      break;
    case "xlarge":
      width = "w-7/12";
      break;
    default:
      width = "w-full";
  }

  const cardWrapper = `border-solid border-1 border-gray-600 flex ${width} aspect-video bg-white shadow-md rounded-md`;
  const cardImgClass = `w-full h-full object-cover rounded-md`;

  const thumbnail =
    link.thumbnail ||
    (link.type == "image" && "/defaults/imageDefaultThumbnail.jpg") ||
    (link.type == "video" && "/defaults/videoDefaultThumbnail.jpg") ||
    "/defaults/generalDefaultThumbnail.jpg.jpg";

  return (
    <div className={cardWrapper}>
      <img
        className={cardImgClass}
        src={thumbnail}
        alt={link.title}
        data-link={link.url}
      />
    </div>
  );
}

export default CardHot;
