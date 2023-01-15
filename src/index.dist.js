const postcssJs = require("postcss-js");
// const postcssPrefix = require("./lib/postcss-prefixer");
const colors = require("./colors/index");
const pkg = require("../package.json");
const components = require("../dist/components");
const utilities = require("../dist/utilities");
const colorFunctions = require("./colors/functions");
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

  // inject components
  let file = components;
  includedItems.push("components");

  // add prefix to class names if specified
  // const prefix = config("myLib.prefix");
  // let postcssJsProcess;
  // if (prefix) {
  //   try {
  //     postcssJsProcess = postcssJs.sync(postcssPrefix({ prefix, ignore: [] }));
  //   } catch (error) {
  //     logs && console.error(`Error occurred and prevent applying the "prefix" option:`, error);
  //   }
  // }
  // const shouldApplyPrefix = prefix && postcssJsProcess;
  // if (shouldApplyPrefix) {
  //   file = postcssJsProcess(file);
  // }
  addComponents(file);

  const darkThemeName = config("myLib.darkTheme");
  const darkTheme = config("myLib.darkTheme");
  const themeInjector = colorFunctions.injectThemes(addBase, darkTheme, themes);
  includedItems.push(themeInjector.themeOrder.length + " themes");

  // inject @utilities style needed by components
  if (config("myLib.utils") != false) {
    addComponents(utilities, { variants: ["responsive"] });
    includedItems.push("utilities");
  }

  if (logs) {
    console.log("\x1b[32m%s\x1b[0m", "✔︎ Including:", "\x1b[0m", "" + includedItems.join(", "));
    console.log();
    console.groupEnd();
  }
};

module.exports = require("tailwindcss/plugin")(mainFunction, {
  theme: { extend: { colors } },
});
