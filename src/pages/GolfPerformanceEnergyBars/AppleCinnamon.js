import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import applecinnamon from '../../assets/applecinnamon.jpg'

const AppleCinnamon = () => {
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
          <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('SSP GOLF PERFORMANCE BARS- APPLE & CINNAMON')}</Typography>
          <Typography sx={{my: 1}} variant='body1'>{t('Spanning four generations, our family business has been at the forefront of innovation within the leisure industry.  Including, bowling alleys, bars, restaurants, events, amusements and the manufacture of national lottery ticket machines')}</Typography>
          <Paper elevation={1} sx={{ my: 1, p: 5 }}>
            <img src={applecinnamon} alt='Apple & Cinnamon' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{my: 1}} variant='body1'>{t('24 times 90 grams')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('Features')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('INGREDIENTS: Oats (34%), Golden Syrup, Margarine (Palm Oil, Rapeseed Oil), Water, Emulsifier (E471)), Dried Apple (8%)(Dried Apple, Preservative (Sodium Metabisulphite), Sugar, Crisp Rice (7%)( Rice Flour, Rice Bran, Sugar, Rice Extract)), Flour (Wheat Flour, Calcium Carbonate, Iron, Niacin, Thiamin)), Cinnamon, Natural Flavouring.')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('For allergens, including cereals containing gluten, see ingredients in bold’')}</Typography>
        
        
        </Paper>
          <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
            <Button sx={{ m:'auto', mt: 5, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('CLICK HERE TO ORDER')}</Button>
          </Link>
        </Paper>
      </Box>
    )
};

export default AppleCinnamon;
