import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import basics from '../../assets/basics.jpg'
import hungermeter from '../../assets/hungermeter.jpg'

const Basics = () => {
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
            <Typography sx={{ typography: { lg: 'h2', md: 'h3', sm: 'h4', xs: 'h5' }}}>{t('UNDERSTAND THE BASICS OF GOLF NUTRITION')}</Typography>
            <Typography variant='body1'>{t('Lance Geringer B.A (sports kinesiologist, personal trainer and nutrition adviser) takes you through the basics of golf nutrition')}</Typography>
            <img src={basics} alt='Banana *ars' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{my: 1}} variant='body1'>{t('Whether you’re playing a quick nine holes after work, or a two round corporate/society day, the one thing many golfers forget when planning their round is food. I’ve often seen people fetching a bottle of water and reaching for a chocolate bar as they pay for their rounds. However many holes you’re playing, is a chocolate bar really going to provide you with the fuel you need? This is where understanding the basics of golf nutrition helps.')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('NO! Because they’re full of sugar and because they have no complex carbohydrates (long term energy). You’ll have energy for a few holes but it won’t last. You end up feeling like your energy has been drained. You’ll feel hungry again- due to the drop in your blood sugar levels.')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('Our energy bars have the perfect blend of simple and complex carbohydrates. Slowly releasing energy and fuelling you through nine holes.')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('HUNGRY OR FULL')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('No matter how many holes you’re playing, having the right food should be just as important as your, clubs, balls and water! To be at your best on the course you need to play your round without feeling hungry or too full. If you’re craving food then you won’t be able to focus. You will feel full you’ll be too sluggish to perform at your best.')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('THE HUNGER-O-METER: WHERE DO YOU MEASURE UP?')}</Typography>
            
              <img src={hungermeter} alt='Hungermeter' style={{ maxWidth: '100%', marginTop: 50}}/>
              <Paper elevation={1} sx={{ my: 1, p: 5}}>
              <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
                <Button sx={{ m:'auto', mt: 5, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('CLICK HERE TO ORDER')}</Button>
              </Link>
            </Paper>
          </Paper>
        </Box>
    )
}

export default Basics
