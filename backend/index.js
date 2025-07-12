const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
require('dotenv').config();

// Import routers
const AttackRouter = require('./routes/AttackRouter');

const app = express();
const port = process.env.PORT || 9000;
// Use helmet to secure HTTP headers
app.use(helmet(
    {
        crossOriginResourcePolicy: false, 
    }
));


// Enhanced CORS configuration
const corsOptions = {
    origin: '*', // In production, replace with your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
    maxAge: 86400 // 24 hours
};

// Middleware
app.use(cors(corsOptions));

// // Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// // Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: true,
        message: 'Something went wrong!',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Security headers middleware
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

// test
app.get('/', async (req, res) => {
    res.json({
        status: true,
        message: "Hello"
    })
})


// Middleware
app.use(bodyParser.json({ limit: '4mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.use('/api',AttackRouter);

app.use((req, res) => {
    res.status(404).json({
        error: true,
        message: 'Route not found'
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 