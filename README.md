# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Tips

## Eslint Test

- To run ESLint checks locally during development, use the following command:

```
npx eslint . --ext .ts,.tsx --max-warnings=0
```

- If you want to run eslint when saving a file, please add the following setting to your vscode settings.json:

```
"editor.codeActionsOnSave": {
"source.fixAll.eslint": "always"
}
```
