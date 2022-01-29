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
          <Typography sx={{ typography: { lg: 'h1', md: 'h2', sm: 'h3', xs: 'h4' }}}>{t('PLAYING 27 HOLES [CORPORATE/SOCIETY DAYS]')}</Typography>
            <img src={mix3} alt='Mix of SSP Bars' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{my: 1}} variant='h4'>{t('GOLF NUTRITION - PLAYING A ROUND AND A HALF')}</Typography>
            <Typography variant='body1'>{t('Golf nutrition or eating correctly for a round of golf is actually quite simple. Here are some tips on fuelling your body for a 27 holes of corporate or society golf.')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('FIRST ROUND')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('Since the usual 9 + 18 day starts with something to eat, then playing 9 holes, having lunch and then a further 18 holes, what you should try to do is eat the normal food given on these days and utilising it along with your SSP Golf Performance Bar for maximum performance. A bacon butty will suffice if you eat only one – any more than that and you’ll more likely get that dreaded bloat and sluggish feeling. Try to finish your breakfast 30 minutes before your tee-off time. This along with a couple of bananas should keep you going for 9 holes.')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('FIRST NINE')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('30 mins before tee-off bacon or egg butty')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('Between holes two and four half a banana')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('Between holes five and seven half a banana')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('LUNCH')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('15 mins before tee-off eat one third of a Golf performance Bar. You can skip this if you feel fine. Then, eat a third of a bar between the following holes')}</Typography>
            <Typography sx={{my: 1}} variant='h5'>{t('Holes 7,11,15')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('You can finish the rest of your bar ready for a few pints in the club house')}</Typography>
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

export default Corporate27;
