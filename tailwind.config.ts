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
      },
      fontSize: {
        "dyn-sm": "clamp(0.8rem, 0.25vw + 0.74rem, 0.94rem)",
        "dyn-base": "clamp(1rem, 0.45vw + 0.89rem, 1.25rem)",
        "dyn-md": "clamp(1.25rem, 0.76vw + 1.06rem, 1.67rem)",
        "dyn-lg": "clamp(1.56rem, 1.2vw + 1.26rem, 2.22rem)",
        "dyn-xl": "clamp(1.95rem, 1.83vw + 1.5rem, 2.96rem)",
        "dyn-2xl": "clamp(2.44rem, 2.74vw + 1.76rem, 3.95rem)",
        "dyn-3xl": "clamp(3.05rem, 4.02vw + 2.05rem, 5.26rem)",
        "dyn-4xl": "clamp(5.05rem, 6.02vw + 2.20rem, 8.00rem)",
      },
    },
  },
  plugins: [],
};
export default config;
