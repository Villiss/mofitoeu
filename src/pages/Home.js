import { Paper, Box, Typography } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import thumbnail from '../assets/thumbnail-1.jpg'

export default function Home () {
  const { t } = useTranslation();

    return (
      <Box textAlign={'center'} 
            sx={{
              m: 'auto',
              mt: 15,
              minHeight: '100vh',
              width: {lg: '70%', md: '75%', sm: '80%', xs: '90%'}
            }}>
          <Paper elevation={1} sx={{ my: 1, p:5}}>
            <Typography sx={{ typography: { lg: 'h2', md: 'h3', sm: 'h4', xs: 'h5' }}} >{t('home_home_of_bars')}</Typography>
            <Typography variant='body1'>{t('home_echoing')}</Typography>
            <img src={thumbnail} alt='thumbnail' style={{ maxWidth: '100%', marginTop: 50}}/>
          </Paper>
          <Paper elevation={1} sx={{ my: 1, p: 5 }}>
            <Typography variant='h5'>{t('home_unique')}</Typography>
            <Typography variant='body1'>{t('home_unique_multistage_formula')}</Typography>
          </Paper>
          <Paper elevation={1} sx={{ my: 1, p: 5 }}>
            <Typography variant='h5'>{t('home_first_in_world')}</Typography>
            <Typography variant='body1'>{t('home_first_time')}</Typography>
          </Paper>
          <Paper elevation={1} sx={{ my: 1, p: 5 }}>
            <Typography variant='h5'>{t('home_tasty')}</Typography>
            <Typography variant='body1'>{t('home_delicious')}</Typography>
          </Paper>
          <Paper elevation={1} sx={{ my: 1, p: 5 }}>
            <Typography variant='h5'>{t('home_longterm_and_shortterm')}</Typography>
            <Typography variant='body1'>{t('home_positive_benefits')}</Typography>
          </Paper>
          <Paper elevation={1} sx={{ my: 1, p: 5 }}>
            <Typography variant='h5'>{t('home_used_by_pros')}</Typography>
            <Typography variant='body1'>{t('home_technology')}</Typography>
          </Paper>
          <Paper elevation={1} sx={{ my: 1, p: 5 }}>
            <Typography variant='h5'>{t('home_fuel_your_body')}</Typography>
            <Typography variant='body1'>{t('home_fuelling_your_body')}</Typography>
          </Paper>
        <Paper>  
          <Typography variant='h4'>{t('home_its_all_about_ingredients')}</Typography>
        <Paper elevation={1} sx={{my:1, p: 2, display: 'flex', flexWrap: 'wrap'}}>
          <Paper sx={{ p: 5, m: 2, flexGrow: 1, minWidth: '20%', flexBasis: {xs: '80%', sm: '40%', lg: '20%'} }}>
            <Typography variant='h5'>{t('home_oats')}</Typography>
            <Typography variant='body1'>{t('home_oats_is_one_of_healthiest')}</Typography>
          </Paper>
          <Paper sx={{ p: 5, m: 2, flexGrow: 1, minWidth: '20%', flexBasis: {xs: '80%', sm: '40%', lg: '20%'} }}>
            <Typography variant='h5'>{t('home_fruits')}</Typography>
            <Typography variant='body1'>{t('home_nutrients_in_fruit')}</Typography>
          </Paper>
          <Paper sx={{ p: 5, m: 2, flexGrow: 1, minWidth: '20%', flexBasis: {xs: '80%', sm: '40%', lg: '20%'} }}>
            <Typography variant='h5'>{t('home_berries')}</Typography>
            <Typography variant='body1'>{t('home_when_it_comes_to_health')}</Typography>
          </Paper>
          <Paper sx={{ p: 5, m: 2, flexGrow: 1, minWidth: '20%', flexBasis: {xs: '80%', sm: '40%', lg: '20%'} }}>
            <Typography variant='h5'>{t('home_chocolate')}</Typography>
            <Typography variant='body1'>{t('home_dark_chocolate')}</Typography>
          </Paper>
        </Paper>
        </Paper>

        <Paper elevation={1} sx={{my:1, p: 5}}>
          <Typography variant='h4'>{t('home_check_out_our')}</Typography>
          <Typography variant='body1'>
            <Link to='/nutritiontips' underline="hover">{t('home_nutrition_tips_link')}</Link>
          </Typography>

          <Typography variant='body1'>{t('home_pga_golf')}</Typography>

          <Typography variant='body1'>{t('home_professional')}</Typography>

          <Typography variant='body1'>{t('home_discounts')}</Typography>
        </Paper>
        {/* </Box> */}
      </Box>
      );
    };

