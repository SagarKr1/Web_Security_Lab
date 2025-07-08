import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Alert,
} from '@mui/material';

export default function BruteForcePage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Dummy validation logic (this will be replaced with backend logic)
        if (username === 'admin' && password === 'admin') {
            setMessage('Login successful!');
        } else {
            setMessage('Invalid username or password.');
        }
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                🔐 Brute Force Attack Lab
            </Typography>
            <Typography variant="body1" mb={3}>
                Try to guess the correct credentials. This simulates a login page vulnerable to brute force attacks.
            </Typography>

            <Paper elevation={3} sx={{ p: 4, maxWidth: 400 }}>
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Login
                    </Button>
                </form>
                {message && (
                    <Alert severity={message === 'Login successful!' ? 'success' : 'error'} sx={{ mt: 2 }}>
                        {message}
                    </Alert>
                )}
            </Paper>
        </Box>
    );
}
