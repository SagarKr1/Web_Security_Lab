const jwt = require('jsonwebtoken');
const db = require('../../config/database');
const transporter = require('../mail/mailAuth');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const generateOtp = async () => {
    const otp = await Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
    return otp;
};

module.exports.sendOtp = async (req, res) => {
    try {
        const { email , createdBy} = req.body;

        if (!email) {
            return res.status(400).json({
                status: false,
                body: "Email is required"
            });
        }

        const query = `select * from users where email=?`;
        const value = [email];
        const [row] = await db.query(query, value);

        if (row.length > 0 && row[0].is_verified) {
            return res.status(400).json({ status: false, body: "Email already verified" });
        }

        const otp = await generateOtp();

        const mailOptions = {
            from: process.env.email,
            to: email,
            subject: 'Your Verification OTP',
            html: `
                <div style="font-family: 'Arial', sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">

                    <!-- Header Section -->
                    <div style="background-color: #0044cc; color: white; padding: 20px; text-align: center;">
                        <h1 style="margin: 0; font-size: 30px; font-weight: bold;">SBTE</h1>
                        <p style="font-size: 18px; margin-top: 5px;">Government of Bihar</p>
                    </div>

                    <!-- Main Content -->
                    <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); margin-top: 20px;">

                        <p style="font-size: 18px;">Dear User,</p>
                        
                        <p style="font-size: 16px; line-height: 1.6;">To complete your registration for SBTE services, please use the following One-Time Password (OTP) to verify your account. This OTP is valid for <strong>5 minutes</strong>.</p>

                        <div style="text-align: center; margin: 20px 0;">
                            <h2 style="font-size: 36px; color: #0044cc; font-weight: bold; letter-spacing: 2px;">${otp}</h2>
                        </div>

                        <p style="font-size: 16px; line-height: 1.6;">If you did not request this verification, please ignore this email. Your security is important to us.</p>
                    </div>

                    <!-- Footer Section -->
                    <div style="margin-top: 30px; text-align: center; color: #888; font-size: 14px;">
                        <p>&copy; 2025 SBTE - Government of Bihar. All rights reserved.</p>
                    </div>

                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log('OTP sent to email:', email);
        const otpToken = jwt.sign(
            { email, otp },
            process.env.secret,
            { expiresIn: '10m' }
        );
        const qry = `INSERT INTO users (email, otp,created_by) VALUES (?, ?, ?)
            ON DUPLICATE KEY UPDATE otp = ?`;
        const v = [email, otpToken,createdBy, otpToken];
        await db.query(qry, v);

        return res.status(200).json({
            status: true,
            body: "OTP sent to " + email,
        });

    } catch (e) {
        console.log("Error from sendOtp:", e);
        return res.status(500).json({
            status: false,
            body: "Error: " + e.message
        });
    }
};




module.exports.completeSignup = async (req, res) => {
    try {
        const { name, password, email,role } = req.body;

        if (!name || !password || !email) {
            return res.status(400).json({
                status: false,
                body: "Name, email, and password are required"
            });
        }

        // Check if email exists and not verified yet
        const [users] = await db.query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );
        console.log(users)
        if (!users[0]) {
            return res.status(400).json({
                status: false,
                body: "Email not found or OTP not sent"
            });
        }
        if(users[0].otp===false){
            return res.status(404).json({
                status:false,
                body:"OTP is not verfied"
            })
        }

        if (users[0].is_verified) {
            return res.status(409).json({
                status: false,
                body: "User already verified and registered"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Update user info
        await db.query(
            `UPDATE users
                SET name = ?, password = ?,role=?, is_verified = true
                WHERE email = ?`,
            [name, hashedPassword,role, email]
        );

        return res.status(200).json({
            status: true,
            body: "Signup completed successfully"
        });

    } catch (e) {
        console.log("Error from completeSignup:", e);
        return res.status(500).json({
            status: false,
            body: "Error: " + e.message
        });
    }
};

