import typography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

export const theme = {
  extend: {
    fontFamily: {
      display: ['"Newsreader"', "Georgia", "serif"],
      sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
    },
  },
};

export const plugins = [
  typography,
  plugin(function ({ addBase, theme }) {
    addBase({
      b: { fontWeight: theme("fontWeight.semibold") },
    });
  }),
];
