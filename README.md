# 3D Portfolio URL - website

- ljcheng.kubesources.com

Note: This project is being hosted in AWS S3 + Cloudfront. The infrastructure is set with terraform

- [portfolio-3d-stack](https://github.com/ljcheng999/portfolio-3d-stack)

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Preparing for Deployment](#preparing-for-deployment)
- [Installed Packages](#installed-packages)

## Overview

Built with type safety, scalability, and developer experience in mind. A batteries included Vite + React.

- [ESLint](https://eslint.org) - Static code analysis to help find problems within a codebase
- [Prettier](https://prettier.io) - An opinionated code formatter
- [Vite](https://vitejs.dev) - Feature rich and highly optimized frontend tooling with TypeScript support out of the box
- [React](https://react.dev) - A modern front-end JavaScript library for building user interfaces based on components
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework packed with classes to build any web design imaginable
- [Three](https://www.npmjs.com/package/three) - An easy-to-use, lightweight, cross-browser, general-purpose 3D library. The current builds only include WebGL and WebGPU renderers but SVG and CSS3D renderers are also available as addons.

A more detailed list of the included packages can be found in the [Installed Packages](#installed-packages) section. Packages not shown above include Devtools, ui helper libraries, and eslint plugins/configs.

## Requirements

- [NodeJS 22+](https://nodejs.org/en)

## Getting Started

Getting started is a simple as cloning the repository

```
git clone https://github.com/ljcheng999/3d-portfolio-app.git
```

Changing into the new directory

```
cd 3d-portfolio-app
```

Installing dependencies

```
npm install
```

And running the setup script (initializes git repository and husky and installs playwright)

```
npm run dev
```

Congrats! You're starting the web app in your machine

## Preparing for Deployment

Instructions are provided for deploying both with and without Docker. Both options still require a platform to host the application.

### Without Docker

Deploying is as easy as running

```
npm run build
```

and pointing your web server to the generated `index.html` file found at `dist/index.html`

### Continuous Integration

Currently, this project is being ran with Github workflow, file locaiton is in .github/workflows/

## Installed Packages

A simplified list can be found in the [Overview](#overview) section.

### Base

- [Vite](https://vitejs.dev)
- [React](https://react.dev)

### Linting & Formatting

- [ESLint](https://eslint.org)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react#readme)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn#readme)
- [eslint-plugin-storybook](https://github.com/storybookjs/eslint-plugin-storybook#readme)
- [Prettier](https://prettier.io)

### UI

- [Tailwind CSS](https://tailwindcss.com)
