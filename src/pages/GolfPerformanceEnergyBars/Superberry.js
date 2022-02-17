import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import superberry from '../../assets/superberry.JPG'

function createData(name, grams) {
  return { name, grams };
}

const rows = [
  createData('Carbohydrates', '54g'),
  createData('of which sugar', '29.5g'),
  createData('Protein', '4.8g'),
  createData('Fibre', '3.8g'),
  createData('Total Fats', '17.4g'),
  createData('of which staurates', '7.4g'),
  createData('Salt', '0.45g'),
];


const Superberry = () => {
  const { t } = useTranslation();

  return (
    <Box textAlign={'center'} 
        sx={{
          m: 'auto',
          mt: 15,
          minHeight: '100vh',
          width: {lg: '70%', md: '75%', sm: '80%', xs: '90%'}
        }}>
        <Paper elevation={1} sx={{ my: 1, p: 5 }}>
          <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('superberry_title')}</Typography>
          <Paper elevation={1} sx={{ my: 1, p: 5 }}>
            <img src={superberry} alt='Fruit & Oat' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{my: 1}} variant='body1'>{t('general_24_times_90_grams')}</Typography>
            <Typography sx={{mt: 5}} variant='h5'>{t('general_nutritional_values')}</Typography>
            <TableContainer component={Paper} elevation={1} sx={{ my: 5, p: 5 }}>
              <Table sx={{ width: '100%' }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Per 90g Bar</TableCell>
                    <TableCell align="left">Grams</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.grams}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography sx={{my: 1}} variant='h5'>{t('general_features')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('superberry_ingredients')}</Typography>
        
        
        </Paper>
          <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
            <Button sx={{ m:'auto', mt: 5, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('general_click_here_to_order')}</Button>
          </Link>
        </Paper>
      </Box>
    )
};

export default Superberry;
