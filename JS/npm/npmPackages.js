//CLI STUFF
[sudo] npm install npm@latest -g //update npm version

//add package to package.json dev dependencies
npm install [PACKAGE NAME OR GITHUB URL] --save-dev
  // Note: you must use the --save-dev flag. Otherwise, the dependency will be installed as a production dependency.

npm ls //list all npm packages
npm outdated //see whether you are using correct version for your packages
npm update //updates all your packages
npm uninstall --save lodash //remove package from package.json

npm list -g --depth=0 //see modules that are globally installed

npm add sqlite3 //add a new package to package.JSON. Adds a new module sqlite3 into your node_modules.
//My app depends on the sqlite3 package being installed.


SOURCES
//http://frontend.turing.io/lessons/module-2/project-configuration-npm-webpack-eslint-gitignore.html
//Packagejson.lock; https://docs.npmjs.com/files/package-lock.json
