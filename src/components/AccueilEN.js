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
import FicheTechnique from "../media/FicheTechniqueOTG_EN.pdf"
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

export default function AccueilEN() {
    const {register, handleSubmit, control, formState: {errors}} = useForm();
    const [newsLetterCheckbox, setNewsLetterCheckbox] = useState(false)
    const handleChangeNewsletterCheckbox = (event) => {
        setNewsLetterCheckbox(event.target.checked)
    }
    const classes = useStyles()
    const history = useHistory();
    const onSubmit = (data) => console.log(data);
    console.log("Errors:", errors);

    const textFieldValidation = (textFieldValue, radioValue) => {
        if (radioValue === "Autre") {
            if (textFieldValue) {
                if (textFieldValue === "") {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        } else {
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
                                Reducing the ecological footprint of every workout
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h1'}>Off The Grid</Typography>
                            <Typography variant={'h1'}>Eco-friendly spin bikes</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'}>
                                We are a Quebec-based company entirely dedicated to offering eco-friendly training
                                equipment. Convinced that the fitness industry has a part to play in the ecological
                                transition, we have developed an innovative spinning bike that converts users’ energy
                                into electricity. Our products are proudly designed, manufactured and assembled in
                                Quebec.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'}>
                                Off The Grid is an entire community of athletes of change! We’re all about working out
                                for your well-being, for fun and for the planet.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button color={'primary'} variant={'contained'} className={classes.bigButton}
                                    onClick={() => handleScrollTo()}>
                                Subscribe to our newsletter
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
                            <Typography variant={'h1'}>Our bikes</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'}>
                                Our eco-friendly spinning bikes are among the most technologically advanced in the
                                industry. Equipped with an integrated electronic system, they transform the energy
                                generated by users into electricity. The electricity is then reinjected in real time
                                into the electrical grid, thus reducing your electricity consumption.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h5'} color={'primary'}>
                                Price : 3500 $ + tx
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Chip
                                label="Preorder now"
                                clickable
                                color={'primary'}
                                onClick={() => {history.push('/en/precommande');window.scrollTo(0, 0);}}
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'}>
                                <ul>
                                    <li>Reduces energy consumption</li>
                                    <li>Precise levels of varying intensity</li>
                                    <li>Silent mechanism and electronic resistance</li>
                                    <li>Competitive prices</li>
                                    <li>Modern and clean design</li>
                                </ul>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button color={'primary'} variant={'contained'} className={classes.bigButton}
                                    onClick={handleOpenPopup}>
                                View the technical sheet
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
                                Access to the OTG App for members
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs spacing={3} direction={'column'} alignItems={'center'}>
                        <Grid item>
                            <img className={classes.logo} src={powerhouse}/>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body2'} className={classes.textLogo}>
                                Real-time energy reduction
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs spacing={3} direction={'column'} alignItems={'center'}>
                        <Grid item>
                            <img className={classes.logo} src={speedometer}/>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body2'} className={classes.textLogo}>
                                Controllable and variable intensity levels
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs spacing={3} direction={'column'} alignItems={'center'}>
                        <Grid item>
                            <img className={classes.logo} src={databaseLogo}/>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body2'} className={classes.textLogo}>
                                Real-time usage data collection
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
                                An integrated application to track the impact of each workout
                            </Typography>
                        </Grid>
                        <Grid item container direction={'column'} className={classes.spacingApp} spacing={3}>
                            <Grid item>
                                <Typography variant={'body1'}>
                                    Our integrated application allows real-time monitoring of electricity generation and
                                    training statistics.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'body1'}>
                                    Thanks to our gamification concept, a user can also track his
                                    ranking and take on personalized challenges.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.spacingApp}>
                            <Button color={'primary'} variant={'contained'} className={classes.bigButton}
                                    onClick={handleOpenPopup2}>
                                Preview of the application
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
                        <Typography variant={'h2'} color={'secondary'}>Our solutions</Typography>
                    </Grid>
                    <Grid item container direction={'row'} spacing={6}>
                        <Grid item container direction={'column'} xs spacing={4}>
                            <Grid item>
                                <Typography variant={'h5'} color={'primary'}>Fitness centers</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'body2'} color={'secondary'}>
                                    Off The Grid is the solution for innovative gyms that stand out. Thanks to our
                                    eco-friendly spinning bikes, reduce your ecological footprint and attract a devoted
                                    and loyal community. Whatever your project, we can offer you a turnkey service that
                                    is
                                    personalized to your needs..
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'body2'} color={'secondary'}>
                                    <ul>
                                        <li>Gyms</li>
                                        <li>Schools</li>
                                        <li>Businesses</li>
                                        <li>Community centers</li>
                                        <li>Condos</li>
                                        <li>Hotels & spas</li>
                                        <li>Government</li>
                                        <li>And many more...</li>
                                    </ul>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction={'column'} xs spacing={4}>
                            <Grid item>
                                <Typography variant={'h5'} color={'primary'}>Individuals</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'body2'} color={'secondary'}>
                                    Our eco-friendly spinning bikes are available for individuals. In the comfort of
                                    your home, they will allow you to stay fit while reducing your ecological footprint!
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
                                    Learn more
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'body2'} color={'secondary'}>
                                    Become an athlete of change and join the Off The Grid movement by subscribing to our
                                    newsletter! This way, you will be the first to receive all the company's offers and
                                    news.


                                </Typography>
                            </Grid>
                            <Divider/>
                            <Grid item>
                                <Typography variant={'body2'} color={'secondary'}>
                                    You have questions or would like to collaborate with us?
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'body2'} color={'secondary'}>
                                    Send us a mail at <Link className={classes.mailLink}
                                                            href={'mailto:info@getoffthegrid.ca'}>info@getoffthegrid.ca</Link>
                                </Typography>
                            </Grid>

                        </Grid>
                        <Grid item container className={classes.boxNewsletter} xs>
                            <Grid container direction={'column'} className={classes.newsletterContent}>
                                <Grid item>
                                    <Typography variant={'h3'}>
                                        Subscribe to our newsletter
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
                                                            placeholder={'Enter your last name'}
                                                            id="outlined-required"
                                                            label="Last Name"
                                                            variant="outlined"
                                                            fullWidth
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            onBlur={field.onBlur}
                                                            error={errors.Nom}
                                                            helperText={errors.Nom ? "Required field" : ""}
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
                                                            placeholder={'Enter your first name'}
                                                            id="outlined-required"
                                                            label={'First name'}
                                                            variant="outlined"
                                                            fullWidth
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            onBlur={field.onBlur}
                                                            error={errors.Prénom}
                                                            helperText={errors.Prénom ? "Required field" : ""}
                                                        />)}
                                                    name="Prénom"
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
                                                            placeholder={'Enter your email address'}
                                                            id="outlined-required"
                                                            label="Email address"
                                                            variant="outlined"
                                                            fullWidth
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            onBlur={field.onBlur}
                                                            error={errors.Courriel}
                                                            helperText={errors.Courriel ? (errors.Courriel.type.toString() === "required" ? "Required field" : (errors.Courriel.type.toString() === "pattern" ? "Invalid format" : "")) : ""}
                                                        />)}
                                                    name="Courriel"
                                                    control={control}
                                                    rules={{
                                                        required: true,
                                                        pattern:
                                                            {
                                                                value: /^\S+@\S+$/i,
                                                                message: 'Invalid format'
                                                            }
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <FormControl component="fieldset"
                                                             error={errors.Source || errors.AutreSource}>
                                                    <FormLabel component="legend" required>Where did you first hear from
                                                        us?</FormLabel>
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
                                                                                  label="Social media"/>
                                                                <FormControlLabel className={classes.noSelect}
                                                                                  control={<Radio
                                                                                      value="BAO"
                                                                                      color={'primary'}/>}
                                                                                  value="BAO"
                                                                                  label="Personal contact"
                                                                />
                                                                <FormControlLabel className={classes.noSelect}
                                                                                  control={<Radio
                                                                                      value="NJ"
                                                                                      color={'primary'}/>}
                                                                                  value="NJ"
                                                                                  label="News"
                                                                />
                                                                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                                                    <FormControlLabel
                                                                        className={classes.noSelect}
                                                                        control={<Radio
                                                                            value={"Autre"}
                                                                            color={'primary'}/>}
                                                                        label="Other"

                                                                    />
                                                                    <Box sx={{ml: 3, width: 'fill'}}>
                                                                        <FormControlLabel
                                                                            control={<TextField color={'primary'}
                                                                                                disabled={field.value !== "Autre"}
                                                                                                placeholder='Please elaborate..'
                                                                                                error={errors.AutreSource}
                                                                                                {...register("AutreSource", {
                                                                                                    validate: {
                                                                                                        autreSelected: v => textFieldValidation(v, field.value) === true

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
                                                    <FormHelperText>{errors.Source ? "Please select at least one option" : (errors.AutreSource ? "Please tell us where you heard from us" : "")}</FormHelperText>
                                                </FormControl>
                                            </Grid>
                                            <Grid item>
                                                <Button variant={'contained'} color={'primary'}
                                                        className={classes.smallButton} type={'submit'}>
                                                    Subscribe
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
