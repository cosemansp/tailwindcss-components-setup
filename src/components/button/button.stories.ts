import { html } from "../../html";
import mdx from "./button.mdx";

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Variants = () => html`
  <div>
    <button class="btn">Default</button>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-accent">Accent</button>
  </div>
  <div class="mt-2">
    <button class="btn" disabled>Default</button>
    <button class="btn btn-primary" disabled>Primary</button>
    <button class="btn btn-secondary" disabled>Secondary</button>
    <button class="btn btn-accent" disabled>Accent</button>
    <span class="text-base-content">Disabled</span>
  </div>
`;

export const Outline = () => html`
  <div>
    <button class="btn btn-outline">Default</button>
    <button class="btn btn-outline btn-primary">Primary</button>
    <button class="btn btn-outline btn-secondary">Secondary</button>
    <button class="btn btn-outline btn-accent">Accent</button>
  </div>
`;

export const StateColors = () => html`
  <div>
    <button class="btn btn-info">info</button>
    <button class="btn btn-success">success</button>
    <button class="btn btn-warning">warning</button>
    <button class="btn btn-error">error</button>
  </div>
`;
