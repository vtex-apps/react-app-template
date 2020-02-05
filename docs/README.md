# VTEX React App Template

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

Our guide repository to structure for react apps, that should be used as a template.

We use `yarn` as our default package manager, before coding make sure to run yarn on: `root` and `react` folders.

## Some features:

### Tests

For testing we use `@vtex/test-tools`, our own testing framework based on `react-testing-library`, the tests should be located on the `react/__tests__` folder. For references, visit our [repository](https://github.com/vtex/test-tools).

### Hooks

Husky hooks tha runs on every `pre-commit` and `pre-push`.

### Intl Equalizer

Tool for equalizing the messages located on the `messages` folder/builder. It's configured to use the **en.json** as the default file for comparison. For references, visit our [repository](https://github.com/vtex/intl-equalizer).

### Lint + Formatting

TS lint configured with Prettier and .Config.

### Available Scripts

```json
{
  "lint": "cd ./react && yarn lint",
  "test": "cd ./react && yarn test",
  "lint:locales": "intl-equalizer",
  "locales:fix": "intl-equalizer --fix",
  "verify": "yarn lint && yarn lint:locales && yarn test"
}
```

### CI

#### Install:

```yml
install:
  commands:
    - echo Installing Packages...
    - cd react
    - npm install
    - echo Packages installed!
```

#### Pre-build:

```yml
pre_build:
  commands:
    - echo Running tests...
    - npm run verify
    - echo Lint and tests finished!
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->


<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
