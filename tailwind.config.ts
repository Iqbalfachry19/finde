import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        glow: "0 0 5px #f2cdcd, 0 0 20px #f5c2e7",
      },
      maxWidth: {
        "8xl": "1408px",
      },

      colors: {},
    },
  },
  plugins: [],
};
export default config;
