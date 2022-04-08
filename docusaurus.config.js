// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sebastian Scherer",
  tagline: "Dinosaurs are really cool",
  url: "https://the-tatanka.github.io/",
  baseUrl: "/github-pages-docusaurus-template/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "the-tatanka", // Usually your GitHub org/user name.
  projectName: "github-pages-docusaurus-template", // Usually your repo name.
  deploymentBranch: "gh-pages",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [require("mdx-mermaid")],
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/the-tatanka/github-pages-docusaurus-template/tree/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/the-tatanka/github-pages-docusaurus-template/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "SEBASTIAN SCHERER",
        logo: {
          alt: "Sebastian Scherer Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "PROJECTS",
          },
          { to: "/blog", label: "BLOG", position: "left" },
          {
            href: "https://github.com/the-tatanka",
            label: "GITHUB",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            label: "PROJECTS",
            to: "/docs/intro",
          },
          {
            label: "BLOG",
            to: "/blog",
          },
          {
            label: "GITHUB",
            href: "https://github.com/the-tatanka/github-pages-docusaurus-template",
          },
        ],
        copyright: `© ${new Date().getFullYear()} SEBASTIAN SCHERER`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
