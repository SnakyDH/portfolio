import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#5EA985",
        secondary: "#2BA764",
        background: "#0A0822",
      },
      textColor: {
        primary: "#2BA764",
        secondary: "#5EA985",
        background: "#0A0822",
        onPrimary: "#ffffff",
        onSecondary: "#ffffff",
        onBackground: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
//0C4F45