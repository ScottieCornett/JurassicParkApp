# Jurassic Park | Code:You Capstone Propject

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

* Used EJS to render HTML templates

## How to install and run this project

1. Clone this project
2. Install Node and MongoDB on your machine
3. Open a terminal in VSCode or navigate to the root folder in a terminal
4. Run 'npm install' to update the npm packages
5. Run 'npm start' to start the server
6. Open a browser and navigate to 'localhost:3000'

## Notes

- The dinosaur database should seed automatically due to the scripts in the package.json file. If this does not happen, you will need to run 'node seeds/dinoSeed.js' to seed the database.
- I have the port set to 3000. If you would like to use a different port, simply update the 'app.listen()' function in the index.js file.
