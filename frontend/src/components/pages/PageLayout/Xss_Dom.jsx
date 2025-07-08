import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Paper,
    Button,
} from '@mui/material';

export default function XssDomPage() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleShow = (e) => {
        e.preventDefault();

        // Directly injects into DOM without sanitization (DOM-based XSS simulation)
        setOutput(input);
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                ⚠️ XSS (DOM-Based) Lab
            </Typography>
            <Typography variant="body1" mb={3}>
                This simulates a DOM-based XSS vulnerability. Try inputting: <code>&lt;script&gt;alert(1)&lt;/script&gt;</code>
            </Typography>

            <Paper elevation={3} sx={{ p: 4, maxWidth: 500 }}>
                <form onSubmit={handleShow}>
                    <TextField
                        label="Enter something"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Try injecting a script..."
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Show Output
                    </Button>
                </form>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle1">Output:</Typography>
                    <div id="xss-output" dangerouslySetInnerHTML={{ __html: output }} style={{ background: '#eee', padding: '10px', minHeight: '40px' }}></div>
                </Box>
            </Paper>
        </Box>
    );
}
