import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import chocolatetoffee from '../../assets/chocolatetoffee.JPG'

function createData(name, grams) {
  return { name, grams };
}

const ChocolateToffee = () => {
  const { t } = useTranslation();

  const rows = [
    createData(t('general_carbohydrates'), '52.8g'),
    createData(t('general_sugar'), '30.6g'),
    createData(t('general_protein'), '4.9g'),
    createData(t('general_fibre'), '3.5g'),
    createData(t('general_fats'), '19.1g'),
    createData(t('general_saturates'), '8.6g'),
    createData(t('general_salt'), '0.43g'),
  ];

  return (
    <Box textAlign={'center'} 
        sx={{
          m: 'auto',
          mt: 15,
          minHeight: '100vh',
          width: {lg: '70%', md: '75%', sm: '80%', xs: '90%'}
        }}>
        <Paper elevation={1} sx={{ my: 1, p: 5 }}>
          <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('chocolate_cinnamon_title')}</Typography>
          <Paper elevation={1} sx={{ my: 1, p: 5 }}>
            <img src={chocolatetoffee} alt='Chocolate & Toffee' style={{ maxWidth: '100%', marginTop: 50}}/>
            <Typography sx={{my: 1}} variant='body1'>{t('general_24_times_90_grams')}</Typography>
            <Typography sx={{mt: 5}} variant='h5'>{t('general_nutritional_values')}</Typography>
            <TableContainer component={Paper} elevation={1} sx={{ my: 5, p: 5 }}>
              <Table sx={{ width: '100%' }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>{t('general_per_90_grams')}</TableCell>
                    <TableCell align="left">{t('general_grams')}</TableCell>
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
            <Typography sx={{my: 1}} variant='body1'>{t('chocolate_cinnamon_ingredients')}</Typography>
            <Typography sx={{my: 1}} variant='body1'>{t('chocolate_cinnamon_allergens')}</Typography>
        
        
        </Paper>
          <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
            <Button sx={{ m:'auto', mt: 5, backgroundColor: 'rgba(0, 0, 0, 0.54)'  }} variant='contained'>{t('general_click_here_to_order')}</Button>
          </Link>
        </Paper>
      </Box>
    )
};

export default ChocolateToffee;
