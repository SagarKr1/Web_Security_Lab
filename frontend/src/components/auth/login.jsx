import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bee1 from '../../assets/bee1.png';
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Snackbar,
    Alert,
} from '@mui/material';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [errorSnackbar, setErrorSnackbar] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ Dummy login logic - Replace with real API later
        if (username === 'admin' && password === 'password') {
            // Store dummy token
            localStorage.setItem('token', 'logged-in');
            setOpenSnackbar(true);

            // Navigate after short delay
            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);
        } else {
            setErrorSnackbar(true);
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 10, borderRadius: 3 }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <img
                        src={bee1}
                        alt="BEE Logo"
                        width={100}
                        style={{ marginBottom: 20 }}
                    />
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Login to BEE – Bugs Exploit Exploration
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ mt: 2, width: '100%' }}
                    >
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
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Login
                        </Button>
                    </Box>
                </Box>
            </Paper>

            {/* ✅ Success Snackbar */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert severity="success" variant="filled">
                    Login successful!
                </Alert>
            </Snackbar>

            {/* ❌ Error Snackbar */}
            <Snackbar
                open={errorSnackbar}
                autoHideDuration={3000}
                onClose={() => setErrorSnackbar(false)}
            >
                <Alert severity="error" variant="filled">
                    Invalid credentials!
                </Alert>
            </Snackbar>
        </Container>
    );
}
