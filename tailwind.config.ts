import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#5490c2",
          500: "#5490c2",
          700: "#4071a0",
        },

        background: "var(--background)",
        foreground: "var(--foreground)",
        "background-blur": "var(--background-blur)",
        sidebar: "var(--sidebar)",
        selected: "var(--selected)",
        "background-hover": "var(--background-hover)",
        "border-hover": "var(--border-hover)",
        muted: "var(--muted)",
      },
    },
  },
  plugins: [],
};
export default config;
