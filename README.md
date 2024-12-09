# Turborepo starter

This is a monorepo (Turborepo) starter template that includes a Vue.js and a NestJS. The starter is inspired by [official Turborepo template](https://turbo.build/) and [antfu's vitesse-lite](https://github.com/antfu-collective/vitesse-lite).

## Using this template

Run the following command:

```bash
npx degit jinzhi0123/turborepo-vue-nest-starter my-turbo-app
cd my-turbo-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

    .
    ├── apps
    │   ├── api                       # Nest.js app.
    │   └── web                       # Vue.js app using vitesse-lite.
    └── packages
        ├── @repo/api                 # Shared `NestJS` resources.
        ├── @repo/eslint-config       # `eslint` configurations.
        ├── @repo/jest-config         # `jest` configurations.
        ├── @repo/typescript-config   # `tsconfig.json`s used throughout the monorepo.
        ├── @repo/ui                  # Shared Vue component library.
        └── @repo/css-present         # `unocss` configurations.

Each package and application are 100% [TypeScript](https://www.typescriptlang.org/) safe.



### Utilities

The `eslint` config is based on [@antfu/eslint-config](https://github.com/antfu/eslint-config) to provide auto linting and formatting. 

The config has been adapted to `Eslint V9 Flat Config`. If you are using turbo's official nest/nuxt template, which still use eslint v8 style, you will encounter some issues about this.


### Commands

This `Turborepo` already configured useful commands for all your apps and packages.

#### Build

```bash
# Will build all the app & packages with the supported `build` script.
pnpm run build

# ℹ️ If you plan to only build apps individually,
# Please make sure you've built the packages first.
```

#### Develop

```bash
# Will run the development server for all the app & packages with the supported `dev` script.
pnpm run dev
```

#### test

```bash
# Will launch a test suites for all the app & packages with the supported `test` script.
pnpm run test

# You can launch e2e testes with `test:e2e`
pnpm run test:e2e

# See `@repo/jest-config` to customize the behavior.
```

#### Lint

```bash
# Will lint all the app & packages with the supported `lint` script.
# See `@repo/eslint-config` to customize the behavior.
pnpm run lint
```

