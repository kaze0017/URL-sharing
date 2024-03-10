"use client";
import { SharedLinkType } from "@/app/lib/interfaces";
import { getEmbedId } from "@/app/lib/actions";
import { YoutubeHoverPlay } from "@/app/ui/components/VideoPlayer";

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
  
  return (
    <div className={cardWrapper}>
      {link.type === "image" && (
        <img
          className={cardImgClass}
          src={link.thumbnail}
          alt={link.title}
          data-link={link.url}
        />
      )}
      {link.type === "video" && (
        <YoutubeHoverPlay embedId={getEmbedId(link.url)} />
      )}
    </div>
  );
}

// <iframe
//   src={convertYoutubeLinkToEmbed(link.url)}
//   title={link.title}
//   loading="lazy"
//   allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
// />
export default CardHot;
