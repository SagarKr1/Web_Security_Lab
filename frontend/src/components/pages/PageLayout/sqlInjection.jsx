import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Alert,
} from '@mui/material';

export default function SQLInjectionPage() {
    const [userId, setUserId] = useState('');
    const [result, setResult] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();

        // Simulated vulnerable logic — replace with backend later
        if (userId === "1" || userId.toLowerCase().includes("or")) {
            setResult("User found: admin (Simulated)");
        } else {
            setResult("No user found.");
        }
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                🛠️ SQL Injection Lab
            </Typography>
            <Typography variant="body1" mb={3}>
                Enter a user ID to search. Try SQL injection payloads like <code>1 OR 1=1</code> to bypass logic.
            </Typography>

            <Paper elevation={3} sx={{ p: 4, maxWidth: 500 }}>
                <form onSubmit={handleSearch}>
                    <TextField
                        label="User ID"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        placeholder="e.g., 1 or 1=1"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Search
                    </Button>
                </form>

                {result && (
                    <Alert severity="info" sx={{ mt: 2 }}>
                        {result}
                    </Alert>
                )}
            </Paper>
        </Box>
    );
}
