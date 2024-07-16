/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@repo/eslint-config/server.js'],
  parserOptions: {
    project: "../../tsconfig.app.json",
  }
};
