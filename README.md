<img src='https://github.com/daleheggie/deal-ite/blob/develop/server/public/Dealight-logo.png' style='text-align:center'/>

# Deal-ight

A handy tool to help keep track of the food and drink specials in your area

## Getting started

Once you have cloned the project directory, start by navigating to the client folder using:

### `cd client`

then installing the required dependencies with

### `npm install`

Then navigate to the server folder using 

### `cd ../server`

and similarly install dependencies with

### `npm install`

The next step is to initialize the database. This requires the user to have MySQL installed on their local machine.

Once this is done, start by opening the knexfile.js file located within the server folder and adjusting the development variables for your local MySQL server

This should look like this:

`development: {`
    `client: 'mysql',`
    `connection: {`
      `host: <your host name>,`
      `user: <your username>,`
      `password: <your password>,`
      `database: <your db>,`
      `charset: 'utf8'`
    `}`
  `}`

### Populate the database with seed data

Having set up the environment variables, ensuring that we are within the server folder, run the commands:

`npm run migrate`
`npm run seed`

In the event that modifications need to be made or an error occured, please ensure you run

`npm run migrate:rollback`

before attempting the migration again

Once the migration is successful you can verify the tables have been created and seeded with data in the MySQL workbench

### How to run the app

Begin by running the command `npm start` within both the `client` and `server` folders in separate terminals. The server runs on port 5000 by default and this can be modified within the .env file

### How to use the app

The migration will populate the users table with 2 ordinary users and one admin. The admin login details are username: admin, password: password

In order to experiment with adding and removing deals from the database you must be logged in as the admin

Upon running the react app you will first see the landing page where you will be prompted to login or sign up. Enter your details in the fields in order to begin keeping track of all of those sweet deals.

#### Contact Me

If you have any questions about the implementation or you'd just like to reach out and discuss the project please feel free to contact me at the details in the footer of the landing page