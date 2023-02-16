![CI/CD](https://github.com/foocipes/foocipes-web/workflows/CI/CD/badge.svg)

# Foocipes Webapp

- Staging URL: url
- Storybook URL: url
- Production URL: url

## 🚀 Getting started

- Install [Node.js](https://nodejs.org/en/). `brew install node` or [installer](https://nodejs.org/en/download/)
- Install [pnpm](https://pnpm.io/installation)
- Clone [Github Repository](https://github.com/foocipes/foocipes-web.git).
- Install dependencies `pnpm install`.

## 🔵 Start the development server

Run `pnpm start`

## ℹ️ Basic information

This repo contains the code for Foocipes web application, built with [Next.js][next].

Its styles using [Styled Components](https://github.com/styled-components)

To ensure the code quality, the project is using [ESLint](https://github.com/eslint/eslint), [Prettier](https://github.com/prettier/prettier) and [Stylelint](https://github.com/stylelint/stylelint), which are run on the pre commit hook (thanks to [Lint-Staged](https://github.com/okonet/lint-staged))

## 💥 Code generators

This project uses code generators to reduce boilerplate and enforce team
conventions. The generators are implemented using [Plop][plop].

You may use the following commands to generate project modules:

```
# React
$ pnpm plop component ProductCard

# Next.js
$ pnpm plop page '/products/[productSlug]'

# GraphQL
$ pnpm plop fragment product
$ pnpm plop mutation product
$ pnpm plop query product
```
