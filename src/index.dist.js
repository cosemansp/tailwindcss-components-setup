const colors = require("./colors/index");
const pkg = require("../package.json");
const colorFunctions = require("./colors/functions");
const themes = require("./colors/themes");
const components = require("../dist/components");
const utilities = require("../dist/utilities");

const mainFunction = ({ addBase, addComponents, addUtilities, config, postcss }) => {
  let logs = false;
  if (config("myLib.logs") != false) {
    logs = true;
  }

  if (logs) {
    console.log();
    console.log("\x1b[35m%s\x1b[0m", "🤔 myLib components " + pkg.version, "\x1b[0m", pkg.homepage);
    console.group();
  }

  // add theme colors
  addBase({
    [":root"]: colorFunctions.convertToHsl(themes["[data-theme=light]"]),
    ["@media (prefers-color-scheme: dark)"]: {
      [":root"]: colorFunctions.convertToHsl(themes["[data-theme=dark]"]),
    },
    ["[data-theme=dark]"]: colorFunctions.convertToHsl(themes["[data-theme=dark]"]),
  });

  // add dist components
  addComponents(components);

  // add dist utilities
  addUtilities(utilities);
};

module.exports = require("tailwindcss/plugin")(mainFunction, {
  theme: { extend: { colors } },
});
