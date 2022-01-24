import { Box, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react'

const Trade = () => {
    return (
        <Box textAlign={'center'} 
        sx={{
          m: 5,
          p: 5,
          mt: 10
        }}>
            <Paper>
                <Typography>8 REASONS TO STOCK SSP GOLF PERFORMANCE ENERGY BARS</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary="Only 26% of golfers buy snacks in the pro shop" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary="25% of golfers bring their own snacks due to an insufficient offering" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary="31% of golfers do not like eating confectionery while playing" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary="72% of women golfers will not eat confectionery while playing." />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary="18% of golfers avoid eating confectionery (diabetics or for health reasons)" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary="88% of golfers do not like eating chocolate in the summer as it melts in their bag and can soil their equipment" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary="45% Say they are looking for a healthier snack option" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CircleIcon fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary="79% Say they would eat an energy bar if it could improve their game." />
                    </ListItem>
                </List>
            </Paper>
        </Box>
    )
}

export default Trade
