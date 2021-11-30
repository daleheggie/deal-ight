const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const authorize = (req,res,next) => {
    
    if (!req.headers.authorization) {
        return res.sendStatus(400);
    }
    // Get token from the authorization header
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err,decoded) => {
        if (err) {
            return res.status(403).json({
            message: 'Invalid token'
            })
        }

        req.decoded = decoded;
        next();
    })
}

module.exports = authorize;