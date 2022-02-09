import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import pouringbottle from '../../assets/pouringbottle.jpg'
import BowlMuesli from '../../assets/BowlMuesli.jpg'


const EighteenHolesMorning = () => {
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
          <Typography sx={{ typography: { lg: 'h1', md: 'h2', sm: 'h3', xs: 'h4' }}}>{t('18_moring_title')}</Typography>
            <Typography sx={{ typography: { lg: 'h2', md: 'h3', sm: 'h4', xs: 'h5' }}}>{t('18_moring_golf_nutrition')}</Typography>
            <Typography variant='body1'>{t('18_moring_golf_correctly')}</Typography>
            <img src={BowlMuesli} alt='Bowl Muesli' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{my: 1}} variant='h4'>{t('18_moring_breakfast_90_mins_before')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('18_moring_try_healthy_breakfast')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('18_moring_front_nine')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('18_moring_if_you_dont')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('18_moring_back_nine')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('18_moring_eat_one_third')}</Typography>
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

export default EighteenHolesMorning;
