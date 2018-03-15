//Allows us to declare environment variables that are different between environments.

// Declare variable in .env file
  REACT_APP_BASE_URL=http:/localhost:8080/todos

//Import as a constant using process.env.[VARIABLE_NAME]
const base_url = process.env.REACT_APP_BASE_URL
