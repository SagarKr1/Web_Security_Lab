import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Paper,
    Button,
    List,
    ListItem,
    Divider,
} from '@mui/material';

export default function XssStoredPage() {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            setComments((prev) => [...prev, comment]);
            setComment('');
        }
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                🗒️ XSS (Stored) Lab
            </Typography>
            <Typography variant="body1" mb={3}>
                This simulates a stored XSS vulnerability. Comments are saved and rendered without sanitization.
                Try submitting: <code>&lt;script&gt;alert('Stored!')&lt;/script&gt;</code>
            </Typography>

            <Paper elevation={3} sx={{ p: 4, maxWidth: 600 }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Enter comment"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Try injecting script code..."
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Submit Comment
                    </Button>
                </form>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6">Comments</Typography>
                <List>
                    {comments.map((c, idx) => (
                        <ListItem key={idx}>
                            <div dangerouslySetInnerHTML={{ __html: c }} style={{ background: '#f0f0f0', padding: 10, borderRadius: 4 }} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
}
