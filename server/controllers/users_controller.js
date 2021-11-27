const { entries } = require('../seed_data/users');
const jwt = require('jsonwebtoken');

const knex = require('knex')(require('../knexfile').development);

const authorize = (req,res,next) => {
    
    if (!req.headers.authorization) {
        return res.sendStatus(400);
    }
    // Get token from the authorization header
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err,decoded) => {
        if (err) {
            return res.status(403).json({
            message: 'Invalid token'
            })
        }

        req.decoded = decoded;
        next();
    })
}

const getUserById = (req,res) => {
    //Get a specific user by their id
    knex('users')
        .where({id: req.params.id})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json({error: `Error retrieving user with id ${req.params.id}`})
        })
}

const deleteUser = (req,res) => {
    knex('users')
        .where({id: req.params.id})
        .del()
        .then(data => {
            res.send(200).json(data)
        })
        .catch(err => {
            console.log(err)
        })
}

const signupUser = (req,res) => {
    
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
}

const loginUser = (req,res) => {
    const {username, password} = req.body;
    knex('users')
        .where({username: username})
        // Check if username exists and if password is a match
        .then(data => {
            console.log(data[0])
            if (data.length === 0) {
                res.status(400).json({message: `Incorrect credentials, username: ${username} does not exist`})
                return
            }
            if (data[0].password !== password){
                res.status(401).json({message: `Incorrect credentials, password does not match`})
            }
            // Generate token and send to the client
            let token = jwt.sign({data: data[0]}, process.env.JWT_SECRET, {expiresIn: '1h'})

            res.json({
                token: token,
                message: 'Successfully logged in'})
        })
        .catch(error => {
            console.log(error)
        })
}

module.exports = {
    getUserById,
    authorize,
    signupUser,
    loginUser,
    deleteUser
}