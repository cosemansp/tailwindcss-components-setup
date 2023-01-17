import "./style.css";
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [(story, context) => {
  const { theme } = context.globals;

  let storyContext = story();

  // inject 'data-theme' attribute to the root element
  // so we can use it in our CSS to change the theme
  const htmlTag = document.documentElement;
  htmlTag.setAttribute("data-theme", theme || "light");

  // inject 'bg-base-100' class to the root element
  // for canvas background color
  htmlTag.setAttribute("class", "bg-base-100");

  // inject 'bg-base-100' class to the docs-story element
  // for Docs story background color
  const docsStory = document.querySelector(".docs-story");
  if (docsStory) {
    docsStory.setAttribute("class", "bg-base-100");
  }

  // our stories are just funtions that return html string
  return storyContext;
}];

export const globalTypes = {
  // Add 'Global Theme' to the toolbar
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: 'light',
    toolbar: {
      icon: "paintbrush",
      // Array of plain string values or MenuItem shape
      items: [
        { value: "light", title: "Light", left: "🌞" },
        { value: "dark", title: "Dark", left: "🌛" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};
