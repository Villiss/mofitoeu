import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import pouringbottle from '../../assets/pouringbottle.jpg'
import mix3 from '../../assets/mix3.JPG'

const Corporate27 = () => {
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
          <Typography sx={{ typography: { lg: 'h2', md: 'h2', sm: 'h3', xs: 'h4' }}}>{t('27_corporate_title')}</Typography>
            <img src={mix3} alt='Mix of SSP Bars' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{my: 1}} variant='h4'>{t('27_corporate_golf_nutrition')}</Typography>
            <Typography variant='body1'>{t('27_corporate_golf_correctly')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('27_corporate_first_round')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('27_corporate_since_usual')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('27_corporate_first_nine')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('27_corporate_30_mins_before')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('27_corporate_between_holes')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('27_corporate_between_holes_five')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('27_corporate_lunch')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('27_corporate_15_mins_before')}</Typography>
            <Typography sx={{my: 1}} variant='h5'>{t('27_corporate_holes_71115')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('27_corporate_finish')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('general_hydration')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('general_dont_forget_hydrated')}</Typography>
            <img src={pouringbottle} alt='Water pouring from bottle' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }, my: 5}}>{t('general_average')}</Typography>
              <Paper elevation={1} sx={{ my: 1, p: 5}}>
              <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
                <Button sx={{ m:'auto', mt: 5, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('general_click_here_to_order')}</Button>
              </Link>
            </Paper>
          </Paper>
        </Box>
    )
};

export default Corporate27;
