import React from 'react'
import emailjs from '@emailjs/browser'
import swal from 'sweetalert'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

function Kontakt() {
    const { t } = useTranslation();

    function odoslane(){
        swal({
            title: t('confirm_amazing'),
            text: t('confirm_thank_you'),
            icon: 'success',
            button: t('confirm_back'),
        })
    }

    function neodoslane(){
        swal({
            title: t('confirm_oops'),
            text: t('confirm_something_bad'),
            icon: 'error',
            button: t('confirm_back'),
        })
    }

    function nevyplnene(){
        swal({
            title: t('confirm_oops'),
            text: t('confirm_all_fields'),
            icon: 'error',
            button: t('confirm_back'),
        })
    }

    return (
        <Box textAlign={'center'} 
        sx={{
            m: 'auto',
            mt: 15,
            minHeight: '100vh',
            width: {lg: '70%', md: '75%', sm: '80%', xs: '90%'}
        }}>
            <Paper elevation={1} sx={{ my: 1, p: { lg: 3, md: 3, sm: 2, xs: 1 } }}>
                <Paper elevation={1} sx={{ my: 1, p: 4, display: 'flex', flexDirection: 'column', width: { lg: '70%', md: '80%', sm: '90%', xs: '100%' }, m: 'auto' }}>
                    <form onSubmit={sendEmail}>
                        <Typography sx={{ typography: { lg: 'h3', md: 'h3', sm: 'h4', xs: 'h4' }}}>{t('contact_contact_us')}</Typography>
                        <Typography sx={{ typography: { lg: 'h4', md: 'h5', sm: 'h5', xs: 'h6' }}}>{t('contact_write_down')}</Typography>
                        <TextField fullWidth name='predmet' id='predmet' sx={{ m: 3, width: '80%' }} label={t('contact_subject')} variant="outlined" required />
                        <TextField fullWidth name='meno' id='meno' sx={{ m: 3, width: '80%' }} label={t('contact_name')} variant="outlined" required />
                        <TextField fullWidth name='email' id='email' sx={{ m: 3, width: '80%' }} label={t('contact_email')} variant="outlined" required />
                        <TextField fullWidth name='sprava' id='sprava' sx={{ m: 3, width: '80%' }} label={t('contact_message')} variant="outlined" required multiline />
                        <Button id='button' sx={{ my: 3, backgroundColor: 'rgba(0, 0, 0, 0.54)' }} variant="contained" type='submit'>
                            {t('contact_submit')}
                        </Button>
                    </form>
                </Paper>
            </Paper>
        </Box>
    )

    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_q6d0s3m', 'template_ql226do', e.target, 'user_7GDQxbhCqcE2KSYfTHdI1')
        .then(() => {
            odoslane()
        }, () => {
            neodoslane()
        });
        e.target.reset()
    }
}

export default Kontakt