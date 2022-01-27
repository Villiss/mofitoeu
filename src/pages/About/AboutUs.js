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
                <Typography sx={{ typography: { lg: 'h2', md: 'h3', sm: 'h4', xs: 'h5' }}}>{t('WHO ARE SSP GOLF NUTRITION?')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('Sports Specific Products (SSP Golf), The Home of Golf Nutrition is a wholly owned subsidiary of the Rowallan Group. We have over 40 years experience in the sport and leisure and healthcare industries.')}</Typography>
                
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('FAMILY BUSINESS')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('Spanning four generations, our family business has been at the forefront of innovation within the leisure industry.  Including, bowling alleys, bars, restaurants, events, amusements and the manufacture of national lottery ticket machines')}</Typography>
                
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('INTERNATIONAL')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('SSP Golf is based in Brentwood, Essex. We also have a division in Jacksonville, Florida.  The company currently employs 55 staff that works throughout 6 businesses across the United Kingdom and the USA')}</Typography>
                
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('A DECADE OF GOLF NUTRITION')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('Over the last twelve years we have worked tirelessly to gain a reputation across the world for producing golf nutrition products that deliver performance, taste, quality and trust.')}</Typography>
                
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('INVESTMENT')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('We have been investing heavily across many areas of our business. Both innovation and technology are at the forefront of developing new products and flavours.')}</Typography>
                
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('THE FUTURE')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('“Innovation and creativity are in our DNA and is at the core of everything we do at SSP.” Kevin Stack, Managing Director, SSP Golf')}</Typography>
 
                <Typography sx={{my: 1}} variant='subtitle1'>{t('THE AVERAGE GOLFER BURNS 1200 CALORIES CARRYING THEIR CLUBS OVER 18 HOLES')}</Typography>

                <Link to='/nutritiontips' style={{ textDecoration: 'none', color: 'black' }}><Typography variant='h5'>{t('CHECK OUT OUR HOW TO EAT FOR GOLF PAGES')}</Typography></Link>
 
                
            </Paper>
            <Paper elevation={1} sx={{ my: 1, p:5}}>
                <Typography sx={{ typography: { lg: 'h2', md: 'h3', sm: 'h4', xs: 'h5' }}}>{t('OUR MISSION')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('Lowering your score and providing golfers with the solution to back nine fatigue on the course will always be at the heart of SSP Golf.')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('Our mission is to remain the world leader in golf performance nutrition with a constant commitment to developing products for golfers that will enhance their performance and lower their score.')}</Typography>
                <img src={ourmission} alt='our mission' style={{ maxWidth: '100%', marginTop: 50}}/>
                <Typography sx={{my: 1, mt: 5}} variant='body1'>{t('The average 18 hole round of golf burns up to an astounding 1,200 calories. That’s over 66 calories per hole. Nutrition is often neglected on the golf course, however our products are made to tackle this very problem.')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('You make sure your clubs, balls and attire are all in prime shape before setting off for a round. So why do so many people abandon their nutrition?')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('Part of our mission is to use the very finest ingredients in all our products. We use the very best oats, chocolates and fruits sourced from all over the world. Each handmade bar is golden baked in our bakery in the UK. We pride ourselves on our great taste as well as functionality so you can enjoy your game to the max.')}</Typography>
                <Typography sx={{my: 1}} variant='h5'>{t('Tackle fatigue and maximise your potential on the course.')}</Typography>
            </Paper>
            <Paper elevation={1} sx={{ my: 1, p:5}}>
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('THE LONG AWAITED ANSWER TO GOLFER\'S BACK NINE FATIGUE')}</Typography>
                <Typography sx={{ typography: { lg: 'h1', md: 'h2', sm: 'h3', xs: 'h4' }}}>{t('HOW DO OUR PRODUCTS WORK?')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('Echoing an increasing demand from PGA Tour professionals for performance nutrition, SSP Golf Performance Bars bring tour quality performance nutrition direct to your game.')}</Typography>
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('MULTI-STAGE FORMULA')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('Our multistage formula of simple and complex carbohydrates fuels your body and mind with both immediate and long term energy. Drip feeding you for around two hours. Ideal for combating back nine fatigue and your overall performance levels on the course.')}</Typography>
                <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Paper elevation={1} sx={{ my: 1, p:5}}>
                        <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('Fuel Your Body With Performance Nutrition')}</Typography>
                        <Typography sx={{my: 1}} variant='body1'>{t('Fuelling your body also fuels your mind and it’s your mind that makes critical decisions such as club selection, estimating distances and reading the green. A tired mind makes bad decisions.')}</Typography>
                    </Paper >
                    <img src={productwork} alt='product works' style={{ maxWidth: '100%', marginTop: 50}}/>
                    </Paper>
                <Typography sx={{ my: 1, mt: 5, typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('DON\'T CRASH AND BURN')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('Too many rounds are compromised by the last few holes which can let many golfers down as fatigue and tiredness begins to kick in. With our carefully developed performance bars, you can be sure to solve this problem at its core, allowing you to finish a good round as alert and energised as you started it.')}</Typography>
                <Typography sx={{my: 1}} variant='body1'>{t('Why not check out our Golf Nutrition pages for advice on how to eat for golf.')}</Typography>
            
                <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
                    <Button sx={{ m:'auto', my: 1, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('CLICK HERE TO ORDER')}</Button>
                </Link>
            </Paper>
        </Box>
    )
}

export default AboutUs
