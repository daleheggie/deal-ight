const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const knex = require('knex')(require('./knexfile').development);
const userRoutes = require('./routes/user_routes');
const dealsRoutes = require('./routes/deals_routes');
const placesRoutes = require('./routes/places_routes');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

require('dotenv').config(); 
const port = process.env.PORT || 8080;

// All user specific requests, requires jwt verification 
app.use('/profile', userRoutes);
app.use('/deals', dealsRoutes);
app.use('/places', placesRoutes);

// Signup a new user
app.post('/signup', (req,res) => {
    // Validate the request data
    const {username, name, password} = req.body;

    if (!username || !name || !password) {
        res.status(400).json({
            message: 'All fields are required for signup'})
    }

    // Insert new user into the users table
    knex('users')
        .insert({username: username,
                password: password,
                name: name})
        .then(data => {
            res.json(data)
        })
})
// Login the user
app.post('/login', (req,res) => {
    const {username, password} = req.body;
    knex('users')
        .where({username: username})
        // Check if username exists and if password is a match
        .then(data => {
            if (data.length === 0) {
                res.status(400).json({message: `Incorrect credentials, username: ${username} does not exist`})
                return -1
            }
            if (data[0].password !== password){
                res.status(401).json({message: `Incorrect credentials, password does not match`})
                return -1
            }
            // Generate token and send to the client
            let token = jwt.sign({data: data[0].id}, process.env.JWT_SECRET, {expiresIn: '1h'})

            res.json({
                token: token,
                message: 'Successfully logged in'})
        })
        .catch(error => {
            console.log(error)
        })
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})