module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:node/recommended"
  ],
  parserOptions: {
    //project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "@typescript-eslint/explicit-member-accessibility": "warn",
    "@typescript-eslint/no-misused-promises": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "max-len": [
      "warn",
      {
        "code": 80
      }
    ],
    "comma-dangle": ["warn", "always-multiline"],
    "no-console": 1,
    "no-extra-boolean-cast": 0,
    "semi": 1,
    "indent": ["warn", 2],
    "quotes": ["warn", "single"],
    "node/no-process-env": 1,
    "node/no-unsupported-features/es-syntax": [
      "error",
      { "ignores" : ["modules"] }
    ],
    "node/no-missing-import": 0,
    "node/no-unpublished-import": 0
  },
  settings: {
    node: {
      tryExtensions: [".js", ".json", ".node", ".ts"]
    }
  }
}