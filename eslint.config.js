// eslint.config.js
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        ignores: ["node_modules/", ".expo/", "dist/"],
    },
    ...tseslint.configs.recommended,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        plugins: {
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
        },
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off", // Desligado pois usamos TypeScript
        },
        settings: {
            react: { version: "detect" },
        },
    },
    {
        files: ['*.js'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
        },
    }
);
