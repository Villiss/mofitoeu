import { Box, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react'
import { useTranslation } from 'react-i18next';

const Trade = () => {
    const { t } = useTranslation();

    return (
        <Box textAlign={'center'} 
        sx={{
          m: 5,
          p: 5,
          mt: 10
        }}>
            <Paper>
                <Typography variant='h3'>{t('trade_8_reasons')}</Typography>
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
        </Box>
    )
}

export default Trade
