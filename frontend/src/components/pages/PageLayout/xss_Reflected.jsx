import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Paper,
    Button,
} from '@mui/material';

export default function XssReflectedPage() {
    const [query, setQuery] = useState('');
    const [output, setOutput] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();

        // Simulated vulnerable output (reflected in response)
        setOutput(query);
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                🪞 XSS (Reflected) Lab
            </Typography>
            <Typography variant="body1" mb={3}>
                This simulates a reflected XSS attack. Try: <code>&lt;script&gt;alert(1)&lt;/script&gt;</code>
            </Typography>

            <Paper elevation={3} sx={{ p: 4, maxWidth: 500 }}>
                <form onSubmit={handleSearch}>
                    <TextField
                        label="Search query"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Try injecting a script..."
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Search
                    </Button>
                </form>

                {output && (
                    <Box sx={{ mt: 3 }}>
                        <Typography variant="subtitle1">Search result for:</Typography>
                        <div dangerouslySetInnerHTML={{ __html: output }} style={{ background: '#eee', padding: '10px' }} />
                    </Box>
                )}
            </Paper>
        </Box>
    );
}
