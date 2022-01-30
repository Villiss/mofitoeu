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
            <Typography sx={{ typography: { lg: 'h2', md: 'h3', sm: 'h4', xs: 'h5' }}}>{t('basics_title')}</Typography>
            <Typography variant='body1'>{t('basics_lance')}</Typography>
            <img src={basics} alt='Banana *ars' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{my: 1}} variant='body1'>{t('basics_whether_you_play_quick')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('basics_no_because')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('basics_our_energy_bars')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('basics_hungry_or_full')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('basics_no_matter')}</Typography>
            <Typography sx={{my: 1}} variant='h4'>{t('basics_hunger_o_meter')}</Typography>
            
              <img src={hungermeter} alt='Hungermeter' style={{ maxWidth: '100%', marginTop: 50}}/>
              <Paper elevation={1} sx={{ my: 1, p: 5}}>
              <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
                <Button sx={{ m:'auto', mt: 5, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('general_click_here_to_order')}</Button>
              </Link>
            </Paper>
          </Paper>
        </Box>
    )
}

export default Basics
