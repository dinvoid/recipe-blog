1.npm i express bcryptjs passport passport-local express-ejs-layouts mongoose connect-flash express-session


Here is a breakdown of each of the packages being installed:

express: Express is a fast, minimalist web framework for Node.js. It is used to build the back-end of web applications.

bcryptjs: Bcrypt is a password hashing function that is designed to be secure and efficient. The bcryptjs package is a JavaScript implementation of bcrypt that can be used in a Node.js application.

passport: Passport is an authentication middleware for Node.js. It is designed to be easy to use and flexible, and it supports a variety of authentication strategies, including local authentication (username and password authentication).

passport-local: This is a Passport strategy that allows an application to use local authentication, where users provide a username and password to log in.

express-ejs-layouts: This is a package that allows you to use the EJS templating engine with Express, and it provides a simple layout system to make it easier to build consistent, reusable layouts for your application.

mongoose: Mongoose is an object modeling library for MongoDB and Node.js. It provides a simple, schema-based way to model your application data, and it includes support for middleware and validation.

connect-flash: This is a middleware that allows you to set and display flash messages in an Express application. Flash messages are short-lived messages that are typically used to provide feedback to the user after an action has been performed, such as a successful form submission.

express-session: This is a middleware that allows you to store session data in an Express application. Session data is data that is persisted across requests and is typically used to store information about the current user, such as their authenticated status and any relevant details.

2. npm i -D nodemon
3. npm install ejs
4.npm install bootswatch
5.npm install @fortawesome/fontawesome-free









On the /login route, I used Passport.js for authentication, it's a middleware that helps you to handle the user authentication process, it will check the provided username and password with the data in the database and it will create a session for the user.