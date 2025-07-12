import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const InstructionsPage = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                📘 Instructions
            </Typography>

            <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    🧪 How to Use BEE
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="1. Login using the default credentials (admin / password) or create your own." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="2. Navigate to the sidebar and select any vulnerability lab to begin." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="3. Each lab comes with Low, Medium, and High difficulty levels. Try to exploit them." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="4. View results, understand the flaw, and learn mitigation strategies." />
                    </ListItem>
                </List>
            </Paper>

            <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                    🛠️ Tips for Practice
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="✔ Use Developer Tools (F12) to inspect and manipulate web pages." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="✔ Try using different payloads to exploit vulnerabilities." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="✔ Take notes and screenshots for documentation and learning." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="✔ Never practice on real-world websites without permission." />
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default InstructionsPage;
