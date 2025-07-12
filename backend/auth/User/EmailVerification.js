const jwt = require('jsonwebtoken');
const db = require('../../config/database');
require('dotenv').config();

module.exports.verifyOtp = async (req, res) => {
    try {
        const { email,otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({
                status: false,
                body: "Email and OTP are required"
            });
        }

        // Check in DB
        const [users] = await db.query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );
        console.log(users);
        if (users.length === 0) {
            return res.status(400).json({
                status: false,
                body: "Invalid OTP"
            });
        }

        const otpToken = users[0].otp;
        console.log(otpToken)
        const decodeToken = jwt.verify(otpToken,process.env.secret);
        const otpDB = decodeToken.otp;

        if(otp!==otpDB){
            return res.status(404).json({
                status:false,
                body:"OTP is not valid"
            })
        }

        // Update user info
        await db.query(
            `UPDATE users
                SET otp = true
                WHERE email = ?`,
            [email]
        );

        return res.status(200).json({
            status: true,
            body: "OTP verified successfully",
            email: email
        });

    } catch (e) {
        console.log("Error from verifyOtp:", e);
        return res.status(400).json({
            status: false,
            body: "OTP expired or invalid"
        });
    }
};
