import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        browser: "readonly",
        $: "readonly",
        $$: "readonly",
      },
    },
    plugins: { js },
    rules: {
      "no-unused-vars": "warn",
      quotes: ["warn", "single"],
      semi: ["warn", "always"],
    },
    extends: ["plugin:@eslint/js/recommended"],
  },
]);
