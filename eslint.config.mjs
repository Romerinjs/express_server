import  globals  from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin"; // Asegúrate que este paquete esté instalado
import tsParser from "@typescript-eslint/parser"; // Parser para TypeScript

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        extraFileExtensions: [".mjs"],
        sourceType: "module"
      },
      globals: globals.browser
    }
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script"
    }
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
];
