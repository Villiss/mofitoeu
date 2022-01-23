import { Paper, Box, Typography, Link } from '@mui/material';
import React from 'react'
import thumbnail from '../assets/thumbnail-1.jpg'

export default function Home () {
    return (
      <Box textAlign={'center'} 
            sx={{
              m: 5,
              p: 5,
              mt: 10
            }}>
          <Paper elevation={1} sx={{p:5}}>
            <Typography variant='h2'>THE HOME OF SSP GOLF ENERGY BARS</Typography>
            <Typography variant='body1'>Echoing an increasing demand from PGA Tour professionals for performance nutrition, SSP Golf brings Tour Quality Performance Nutrition direct TO YOU.</Typography>
            <img src={thumbnail} alt='thumbnail' style={{width: '50%'}}/>
          </Paper>
          <Paper elevation={1} sx={{ m: 1, p: 1 }}>
            <Typography variant='h4'>UNIQUE FORMULA</Typography>
            <Typography variant='body1'>Our unique multistage formula of simple and complex carbohydrates fuels your body and mind with both immediate and long term energy.  This multistage formula will help drip feed you around the back nine.</Typography>
          </Paper>
          <Paper elevation={1} sx={{ m: 1, p: 1 }}>
            <Typography variant='h5'>WORLD'S FIRST</Typography>
            <Typography variant='body1'>A world first, the innovative, Golf Energy Bar has been scientifically developed to combat fatigue on the back nine, optimise performance and improve the focus of professional and amateur golfers alike, across all areas of their game.</Typography>
          </Paper>
          <Paper elevation={1} sx={{ m: 1, p: 1 }}>
            <Typography variant='h5'>TASTY</Typography>
            <Typography variant='body1'>Delicious and packed with a unique blend of simple and complex carbohydrates. The Golf Energy Bar range has been developed with the demands of everyday golfers in mind.</Typography>
          </Paper>
          <Paper elevation={1} sx={{ m: 1, p: 1 }}>
            <Typography variant='h5'>LONG & SHORT TERM ENERGY</Typography>
            <Typography variant='body1'>Whereas the positive benefits of sports nutrition have been appreciated across a huge range of other sports, golf has been almost completely overlooked, until now. Our Golf Energy Bar seeks to address this imbalance by providing golfers with a simple, chemical-free way of drip feeding energy to their bodies and minds over the course of a round.</Typography>
          </Paper>
          <Paper elevation={1} sx={{ m: 1, p: 1 }}>
            <Typography variant='h5'>USED BY PRO'S</Typography>
            <Typography variant='body1'>The technology and theory behind our Performance Bars meanwhile, has been used by professional athletes for over ten years. Today, however, it has been skilfully adapted by SSP’s own sports nutrition expert, Lance Geringer B.A.</Typography>
          </Paper>
          <Paper elevation={1} sx={{ m: 1, p: 1 }}>
            <Typography variant='h5'>FUEL YOUR BODY AND MIND</Typography>
            <Typography variant='body1'>Fuelling your body also fuels your mind and it’s your mind that makes critical decisions.  Club selection, estimating distances and reading the green all need focus. A tired mind can make bad decisions.</Typography>
          </Paper>
        <Paper elevation={1} sx={{m:1}}>
          <Typography variant='h4'>ITS ALL ABOUT THE INGREDIENTS</Typography>

          <Typography variant='h5'>OATS</Typography>
          <Typography variant='body1'>Oats are among one of the healthiest grains on earth.
          They’re a gluten free whole grain and a great source of important vitamins, minerals, fibre and antioxidants.</Typography>

          <Typography variant='h5'>FRUITS</Typography>
          <Typography variant='body1'>The nutrients in fruit are vital for health and maintenance of your body and our golf energy bars use a selection of tasty real fruits.</Typography>

          <Typography variant='h5'>BERRIES</Typography>
          <Typography variant='body1'>When it comes to health, berries
          have a fabulous reputation and are packed with antioxidants</Typography>

          <Typography variant='h5'>CHOCOLATE</Typography>
          <Typography variant='body1'>Dark chocolate is made from the seed of the cocoa tree and has been enjoyed for thousands of years</Typography>
        </Paper>
        <Paper elevation={1} sx={{m:1}}>
          <Typography variant='h4'>CHECK OUT OUR HOW TO EAT FOR GOLF PAGES AT</Typography>
          <Typography variant='body1'>
            <Link href='www.mofito.eu/nutrition-tips' underline="hover">www.mofito.eu/nutrition-tips</Link>
          </Typography>

          <Typography variant='body1'>PGA GOLF</Typography>

          <Typography variant='body1'>PROFESSIONAL</Typography>

          <Typography variant='body1'>DISCOUNTS AVALAIBLE</Typography>
        </Paper>
        {/* </Box> */}
      </Box>
      );
    };

