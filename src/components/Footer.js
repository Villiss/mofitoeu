import { AppBar, Box, createTheme, ThemeProvider, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

const Footer = () => {
    const { t } = useTranslation();

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static" color="primary" sx={{ bottom: 0 }} >
                <Toolbar>
                    <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                        <Typography variant='h2' >
                        {t('footer_number_one')}
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Footer
