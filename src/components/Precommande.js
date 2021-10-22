import React, {Fragment} from "react"
import background1 from "../media/backgroundPreorder.jpg"
import bikeImg from "../media/OTG-14-1-e1628705408390.png"

import {makeStyles} from "@material-ui/core/styles"
import {Box, Divider, Grid, Modal, Typography} from "@material-ui/core";
import HubspotForm from 'react-hubspot-form'

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
        background: 'rgba(252, 252, 252, 0.90)',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    customDiv: {
        height: '5px',
        backgroundColor: '#000000',
        width: '25%',
        borderRadius: '15px',
    },
    box2: {
        minHeight: "100vh",
        backgroundColor: "#242424",
        padding: "5%"
    },
    boxForm: {
        backgroundColor: '#f2f2f2',
        borderRadius: '35px',
        marginLeft: '3%',
        padding:'4%'
    },
    formPadding:{
        padding:'8% 10% 0% 8%'
    },
    bikeImg:{
        width:'30vw',
        height:'auto',
        "&:hover":{
            cursor:'zoom-in'
        }
    },
    bikeImg2:{
        width:'auto',
        height:'95vh'
    },
    modalBox:{
        height:'100vh',
        backgroundColor: "#333333",
        width:'85vh',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0%)',
        outline:'none',
        boxShadow: '0 0 30px rgb(0,0,0,0.5)'
    }
}));

export default function Precommande() {
    const classes = useStyles()
    const [openPopup, setOpenPopup] = React.useState(false);
    const handleOpenPopup = () => setOpenPopup(true);
    const handleClosePopup = () => setOpenPopup(false);

    return (
        <Fragment>
            <Box className={classes.box1}>
                <Grid container className={classes.box1Content} direction={'column'} spacing={8}>
                    <Grid item>
                        <Typography variant={'h1'}>
                            Précommande
                        </Typography>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}}/>
                    <Grid item>
                        <Typography variant={'h4'} color={'primary'}>
                            N'attendez pas
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant={'h6'} align={'center'}>
                            Précommandez nos vélos de spinning dès aujourd'hui et soyez parmi les
                            premiers à les recevoir.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box2}>
                <Grid container direction={'row'}>
                    <Grid item container direction={'column'} xs spacing={8}>
                        <Grid item>
                            <Typography variant={'h3'} color={'secondary'}>Contactez-nous pour réserver le
                                vôtre</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body2'} color={'secondary'}>Afin de précommander un vélo de spinning
                                Off The Grid, remplissez le formulaire de requête en nous indiquant le nombre de vélos
                                souhaités. Un membre de notre équipe se fera un plaisir de répondre à votre requête par
                                la suite!</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h5'} color={'primary'}>Prix : 3 000 $ + tx</Typography>
                        </Grid>
                        <Grid item>
                            <img src={bikeImg} className={classes.bikeImg} onClick={handleOpenPopup}/>
                            <Modal
                                open={openPopup}
                                onClose={handleClosePopup}
                            >
                                <Box className={classes.modalBox}>
                                <img src={bikeImg} className={classes.bikeImg2}/>
                                </Box>
                            </Modal>
                        </Grid>
                    </Grid>
                    <Grid item container xs className={classes.boxForm} direction={'column'}>
                        <Grid item>
                            <Typography variant={'h4'}>Formulaire de requête : Précommande</Typography>
                        </Grid>
                        <Grid item className={classes.formPadding}>
                            <HubspotForm
                                portalId='8730883'
                                formId='c08bdc59-8939-4a1e-af3b-d9699c395c4b'
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>Chargement du formulaire</div>}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    );
}