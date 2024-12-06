/* eslint-disable headers/header-format, unicorn/filename-case */
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

import { Icon } from "@iconify/react";
import MDXComponents from "@theme-original/MDXComponents";
import React from "react";
import MigrationTable from "@site/src/components/migration-table";
import {config} from "@site/src/constants";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import Link from '@docusaurus/Link';

function Yes() {
  return <Icon icon="oi:check" height="33" color="green" />;
}

function No() {
  return <Icon icon="dashicons:no" height="45" color="red" />;
}

function LibraryName() {
  return <code>{config.packageName}</code>
}

function InstallTabs() {
  return <Tabs>
    <TabItem value="npm" default>
      <CodeBlock language="bash" title="Terminal">
        npm install {config.packageName}
      </CodeBlock>
    </TabItem>
    <TabItem value="pnpm">
      <CodeBlock language="bash" title="Terminal">
        pnpm add {config.packageName}
      </CodeBlock>
    </TabItem>
    <TabItem value="yarn">
      <CodeBlock language="bash" title="Terminal">
        yarn add {config.packageName}
      </CodeBlock>
    </TabItem>
  </Tabs>
}

export default {
  ...MDXComponents,
  Link,
  LibraryName,
  MigrationTable,
  InstallTabs,
  IIcon: Icon,
  Yes: Yes,
  No: No,
};
