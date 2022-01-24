import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const AboutUs = () => {
    return (
        <Box textAlign={'center'} 
        sx={{
          m: 5,
          p: 5,
          mt: 10
        }}>
            <Paper>
                <Typography variant='h3'>WHO IS MOFITO?</Typography>
                <Typography variant='body1'>Mofito (owned by TWU s.r.o.) is an exclusive distributor of SSP Golf Performance Energy Bars in countries such as Slovakia, Czech Republic, Austria, Poland, Hungary, Croatia and Slovenia.</Typography>
            </Paper>
        </Box>
    )
}

export default AboutUs
