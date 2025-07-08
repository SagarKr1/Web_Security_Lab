import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Paper,
    Button,
    Alert,
} from '@mui/material';

export default function CspBypassPage() {
    const [payload, setPayload] = useState('');
    const [executed, setExecuted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setExecuted(true);
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                🔐 CSP Bypass Lab
            </Typography>
            <Typography variant="body1" mb={3}>
                Simulates a page protected by Content Security Policy (CSP). Try injecting payloads that bypass inline script restrictions.
            </Typography>

            <Paper elevation={3} sx={{ p: 4, maxWidth: 600 }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Payload"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={payload}
                        onChange={(e) => setPayload(e.target.value)}
                        placeholder="Try CSP bypass payloads here..."
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Submit Payload
                    </Button>
                </form>

                {executed && (
                    <Box sx={{ mt: 3 }}>
                        <Typography variant="subtitle1">Output:</Typography>
                        <div dangerouslySetInnerHTML={{ __html: payload }} style={{ background: '#f3f3f3', padding: '10px' }} />
                        <Alert severity="info" sx={{ mt: 2 }}>
                            If your script executes here, you’ve bypassed the simulated CSP.
                        </Alert>
                    </Box>
                )}
            </Paper>
        </Box>
    );
}
