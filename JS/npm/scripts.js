SCRIPTS
  //scripts are instructions. For example npm test runs npm [the stuff in the value with the key test listed in scripts.]
  npm test //is the same as the below (if in a script)
  npm run ./node_modules/mocha/bin/mocha --timeout 5000
  //For scripts other than start or test you must add the keyword run into the terminal command (e.g., npm run deploy)
