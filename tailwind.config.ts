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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #1D013C 0%, #310266 42%, #3C027D 64%, #4E03A2 100%)",
      },
    },
    fontFamily: {
      inter: ["Inter"],
      lodrina: ["Londrina Sketch"],
      misri: ["El Messiri"],
      popins: ["Poppins"],
      jost: ["Jost"],
      marinda: ["Merienda"],
    },
  },
  plugins: [],
};

export default config;
