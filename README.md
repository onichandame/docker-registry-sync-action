# Github Actions

A template for making new github actions.

# Author

[onichandame](https://onichandame.com)

# Features

- TypeScript
- JavaScript action
- yarn
- Webpack bundling with minimal configuration

# Caveat

1. Github action engine only understands pure JavaScript and does not allow compilation before running the task. Therefore the bundled script in dist directory must be included in the repo.
