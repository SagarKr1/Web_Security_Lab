import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Alert,
} from '@mui/material';

export default function CommandInjectionPage() {
    const [ip, setIp] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulated backend response (to be replaced with actual fetch call to backend)
        if (ip) {
            setResult(`Pinging ${ip}...\nResponse: Success (Simulated)`);
        } else {
            setResult('Please enter a valid IP address.');
        }
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                💻 Command Injection Lab
            </Typography>
            <Typography variant="body1" mb={3}>
                Simulates a vulnerable system command execution (e.g., pinging an IP address). Try injecting OS commands.
            </Typography>

            <Paper elevation={3} sx={{ p: 4, maxWidth: 500 }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Enter IP Address"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={ip}
                        onChange={(e) => setIp(e.target.value)}
                        placeholder="e.g., 127.0.0.1"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Ping
                    </Button>
                </form>

                {result && (
                    <Alert severity="info" sx={{ mt: 2, whiteSpace: 'pre-line' }}>
                        {result}
                    </Alert>
                )}
            </Paper>
        </Box>
    );
}  
