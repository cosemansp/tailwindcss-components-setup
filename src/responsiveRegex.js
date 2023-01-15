module.exports = [
  {
    pattern: /.*/,
  },
  {
    // responsive utilities for responsive modifiers
    pattern: /.(sm|md|lg|xl)/,
    variants: ["sm", "md", "lg", "xl"],
  },
  {
    // color utilities for colors
    pattern: /(bg|to|via|from|text|fill|stroke|border|outline)-((primary|secondary|accent|neutral)(-focus|-content|))|((info|success|warning|error)(-content|))|(base)(-100|-200|-300|-content)/,
    variants: [
      "focus",
      "hover",
      // "first",
      // "last",
      // "odd",
      // "even",
      // "visited",
      // "checked",
      // "empty",
      // "read-only",
      // "group-hover",
      // "group-focus",
      // "focus-within",
      // "focus-visible",
      // "active",
      // "disabled",
    ],
  },
];
