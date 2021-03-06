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
                                Des r??ponses ?? vos questions
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}} style={{marginLeft: '35px'}}/>
                    <Grid item>
                        <Typography variant={'h5'} className={classes.notBold}>
                            Nous r??pondons ?? vos questions les plus fr??quemment pos??es et nous vous pr??sentons des
                            ??quivalences de consommation d'??lectricit?? avec des items de tous les jours.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box2}>
                <Grid container direction={'column'} className={classes.box2Content} spacing={8}>
                    <Grid item container direction={'row'} justifyContent={'center'}>
                        <Grid item style={{width: '50vw'}}>
                            <Typography variant={'h1'} align={'center'}>
                                Questions fr??quemment pos??es
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}} style={{alignSelf:'center'}}/>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.titleFAQ}>Comment est-ce que le v??lo fonctionne?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.textFAQ}>
                                C'est simple! Il suffit d'effectuer votre entra??nement habituel sur votre v??lo de
                                spinning Off The Grid, afin que l'??nergie g??n??r??e soit transform??e en ??lectricit??. Gr??ce
                                ?? notre technologie, celle-ci est ensuite synchronis??e et distribu??e directement dans
                                votre r??seau ??lectrique. Notre solution est cl?? en main: pas besoin de batterie, ni
                                d'attestation d'Hydro-Qu??bec. Vous devez simplement brancher le v??lo dans une prise
                                murale standard (120V) et le tour est jou??!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.titleFAQ}>Combien d?????nergie puis-je produire avec le v??lo?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.textFAQ}>
                                En moyenne, un individu produira environ 150Wh lors d'un entra??nement d'une heure. Notre
                                v??lo permet toutefois de g??n??rer un maximum de 250Wh d'??nergie.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.titleFAQ}>Est-ce que le produit est fabriqu?? au Qu??bec?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.textFAQ}>
                                Dans notre volont?? d???offrir un produit responsable, nous privil??gions toujours la
                                cr??ation de partenariats locaux. Notre produit a donc ??t?? con??u, fabriqu?? et assembl?? au
                                Qu??bec.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                    fullWidth
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.titleFAQ}>Puis-je recharger mon cellulaire avec le v??lo?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.textFAQ}>
                                Oui, les prises ??lectroniques n??cessaires pour recharger vos appareils (USB Type-C,
                                Micro-USB et iPhone) sont incluses. Vous n'avez qu'?? brancher votre appareil et p??daler!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.titleFAQ}>Puis-je consulter l'historique de mes entra??nements?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.textFAQ}>
                                Bien s??r! Notre v??lo se connecte ?? votre r??seau et transmet vos donn??es d'entra??nement ??
                                une base de donn??es. Vous pouvez ensuite y acc??der gratuitement afin d'avoir acc??s ?? vos
                                performances, la quantit?? d'??nergie produite et des ??quivalents ??cologiques !
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Box>
            <Box className={classes.box3}>
                <Grid container direction={'column'} className={classes.box3Content}>
                    <Grid item className={classes.spacing}>
                        <Typography variant={'h1'} align={'center'} >
                            ??quivalences
                        </Typography>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}}/>
                    <Grid item container direction={'row'} justifyContent={'center'} spacing={2} className={classes.spacing}>
                        <Grid item className={classes.spacing}>
                            <Typography variant={'h6'} align={'center'}>
                                Combien d'??lectricit?? je g??n??re?
                            </Typography>
                        </Grid>
                        <Grid item className={classes.spacing}>
                            <Typography variant={'body2'} align={'center'}>
                                Ces ??quivalences permettent d'imager rapidement ce qu'une heure de v??lo Off The Grid
                                peut alimenter en ??lectricit??, en moyenne.
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
