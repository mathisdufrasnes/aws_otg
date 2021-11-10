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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        marginBottom:'5%',
    },
    box2: {
        backgroundColor: "#ffffff",
        padding: "8% 0%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box2Content: {
        width: '60vw',
        display: "flex",
        justifyContent: 'center',
    },
    textFAQ: {
        fontSize: 15,
        fontFamily: '"Montserrat-Regular"',
        textAlign: 'Left',
        lineHeight: 3,
    },
    titleFAQ: {
        fontSize: 18,
        fontFamily: '"Montserrat-Medium"',
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

export default function FAQ() {
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
                                Des réponses à vos questions
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}} style={{marginLeft: '35px'}}/>
                    <Grid item>
                        <Typography variant={'h5'} className={classes.notBold}>
                            Nous répondons à vos questions les plus fréquemment posées et nous vous présentons des
                            équivalences de consommation d'électricité avec des items de tous les jours.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box2}>
                <Grid container direction={'column'} className={classes.box2Content} spacing={8}>
                    <Grid item container direction={'row'} justifyContent={'center'}>
                        <Grid item style={{width: '50vw'}}>
                            <Typography variant={'h1'} align={'center'}>
                                Questions fréquemment posées
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}} style={{alignSelf:'center'}}/>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.titleFAQ}>Comment est-ce que le vélo fonctionne?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.textFAQ}>
                                C'est simple! Il suffit d'effectuer votre entraînement habituel sur votre vélo de
                                spinning Off The Grid, afin que l'énergie générée soit transformée en électricité. Grâce
                                à notre technologie, celle-ci est ensuite synchronisée et distribuée directement dans
                                votre réseau électrique. Notre solution est clé en main: pas besoin de batterie, ni
                                d'attestation d'Hydro-Québec. Vous devez simplement brancher le vélo dans une prise
                                murale standard (120V) et le tour est joué!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.titleFAQ}>Combien d’énergie puis-je produire avec le vélo?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.textFAQ}>
                                En moyenne, un individu produira environ 150Wh lors d'un entraînement d'une heure. Notre
                                vélo permet toutefois de générer un maximum de 250Wh d'énergie.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.titleFAQ}>Est-ce que le produit est fabriqué au Québec?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.textFAQ}>
                                Dans notre volonté d’offrir un produit responsable, nous privilégions toujours la
                                création de partenariats locaux. Notre produit a donc été conçu, fabriqué et assemblé au
                                Québec.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                    fullWidth
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.titleFAQ}>Puis-je recharger mon cellulaire avec le vélo?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.textFAQ}>
                                Oui, les prises électroniques nécessaires pour recharger vos appareils (USB Type-C,
                                Micro-USB et iPhone) sont incluses. Vous n'avez qu'à brancher votre appareil et pédaler!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.titleFAQ}>Puis-je consulter l'historique de mes entraînements?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.textFAQ}>
                                Bien sûr! Notre vélo se connecte à votre réseau et transmet vos données d'entraînement à
                                une base de données. Vous pouvez ensuite y accéder gratuitement afin d'avoir accès à vos
                                performances, la quantité d'énergie produite et des équivalents écologiques !
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Box>
            <Box className={classes.box3}>
                <Grid container direction={'column'} className={classes.box3Content}>
                    <Grid item className={classes.spacing}>
                        <Typography variant={'h1'} align={'center'} >
                            Équivalences
                        </Typography>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}}/>
                    <Grid item container direction={'row'} justifyContent={'center'} spacing={2} className={classes.spacing}>
                        <Grid item className={classes.spacing}>
                            <Typography variant={'h6'} align={'center'}>
                                Combien d'électricité je génère?
                            </Typography>
                        </Grid>
                        <Grid item className={classes.spacing}>
                            <Typography variant={'body2'} align={'center'}>
                                Ces équivalences permettent d'imager rapidement ce qu'une heure de vélo Off The Grid
                                peut alimenter en électricité, en moyenne.
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
