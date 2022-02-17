import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import thumbnail from '../../assets/thumbnail-2.jpg'


const GolfPerformanceEnergyBars = () => {
    const { t } = useTranslation();

    return (
        <Box textAlign={'center'} 
        sx={{
          m: 'auto',
          mt: 15,
          minHeight: '100vh',
          width: {lg: '70%', md: '75%', sm: '80%', xs: '90%'}
        }}>
            <Paper elevation={1} sx={{ my: 1, p: 5 }}>
                <Typography variant='body1'>{t('gpeb_back_nine')}</Typography>

                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h5' }, my: 2}}>{t('gpeb_packed')}</Typography>
                <Typography variant='body1'>{t('gpeb_are_delicious')}</Typography>
                <img src={thumbnail} alt='thumbnail' style={{maxWidth: '100%', marginTop: 50}}/>
            </Paper>
            <Paper elevation={1} sx={{ my: 1, p: 5 }}>
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h5' }, my: 2}}>{t('gpeb_6_flavours')}</Typography>
                <Link to='/chocolateorange' style={{ textDecoration: 'none', color: 'black' }}>
                    <Typography sx={{ typography: { lg: 'h4', md: 'h5', sm: 'h5', xs: 'h6' }, my: 2}}>{t('gpeb_chocolate_orange') }</Typography>
                </Link>
                <Link to='/applecinnamon' style={{ textDecoration: 'none', color: 'black' }}>
                    <Typography sx={{ typography: { lg: 'h4', md: 'h5', sm: 'h5', xs: 'h6' }, my: 2}}>{t('gpeb_apple_cinnamon')}</Typography>
                </Link>
                <Link to='/chocolatetoffee' style={{ textDecoration: 'none', color: 'black' }}>
                    <Typography sx={{ typography: { lg: 'h4', md: 'h5', sm: 'h5', xs: 'h6' }, my: 2}}>{t('gpeb_chocholate_toffee')}</Typography>
                </Link>
                <Link to='/fruitsoats' style={{ textDecoration: 'none', color: 'black' }}>
                    <Typography sx={{ typography: { lg: 'h4', md: 'h5', sm: 'h5', xs: 'h6' }, my: 2}}>{t('gpeb_fruit_oat')}</Typography>
                </Link>
                <Link to='/superberry' style={{ textDecoration: 'none', color: 'black' }}>
                    <Typography sx={{ typography: { lg: 'h4', md: 'h5', sm: 'h5', xs: 'h6' }, my: 2}}>{t('gpeb_superberry')}</Typography>
                </Link>
                <Link to='/whitechocolatestrawberry' style={{ textDecoration: 'none', color: 'black' }}>
                    <Typography sx={{ typography: { lg: 'h4', md: 'h5', sm: 'h5', xs: 'h6' }, my: 2}}>{t('gpeb_white_chocolate_strawberry')}</Typography>
                </Link>

                <Link to='/nutritiontips' style={{ textDecoration: 'none', color: 'black' }}>
                    <Typography variant='body2'>{t('gpeb_why_not_check')}</Typography>
                </Link>

                <Typography variant='body1'>{t('gpeb_if_you_are_looking')}</Typography>
                </Paper>
        </Box>
    )
}

export default GolfPerformanceEnergyBars
