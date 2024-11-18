import { Box, AppBar, Toolbar, IconButton, Typography, Switch } from '@mui/material'

interface Props {
    darkMode: boolean;
    handleThemeChange: ()=> void;
}

export const Header = ({ darkMode, handleThemeChange } :Props) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ mb: 2 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Re-Store
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange} />
                </Toolbar>
            </AppBar>
        </Box>
    )
}
