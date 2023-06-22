module.exports = {
  extends: [
    "eslint-config-ali/vue",
  ],
  rules: {
    // semi: 0,
    "no-unused-vars": 1,
    quotes: [
      "error", "double",
    ],
    "linebreak-style": [
      "error", "windows",
    ],
    "object-curly-newline": [
      "error", {
        ObjectExpression: "always",
        ObjectPattern: {
          multiline: true,
        },
        ImportDeclaration: "never",
        ExportDeclaration: {
          multiline: true, minProperties: 3,
        },
      },
    ],
    "array-bracket-newline": [
      "error", "always",
    ],
  },
};
