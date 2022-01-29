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
          <Typography sx={{ typography: { lg: 'h1', md: 'h2', sm: 'h3', xs: 'h4' }}}>{t('EATING FOR 18 HOLES')}</Typography>
            <Typography sx={{ typography: { lg: 'h2', md: 'h3', sm: 'h4', xs: 'h5' }}}>{t('GOLF NUTRITION - PLAYING 18 HOLES TEEING OFF IN THE AFTERNOON')}</Typography>
            <Typography variant='body1'>{t('Golf nutrition or eating correctly for a round of golf is actually quite simple. Here are some tips on fuelling your body for a round in the afternoon.')}</Typography>
            <img src={BarsBuggy} alt='Bars Buggy' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{my: 1}} variant='h4'>{t('BREAKFAST - 90 MINS BEFORE TEE OFF')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('For an afternoon tee-off replace your breakfast with a lunch that consists of protein (chicken or fish), a complex carbohydrate (rice, pasta, or potato) and a vegetable. If you’re not able to have a proper lunch have a sandwich (make it yourself, buy one at the local petrol station, or have one at the club). Try to eat it on whole grain bread with lean cuts of meat and minimal dressing. On the other side of the coin, if you only like white bread and lots of dressing that’s better than not eating anything at all. Remember, you don’t want to think about hunger on the course! Try to wait 60-90 minutes before teeing off and then follow these guidelines:')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('STARTING OFF')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('For a great energised round of golf eat one third of a SSP Golf Performance Energy Bar 15 minutes before tee off. Then eat a third on the following holes:')}</Typography>
            <Typography sx={{my: 1}} variant='subtitle1'>{t('Hole 4, 7, 10, 13 and 16')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('If you feel like taking a banana with you simply eat it slowly over the round. Bananas are good but a medium banana only has 110 calories')}</Typography>
            <Link to='/eighteenmorning' style={{ textDecoration: 'none', color: 'white' }}>
              <Button sx={{ m:'auto', backgroundColor: 'rgba(0, 0, 0, 0.54)', my: 5  }} variant='contained'>{t('You can find tips for 18 holes in the morning by clicking here')}</Button>
            </Link>
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

export default EighteenHolesAfternoon;
