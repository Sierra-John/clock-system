import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "val-yellow": "#FDB913",
        "val-red": "#BF2519",
        "val-red-hover": "#cb5046",
        "brd-inactive": "#D9D9D9",
        error: "#ff3333",
      },
    },
  },
  plugins: [],
};
export default config;
