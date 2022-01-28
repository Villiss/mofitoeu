import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import fruitoat from '../../assets/fruitoat.JPG'

const FruitsOats = () => {
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
          <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('SSP GOLF PERFORMANCE BARS- FRUIT & OAT')}</Typography>
          <Paper elevation={1} sx={{ my: 1, p: 5 }}>
            <img src={fruitoat} alt='Fruit & Oat' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{my: 1}} variant='body1'>{t('24 times 90 grams')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('Features')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('INGREDIENTS: Oats (26%)(Oat Gluten), Golden Syrup, Margarine (Non Hydrogenated Vegetable Oils (Palm Oil, Rapeseed Oil), Water, Salt), Brown Sugar, Dried Apricots (7%)(Apricots, Rice Flour, Preservative (Sulphur Dioxide)), Raisins (7%)(Raisins, Sunflower Oil), Puffed Rice (Wheat Flour, Rice Flour, Sugar, Dextrose, Salt, Emulsifier (Mono-and Diglycerides Of Fatty Acids)), Sunflower Seeds (3%), Wheat Flour (Gluten) Allergens including cereals containing gluten, see ingredients in bold. Allergens: Oats, Soya, Milk, Barley, Wheat')}</Typography>
        
        
        </Paper>
          <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
            <Button sx={{ m:'auto', mt: 5, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('CLICK HERE TO ORDER')}</Button>
          </Link>
        </Paper>
      </Box>
    )
};

export default FruitsOats;
