const colors = require("./colors/index");
const pkg = require("../package.json");
const colorFunctions = require("./colors/functions");
const themes = require("./colors/themes");

const mainFunction = ({ addBase, addComponents, addUtilities, config, postcss }) => {
  console.log("\x1b[35m%s\x1b[0m", "🤔 myLib components " + pkg.version, "\x1b[0m", pkg.homepage);

  // add theme colors
  addBase({
    [":root"]: colorFunctions.convertToHsl(themes["[data-theme=light]"]),
    ["@media (prefers-color-scheme: dark)"]: {
      [":root"]: colorFunctions.convertToHsl(themes["[data-theme=dark]"]),
    },
    ["[data-theme=dark]"]: colorFunctions.convertToHsl(themes["[data-theme=dark]"]),
  });

  // no need to include components and utilities here
  // this files is used by the root tailwind.config.js & storybook
  // storybook used ./storybook/styles.css which includes the component & utilities
};

module.exports = require("tailwindcss/plugin")(mainFunction, {
  theme: { extend: { colors } },
});
