# Burger Project Utilizing Node, Express and Handlebars

## Overview

This "Burger" application is a burger logger which incorporates MySQL, Node, Express, Handlebars and a homemade ORM. It follows the MVC design pattern and in particular uses Node and MySQL to query and route data in the application, and Handlebars to generate the HTML.

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* The application stores every burger in a database, whether devoured or not.

## NOTE

Since this application uses Heroku to host, accessing the application on an open network such as a coffee shop, library, or even your University WiFi, it may be blocked. If you are experiencing a Heroku connection error, this could be why.

## Local Environment Setup
To use Eat-Da-Burger web application application from your local environment, you must accomplish the following steps below:

**Step 1 - Clone my repo using the command line below.**
```
git clone https://github.com/nicksessa/Burger.git
```
**Step 2 - Change directory to the cloned repo folder.**
```
cd Burger
```
**Step 3 - Install all required NPM packages.**
```
npm install
```
**Step 4 - Start the application server using the command line below**
```
node server.js
```
(A local installation of MySql is also needed if a local fork is used.)

## Software Packages Used
- node.js - [https://nodejs.org/en/](https://nodejs.org/en/)
- heroku-cli NPM Package - [https://www.npmjs.com/package/heroku-cli](https://www.npmjs.com/package/heroku-cli)
- body-parser NPM Package - [https://www.npmjs.com/package/body-parser](https://www.npmjs.com/package/body-parser)
- express NPM Package - [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)
- path NPM Package - [https://www.npmjs.com/package/path](https://www.npmjs.com/package/path)
- mysql NPM Package - [https://www.npmjs.com/package/mysql](https://www.npmjs.com/package/mysql)



