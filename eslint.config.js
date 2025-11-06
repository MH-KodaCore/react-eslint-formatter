import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@stylistic": stylistic,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "@stylistic/indent": ["error", 2],
      "@stylistic/jsx-equals-spacing": [2, "never"],
      "@stylistic/space-infix-ops": ["error", { "int32Hint": false }],
      "@stylistic/no-trailing-spaces": ["error"],
      "@stylistic/no-multi-spaces": ["error"]
    },
  },
]);
