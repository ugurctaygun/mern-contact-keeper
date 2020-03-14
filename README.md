# mern-contact-keeper
Tutorial Project

npm init -y

npm i express bcryptjs jsonwebtoken config express-validator mongoose

npm i -D nodemon concurrently

npm run server

"dev": "concurrently \"npm run server\" \"npm run client\"" at package.json to run client and server concurrently

MONGOOSE

Create models for keeping the schemas of database, userSchema (user: type:string etc)
Export models through route using require();

EXPRESS

Create a config file of db, introduce your database variables there and call your database to Server.js
and call it as a method to initiate.

Express-js-validator is used to limit the scope of the data that can be sent to the api

Authentication

Create a middleware function to check if the use has the required token to access the private routes.
See middleware/auth.js - routes/auth.js


JWT Web Token

Used to create a unique web token for users.
routes/users.js
jwt.io

BCRYPT

is used to hash the password or objects that are required to be hashed while passing them to the database
bcrypt.hash(param, method);
