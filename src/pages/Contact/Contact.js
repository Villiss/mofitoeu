import { Box, Grid, Paper, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
}

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email.').required('Required'),
    // phone: 
})

const Contact = () => {
    return (
        <Box textAlign={'center'} 
        sx={{
          m: 'auto',
          mt: 15,
          minHeight: '100vh',
          width: {lg: '70%', md: '75%', sm: '80%', xs: '90%'}
        }}>
            <Paper elevation={1} sx={{ my: 1, p: 5 }}>
                {/* <Formik
                    initialValues={{
                        ...INITIAL_FORM_STATE
                    }}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={values => {
                        console.log(values)
                    }}
                >
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography>
                                    Your Details
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    Adresa
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    Info
                                </Typography>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik> */}
            </Paper>
        </Box>
    )
}

export default Contact
