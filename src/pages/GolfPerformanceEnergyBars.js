import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import thumbnail from '../assets/thumbnail-2.jpg'


const GolfPerformanceEnergyBars = () => {
    const { t } = useTranslation();

    return (
        <Box textAlign={'center'} 
        sx={{
          m: 5,
          p: 5,
          mt: 10
        }}>
            <Paper>
                <Typography variant='body1'>{t('gpeb_back_nine')}</Typography>

                <Typography variant='h4'>{t('gpeb_packed')}</Typography>
                <Typography variant='body1'>G{t('gpeb_are_delicious')}</Typography>
                <img src={thumbnail} alt='thumbnail' style={{width: '30%'}}/>
            </Paper>
            <Paper>
                <Typography variant='h3'>{t('gpeb_6_flavours')}</Typography>
                <Typography variant='h4'>{t('gpeb_new_chocolate_orange') + ' | ' + t('gpeb_new_apple_cinnamon') + ' | ' + t('gpeb_chocholate_toffee') + ' | ' + t('gpeb_fruit_oat') + ' | ' + t('gpeb_superberry') + ' | ' + t('gpeb_white_chocolate_strawberry')}</Typography>

                <Typography variant='body2'>{t('gpeb_why_not_check')}</Typography>

                <Typography variant='h4'>{t('gpeb_dont_forget')}</Typography>
                <Typography variant='body1'>{t('gpeb_if_you_are_looking')}</Typography>
                </Paper>
        </Box>
    )
}

export default GolfPerformanceEnergyBars
