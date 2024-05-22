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
        "val-yellow": "#FDB913",
        "val-red": "#BF2519",
        "brd-inactive": "#D9D9D9",
      },
    },
  },
  plugins: [],
};
export default config;
