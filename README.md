# Gumbo Millennium Config

This repository contains shared configuation for Tailwind, ESLint and Stylelint.

> **Notice**
> This repository is named `eslint-config`, since ESLint is setting these
> weird rules about how to name packages. However, this repository contains
> config for Tailwind and Stylelint as well.

## Installation

```bash
npm install @gumbo-millennium/eslint-config
```

## Usage

### Tailwind

This project exposes the Tailwind config as a preset. To use it, add the following to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@gumbo-millennium/eslint-config/tailwind'),
  ],

  // ...
}
```

### ESLint

This project exposes the ESLint config as an extensible config. To use it, add the following to your `.eslintrc.js`:

```js
module.exports = {
  extends: [
    '@gumbo-millennium/eslint-config',
  ],

  // ...
}
```
