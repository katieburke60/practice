//Set up database in BASH
  psql -f ./database/users.sql

//Drop into postgres to do data manipulation in Bash
  //Type psql. This will get you into the interactive postgres terminal. From here you can run postgres and sql commands

//Most common flags
  psql -h localhost -U username databasename
  // -h the host to connect to
  // -U the user to connect with
  // -p the port to connect to (default is 5432)

//List tables in the database
  \d
//List all databases (+ gives additional information)
  \l+

//List all schemas
  \dn
