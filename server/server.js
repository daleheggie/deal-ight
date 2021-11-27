const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const userRoutes = require('./routes/user_routes');

app.use(express.json());
app.use(cors());

require('dotenv').config(); 
const port = process.env.PORT || 8080;

// All user specific requests 
app.use('/profile', userRoutes);

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})