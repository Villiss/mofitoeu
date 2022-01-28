import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import wchocolatestraw from '../../assets/wchocolatestraw.JPG'

const WhiteChocolateStrawberry = () => {
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
          <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('SSP GOLF PERFORMANCE BARS- WHITE CHOCOLATE & STRAWBERRY')}</Typography>
          <Paper elevation={1} sx={{ my: 1, p: 5 }}>
            <img src={wchocolatestraw} alt='Fruit & Oat' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{my: 1}} variant='body1'>{t('24 times 90 grams')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('Features')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('INGREDIENTS: Oats (35%), Golden Syrup, Margarine (Vegetable Oils (Palm Oil, Rapeseed Oil), Water, Salt), Brown Sugar, White Chocolate Chunks (6%)( Sugar, Cocoa Butter, Whole Milk Powder, Whey Powder (Milk), Lactose (Milk), Emulsifier (Soya Lecithin), Vanilla Extract)), Crisp Rice ( Rice Flour, Wheat Flour (Calcium, Iron, Niacin, Thiamin), Sugar, Whey Powder (Milk), Malt Flour (Barley), Salt, Rapeseed Oil, Emulsifier (Soya Lecithin)), Strawberry Pieces (4%)( Concentrated Apple Puree, Strawberry Puree, Fructose Glucose Syrup, Glucose, Sugar, Humectant (Vegetable Glycerol), Wheat Fibre, Palm Oil, Acidity Regulator (Malic Acid), Gelling Agent (Pectin), Concentrates (Carrot, Pumpkin, Blueberry), Natural Flavouring , Wheat Flour,')}</Typography>
        
        
        </Paper>
          <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
            <Button sx={{ m:'auto', mt: 5, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('CLICK HERE TO ORDER')}</Button>
          </Link>
        </Paper>
      </Box>
    )
};

export default WhiteChocolateStrawberry;
