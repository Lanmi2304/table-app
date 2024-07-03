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

      // Accordion
      "accordion-content-bg": "#101012",
    },

    keyframes: {
      // Dialog
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

      //Accordion
      slideDown: {
        from: { height: "0px" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      slideUp: {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0px" },
      },

      //ToolTip
      slideDownAndFade: {
        from: { opacity: "0", transform: "translateY(-2px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
      slideLeftAndFade: {
        from: { opacity: "0", transform: "translateX(2px)" },
        to: { opacity: "1", transform: "translateX(0)" },
      },
      slideUpAndFade: {
        from: { opacity: "0", transform: "translateY(2px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
      slideRightAndFade: {
        from: { opacity: "0", transform: "translateX(-2px)" },
        to: { opacity: "1", transform: "translateX(0)" },
      },
    },
    animation: {
      overlayShow: "overlayShow 500ms",
      overlayHide: "overlayHide 500ms",
      contentShow: "contentShow 500ms",
      contentHide: "contentHide 500ms",

      //Accordion
      slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",

      //ToolTip
      slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideRightAndFade:
        "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },
  plugins: [],
};
export default config;
