import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

const NutritionTips = () => {
    const { t } = useTranslation();

    return (
        <Box textAlign={'center'} 
        sx={{
          m: 5,
          p: 5,
          mt: 10
        }}>
            <Paper>
                <Typography variant='h3'>{t('nt_golf_nt')}</Typography>
                <Typography variant='body1'>{t('nt_this_page')}</Typography>

                <Typography variant='body1'>{t('nt_nutrition')}</Typography>

                <Typography variant='body1'>{t('nt_founder')}</Typography>

            </Paper>
            <Paper sx={{display: 'flex', flexDirection: 'column'}}>
                <Button sx={{ m:'auto', my: 1, width: '50%',  }} variant='contained'>{t('nt_understanding')}</Button>
                <Button sx={{ m:'auto', my: 1, width: '50%',  }} variant='contained'>{t('nt_nine_afternoon')}</Button>
                <Button sx={{ m:'auto', my: 1, width: '50%',  }} variant='contained'>{t('nt_eighteen_morning')}</Button>
                <Button sx={{ m:'auto', my: 1, width: '50%',  }} variant='contained'>{t('nt_eighteen_afternoon')}</Button>
                <Button sx={{ m:'auto', my: 1, width: '50%',  }} variant='contained'>{t('nt_27_corporate')}</Button>
                <Button sx={{ m:'auto', my: 1, width: '50%',  }} variant='contained'>{t('nt_36_corporate')}</Button>
            </Paper>
            <Paper sx={{ display: 'flex', flexDirection: 'column'}}>

            <Typography variant='body1'>{t('nt_hour_down')}</Typography>

            <Typography variant='body1'>{t('nt_half_hour')}</Typography>

            <Typography variant='overline'>{t('nt_average_golfer')}</Typography>

            <Typography variant='overline'>{t('nt_why_compromise')}</Typography>
            </Paper>
        </Box>
    )
}

export default NutritionTips
