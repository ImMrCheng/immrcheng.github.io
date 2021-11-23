module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  rules: {
    "no-console": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "space-before-function-paren": 0,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/name-property-casing': [2, 'PascalCase'],
    'vue/attributes-order': 2,
    'vue/html-closing-bracket-newline': [
      2,
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/multiline-html-element-content-newline': 2,
    // 'vue/singleline-html-element-content-newline': 2,
    'vue/singleline-html-element-content-newline': "off",
    'vue/no-v-html': 0,
    'vue/no-parsing-error': [
      2,
      {
        'x-invalid-end-tag': true
      }
    ],
    'vue/html-indent': [
      2,
      2
    ],
    'vue/order-in-components': 2,
    // 减少多人合作的合并冲突
    // 'comma-dangle': ['error', 'always-multiline'],
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
