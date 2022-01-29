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
          <Typography sx={{ typography: { lg: 'h1', md: 'h2', sm: 'h3', xs: 'h4' }}}>{t('EATING FOR 18 HOLES')}</Typography>
            <Typography sx={{ typography: { lg: 'h2', md: 'h3', sm: 'h4', xs: 'h5' }}}>{t('GOLF NUTRITION - PLAYING 18 HOLES TEEING OFF IN THE MORNING')}</Typography>
            <Typography variant='body1'>{t('Golf nutrition or eating correctly for a round of golf is actually quite simple. Here are some tips on fuelling your body for a morning round.')}</Typography>
            <img src={BowlMuesli} alt='Bowl Muesli' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{my: 1}} variant='h4'>{t('BREAKFAST - 90 MINS BEFORE TEE OFF')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('Try to eat a healthy breakfast of complex carbohydrates like muesli, toast and jam, scones, bagel etc. A big fried breakfast or a couple of bacon butties, while delicious, is full of lots of calories and sodium and this will make you feel heavy and bloated on the course. If you do decide to have a fried breakfast try to eat only one half of it, or just eat one bacon butty. If you eat a breakfast like this you will have sufficient energy for the front nine.')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('FRONT NINE')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('If you don’t get round to eating breakfast before you play, then the best way to fuel yourself properly and maintain effective golf nutrition is to eat one third of a SSP Performance bar 15 minutes before teeing off. Then have another third on the 4th hole. On hole 7 eat one third. Bananas are also a great snack but remember a medium banana only has 110 calories of simple quick release sugars. You need long term energy that will dip feed your body throughout your game.')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('BACK NINE')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('Eat one third of a bar an hole 10, one third on the 13 tee and the final third on hole 16. Just as long as you have kept hydrated you should still feel energised and ready for a pint or two in the bar.')}</Typography>
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

export default EighteenHolesMorning;
