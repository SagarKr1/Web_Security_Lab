import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Alert,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';

const BeeSecurityPage = () => {
    const [level, setLevel] = useState('low');

    useEffect(() => {
        const savedLevel = localStorage.getItem('beeSecurityLevel');
        if (savedLevel) setLevel(savedLevel);
    }, []);

    const handleChange = (event) => {
        const selectedLevel = event.target.value;
        setLevel(selectedLevel);
        localStorage.setItem('beeSecurityLevel', selectedLevel);
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                🔐 BEE Security Level
            </Typography>

            <Paper elevation={3} sx={{ p: 3, maxWidth: 500, mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Select Security Level
                </Typography>

                <FormControl fullWidth>
                    <InputLabel id="security-level-label">Level</InputLabel>
                    <Select
                        labelId="security-level-label"
                        id="security-level-select"
                        value={level}
                        label="Level"
                        onChange={handleChange}
                    >
                        <MenuItem value="low">Low</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="high">High</MenuItem>
                    </Select>
                </FormControl>

                <Alert severity="info" sx={{ mt: 3 }}>
                    Current security level is set to <strong>{level.toUpperCase()}</strong>.
                </Alert>
            </Paper>

            <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                    🧠 About the Levels
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText
                            primary="🐣 Low (Beginner)"
                            secondary="No security mechanisms. Great for learning basic attack concepts."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="⚠️ Medium (Intermediate)"
                            secondary="Implements basic defenses (e.g., input filters). Good for bypassing challenges."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="🔐 High (Advanced)"
                            secondary="Stronger defenses (e.g., token validation, encoding). Great for learning mitigation."
                        />
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default BeeSecurityPage;
