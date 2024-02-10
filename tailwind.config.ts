import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: "#0a0713",
        bg2: "#271b32",
        bg3: "#110a19",
        fg1: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
