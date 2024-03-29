/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('src/assets/header-img.jpg')",
      },
      colors: {
        "main-black": "#020202",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
