import React, {Fragment} from "react"
import background1 from "../media/FAQBackground.jpg"

import {makeStyles} from "@material-ui/core/styles"
import {Box, Divider, Grid, Modal, Typography} from "@material-ui/core";
import {Carousel} from "react-responsive-carousel";
import equi1 from '../media/equi1.png'
import equi2 from '../media/equi2.png'
import equi3 from '../media/equi3.png'
import equi4 from '../media/equi4.png'
import equi5 from '../media/equi5.png'

const useStyles = makeStyles((theme) => ({
    root:
        {
            flexGrow: 1
        },
    box1: {
        backgroundImage: `url(${background1})`,
        backgroundSize: 'cover',
        minHeight: "100vh",
        paddingTop: '75px',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box1Content: {
        width: '66vw',
        minHeight: '55vh',
        borderRadius: '35px',
        background: 'rgba(252, 252, 252, 0.87)',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '5%',
    },
    customDiv: {
        height: '5px',
        backgroundColor: '#000000',
        width: '35%',
        borderRadius: '15px',
        marginBottom:'5%'
    },
    box2: {
        backgroundColor: "#ffffff",
        padding: "8% 0%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box2Content: {
        width: '40vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textFAQ: {
        fontSize: 15,
        fontFamily: '"Montserrat-Regular"',
        textAlign: 'center',
        lineHeight: 3,
    },
    box3: {
        backgroundColor: "#f2f2f2",
        paddingTop: "8%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box3Content: {
        width: '50vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    notBold: {
        fontFamily: 'Montserrat-SemiBold'
    },
    carousel:{
        width:'80vh',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    spacing:{
        paddingBottom:'5%'
    }
}));

export default function FAQ_EN() {
    const classes = useStyles()
    const [openPopup, setOpenPopup] = React.useState(false);
    const handleOpenPopup = () => setOpenPopup(true);
    const handleClosePopup = () => setOpenPopup(false);

    const imgList = [equi1, equi2, equi3, equi4, equi5]
    return (
        <Fragment>
            <Box className={classes.box1}>
                <Grid container className={classes.box1Content} direction={'column'} spacing={8}>
                    <Grid item container direction={'row'}>
                        <Grid item xs={8}>
                            <Typography variant={'h1'}>
                                Answers to your questions
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}} style={{marginLeft: '35px'}}/>
                    <Grid item>
                        <Typography variant={'h5'} className={classes.notBold}>
                            We answer your most frequently asked questions and show some electricity consumption equivalencies with everyday items and actions.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box2}>
                <Grid container className={classes.box2Content} direction={'column'} spacing={8}>
                    <Grid item container direction={'row'} justifyContent={'center'}>
                        <Grid item style={{width: '50vw'}}>
                            <Typography variant={'h1'} align={'center'}>
                                Frequently Asked Questions
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}}/>
                    <Grid item container direction={'row'} justifyContent={'center'} spacing={'2'}>
                        <Grid item>
                            <Typography variant={'h6'} align={'center'}>
                                How does the bike work?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.textFAQ}>
                                It's easy! Just do your usual workout on your Off The Grid spinning bike, and the energy generated is transformed into electricity. Thanks to our technology, it is then synchronized and distributed directly into your electrical grid. Our solution is turnkey: no need for a battery or a certificate from Hydro-Québec. Simply plug the bike into a standard wall outlet (120V) and you're good to go!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={'row'} justifyContent={'center'} spacing={'2'}>
                        <Grid item>
                            <Typography variant={'h6'} align={'center'}>
                                How much energy can I generate on a bike?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.textFAQ}>
                                On average, an individual will produce about 150Wh during a one-hour workout. However, our bike can generate a maximum of 250Wh of energy.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={'row'} justifyContent={'center'} spacing={'2'}>
                        <Grid item>
                            <Typography variant={'h6'} align={'center'}>
                                Are your products made in Québec?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.textFAQ}>
                                In our desire to offer the most eco-friendly product possible, we always prioritize local partnerships. Our product was designed, manufactured and assembled in Quebec with mechanical, electrical and computing partners from our home province!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={'row'} justifyContent={'center'} spacing={'2'}>
                        <Grid item>
                            <Typography variant={'h6'} align={'center'}>
                                Can I charge my cellphone while working out?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.textFAQ}>
                                Yes, the basic charging cables (USB Type-C, Micro-USB and iPhone) are included. Just plug in your device and pedal!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={'row'} justifyContent={'center'} spacing={'2'}>
                        <Grid item>
                            <Typography variant={'h6'} align={'center'}>
                                Can I see my training history?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.textFAQ}>
                                Of course! Our bike connects to your wireless Internet network and transmits your training data to a database. You can then access it for free to see your performance, the amount of energy produced and ecological equivalents in real-time!
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box3}>
                <Grid container direction={'column'} className={classes.box3Content}>
                    <Grid item className={classes.spacing}>
                        <Typography variant={'h1'} align={'center'} >
                            Equivalencies
                        </Typography>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}}/>
                    <Grid item container direction={'row'} justifyContent={'center'} spacing={2} className={classes.spacing}>
                        <Grid item className={classes.spacing}>
                            <Typography variant={'h6'} align={'center'}>
                                How much electricity am I generating?
                            </Typography>
                        </Grid>
                        <Grid item className={classes.spacing}>
                            <Typography variant={'body2'} align={'center'}>
                                These equivalencies give a quick picture of what an hour of cycling on the Off The Grid bike can supply in electricity, on average.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.carousel}>
                        <Carousel
                            swipeable
                            autoPlay
                            showArrows
                            showThumbs
                            infiniteLoop
                            emulateTouch
                            interval={3000}
                        >
                            {imgList.map(imgInList =>
                                <div>
                                    <img src={imgInList}/>
                                </div>
                            )}
                        </Carousel>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    );
}