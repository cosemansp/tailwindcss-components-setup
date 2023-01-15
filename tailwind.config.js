module.exports = {
  // prettier-ignore
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}"
  ],
  // map dark mode to `data-theme` attribute
  // this is also used by storybook to set the theme
  darkMode: ["class", '[data-theme="dark"]'],
  safelist: [
    "bg-base-100", // used by storybook preview to set background color
  ],
  plugins: [require("@tailwindcss/typography"), require("./src/index")],
};
