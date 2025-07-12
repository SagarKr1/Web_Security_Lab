const express = require('express');



const router = express.Router();

const auth = require('../auth/authToken/authToken');

router.get('/',async (req, res) => {
    res.json({
        status: true,
        message: "Hello from admin router"
    })
});


module.exports = router; 