import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import pouringbottle from '../../assets/pouringbottle.jpg'

const NineHolesAfternoon = () => {
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
            <Typography sx={{ typography: { lg: 'h1', md: 'h2', sm: 'h3', xs: 'h4' }}}>{t('EATING FOR 9 HOLES')}</Typography>
            <Typography sx={{ typography: { lg: 'h2', md: 'h3', sm: 'h4', xs: 'h5' }}}>{t('GOLF NUTRITION - PLAYING 9 HOLES TEEING OFF IN THE AFTERNOON')}</Typography>
            <Typography variant='body1'>{t('Golf nutrition or eating correctly for a round of golf is actually quite simple, even if your only playing 9 holes. Here are some tips on fuelling your body for a afternoon round.')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('90 MINS BEFORE TEE OFF')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('Try to have finished your lunch or dinner. If you can’t eat a proper meal have a sandwich (make it yourself, buy one at the local petrol station, or have one at the club). Try to eat it on whole grain bread with lean cuts of meat and minimal dressing. On the other side of the coin, if you only like white bread and lots of dressing that’s better than not eating anything at all. Remember, you don’t want to think about hunger on the course!')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('DURING YOUR NINE HOLES')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('15 mins before tee-off you can eat one third of a SSP Golf Performance energy bar, then on holes four and seven. This will drip feed you energy throughout your nine holes and leave you satisfied.')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('HYDRATION: DRINK, DRINK, DRINK')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('Don’t forget to keep hydrated throughout your round. Drink some water after every hole. During a golf round you should aim to consume 40% – 50% of your total daily intake of water. If your water intake for the day is 2 litres, you would consume approximately 1 litre of water during your round.  On a very hot day you can double that amount.')}</Typography>
            <img src={pouringbottle} alt='Water pouring from bottle' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }, my: 5}}>{t('THE AVERAGE GOLFER BURNS 1,200 CALORIES CARRYING THEIR CLUBS OVER 18 HOLES, SO WHY COMPROMISE WHEN IT COMES TO YOUR NUTRITION ON THE COURSE?')}</Typography>
              <Paper elevation={1} sx={{ my: 1, p: 5}}>
              <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
                <Button sx={{ m:'auto', mt: 5, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('CLICK HERE TO ORDER')}</Button>
              </Link>
            </Paper>
          </Paper>
        </Box>
    )
};

export default NineHolesAfternoon;
