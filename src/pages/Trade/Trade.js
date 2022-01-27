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
                        <Typography>What is the Golf Performance Energy Bar?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            The Golf Performance Energy bar is a multi-stage performance energy bar that has been developed for the energy needs of golfers only.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                        <Typography>Why does a golfer need a specific energy bar?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            This question can take many different angles, all of which are of relevance:
                            1.The energy requirement for golf is different than other sports/activities.
                            2.The Golf Performance Energy Bars have the perfect amount of calories to give the golfer the performance energy he/she needs without having them feel hungry or full.
                            3.The bars have both simple carbohydrates and complex carbohydrates (your instant and long term energy sources), which will improve your game by giving you the right energy at the right time.
                            4.These bars are made from real food ingredients – oats, rice, wheat along with real fruit and Belgian Dark Chocolate – not powders like most energy bars.  This gives the bars a great taste which we always receive compliments on!
                            5.100% natural (no artificial colours, flavourings and preservatives)
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                        <Typography>How does the bar actually work?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            As you consume the bar the simple carbohydrates (instant energy) release into the bloodstream for the working muscles and brain, while the complex carbohydrates (long term energy) get stored and then start to slowly release after around 15-20 minutes. This gives the golfer a steady supply of the right type of energy which lasts for over nine holes. In turn, this aids in enhancing your performance while simultaneously providing you with a tasty, satisfying snack.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                        <Typography>How do you use the bar?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        It is recommended that you eat 1/3 of a bar every three holes beginning on the 10th; particularly on the Back 9 when your body has an energy level deficit. This allows the simlpe and complex carbohydrates to be fed into the body in the most efficient manner
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                        <Typography>What about bananas, healthy food bars and sports bars?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        The calories in a banana last for 2-3 holes, and the type of energy you get from a banana depends on how ripe it is.  The riper the banana the more sugar it has and the faster it releases into the bloodstream. The greener the banana the more starch it has and the slower it releases into your bloodstream.  You would need to eat between 3-4 bananas for the energy required to play 9 holes of golf.
                        A healthy food bar is just what it says it is – something that’s healthy to eat. It is not made with any thoughts to what you need to get the most out of your golf game.  Normally, these bars are low calories and do not have sufficient carbohydrates (energy) for the game of golf.
                        Sport drinks are basically sugar water with a minimal amount of electrolytes (sodium, potassium etc).  Large amounts of electrolytes are lost during intense cardiovascular activity – long distance running, biking, sprinting, etc.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                        <Typography>Why do the bars have over 400 calories?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Golfers are normally on the course for 3.5- 4 hours and during that time they will walk on average 4-5 miles, along with pushing a trolley or carrying their bags, practice swings, etc. This means that a male of average height and weight will be using between 1000-1300 calories (larger males will use more calories). Women use between 800-1000+ calories over 18 holes.
                        There are a certain amount of calories a golfer needs to re-fuel his/her system without making them feel too full or hungry. Because my background is in sports kinesiology, I calculated and developed a bar that would slowly release energy based on the above. With this bar, and when eaten a 1/3 every 3 holes, the golfer is able to satisfy those energy requirements without feeling hungry or full.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                        <Typography>Isn't 400 calories too many for the female golfer?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        NO! The reason being that even though women may weigh less than men they work just as hard over 18 holes and need to replenish their energy systems if they want to reach maximum performance.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                        <Typography>Information about ingredients and nutritional values?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        The first ingredient in our bars is oats, along with rice crisps, wheat and real fruit (Apricots, Blueberries, Cranberries, Goji berries and Raisins). For our Chocolate/Toffee Chip bar we use Belgian Dark Chocolate – known for its incredible flavour. We then bake the bars which give them a taste and texture second to none.
                        Since we are all concerned with the saturated fat content in the foods we eat, the Golf Performance Energy Bars have only 9-10% depending on which bar you eat, which runs along the same guidelines that the government recommends for health. If you’re using the golf performance bar while on the course, your body is burning the small amount of saturated fat in the form of energy from the bar! Every calorie in these bars is utilised as energy- not one calorie will be stored in your system!
                    </Typography>
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
