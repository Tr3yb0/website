import plugin from "tailwindcss/plugin";

export const theme = {
  extend: {
    fontFamily: {
      caveat: ["Caveat", "cursive"],
      geist: ["Geist", "system-ui", "sans-serif"],
      "geist-mono": ["Geist Mono", "ui-monospace", "monospace"],
    },
  },
};
export const plugins = [
  require("@tailwindcss/typography"),
  plugin(function ({ addBase, theme }) {
    addBase({
      h1: { fontSize: theme("fontSize.2xl") },
      h2: { fontSize: theme("fontSize.xl") },
      h3: { fontSize: theme("fontSize.lg") },
      b: { fontWeight: theme("fontWeight.semibold") },
    });
  }),
];
