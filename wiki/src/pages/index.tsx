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

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Logo from "@site/static/img/logo.svg";

function HomePage() {
  const { siteConfig } = useDocusaurusContext();

  const githubLink = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`

  return (
    <Grid container spacing={2} textAlign="center" pt="5rem" pb="3rem">
      <Grid size={12}>
        <Logo style={{ maxWidth: "15rem" }} filter="drop-shadow(0px 0px 6px black)" />
        <Typography fontWeight={"bold"} variant="h1">
          {siteConfig.title}
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography variant="subtitle1">{siteConfig.tagline}</Typography>
      </Grid>
      <Grid container size={12} justifyContent="center" mt=".5rem">
        <Grid size={{ xs: 11, md: "auto" }}>
          <Button
            href="/docs/quick-start"
            size="large"
            color="info"
            variant="contained"
            sx={{ textShadow: "0px 0px 4px rgba(255, 255, 255, 0.8)" }}
            endIcon={<Icon icon="solar:play-bold-duotone" />}
            fullWidth
          >
            Get Started
          </Button>
        </Grid>
        <Grid size={{ xs: 11, md: "auto" }}>
          <Button
            target="_blank"
            href={githubLink}
            size="large"
            color="inherit"
            endIcon={<Icon icon="mdi:external-link" />}
            fullWidth
          >
            View on GitHub
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomePage />
    </Layout>
  );
}
