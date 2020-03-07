# mern-contact-keeper
Tutorial Project

npm init -y

npm i express bcryptjs jsonwebtoken config express-validator mongoose

npm i -D nodemon concurrently

npm run server

MONGOOSE

Create models for keeping the schemas of database, userSchema (user: type:string etc)
Export models through route using require();

EXPRESS

Create a config file of db, introduce your database variables there and call your database to Server.js
and call it as a method to initiate.

Express-js-validator is used to limit the scope of the data that can be sent to the api

BCRYPT

is used to hash the password or objects that are required to be hashed while passing them to the database
bcrypt.hash(param, method);
