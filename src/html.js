import dedent from "ts-dedent";

export const html = (strings, ...values) => {
  let newStr = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      newStr += values[i - 1];
    }
    newStr += strings[i];
  }
  return dedent(newStr);
};
