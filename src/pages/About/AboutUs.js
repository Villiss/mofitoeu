import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ourmission from '../../assets/mission.jpg'
import productwork from '../../assets/productwork.jpg'

const AboutUs = () => {
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
                <Typography sx={{ typography: { lg: 'h2', md: 'h3', sm: 'h4', xs: 'h5' }}}>{t('about_who')}</Typography>
                <Typography variant='body1'>{t('about_mofito')}</Typography>
            </Paper>
            <Paper elevation={1} sx={{ my: 1, p:5}}>
                <Typography sx={{ typography: { lg: 'h2', md: 'h3', sm: 'h4', xs: 'h5' }}}>{t('about_who_ssp')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('about_sport_scientific')}</Typography>
                
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('about_family_business')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('about_spanning')}</Typography>
                
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('about_international')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('about_based_in')}</Typography>
                
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('about_decade')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('about_over_twelve')}</Typography>
                
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('about_investment')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('about_investing')}</Typography>
                
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('about_future')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('about_innovation')}</Typography>
 
                <Typography sx={{my: 1}} variant='subtitle1'>{t('about_average_golfer')}</Typography>

                <Link to={t('url_nutritiontips')} style={{ textDecoration: 'none', color: 'black' }}><Typography variant='h5'>{t('about_check_out')}</Typography></Link>
 
                
            </Paper>
            <Paper elevation={1} sx={{ my: 1, p:5}}>
                <Typography sx={{ typography: { lg: 'h2', md: 'h3', sm: 'h4', xs: 'h5' }}}>{t('about_mission')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('about_lowering')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('about_our_mission_is')}</Typography>
                <img src={ourmission} alt='our mission' style={{ maxWidth: '100%', marginTop: 50}}/>
                <Typography sx={{my: 1, mt: 5}} variant='body1'>{t('about_average_18_hole')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('about_make_sure_your_clubs')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('about_part_of_mission')}</Typography>
                <Typography sx={{my: 1}} variant='h5'>{t('about_tackle')}</Typography>
            </Paper>
            <Paper elevation={1} sx={{ my: 1, p:5}}>
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('about_the_long')}</Typography>
                <Typography sx={{ typography: { lg: 'h1', md: 'h2', sm: 'h3', xs: 'h4' }}}>{t('about_how_do_work')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('about_echoing')}</Typography>
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('about_multi_stage')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('about_our_multistage')}</Typography>
                <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Paper elevation={1} sx={{ my: 1, p:5}}>
                        <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('about_fuel')}</Typography>
                        <Typography sx={{my: 1}} variant='body1'>{t('about_fuelling')}</Typography>
                    </Paper >
                    <img src={productwork} alt='product works' style={{ maxWidth: '100%', marginTop: 50}}/>
                    </Paper>
                <Typography sx={{ my: 1, mt: 5, typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('about_dont_crash')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('about_too_many')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('about_why_not_check')}</Typography>
            
                <Link to={t('url_contact')} style={{ textDecoration: 'none', color: 'white' }}>
                    <Button sx={{ m:'auto', my: 1, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('general_click_here_to_order')}</Button>
                </Link>
            </Paper>
        </Box>
    )
}

export default AboutUs
