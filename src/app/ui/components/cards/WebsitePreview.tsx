// "use client";
// import React, { useState } from "react";

// const WebsitePreview: React.FC = () => {
//   const [previewData, setPreviewData] = useState<{
//     [key: string]: string;
//   } | null>(null);
//   const [url, setUrl] = useState("");
//   setUrl("https://www.yahoo.com");

//   const handleFetchPreview = async () => {
//     try {
//       const response = await fetch(
//         `/api/preview?url=${encodeURIComponent(url)}`
//       );
//       const data = await response.json();
//       setPreviewData(data);
//     } catch (error) {
//       console.error("Error fetching preview:", error);
//       setPreviewData(null);
//     }
//   };

//   return (
//     previewData && (
//       <div>
//         <h2>{previewData.title}</h2>
//         <p>{previewData.description}</p>
//         <img src={previewData.image} alt="Preview" />
//         <a href={previewData.url}>Visit Website</a>
//       </div>
//     )
//   );
// };

// export default WebsitePreview;
