module.exports = {
  extends: "airbnb-base/legacy",
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "no-console": ["error", {allow: ["log", "warn", "error"]}],
  },
};