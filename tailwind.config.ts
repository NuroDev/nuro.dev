import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const defineConfig = <T extends Config>(config: T) => config;

export const colors = {
  ...defaultTheme.colors,
  gray: {
    50: "#f9fafb",
    100: "#eaeaeb",
    200: "#cacbcd",
    300: "#a7a9ac",
    400: "#696c71",
    500: "#282d34",
    600: "#24292f",
    700: "#181b20",
    800: "#121518",
    900: "#0c0e10",
  },
  primary: {
    50: "#32a4ff",
    100: "#289aff",
    200: "#1e90ff",
    300: "#1486ff",
    400: "#0a7cff",
    500: "#0072ff",
    600: "#0068f5",
    700: "#005eeb",
    800: "#0054e1",
    900: "#004ad7",
  },
};

export default defineConfig({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("tailwindcss-animate")],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
      transitionDuration: {
        2000: "2000ms",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(.47,1.64,.41,.8)",
      },
    },
  },
});
