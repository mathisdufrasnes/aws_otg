import React, {Fragment, useState} from "react"

import {makeStyles, ThemeProvider, createTheme} from "@material-ui/core/styles"
import {
    Box,
    Checkbox,
    Chip, CircularProgress,
    Divider,
    FormControl, FormControlLabel,
    FormGroup, FormHelperText,
    FormLabel,
    Grid, InputLabel,
    Link, Modal,
    Paper, Radio, RadioGroup,
    TextField
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ReactPlayer from 'react-player'
import {useHistory} from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import backgroundImg from "../media/background2.jpg"
import bikePhoto from "../media/OTG-14.2-2048x1256.png"
import solarImpulse from "../media/SiF_LABEL_LOGO_INSTITUTIONAL_2020_RVB-e1630420835909.png"
import phoneLogo from "../media/smartphone-call.png"
import powerhouse from "../media/eco-house.png"
import speedometer from "../media/speedometer.png"
import databaseLogo from "../media/database.png"
import backgroundImg2 from "../media/Accueil_app_integre-2.png"
import backgroundImg3 from "../media/PEWlDq.jpg"
import phone1 from "../media/phone1.png"
import phone2 from "../media/phone2.png"
import phone3 from "../media/phone3.png"
import phone4 from "../media/phone4.png"
import FicheTechnique from "../media/FicheTechniqueOTG.pdf"
import {Document, Page, pdfjs} from "react-pdf";
import {Carousel} from "react-responsive-carousel";
import {Element, animateScroll as scroll, scroller} from 'react-scroll'
import {useForm, Controller} from "react-hook-form";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const useStyles = makeStyles((theme) => ({
    root:
        {
            flexGrow: 1
        },
    box1:
        {
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            minHeight: "100vh",
            boxShadow: 'inset 0 0 0 1000px rgba(256,256,256,.4)'
        },
    box2:
        {
            backgroundColor: '#242424',
            minHeight: "62vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
        },
    box3:
        {
            backgroundColor: '#f2f2f2',
            minHeight: "100vh",
            padding: "7% 10% 7% 5%",
        },
    box4:
        {
            backgroundColor: '#f2f2f2',
            minHeight: "30vh",
            padding: "0% 5% 5% 5%",
        },
    box5:
        {
            minHeight: "92vh",
            boxShadow: 'inset 0 0 0 1000px rgba(256,256,256,.4)',
            paddingLeft: "5%",
        },
    box6:
        {
            backgroundImage: `url(${backgroundImg3})`,
            backgroundSize: "cover",
            minHeight: "100vh",
            boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.4)',
            padding: "7% 5% 7% 5%"
        },
    box7:
        {
            minHeight: "90vh",
            backgroundColor: "#242424",
            padding: "3.5% 5% 3.5% 5%"
        },

    boxNewsletter:
        {
            backgroundColor: 'white',
            borderRadius: '35px',
            marginLeft: '3%',
        },
    newsletterContent:
        {
            padding: '8%',
        },
    newsletterForm:
        {
            padding: '8%',
        },
    offset: {
        paddingTop: "75px",
    },
    noSelect: {
        userSelect: 'none',
        msUserSelect: 'none',
    },
    boxContent:
        {
            padding: "5% 5% 10% 5%"
        },
    boxContentApplication:
        {
            paddingTop: "7%",
        },
    bigButton: {

        padding: '17px 41px',
        borderRadius: '1',
    },
    smallButton: {
        fontFamily: 'Montserrat-Bold',
        padding: '2% 4%',
        borderRadius: '15px',
        fontSize: '23px'
    },
    mailLink: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: "bold",
        color: "#337ab7",
        fontSize: "20px",
        "&:hover": {
            cursor: 'pointer',
            textDecoration: 'none',
        },
        "&:visited": {
            cursor: 'pointer',
            textDecoration: 'none',
        },
        "&:active": {
            cursor: 'pointer',
            color: '#598AB7'
        }
    },

    textLogo: {
        width: '15vw',
        textAlign: 'center',
    },
    img: {
        width: '100%',
    },
    logo: {
        maxWidth: '80px',
    },
    appImg: {
        height: '100%',
        width: 'auto',
    },
    spacingApp: {
        paddingBottom: '10%',
        paddingTop: '10%'
    },
    popupBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#f2f2f2',
        border: '2px solid #000',
        boxShadow: 24,
        height: '90vh',
        width: '50vh',
    },
    imgPopup2: {
        height: '90vh',
        width: 'auto'
    },
    popupPDF: {
        backgroundColor: '#f2f2f2',
        border: '2px solid #000',
        boxShadow: 24,
        width: 'auto',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0%)',
    },
    documentPDF: {
        width: '60vw',
        height: 'auto',
    },
    modalScrollable: {
        overflowY: 'scroll',
        maxHeight: '100vh'
    }

}));

export default function Accueil() {
    const {register, handleSubmit, control, formState: {errors}} = useForm();
    const [newsLetterCheckbox, setNewsLetterCheckbox] = useState(false)
    const handleChangeNewsletterCheckbox = (event) => {
        setNewsLetterCheckbox(event.target.checked)
    }
    const classes = useStyles()
    const history = useHistory();
    const onSubmit = (data) => console.log(data);
    console.log("Errors:", errors);

    const textFieldValidation = (textFieldValue, radioValue) =>
    {
        if(radioValue==="Autre")
        {
            if(textFieldValue)
            {
                if(textFieldValue==="")
                {
                    return false;
                }
                else{
                    return true;
                }
            }
            else {
                return false;
            }
        }
        else
        {
            return true
        }
    }

    const [openPopup, setOpenPopup] = React.useState(false);
    const handleOpenPopup = () => setOpenPopup(true);
    const handleClosePopup = () => setOpenPopup(false);

    const handleScrollTo = () => {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -30,
        })
    }
    const [openPopup2, setOpenPopup2] = React.useState(false);
    const handleOpenPopup2 = () => setOpenPopup2(true);
    const handleClosePopup2 = () => setOpenPopup2(false);

    const popupItems2 = [
        phone1, phone2, phone3, phone4
    ]
    return (
        <div>
            <Box className={classes.box1}>
                <Grid container className={classes.offset}>
                    <Grid container direction="column" spacing={3} className={classes.boxContent}>
                        <Grid item>
                            <Typography variant={'h5'} color={'primary'}>
                                R??duire l???empreinte ??cologique de chaque entra??nement
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h1'}>Les v??los de spinning</Typography>
                            <Typography variant={'h1'}>Off The Grid</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'}>
                                Nous sommes une entreprise qu??b??coise enti??rement d??di??e ?? offrir des ??quipements
                                d???entra??nement ??coresponsables. Convaincus que l???industrie du fitness a une part ?? jouer
                                dans la transition ??cologique, nous avons d??velopp?? un v??lo de spinning innovant qui
                                convertit l?????nergie des utilisateurs en ??lectricit??. Nos produits sont fi??rement con??us,
                                fabriqu??s et assembl??s au Qu??bec.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'}>
                                Off The Grid, c'est toute une communaut?? d???athl??tes de changement!
                                Ici, on s???entra??ne pour son bien-??tre, pour le plaisir et pour la plan??te.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button color={'primary'} variant={'contained'} className={classes.bigButton}
                                    onClick={() => handleScrollTo()}>
                                Inscrivez-vous ?? notre infolettre
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box2}>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=8_sNrkvJ0-U'/>
            </Box>
            <Box className={classes.box3}>
                <Grid container direction="row">
                    <Grid item container xs spacing={3} direction={'column'}>
                        <Grid item>
                            <Typography variant={'h1'}>Nos v??los</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'}>
                                Nos v??los de spinning ??coresponsables sont parmi les
                                plus avanc??s du secteur sur le plan technologique. ??quip??s d'un syst??me ??lectronique
                                int??gr??, ils transforment l'??nergie g??n??r??e par les utilisateurs en ??lectricit??.
                                Celle-ci est ensuite r??inject??e en temps r??el dans le r??seau ??lectrique, r??duisant
                                directement la consommation d???un r??seau ??lectrique.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h5'} color={'primary'}>
                                Prix : 3500 $ + tx
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Chip
                                label="Pr??commander"
                                clickable
                                color={'primary'}
                                onClick={() => {history.push('/precommande');window.scrollTo(0, 0);}}
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'}>
                                <ul>
                                    <li>R??duit la consommation ??nerg??tique</li>
                                    <li>Niveaux pr??cis d???intensit?? variable</li>
                                    <li>M??canisme silencieux et r??sistance ??lectronique</li>
                                    <li>Prix comp??titifs</li>
                                    <li>Design moderne et ??pur??</li>
                                </ul>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button color={'primary'} variant={'contained'} className={classes.bigButton}
                                    onClick={handleOpenPopup}>
                                Consulter la fiche technique
                            </Button>
                            <Modal
                                open={openPopup}
                                onClose={handleClosePopup}
                                className={classes.modalScrollable}
                            >

                                <Box className={classes.popupPDF}>
                                    <Document
                                        file={FicheTechnique}
                                        error={'Could not load file'}
                                        loading={<CircularProgress/>}
                                    >
                                        <Page scale={1.5} pageNumber={1}/>
                                    </Document>
                                </Box>
                            </Modal>
                        </Grid>
                    </Grid>
                    <Grid item container xs spacing={3} direction={'column'} alignItems={"center"}>
                        <Grid item xs display={"flex"} justifyContent={'center'}>
                            <img xs className={classes.img} src={bikePhoto}/>
                        </Grid>
                        <Grid item xs display={"flex"} justifyContent={'center'}>
                            <img xs src={solarImpulse} width={'150px'}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box4}>
                <Grid container direction={'row'}>
                    <Grid item container xs spacing={3} direction={'column'} alignItems={'center'}>
                        <Grid item>
                            <img className={classes.logo} src={phoneLogo}/>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body2'} className={classes.textLogo}>
                                Acc??s ?? l'application OTG pour les membres
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs spacing={3} direction={'column'} alignItems={'center'}>
                        <Grid item>
                            <img className={classes.logo} src={powerhouse}/>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body2'} className={classes.textLogo}>
                                R??duction de consommation en temps r??el
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs spacing={3} direction={'column'} alignItems={'center'}>
                        <Grid item>
                            <img className={classes.logo} src={speedometer}/>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body2'} className={classes.textLogo}>
                                Niveau d'intensit?? variable tr??s pr??cis
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs spacing={3} direction={'column'} alignItems={'center'}>
                        <Grid item>
                            <img className={classes.logo} src={databaseLogo}/>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body2'} className={classes.textLogo}>
                                Collecte de donn??es d'utilisation en temps r??el
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box5} sx={{display: 'flex', flexDirection: 'row'}}>
                <Grid container direction={"row"}>
                    <Grid item container direction={'column'}
                          display={"flex"} justifyContent={"center"} xs={4} className={classes.boxContentApplication}>
                        <Grid item className={classes.spacingApp}>
                            <Typography variant={'h3'}>
                                Une application int??gr??e pour suivre l'impact de chaque entra??nement
                            </Typography>
                        </Grid>
                        <Grid item container direction={'column'} className={classes.spacingApp} spacing={3}>
                            <Grid item>
                                <Typography variant={'body1'}>
                                    Notre application int??gr??e permet un suivi en temps r??el de la production d?????lectricit??
                                    et des statistiques d???entra??nement.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'body1'}>
                                    Gr??ce ?? notre concept de gamification, l???utilisateur peut ??galement suivre son
                                    classement et relever des d??fis personnalis??s.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.spacingApp}>
                            <Button color={'primary'} variant={'contained'} className={classes.bigButton}
                                    onClick={handleOpenPopup2}>
                                Aper??u de l'application
                            </Button>
                            <Modal
                                open={openPopup2}
                                onClose={handleClosePopup2}>

                                <Box className={classes.popupBox}>
                                    <Carousel
                                        swipeable
                                        autoPlay={false}
                                        showArrows={true}
                                        showThumbs={false}
                                        infiniteLoop={true}
                                        emulateTouch={true}
                                    >
                                        <div>
                                            <img src={phone1} className={classes.imgPopup2}/>
                                        </div>
                                        <div>
                                            <img src={phone2} className={classes.imgPopup2}/>
                                        </div>
                                        <div>
                                            <img src={phone3} className={classes.imgPopup2}/>
                                        </div>
                                        <div>
                                            <img src={phone4} className={classes.imgPopup2}/>
                                        </div>
                                    </Carousel>
                                </Box>
                            </Modal>
                        </Grid>
                    </Grid>
                    <Grid item container xs={8} direction={'column'} display={"flex"} justifyContent={"flex-end"}>
                        <img item src={backgroundImg2} className={classes.appImg}/>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box6}>
                <Grid container direction={'column'}>
                    <Grid item>
                        <Typography variant={'h2'} color={'secondary'}>Nos solutions</Typography>
                    </Grid>
                    <Grid item container direction={'row'} spacing={6}>
                        <Grid item container direction={'column'} xs spacing={4}>
                            <Grid item>
                                <Typography variant={'h5'} color={'primary'}>Salles de sport</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'body2'} color={'secondary'}>
                                    Off The Grid est la solution pour les salles de sport innovantes qui souhaitent
                                    sortir du lot. Gr??ce ?? nos v??los de spinning ??coresponsables, r??duisez votre
                                    empreinte ??cologique et attirez une client??le d??vou??e et fid??le. Quel que soit votre
                                    projet, nous saurons vous offrir un service cl?? en main personnalis?? selon vos
                                    besoins.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'body2'} color={'secondary'}>
                                    <ul>
                                        <li>Gyms</li>
                                        <li>??coles</li>
                                        <li>Entreprises</li>
                                        <li>Centres communautaires</li>
                                        <li>Logements multifamiliaux</li>
                                        <li>H??tels et spas</li>
                                        <li>Gouvernement</li>
                                        <li>Et bien plus encore...</li>
                                    </ul>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction={'column'} xs spacing={4}>
                            <Grid item>
                                <Typography variant={'h5'} color={'primary'}>Particuliers</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'body2'} color={'secondary'}>
                                    Nos v??los de spinning ??coresponsables sont disponibles pour les particuliers. Dans
                                    le confort de votre maison, ils vous permettront de garder la forme tout en
                                    r??duisant votre empreinte ??cologique!
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Element name="scroll-to-element">
                <Box className={classes.box7} display={'flex'}>
                    <Grid container direction={'row'}>
                        <Grid item container direction={'column'} xs spacing={4}>
                            <Grid item>
                                <Typography variant={'h3'} color={'secondary'}>
                                    En apprendre plus
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'body2'} color={'secondary'}>
                                    Devenez un athl??te de changement et rejoignez le mouvement Off The Grid en vous
                                    inscrivant ?? notre infolettre! De cette fa??on, vous recevrez toutes les offres et
                                    nouveaut??s de l???entreprise en primeur.
                                </Typography>
                            </Grid>
                            <Divider/>
                            <Grid item>
                                <Typography variant={'body2'} color={'secondary'}>
                                    Vous avez des questions ou vous aimeriez collaborer avec nous?
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'body2'} color={'secondary'}>
                                    ??crivez-nous ?? <Link className={classes.mailLink}
                                                         href={'mailto:info@getoffthegrid.ca'}>info@getoffthegrid.ca</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.boxNewsletter} xs>
                            <Grid container direction={'column'} className={classes.newsletterContent}>
                                <Grid item>
                                    <Typography variant={'h3'}>
                                        Inscrivez-vous ?? notre infolettre
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <form className={classes.root} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                                        <Grid container direction={'column'} className={classes.newsletterForm}
                                              spacing={5}>
                                            <Grid item>
                                                <Controller
                                                    render={({field}) => (
                                                        <TextField
                                                            placeholder={'Entrez votre nom de famille'}
                                                            id="outlined-required"
                                                            label="Nom"
                                                            variant="outlined"
                                                            fullWidth
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            onBlur={field.onBlur}
                                                            error={errors.Nom}
                                                            helperText={errors.Nom ? "Champ requis" : ""}
                                                        />)}
                                                    name="Nom"
                                                    control={control}
                                                    rules={{
                                                        required: true
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Controller
                                                    render={({field}) => (
                                                        <TextField
                                                            placeholder={'Entrez votre pr??nom'}
                                                            id="outlined-required"
                                                            label="Pr??nom"
                                                            variant="outlined"
                                                            fullWidth
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            onBlur={field.onBlur}
                                                            error={errors.Pr??nom}
                                                            helperText={errors.Pr??nom ? "Champ requis" : ""}
                                                        />)}
                                                    name="Pr??nom"
                                                    control={control}
                                                    rules={{
                                                        required: true
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Controller
                                                    render={({field}) => (
                                                        <TextField
                                                            placeholder={'Entrez votre adresse courriel'}
                                                            id="outlined-required"
                                                            label="Adresse courriel"
                                                            variant="outlined"
                                                            fullWidth
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            onBlur={field.onBlur}
                                                            error={errors.Courriel}
                                                            helperText={errors.Courriel ? (errors.Courriel.type.toString() === "required" ? "Champ requis" : (errors.Courriel.type.toString() === "pattern" ? "Format invalide" : "")) : ""}
                                                        />)}
                                                    name="Courriel"
                                                    control={control}
                                                    rules={{
                                                        required: true,
                                                        pattern:
                                                            {
                                                                value: /^\S+@\S+$/i,
                                                                message: 'Format incorrect'
                                                            }
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <FormControl component="fieldset" error={errors.Source || errors.AutreSource}>
                                                    <FormLabel component="legend" required>O?? avez-vous entendu parler
                                                        de nous?</FormLabel>
                                                    <Controller
                                                        render={({field}) => (
                                                            <RadioGroup
                                                                value={field.value}
                                                                onChange={field.onChange}
                                                                onBlur={field.onBlur}
                                                            >
                                                                <FormControlLabel className={classes.noSelect}
                                                                                  control={<Radio
                                                                                      value="RS"
                                                                                      color={'primary'}/>}
                                                                                  value="RS"
                                                                                  label="R??seaux sociaux"/>
                                                                <FormControlLabel className={classes.noSelect}
                                                                                  control={<Radio
                                                                                      value="BAO"
                                                                                      color={'primary'}/>}
                                                                                  value="BAO"
                                                                                  label="Bouche ?? oreille"
                                                                                  />
                                                                <FormControlLabel className={classes.noSelect}
                                                                                  control={<Radio
                                                                                      value="NJ"
                                                                                      color={'primary'}/>}
                                                                                  value="NJ"
                                                                                  label="Nouvelles / Journaux"
                                                                                  />
                                                                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                                                    <FormControlLabel
                                                                        className={classes.noSelect}
                                                                        control={<Radio
                                                                            value={"Autre"}
                                                                            color={'primary'}/>}
                                                                        label="Autre"

                                                                    />
                                                                    <Box sx={{ml: 3, width: 'fill'}}>
                                                                        <FormControlLabel
                                                                            control={<TextField color={'primary'}
                                                                                                disabled={field.value!=="Autre"}
                                                                                                placeholder='Sp??cifiez..'
                                                                                                error={errors.AutreSource}
                                                                                                {...register("AutreSource", {
                                                                                                    validate: {
                                                                                                        autreSelected : v=> textFieldValidation(v,field.value) === true

                                                                                                    }
                                                                                                })}
                                                                            />}/>
                                                                    </Box>
                                                                </Box>
                                                            </RadioGroup>)}
                                                        name="Source"
                                                        control={control}
                                                        rules={{
                                                            required: true,
                                                        }}
                                                    />
                                                    <FormHelperText>{errors.Source ? "Veuillez selectionner au moins une option" : (errors.AutreSource ? "Veuillez sp??cifier par quel moyen vous nous connaissez" : "")}</FormHelperText>
                                                </FormControl>
                                            </Grid>
                                            <Grid item>
                                                <Button variant={'contained'} color={'primary'}
                                                        className={classes.smallButton} type={'submit'}>
                                                    S'inscrire
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Element>
        </div>
    )
}
