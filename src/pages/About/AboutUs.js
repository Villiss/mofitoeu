import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <Box textAlign={'center'} 
        sx={{
          m: 5,
          p: 5,
          mt: 10
        }}>
            <Paper>
                <Typography variant='h3'>{t('about_who')}</Typography>
                <Typography variant='body1'>{t('about_mofito')}</Typography>
            </Paper>
        </Box>
    )
}

export default AboutUs
