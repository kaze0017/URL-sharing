// "use client";
// import { SharedLinkType } from "@/app/lib/interfaces";

// export interface CardHotProps {
//   link: SharedLinkType;
//   variant: "small" | "medium" | "large" | "xlarge";
//   placeholder?: boolean;
// }

// function CardHot({ link, variant }: CardHotProps) {
//   // CSS Classes
//   let width;
//   switch (variant) {
//     case "small":
//       width = "w-[100px]";
//       break;
//     case "medium":
//       width = "w-[200px]";
//       break;
//     case "large":
//       width = "w-[300px]";
//       break;
//     case "xlarge":
//       width = "w-[400px]";
//       break;
//     default:
//       width = "w-full";
//   }

//   const cardWrapper = `border-solid border-1 border-gray-600 flex ${width} aspect-video bg-white shadow-md rounded-md mx-auto	my-0`;
//   const cardImgClass = `w-full h-full object-cover rounded-md`;

//   const thumbnail =
//     link.thumbnail ||
//     (link.type == "image" && "/defaults/imageDefaultThumbnail.jpg") ||
//     (link.type == "video" && "/defaults/videoDefaultThumbnail.jpg") ||
//     "/defaults/generalDefaultThumbnail.jpg.jpg";

//   return (
//     <div className={cardWrapper}>
//       <img
//         className={cardImgClass}
//         src={thumbnail}
//         alt={link.title}
//         data-link={link.url}
//       />
//     </div>
//   );
// }

// export default CardHot;

"use client";
import { SharedLinkType } from "@/app/lib/interfaces";

export interface CardHotProps {
  link: SharedLinkType;
  variant: "small" | "medium" | "large" | "xlarge";
  placeholder?: boolean;
}

function CardHot({ link, variant, placeholder }: CardHotProps) {
  // CSS Classes
  let width;
  switch (variant) {
    case "small":
      width = "w-[100px]";
      break;
    case "medium":
      width = "w-[200px]";
      break;
    case "large":
      width = "w-[300px]";
      break;
    case "xlarge":
      width = "w-[400px]";
      break;
    default:
      width = "w-full";
  }

  const cardWrapper = `border-solid border-1 border-gray-600 flex ${width} aspect-video bg-white shadow-md rounded-md mx-auto	my-0`;
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
        data-link={link.linkUrls.primary.url}
      />
    </div>
  );
}

export default CardHot;
