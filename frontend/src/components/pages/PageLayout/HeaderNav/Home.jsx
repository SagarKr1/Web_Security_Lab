import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import bee1 from '../../../../assets/bee1.png'; // adjust path as per your project

const HomePage = () => {
    return (
        <Box>
            {/* Header */}
            <Box display="flex" alignItems="center" gap={2} mb={4}>
                <img src={bee1} alt="bee-logo" width={60} />
                <Typography variant="h4" component="h1">
                    Welcome to BEE - Bugs Exploit Exploration
                </Typography>
            </Box>

            {/* Intro Box */}
            <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    🐞 About This Lab
                </Typography>
                <Typography variant="body1" gutterBottom>
                    BEE is a deliberately insecure web application designed to be an educational tool for web application security training. It's inspired by platforms like DVWA, but tailored with a clean modern UI.
                </Typography>
            </Paper>

            {/* Features */}
            <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    🔍 What You Can Practice
                </Typography>
                <List dense>
                    <ListItem><ListItemText primary="✅ Cross-Site Scripting (XSS)" /></ListItem>
                    <ListItem><ListItemText primary="✅ SQL Injection" /></ListItem>
                    <ListItem><ListItemText primary="✅ CSRF (Cross-Site Request Forgery)" /></ListItem>
                    <ListItem><ListItemText primary="✅ Command Injection, File Upload, CAPTCHA, and more" /></ListItem>
                </List>
            </Paper>

            {/* Warning */}
            <Paper elevation={1} sx={{ p: 3, backgroundColor: '#fff3cd', border: '1px solid #ffeeba' }}>
                <Typography variant="h6" gutterBottom>
                    ⚠️ Important Notice
                </Typography>
                <Typography variant="body2">
                    This application is for <strong>educational purposes only</strong>. It contains intentional security flaws.
                    <br />
                    Do NOT host this on a public server or production environment.
                </Typography>
            </Paper>
        </Box>
    );
};

export default HomePage;
