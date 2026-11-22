import typography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

export default {
  theme: {
    extend: {
      colors: {
        atomic: {
          DEFAULT: "#9089FC",
          light: "#B4A9FF",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [
    typography,
    plugin(function ({ addBase, theme }) {
      addBase({
        b: { fontWeight: theme("fontWeight.semibold") },
      });
    }),
  ],
};
