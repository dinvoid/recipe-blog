# Project Description

The purpose of the project is to create a recipe blog that allows users to create and share recipes with a community of users. The blog is built with a login system using Passport.js and users can add recipes that can be set to either private or public. The public recipes are visible to the community and other users can like and unlike the recipes. The blog also has features for users to view, delete their recipes. The community page displays all the public recipes available on the blog, providing a platform for users to discover and share new recipes with each other. The blog aims to bring together a community of food enthusiasts and provide a space for them to share and discover new recipes.

#Project view
![1](https://raw.githubusercontent.com/dinvoid/github-asset/main/readmerecipe.png)
![2](https://raw.githubusercontent.com/dinvoid/github-asset/main/readmerecipe1.png)
![3](https://raw.githubusercontent.com/dinvoid/github-asset/main/readmerecipe3.png)
![4](https://raw.githubusercontent.com/dinvoid/github-asset/main/readmerecipe4.png)

#Key Features and Functionalities

The key features and functionalities of the recipe blog are:

1. User authentication and authorization using Passport.js
2. Add new recipes: Users can add new recipes with recipe details such as title, ingredients, instructions.
3. Recipe visibility: Users can choose to set their recipes as private or public, with public recipes being visible to the community.
4. View recipes: Users can view their own recipes, as well as public recipes in the community.
5. delete recipes: Users can delete their own recipes.
6. Like and unlike recipes: Users can like and unlike public recipes in the community.
7. Community page: A dedicated page that displays all the public recipes available on the blog.
8. Search function: A search function that allows users to search for specific recipes based on recipe title or ingredients.
9. Responsive design: The blog is designed to be responsive and accessible on various devices and screen sizes.

These features and functionalities aim to provide a comprehensive and interactive platform for users to create, share, and discover new recipes with each other.

#System requirements and Dependencies

1. A web server with support for Node.js and a compatible database system, such as MongoDB.
2. Node.js and npm (Node Package Manager) installed on the server.
3. A web browser, such as Google Chrome, Firefox, or Safari, for users to access the blog.
The dependencies include:

1. @fortawesome/fontawesome-free: A library for adding Font Awesome icons to your website.
2. bcryptjs: A library for securely hashing passwords.
3. bootstrap: A popular front-end framework for developing responsive websites.
4. bootswatch: A theme library for Bootstrap.
5. connect-flash: A middleware for displaying temporary messages in a web application.
6. connect-mongo: A middleware for storing session data in MongoDB.
7. dotenv: A library for loading environment variables from a .env file.
8. ejs: A templating language for rendering dynamic HTML pages on the server.
9. express: A popular web framework for Node.js.
10. express-ejs-layouts: A middleware for using EJS layouts in an Express application.
11. express-session: A middleware for managing user sessions in an Express application.
12. mongoose: A library for MongoDB object modeling in Node.js.
13. passport: A library for authenticating users in a Node.js web application.
14. passport-local: A strategy for authenticating users with a username and password.

The dev dependencies include:

1. nodemon: A utility for automatically restarting the server when changes are made to the code.

These dependencies are required to run your recipe blog and provide the necessary functionality for the features and functionalities listed in the previous section.

npm install @fortawesome/fontawesome-free bcryptjs bootstrap bootswatch connect-flash connect-mongo dotenv ejs express express-ejs-layouts express-session mongoose passport passport-local nodemon



Here is a breakdown of each of the packages being installed:

express: Express is a fast, minimalist web framework for Node.js. It is used 



#Usage instructions

In order to run the recipe blog, you will need to do the following steps:

Open a terminal/command prompt window and navigate to the root directory of your project.

Make sure you have the required dependencies installed. You can check this by running npm install or npm install @fortawesome/fontawesome-free bcryptjs bootstrap bootswatch connect-flash connect-mongo dotenv ejs express express-ejs-layouts express-session mongoose passport passport-local nodemon in the terminal/command prompt.

Create a .env file in the root directory of your project and add the necessary environment variables, such as the database connection string, port number, etc.

Start the application by running npm start or nodemon in the terminal/command prompt. This will launch the server and make your recipe blog accessible at http://localhost:port, where port is the number specified in your .env file.

To add a recipe, you will need to log in to your account. If you don't have an account, you can sign up by clicking on the "Sign Up" button on the login page.

Once logged in, you can add a recipe by clicking on the "Add Recipe" button and filling out the form. You can set the recipe to either "private" or "public" and select the appropriate option.

If the recipe is set to "public", it will be visible to everyone on the community page. You can like and unlike public recipes by clicking on the "Like" button.

To view a recipe, simply click on the title of the recipe. To delete a recipe, click on the "Delete" button.

You can log out of your account by clicking on the "Logout" button in the navigation bar.
