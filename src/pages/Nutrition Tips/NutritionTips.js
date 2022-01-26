import { Box, Button, createTheme, Paper, ThemeProvider, Typography } from '@mui/material'
import { Link } from "react-router-dom";
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

const NutritionTips = () => {
    const { t } = useTranslation();

    return (
        
            <Box textAlign={'center'} 
            sx={{
              m: 'auto',
              mt: 15,
              minHeight: '100vh',
              width: {lg: '70%', md: '75%', sm: '80%', xs: '90%'}
            }}>
                <Paper elevation={1} sx={{ my: 1, p:5}}>
                    <Typography sx={{ typography: { lg: 'h2', md: 'h3', sm: 'h4', xs: 'h5' }}}>{t('nt_golf_nt')}</Typography>
                    <Typography variant='body1'>{t('nt_this_page')}</Typography>

                    <Typography variant='body1'>{t('nt_nutrition')}</Typography>

                    <Typography variant='body1'>{t('nt_founder')}</Typography>

                </Paper>
                <Paper elevation={1} sx={{ display: 'flex', flexDirection: {lg: 'row', md: 'row', sm: 'column', xs: 'column'} }}>
                    <Paper  sx={{ m: 1, p: 5}}>
                        <Link to='/basics' style={{ textDecoration: 'none', color: 'white' }}>
                            <Button sx={{ m:'auto', my: 1,  backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('nt_understanding')}</Button>
                        </Link>
                        <Link to='/nineholesafternoon' style={{ textDecoration: 'none', color: 'white' }}>
                            <Button sx={{ m:'auto', my: 1, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('nt_nine_afternoon')}</Button>
                        </Link>
                        <Link to='/eighteenmorning' style={{ textDecoration: 'none', color: 'white' }}>
                            <Button sx={{ m:'auto', my: 1, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('nt_eighteen_morning')}</Button>
                        </Link>
                        <Link to='/eighteenafternoon' style={{ textDecoration: 'none', color: 'white' }}>
                            <Button sx={{ m:'auto', my: 1, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('nt_eighteen_afternoon')}</Button>
                        </Link>
                        <Link to='/corporate27' style={{ textDecoration: 'none', color: 'white' }}>
                            <Button sx={{ m:'auto', my: 1, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('nt_27_corporate')}</Button>
                        </Link>
                        <Link to='/corporate36' style={{ textDecoration: 'none', color: 'white' }}>
                            <Button sx={{ m:'auto', my: 1, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('nt_36_corporate')}</Button>
                        </Link>
                    </Paper>
                    
                    <Paper sx={{ flexDirection: 'column', my: 1, p:5}}>

                    <Typography variant='body1'>{t('nt_hour_down')}</Typography>

                    <Typography variant='body1'>{t('nt_half_hour')}</Typography>

                    <Typography variant='subtitle1'>{t('nt_average_golfer')}</Typography>

                    <Typography variant='subtitle1'>{t('nt_why_compromise')}</Typography>
                    </Paper>
                </Paper>
            </Box>
    )
}

export default NutritionTips
