import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const AboutPage = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                📖 About BEE
            </Typography>

            <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    🐝 What is BEE?
                </Typography>
                <Typography variant="body1">
                    BEE (Bugs Exploit Exploration) is a modern, educational web security lab built to help learners understand and exploit common web vulnerabilities. The platform is designed with a clean and intuitive interface using React and MUI, making it ideal for students, cybersecurity enthusiasts, and ethical hackers.
                </Typography>
            </Paper>

            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    🌐 Inspired By
                </Typography>
                <Typography variant="body1">
                    This project takes inspiration from several amazing platforms, including:
                    <ul>
                        <li>DVWA (Damn Vulnerable Web Application)</li>
                        <li>OWASP Juice Shop</li>
                        <li>PortSwigger Labs</li>
                    </ul>
                    Our goal was to create a more modern, responsive, and customizable alternative to traditional vulnerable apps.
                </Typography>
            </Paper>

            <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                    👨‍💻 Developer's Perspective
                </Typography>
                <Typography variant="body1">
                    BEE was built with the intention of blending security education with intuitive UI/UX. The developer behind BEE believes learning cybersecurity should be practical, visual, and enjoyable. Each module in this lab is designed to simulate real-world vulnerabilities while being safe for offline testing.
                    <br /><br />
                    As a developer, this project also serves as a personal journey into the core concepts of web exploitation, frontend design, and backend API security testing.
                </Typography>
            </Paper>
        </Box>
    );
};

export default AboutPage;
