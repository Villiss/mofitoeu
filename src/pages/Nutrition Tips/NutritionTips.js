import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

const NutritionTips = () => {
    return (
        <Box textAlign={'center'} 
        sx={{
          m: 5,
          p: 5,
          mt: 10
        }}>
            <Paper>
                <Typography variant='h3'>GOLF NUTRITION TIPS</Typography>
                <Typography variant='body1'>This golf nutrition tips page gives you an insight into how to eat effectively for golf.</Typography>

                <Typography variant='body1'>Golf nutrition is fast becoming a recognised way of helping to lower your score. Whether you are a tour professional or a keen club player, eating correctly allows your body and mind to be well fuelled throughout your round allowing you to make better decisions with your game.</Typography>

                <Typography variant='body1'>Founder of SSP Golf, Lance Geringer B.A, a kinesiologist, personal trainer and nutrition adviser originally from Los Angles has written some tips so you can learn how to effectively keep your body fuelled and hydrated for a range of different golfing scenarios.</Typography>

            </Paper>
            <Paper sx={{display: 'flex', flexDirection: 'column'}}>
                <Button variant='contained'>UNDERSTANDING GOLF NUTRITION</Button>
                <Button variant='contained'>PLAYING 9 HOLES IN THE AFTERNOON</Button>
                <Button variant='contained'>EATING FOR 18 HOLES [MORNING]</Button>
                <Button variant='contained'>EATING FOR 18 HOLES [AFTERNOON]</Button>
                <Button variant='contained'>PLAYING 27 HOLES SOCIETY & CORPORATE DAY</Button>
                <Button variant='contained'>PLAYING 36 HOLES SOCIETY & CORPORATE DAY</Button>
            </Paper>
            <Paper>

            <Typography variant='body1'>If you’re having an hour down the driving range or playing two rounds back to back, think of your energy levels. You will not be able to perform at you best if you are tired. If you are practising then make sure you are well hydrated and energised.</Typography>

            <Typography variant='body1'>If you are having half hour down the range on your way back from work then you won’t need a golf bar. You just need some hydration and maybe some fruit. Maybe a banana or a protein shake. But if you are having a round after work then you should be thinking about fuelling your body so you still feel okay on the 18th. Take a look at some of the tips above and try and find a system that suits you. This will give you the best chance to lower your score.</Typography>

            <Typography variant='overline'>THE AVERAGE GOLFER BURNS 1,200 CALORIES CARRYING THEIR CLUBS OVER 18 HOLES</Typography>

            <Typography variant='overline'>WHY COMPROMISE WHEN IT COMES TO YOUR NUTRITION ON THE COURSE?</Typography>
            </Paper>
        </Box>
    )
}

export default NutritionTips
