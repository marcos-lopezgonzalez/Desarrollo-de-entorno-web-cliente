import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    // Aplica a todos los JS
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],   // reglas básicas recomendadas
    languageOptions: { globals: globals.browser },
    rules: {
      "no-undef": "error",          // Variables no definidas → error
      "no-unused-vars": "warn",     // Variables sin usar → warning
      "semi": ["error", "always"],  // Puntos y coma obligatorios
      // "quotes": ["error", "double"], // Comillas dobles obligatorias
      "eqeqeq": ["error", "always"] // Siempre usar === en vez de ==
    }
  },
  {
    // JS clásico (no módulo)
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" }
  }
]);
