import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        "3xl": "0 4px 4px rgba(0, 0, 0, 0.3)",
      },
    },
    colors: {
      ...require("tailwindcss/colors"),
      "table-h": "#18181b",
      "table-h-text": "#d0d0d0",
      "table-data": "#18181b",
      "info-host": "#161515",
      "table-border": "#232326",
      "main-bg": "#09090b;",
      "online-color": "#12b981",
      "toy-off-bg": "#2f1d20",
    },
    keyframes: {
      overlayShow: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      overlayHide: {
        from: { opacity: "1" },
        to: { opacity: "0" },
      },
      contentShow: {
        from: { opacity: "0", transform: "translate(100%, 0) scale(0.96)" },
        to: { opacity: "1", transform: "translate(0, 0) scale(1)" },
      },
      contentHide: {
        from: { opacity: "1", transform: "translate(0, 0) scale(1)" },
        to: { opacity: "0", transform: "translate(100%, 0) scale(0.96)" },
      },
    },
    animation: {
      overlayShow: "overlayShow 500ms",
      overlayHide: "overlayHide 500ms",
      contentShow: "contentShow 500ms",
      contentHide: "contentHide 500ms",
    },
  },
  plugins: [],
};
export default config;
