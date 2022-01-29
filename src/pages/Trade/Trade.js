import { Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react'
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Trade = () => {
    const { t } = useTranslation();

    return (
        <Box textAlign={'center'} 
        sx={{
          m: 'auto',
          mt: 15,
          minHeight: '100vh',
          width: {lg: '70%', md: '75%', sm: '80%', xs: '90%'}
        }}>
            <Paper elevation={1} sx={{ my: 1, p:5}}>
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('trade_8_reasons')}</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <Typography variant='body1'>{t('trade_26percent_golfers')}</Typography>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <Typography variant='body1'>{t('trade_25percent_golfers')}</Typography>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <Typography variant='body1'>{t('trade_31percent_golfers')}</Typography>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <Typography variant='body1'>{t('trade_72percent_women')}</Typography>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <Typography variant='body1'>{t('trade_18percent_golfers')}</Typography>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <Typography variant='body1'>{t('trade_88percent_golfers')}</Typography>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <Typography variant='body1'>{t('trade_45percent_golfers')}</Typography>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <Typography variant='body1'>{t('trade_79percent_golfers')}</Typography>
                    </ListItem>
                </List>
            </Paper>
            <Paper elevation={1} sx={{ my: 1, p:5}}>
                <Typography sx={{ typography: { lg: 'h3', md: 'h4', sm: 'h5', xs: 'h6' }}}>{t('FAQ')}</Typography>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>{t('trade_what_is_GPEB')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{t('trade_GPEB_is')}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                        <Typography>{t('trade_why_does')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{t('trade_this_question')}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                        <Typography>{t('trade_how_does_work')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{t('trade_as_you_consume')}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                        <Typography>{t('trade_how_do_you')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{t('trade_recommended')}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                        <Typography>{t('trade_what_about')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{t('trade_calories')}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                        <Typography>{t('trade_why_do_the_bars')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{t('trade_golfers')}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                        <Typography>{t('trade_isnt_400_much')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{t('trade_no')}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                        <Typography>{t('trade_info')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{t('trade_first_ingredient')}</Typography>
                    </AccordionDetails>
                </Accordion>
            </Paper>
            {/* <Paper elevation={1} sx={{ my: 1, p:5}}>
                Point Of Sale
            </Paper>
            <Paper elevation={1} sx={{ my: 1, p:5}}>
                Where To Find Us
            </Paper> */}
        </Box>
    )
}

export default Trade
