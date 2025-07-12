const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
require('dotenv').config();

const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;

    try {
        console.log("Auth Header:", req.headers.authorization);
        // Check if authorization header exists and starts with "Bearer"
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            // Extract token
            token = req.headers.authorization.split(' ')[1];

            if (!token) {
                res.status(401);
                throw new Error('Not authorized, token missing');
            }
            const decoded = jwt.verify(token, process.env.secret);

            // Attach decoded information to request object (optional)
            req.user = decoded;

            // Proceed to next middleware
            return next();
        }

        // If authorization header is missing
        return res.status(401).json({
            "error":"error : Not authorized, no token provided"
        });;
        // throw new Error('Not authorized, no token provided');
    } catch (error) {
        console.error(error.message);
        return res.status(401).json({
            "error":"error : "+error.message
        });
        // throw new Error('Not authorized, token invalid or expired');
    }
});

module.exports = authMiddleware;