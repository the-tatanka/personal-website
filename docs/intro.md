---
sidebar_position: 1
id: intro
title: Intro
description: Docusaurus uses GitHub Flavored Markdown (GFM). Find out more about Docusaurus-specific features when writing Markdown.
keywords:
  - docs
  - docusaurus
---

# Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.

## Mermaid integration

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## Code Blocks

Markdown code blocks are supported with Syntax highlighting.

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

```js title="sidebars.js"
module.exports = {
  projectsSidebar: [
    {
      type: "category",
      label: "PROJECTS",
      // highlight-next-line
      items: ["hello"],
    },
  ],
};
```

## Admonitions

Docusaurus has a special syntax to create admonitions and callouts:

    :::tip My tip

    Use this awesome feature option

    :::

    :::danger Take care

    This action is dangerous

    :::

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

## Images

![Docusaurus logo](/img/bike_1.jpg)

## MdX - use js / React

import Slide from "@site/src/components/presentation/Slide";
import Header from "@site/src/components/presentation/Header";

<Slide>
<Header>Lorem Ipsum</Header>

</Slide>
