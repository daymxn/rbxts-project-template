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

import CodeBlock from "@theme/CodeBlock";
import React, { ReactNode } from "react";

const Entry: React.FC<{ old: string; new: string; children?: ReactNode }> = ({ old, new: newProp, children }) => (
  <tr>
    <td>
      <CodeBlock language="ts">{old}</CodeBlock>
    </td>
    <td>
      <CodeBlock language="ts">{newProp}</CodeBlock>
    </td>
    <td style={{ paddingBottom: "1rem" }}>{children}</td>
  </tr>
);

export interface MigrationEntry {
  from: string,
  to: string,
  children?: ReactNode
}

const MigrationTable: React.FC<{
  from: string,
  to: string,
  mappings: MigrationEntry[]
}> = ({from, to, mappings}) => (
  <table>
    <thead>
      <tr>
        <th>{from}</th>
        <th>{to}</th>
        <th>Comments</th>
      </tr>
    </thead>
    <tbody>
      {mappings.map((code) => <Entry key={code.from} old={code.from} new={code.to} >
        {code.children}
      </Entry>)}
    </tbody>
  </table>
)

export default MigrationTable;
