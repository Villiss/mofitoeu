import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import thumbnail from '../assets/thumbnail-2.jpg'


const GolfPerformanceEnergyBars = () => {
    return (
        <Box textAlign={'center'} 
        sx={{
          m: 5,
          p: 5,
          mt: 10
        }}>
            <Paper>
                <Typography variant='body1'>Back 9 Fatigue affects 95% of golfers, so we have created a Golf Performance Energy bar will keep you energised and focused through your round so that you can perform at your best.</Typography>

                <Typography variant='h4'>PACKED WITH ENERGY</Typography>
                <Typography variant='body1'>Golf Performance Energy Bars are delicious and packed with a unique multi-stage formula of simple and complex carbohydrates. Delivering energy to your body so it can be used when you most need it.  All bars are carefully handmade with delicious combinations of oats, fruits, berries and chocolates. Each one having been developed with the demands of the golfer in mind. Meaning they slowly release energy and fuel you through the Back Nine and help to lower your score.</Typography>
                <img src={thumbnail} alt='thumbnail' style={{width: '30%'}}/>
            </Paper>
            <Paper>
                <Typography variant='h3'>6 DELICIOUS FLAVOURS</Typography>
                <Typography variant='h4'>NEW CHOCOLATE ORANGE | NEW APPLE & CINNAMON | CHOCOLATE & TOFFEE FRUIT & OAT | SUPERBERRY | WHITE CHOCOLATE & STRAWBERRY</Typography>

                <Typography variant='body2'>Why not check out our How To Eat For Golf nutrition pages www.mofito.eu/nutrition-tips</Typography>

                <Typography variant='h4'>DON'T FORGET THAT WE CAN OFFER GREAT DEALS FOR SOCIETIES AND EVENTS</Typography>
                <Typography variant='body1'>If you are looking for something different and want to make an impression on your next golf society day, event or competition then look no further than the World’s No1 Best Selling Golf Performance Energy Bar.  SSP Golf Performance Bars are the perfect accompaniment to your next event and will make a great impression at your next golf day!</Typography>
                </Paper>
        </Box>
    )
}

export default GolfPerformanceEnergyBars
