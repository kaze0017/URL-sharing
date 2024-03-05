import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f3c614",
        white: "#ffffff",
        text: {
          DEFAULT: "#333333",
          light: "#666666",
        },
        light: {
          DEFAULT: "#f4f4f4",
          lighter: "#f8f8f8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
