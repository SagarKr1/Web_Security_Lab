import React, { useState } from 'react';
import {
    Box,
    Typography,
    Paper,
    Button,
    Alert,
    Input,
} from '@mui/material';

export default function FileUploadPage() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadMessage, setUploadMessage] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setUploadMessage('');
    };

    const handleUpload = (e) => {
        e.preventDefault();

        if (!selectedFile) {
            setUploadMessage('Please select a file first.');
            return;
        }

        // Simulate file upload response (replace with actual upload API)
        setUploadMessage(`File '${selectedFile.name}' uploaded successfully! (simulated)`);
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                📁 File Upload Lab
            </Typography>
            <Typography variant="body1" mb={3}>
                This page simulates a file upload feature. Try uploading different file types and see what happens.
            </Typography>

            <Paper elevation={3} sx={{ p: 4, maxWidth: 500 }}>
                <form onSubmit={handleUpload}>
                    <Input
                        type="file"
                        onChange={handleFileChange}
                        disableUnderline
                        sx={{ mb: 2 }}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Upload File
                    </Button>
                </form>

                {uploadMessage && (
                    <Alert
                        severity={uploadMessage.includes('successfully') ? 'success' : 'warning'}
                        sx={{ mt: 2 }}
                    >
                        {uploadMessage}
                    </Alert>
                )}
            </Paper>
        </Box>
    );
}
