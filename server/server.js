const express = require('express');
const app = express()
const jwt = require('jsonwebtoken')
const cors = require('cors')

app.use(express.json());
app.use(cors());

require('dotenv').config(); 
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})