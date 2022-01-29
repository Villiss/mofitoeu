import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import pouringbottle from '../../assets/pouringbottle.jpg'
import mix4 from '../../assets/mix4.JPG'

const Corporate36 = () => {
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
          <Typography sx={{ typography: { lg: 'h1', md: 'h2', sm: 'h3', xs: 'h4' }}}>{t('PLAYING 36 HOLES [CORPORATE/SOCIETY DAYS]')}</Typography>
            <img src={mix4} alt='Mix of SSP Bars' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{my: 1}} variant='h4'>{t('GOLF NUTRITION - PLAYING 2 ROUNDS BACK TO BACK')}</Typography>
            <Typography variant='body1'>{t('Golf nutrition for two rounds of golf is actually quite simple. Here are some tips on fuelling your body for a 36 hole corporate or society day.')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('FIRST ROUND')}</Typography>
            <Typography sx={{my: 1}} variant='h5'>{t('FRONT NINE')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('If you don’t get round to eating breakfast before you play, then the best way to fuel yourself properly and maintain effective golf nutrition is to eat one third of a SSP Performance bar 15 minutes before teeing off. Then have another third on the 4th hole. On hole 7 eat one third. Bananas are also a great snack but remember a medium banana only has 110 calories of simple quick release sugars. You need long term energy that will dip feed your body throughout your game.')}</Typography>
            <Typography sx={{my: 1}} variant='h5'>{t('BACK NINE')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('Eat one third of a bar an hole 10, one third on the 13 tee and the final third on hole 16. Just as long as you have kept hydrated you should still feel energised and ready for lunch.')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('LUNCH')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('Thirty-six holes can equate to up to 10 hours of golf, so you’ll definitely need plenty of carbohydrates and water. Before you set off on your second round try to stop, eat, hydrate and rest for around 60-90 minutes. Remember to take it easy on the beer. You don’t want to be three off the tee on your first hole. If you’re not going to stop for lunch then we would advise that you start eating one third of a bar between the end of round 1 and the beginning of round 2. You will just need to eat one further third of a bar every three holes until you finish the round.')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('When having lunch go for a lean protein source such as chicken or fish. Also make sure you have a complex carbohydrate (potato, rice or pasta) and simple carbohydrate (vegetable) with your meal. Don’t forget to allow your food to go down. Wait at least an hour and a half before teeing off if you’re having a big meal.')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('ROUND 2')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('If you’re still full from lunch and your energy levels are fine you might also decide to skip one third of the bar between holes three and four. Still try and follow the general guidelines for the rest of the round (eating one third of a bar every three holes). In short, you should start snacking before you start feeling peckish.')}</Typography>
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

export default Corporate36;
