/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        scp: ["Source Code Pro", "mono"],
      },
    },
  },
  plugins: [
    require("daisyui"),

    function ({ addUtilities }) {
      addUtilities({
        '[data-font="font-caveat"]': {
          fontFamily: "Caveat",
          fontWeight: 400,
          fontStyle: "normal",
        },
        '[data-font="font-scp"]': {
          fontFamily: "Source Code Pro",
          fontWeight: 400,
          fontStyle: "normal",
        },
      });
    },
  ],
};
