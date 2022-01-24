import { AppBar, Box, createTheme, ThemeProvider, Toolbar, Typography } from '@mui/material'
import React from 'react'

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

const Footer = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static" color="primary" sx={{ bottom: 0 }} >
                <Toolbar>
                    <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                        <Typography variant='h2' >
                        THE WORLDS NUMBER 1 GOLF ENERGY BAR
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Footer
