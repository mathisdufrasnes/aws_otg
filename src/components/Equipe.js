import React, {Fragment} from "react"
import background1 from "../media/backgroundTeam.jpg"
import {makeStyles} from "@material-ui/core/styles"
import {Box, Divider, Grid, Modal, Typography} from "@material-ui/core";
import img1 from '../media/Profil_Charles.jpg'
import img2 from '../media/Profil_Seb.png'
import img3 from '../media/Profil_Simon.png'
import img4 from '../media/Profil_Audrey.png'

import p1 from '../media/p1.png'
import p2 from '../media/p2.gif'
import p3 from '../media/p3.png'
import p4 from '../media/p4.png'
import p5 from '../media/p5.png'
import p6 from '../media/p6.png'

import c1 from '../media/c1.jpg'
import c2 from '../media/c2.jpg'
import c3 from '../media/c3.png'
import c4 from '../media/c4.png'

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
        borderRadius: '35px',
        background: 'rgba(252, 252, 252, 0.87)',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: '5%',
        padding: '2%'
    },
    customDiv: {
        height: '5px',
        backgroundColor: '#000000',
        width: '35%',
        borderRadius: '15px',
        marginBottom: '5%'
    },
    customDiv2: {
        height: '5px',
        backgroundColor: '#000000',
        width: '20%',
        borderRadius: '15px',
        marginBottom: '5%'
    },
    box2: {
        backgroundColor: "#ffffff",
        padding: "8% 0%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box2Content: {
        width: '50vw',
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
        padding: "6% 0% 2% 0%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box3Content: {
        width:'80%',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box4: {
        backgroundColor: "#ffffff",
        paddingTop: "8%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box4Content: {
        width:'90%',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    notBold: {
        fontFamily: 'Montserrat-SemiBold'
    },

    profileImg:{
        width:'65%',
    },
    partnerImg:{
        objectFit: 'contain',
        maxWidth:'60%',
    },
    textNom:{
        fontFamily:'Montserrat-Bold',
        fontSize:'16px',
    },
    textRole:{
        fontFamily:'Montserrat-Regular',
        fontSize:'18px',
    },
    textFormation:{
        fontFamily:'Montserrat-Regular',
        fontSize:'15px',
    },
    profileGrid:{
        display:'flex',
        justifyContent:'center',
    },
    comiteImg:{
        maxWidth:'25vh',
    }
}));

export default function Equipe() {
    const classes = useStyles()
    const [openPopup, setOpenPopup] = React.useState(false);
    const handleOpenPopup = () => setOpenPopup(true);
    const handleClosePopup = () => setOpenPopup(false);
    const profil1 = {
        prenom: 'Charles',
        nom: 'Couture-Lebrun',
        poste: 'Co-Fondateur, CEO',
        formation: 'M.Sc. Innovation - Entrepreneuriat',
        img: img1,
        linkedin: 'https://www.linkedin.com/in/charles-couture-lebrun-msc/',
    }
    const profil2 = {
        prenom: 'Sébastien',
        nom: 'Brunelle-Jestin',
        poste: 'Co-Fondateur, CTO',
        formation: 'CPI, Génie électrique',
        img: img2,
        linkedin: 'https://www.linkedin.com/in/s%C3%A9bastien-brunelle-jestin-060702158/',
    }
    const profil3 = {
        prenom: 'Simon',
        nom: 'Tousignant',
        poste: 'Responsable Logistique & Chaîne d\'approvisionnement',
        formation: 'CPI ingénieur industriel, Candidat M.Ing',
        img: img3,
        linkedin: 'https://www.linkedin.com/in/simon-tousignant-60abb595/',
    }
    const profil4 = {
        prenom: 'Audrey',
        nom: 'Freeman-Gravel',
        poste: 'Représentante Commerciale',
        formation: 'ASP Vente-conseil et Représentation',
        img: img4,
        linkedin: 'https://www.linkedin.com/in/audrey-freeman-gravel/',
    }
    const comite1 = {
        prenom: 'Nathalie',
        nom: 'Marcoux',
        poste: 'VP Finance',
        organisation: 'Capinabel Inc',
        img: c1,
    }
    const comite2 = {
        prenom: 'Robert',
        nom: 'Dutton',
        poste: 'Ancien Président & CEO',
        organisation: 'Rona',
        img: c2,
    }
    const comite3 = {
        prenom: 'François',
        nom: 'Woods',
        poste: 'VP Ventes & Marketing',
        organisation: 'Prével',
        img: c3,
    }
    const comite4 = {
        prenom: 'Jacques',
        nom: 'Godin',
        poste: 'Conseiller Manufacture',
        organisation: 'Anges Québec',
        img: c4,
    }
    const profils = [profil1, profil2, profil3, profil4]
    const partenaires=[p1,p2,p3,p4,p5,p6]
    const comiteAdviseurs = [comite1,comite2,comite3,comite4]
    return (
        <Fragment>
            <Box className={classes.box1}>
                <Grid container className={classes.box1Content} direction={'column'} spacing={8}>
                    <Grid item>
                        <Typography variant={'h1'}>
                            À propos d’Équipement
                            Off The Grid inc.
                        </Typography>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}} style={{marginLeft: '35px'}}/>
                    <Grid item>
                        <Typography variant={'h5'} className={classes.notBold}>
                            Chez Off The Grid, nous pensons que l’entraînement physique est une source d’énergie
                            inexploitée. Nous avons lancé l’entreprise avec un objectif précis: réduire l’empreinte
                            écologique de chaque entraînement! Avec cet objectif en tête, notre équipe repousse les
                            frontières de la technologie, tout en préconisant l’utilisation quotidienne d’énergies
                            renouvelables.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box2}>
                <Grid container className={classes.box2Content} direction={'column'} spacing={8}>
                    <Grid item justifyContent={'center'}>
                        <Typography variant={'h1'} align={'center'}>
                            Notre équipe
                        </Typography>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}}/>
                    <Grid item container justifyContent={'center'} spacing={8}>
                        {profils.map(profil =>
                            <Grid item container direction={'column'} xs={6} display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={1}>
                                <Grid item className={classes.profileGrid}>
                                    <img src={profil.img} className={classes.profileImg}/>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.textNom} align={'center'}>{profil.prenom} {profil.nom}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.textFormation} align={'center'}>{profil.poste}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.textFormation} align={'center'}>{profil.formation}</Typography>
                                </Grid>
                                <Grid item>
                                    <i className="fab fa-linkedin"></i>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>

                </Grid>
            </Box>
            <Box className={classes.box3}>
                <Grid container direction={'column'} spacing={8} className={classes.box3Content}>
                    <Grid item>
                        <Typography variant={'h1'}>
                            Nos partenaires
                        </Typography>
                    </Grid>
                    <Divider classes={{root: classes.customDiv2}}/>
                    <Grid item container direction={'row'}>
                        {partenaires.map(partenaire =>
                            <Grid item className={classes.profileGrid} xs>
                                <img src={partenaire} className={classes.partnerImg}/>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box4}>
                <Grid container direction={'column'} spacing={8} className={classes.box4Content}>
                    <Grid item>
                        <Typography variant={'h1'}>
                            Comité Aviseur
                        </Typography>
                    </Grid>
                    <Divider classes={{root: classes.customDiv2}}/>
                    <Grid item container className={classes.profileGrid} direction={'row'} spacing={8}>
                        {comiteAdviseurs.map(comiteAdviseur =>
                            <Grid item container className={classes.profileGrid} xs={3} direction={'column'} spacing={2}>
                                <Grid item className={classes.profileGrid}>
                                    <img src={comiteAdviseur.img} className={classes.comiteImg}/>
                                </Grid>
                                <Grid item className={classes.profileGrid}>
                                    <Typography variant={'h5'} align={'center'}>{comiteAdviseur.nom} {comiteAdviseur.prenom}</Typography>
                                </Grid>
                                <Grid item className={classes.profileGrid}>
                                    <Typography className={classes.textFormation} align={'center'}>{comiteAdviseur.poste}</Typography>
                                </Grid>
                                <Grid item className={classes.profileGrid}>
                                    <Typography className={classes.textFormation} align={'center'}>{comiteAdviseur.organisation}</Typography>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    );
}
