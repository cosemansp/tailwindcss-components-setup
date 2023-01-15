const colors = require("./colors/index");
const pkg = require("../package.json");
const { convertToHsl } = require("./colors/functions");
const themes = require("./colors/themes");

const mainFunction = ({ addBase, addComponents, addUtilities, config, postcss }) => {
  let includedItems = [];
  let logs = false;
  if (config("myLib.logs") != false) {
    logs = true;
  }

  if (logs) {
    console.log();
    console.log("\x1b[35m%s\x1b[0m", "🤔 myLib components " + pkg.version, "\x1b[0m", pkg.homepage);
    console.group();
  }

  // add light theme
  addBase({
    [":root"]: convertToHsl(themes["[data-theme=light]"]),
  });
  includedItems.push("light theme");
  // add dark theme
  addBase({
    ["@media (prefers-color-scheme: dark)"]: {
      [":root"]: convertToHsl(themes["[data-theme=dark]"]),
    },
  });
  addBase({
    ["[data-theme=dark]"]: convertToHsl(themes["[data-theme=dark]"]),
  });
  includedItems.push("dark theme");

  if (logs) {
    console.log("\x1b[32m%s\x1b[0m", "✔︎ Including:", "\x1b[0m", "" + includedItems.join(", "));
    console.log();
    console.groupEnd();
  }
};

module.exports = require("tailwindcss/plugin")(mainFunction, {
  theme: { extend: { colors } },
});
