// pages/api/preview.ts

import { NextApiRequest, NextApiResponse } from "next";
import { parse } from "node-html-parser";
// import fetch from "isomorphic-unfetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  try {
    // Fetch the HTML content of the website
    const response = await fetch(url as string, { cache: "force-cache" });
    const htmlContent = await response.text();

    // Parse the HTML using node-html-parser
    const root = parse(htmlContent);

    // Extract Open Graph Protocol (OGP) metadata
    const ogpData: { [key: string]: string } = {};
    root.querySelectorAll("meta").forEach((meta) => {
      const property = meta.getAttribute("property");
      const content = meta.getAttribute("content");
      if (property && content && property.startsWith("og:")) {
        ogpData[property.slice(3)] = content;
      }
    });

    // Return the extracted OGP metadata
    res.status(200).json(ogpData);
  } catch (error) {
    console.error("Error fetching website:", error);
    res.status(500).json({ error: "Failed to fetch website" });
  }
}
