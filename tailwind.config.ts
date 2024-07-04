import type { Config } from "tailwindcss";

const config: Config = {
   darkMode: ['selector'],
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

     colors: {
        'background-light': '#ffffff',
        'background-dark': '#1f1e2e',
        'text-light': '#000000',
        'text-dark': '#ffffff',
        'nav-light': '#f8f9fa',
        'nav-dark': '#343a40',
        'footer-light': '#f8f9fa',
        'footer-dark': '#343a40',
      },
    },
  },
  plugins: [],
};
export default config;
