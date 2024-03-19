# Jurassic Park | Code:You Capstone Project

## A functional website EXAMPLE project written using an Express server with Node.js

This project is the culmination of the knowledge I gained during the Web Development Course through Code:You. To meet the requirements of the Capstone Project, I integrated several technologies and functionalities to bring my dream destination to life, including:

- Created a Node.js web server using the Express.js framework
- Created a MongoDB database to store contact information from a contact form
- Stored dinosaur information in the MongoDB using an array of objects
- Made an API call to a third party website (weatherbit.io) for real time temperature data

* Used a cloud server to store dinosaur images

- Used CSS to style the site
- Used media queries in CSS to make the site responsive
- Used JavaScript to functionality to the site content

* Used npm packages such as bcrypt for password hashing and EJS for HTML templating

## How to install and run this project

1. Clone this project
2. Install Node and MongoDB on your machine
3. Open a terminal in VSCode or navigate to the root folder in a terminal
4. Run 'npm install' to update the npm packages
5. Run 'node seeds/adminSeed.js' to seed the admin user, then close 'Ctrl + C' to stop the application
6. Run 'npm start' to start the server
7. Open a browser and navigate to 'localhost:3000'

## Notes

- The dinosaur database should seed automatically due to the scripts in the package.json file. If this does not happen, you will need to run 'node seeds/dinoSeed.js' to seed the database.
- I have the port set to 3000. If you would like to use a different port, simply update the 'app.listen()' function in the index.js file.
- Due to rate limits, the fetch API call to weatherbit.io is commented out by default in main.js. To make the call, uncomment "window.addEventListener('load', logWeather);" in main.js and reload the page.

- To access the CRUD functionality of the dinosaurs, you need to :

1. Have a Cloudinary cloud account
2. Sign in to the application using the credentials 'admin' as both the username and password
3. Set a .env file in the root directory of the file with the following fields :

CLOUDINARY_CLOUD_NAME = 'Your Cloudinary Cloud name'
CLOUDINARY_KEY = 'Your Cloudinary API Key'
COULDINARY_SECRET = 'You Cloudinary API secret'
