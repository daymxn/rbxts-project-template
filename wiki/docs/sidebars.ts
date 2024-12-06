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

import { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["quick-start", "usage-guide", "faq"],
    },
    {
      type: "category",
      label: "Basics",
      link: {
        type: "generated-index",
        title: "Guides",
        description: "[...]",
        keywords: ["guides", "..."],
      },
      items: [
        "basics/introduction"
      ],
    },
    {
      type: "category",
      label: "Advanced",
      link: {
        type: "generated-index",
        title: "Avanced Guides",
        description: "[...]",
        keywords: ["guides", "advanced", "..."],
      },
      items: [
        "advanced/introduction"
      ],
    },
  ],
};

export default sidebars;
