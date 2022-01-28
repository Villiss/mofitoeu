import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import chocolateorange from '../../assets/chocolateorange.JPG'

const ChocolateOrange = () => {
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
          <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('SSP GOLF PERFORMANCE BARS- CHOCOLATE ORANGE')}</Typography>
          <Paper elevation={1} sx={{ my: 1, p: 5 }}>
            <img src={chocolateorange} alt='Chocolate & Orange' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{my: 1}} variant='body1'>{t('24 times 90 grams')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('Features')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('INGREDIENTS: Oats (32%), Golden Syrup, Margarine (Palm Oil, Rapeseed Oil, Water, Emulsifier (E471)), Dark Chocolate Chunks (12%)(Cocoa Mass, Sugar, Cocoa Butter, Cocoa Powder, Emulsifier (Soya Lecithin)), Sugar, Crisp Rice (5%)(Rice Flour, Rice Bran, Sugar, Rice Extract), Cocoa Powder (3%), Natural Flavouring. For allergens, including cereals containing gluten, see ingredients in bold')}</Typography>
        
        
        </Paper>
          <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
            <Button sx={{ m:'auto', mt: 5, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('CLICK HERE TO ORDER')}</Button>
          </Link>
        </Paper>
      </Box>
    )
};

export default ChocolateOrange;
