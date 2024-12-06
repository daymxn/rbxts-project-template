/**
 * @license
 * Copyright 2024 Daymon Littrell-Reyes
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import project from "./project-config.json";
import { compact } from "lodash-es";

const githubLink = `https://github.com/${project.repo.org}/${project.repo.project}`;

const config: Config = {
  title: project.title,
  tagline: "Short description about my library...",
  favicon: "img/favicon.ico",
  url: project.url,
  baseUrl: "/",
  organizationName: project.repo.org,
  projectName: project.repo.project,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./docs/sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }
    ],
  ],

  themeConfig: {
    image: "img/social-card.png",
    sidebar: {
      hideable: true,
    },
    navbar: {
      title: project.packageName,
      logo: {
        alt: "library logo",
        src: "img/logo.svg",
      },
      items: compact([
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Learn",
        },
        (project.features.api) && {
          to: "/docs/api",
          label: "API",
          position: "left",
        },
        {
          href: githubLink,
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ]),
    },
    footer: {
      style: "dark",
      links: compact([
        {
          title: "Learn",
          items: [
            {
              label: "Quick Start",
              to: "/docs/quick-start",
            },
            {
              label: "Usage Guide",
              to: "/docs/usage-guide",
            },
            {
              label: "Guides",
              to: "/docs/category/basics",
            },
            {
              label: "Advanced Guides",
              to: "/docs/category/advanced",
            },
            {
              label: "FAQ",
              to: "/docs/faq",
            },
          ],
        },
        (project.features.api) && {
          title: "API Reference",
          items: [
            {
              label: project.packageName,
              to: "/docs/api",
            },
          ],
        },
        {
          title: "Community Discords",
          items: [
            {
              label: "roblox-ts",
              href: "https://discord.roblox-ts.com/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: githubLink,
            },
          ],
        },
      ]),
      copyright: `Copyright © ${new Date().getFullYear()} ${project.author}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ["bash", "typescript", "toml"],
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-block-error-line",
          line: "error-next-line",
        },
      ],
    },
  },
};

export default config;
