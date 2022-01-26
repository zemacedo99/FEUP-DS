# Code Guidelines<!-- omit in toc -->

## Table of Contents<!-- omit in toc -->

- [1. ESLint](#1-eslint)
  - [1.1. Installation](#11-installation)
  - [1.2. Integration with Visual Studio Code](#12-integration-with-visual-studio-code)
- [2. Code structure](#2-code-structure)
  - [2.1. Directories](#21-directories)
  - [2.2. Files](#22-files)
  - [2.3. Components](#23-components)

## 1. ESLint

### 1.1. Installation

Installing ESLint globally:

- via npm: `npm install -g eslint`
- via Yarn: `yarn global add eslint`

Installing ESLint as a development dependency:

- via npm: `npm install --save-dev eslint`
- via yarn: `yarn add -D eslint`

### 1.2. Integration with Visual Studio Code

Add the following settings to your `.vscode/settings.json` file. These settings are going to automatically fix ESLint errors in your code on save.

```json
"eslint.format.enable": true,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"files.eol": "\n"
```

## 2. Code structure

### 2.1. Directories

```tree
src
├── App.jsx
├── index.jsx
├── components
│   └── <component_name>
│       ├── index.jsx
│       └── style.js
├── services
│   └── ...
└── pages
│   └── Example.jsx
├── util
│   └── ...
├── store
│   └── ...
├── style
    └── GlobalStyle.js
```

### 2.2. Files

All files containing JSX elements should have a `.jsx` extension.

### 2.3. Components

Components should be in the `components` directory. All components should be functional components since they are faster to render.

Components with style should be created as a directory with a `style.js` file and the name of directory being the name of the component.

**Do not use `.css` files, use `styled-components` instead.**
