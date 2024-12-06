# TODO

Note that this will probably be renamed to `rbxts-project-template`,
and `create-rbxts-project` will be a project with a bin file that scaffolds it.
It'll pull the `rbxts-project-template` from github and prefill with a templating library.

*Note*: I'll use ejs because workflow files use `{{`

- Rename to `rbxts-project-template`
- Remove pnpm-lock.yaml before pushing to github

Non template behavior:

- API enabled
  - `api` folder in `wiki/docs/`
  - `features.api` in `project-config.json` in `/wiki`
  - `api-extractor.json`
  - `api` folder at root
  - `.github/workflows/api-check.yaml`
- Docs enabled
  - `/wiki` folder
  - `.github/workflows/deploy.yaml`
- Tests enabled
  - `test.project.json`
  - `testez-companion.toml`
  - `.github/workflows/unit-tests.yaml`
- Lua enabled
  - `stylua.toml`
  - `.luarc`

Configuration outline:

- Project name
- Author
- Include API generation (api-documenter, api enabled in bs config, api folder, api-check.yaml workflow)
- Include Wiki (wiki folder, docs enabled in bs config, deploy.yaml workflow)
- Include lua files (stylua.toml, .gitattributes NOT vendoring lua files, relevant .vscode settings.json)
- Repository url
- Repository org/project name
- Enable rollups (tsup dep/tsup in package.json, api-documenter configured as such, rollup enabled in bs config)
- Testing (include unit test workflow, test script in package.json, testez-companion.toml, test.project.json)
- Logo (text or logo for readme, logo we'll give a basic roblox one unedited- so I can easy drop in illustrator)
- Repo name
- Repo short (daymxn/timeIt)
- Year (2024)

NEXT STEPS:

After that's done (and I've updated the docs here), and I've finished the remaining templates, we should be good to push to github, and continue on the actual create-rbxts-project
