import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BarsBuggy from '../../assets/BarsBuggy.jpg'
import pouringbottle from '../../assets/pouringbottle.jpg'


const EighteenHolesAfternoon = () => {
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
          <Typography sx={{ typography: { lg: 'h1', md: 'h2', sm: 'h3', xs: 'h4' }}}>{t('18_evening_title')}</Typography>
            <Typography sx={{ typography: { lg: 'h2', md: 'h3', sm: 'h4', xs: 'h5' }}}>{t('18_evening_golf_nutrition')}</Typography>
            <Typography variant='body1'>{t('18_evening_golf_correctly')}</Typography>
            <img src={BarsBuggy} alt='Bars Buggy' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{my: 1}} variant='h4'>{t('18_evening_breakfast_90_mins_before')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('18_evening_for_afternoon')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('18_evening_starting_off')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('18_evening_for_energised')}</Typography>
            <Typography sx={{my: 1}} variant='subtitle1'>{t('18_evening_hole_47101316')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('18_evening_if_you_feel_like')}</Typography>
            <Link to={t('url_eighteenmorning')} style={{ textDecoration: 'none', color: 'white' }}>
              <Button sx={{ m:'auto', backgroundColor: 'rgba(0, 0, 0, 0.54)', my: 5  }} variant='contained'>{t('18_evening_18_hole_click_here')}</Button>
            </Link>
            <Typography sx={{my: 1}} variant='h4'>{t('general_hydration')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('general_dont_forget_hydrated')}</Typography>
            <img src={pouringbottle} alt='Water pouring from bottle' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }, my: 5}}>{t('general_average')}</Typography>
              <Paper elevation={1} sx={{ my: 1, p: 5}}>
              <Link to={t('url_contact')} style={{ textDecoration: 'none', color: 'white' }}>
                <Button sx={{ m:'auto', mt: 5, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('general_click_here_to_order')}</Button>
              </Link>
            </Paper>
          </Paper>
        </Box>
    )
};

export default EighteenHolesAfternoon;
