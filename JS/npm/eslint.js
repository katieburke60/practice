//Linting is checking code for consistency and syntactic cleanliness.

1. Install eslint
  // Globally on your machine: npm install -g eslint
  // Locally in your repo: npm install --save-dev eslint
  // Locally in your repo with babel: npm install --save-dev babel-eslint
2. Create an eslint file in your repo
 //touch .eslintrc
3. Add code below

4. In scripts object of package.json add the following
  "eslint": "./node_modules/eslint/bin/eslint.js ./lib/*.js"

5. To 'lint' code run npm run eslint

6. It will output a list of all errors and warnings to be corrected in the code, including the file and line in which the errors are found.

.eslintrc

{
  "parser": "babel-eslint",
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "mocha": true,
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "sourceType": "module"
  },
  // Having a problem with one of these rules? Learn more about it here: https://eslint.org/docs/rules/
  "rules": {
    "brace-style": "error",
    "comma-spacing": [
      "warn", {
        "before": false,
        "after": true
      }
    ],
    "curly": "error",
    "eqeqeq": ["error", "always"],
    "getter-return": ["error", { "allowImplicit": true }],

    "indent": ["warn", 2],
    "key-spacing": [
      "error", {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "keyword-spacing": [
      "error", {
        "before": true,
        "after": true
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "max-len": [
      "error",
      80
    ],
    "new-cap": [
      "error", {
        "newIsCap": true
      }
    ],
    "newline-after-var": [
      "error",
      "always"
    ],
    "no-template-curly-in-string": "error",
    "object-shorthand": [
      "error",
      "always"
    ],
    "semi": ["error", "always"],
    "semi-spacing": [
      "error", {
        "before": false,
        "after": true
      }
    ],
    "space-before-blocks": [
      "error", {
        "functions": "always",
        "keywords": "always",
        "classes": "always"
      }
    ],
    "space-infix-ops": [
      "error", {
        "int32Hint": false
      }
    ]
  },
  "globals": {
    "expect": true
  }
}

SOURCES
//https://eslint.org/docs/user-guide/getting-started
