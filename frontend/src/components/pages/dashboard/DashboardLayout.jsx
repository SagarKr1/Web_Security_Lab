import React from 'react';
import { useNavigate, Outlet, NavLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Button,
    Box,
    CssBaseline,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const navItems = [
    {label:'Home',path:'/dashboard/home'},
    { label: 'XSS', path: '/dashboard/xss' },
    { label: 'CSRF', path: '/dashboard/csrf' },
    { label: 'SQL Injection', path: '/dashboard/sql' },
    { label: 'Broken Auth', path: '/dashboard/auth' },
];

export default function DashboardLayout() {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const drawer = (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%',paddingTop:10 }}>
            <Box sx={{ flexGrow: 1 }}>
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton
                                component={NavLink}
                                to={item.path}
                                end
                                sx={{
                                    '&.active': {
                                        backgroundColor: '#e0e0e0',
                                        borderLeft: '4px solid #1976d2',
                                    },
                                    paddingY: '10px',
                                    paddingLeft: '20px',
                                }}
                            >
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box p={2}>
                <Button
                    variant="contained"
                    color="error"
                    fullWidth
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </Box>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <CssBaseline />

            {/* AppBar */}
            <AppBar position="fixed" sx={{ zIndex: 1300 }}>
                <Toolbar>
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" noWrap>
                        🐝 BEE – Bugs Exploit Exploration
                    </Typography>
                </Toolbar>
            </AppBar>

            <Toolbar />

            <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
                {/* Drawer */}
                <Box
                    component="nav"
                    sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                    aria-label="sidebar navigation"
                >
                    <Drawer
                        variant={isMobile ? 'temporary' : 'permanent'}
                        open={isMobile ? mobileOpen : true}
                        onClose={handleDrawerToggle}
                        ModalProps={{ keepMounted: true }}
                        sx={{
                            display: { xs: 'block', md: 'block' },
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>

                {/* Main Content */}
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        overflowY: 'auto',
                        p: 3,
                        backgroundColor: '#fafafa',
                    }}
                >
                    <Outlet />
                </Box>
            </Box>

            {/* Footer */}
            <Box
                component="footer"
                sx={{
                    py: 2,
                    textAlign: 'center',
                    backgroundColor: '#f5f5f5',
                    borderTop: '1px solid #ccc',
                }}
            >
                <Typography variant="body2">
                    © {new Date().getFullYear()} BEE – Bugs Exploit Exploration
                </Typography>
            </Box>
        </Box>
    );
}
