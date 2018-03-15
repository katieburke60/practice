//In production we want to rely on one versus multiple servers.

//Package.json --> scripts
"scripts": {
    "start": "json-server --static ./build db.json",
    "dev": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "dev-server": "json-server -p 8080 db.json"
  }
}

//.env.production
REACT_APP_BASE_URL=./todos

//now will deploy the application!
