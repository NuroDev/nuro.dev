/**
 * @type {import("prettier").Config}
 */
module.exports = {
  arrowParens: "always",
  bracketSpacing: true,
  jsxBracketSameLine: true,
  plugins: [
    require.resolve("prettier-plugin-tailwindcss")
  ],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: "all",
  useTabs: true,
};
