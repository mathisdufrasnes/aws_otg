import React, {Fragment} from "react"

import {makeStyles} from "@material-ui/core/styles"
import {Box, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useHistory, useParams} from "react-router-dom";
import imgActu1 from "../media/actu1.png";
import imgActu4 from "../media/actu4.jpg";
import imgActu5 from "../media/actu5.png";
import imgActu6 from "../media/actu6.png";
import imgActu7 from "../media/actu7.png";


const useStyles = makeStyles((theme) => ({
    root:
        {
            flexGrow: 1
        },
    box1: {
        backgroundColor: "#ffffff",
        paddingTop: "75px",
        minHeight: '100vh',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box1Content: {
        width: '80vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default function ZoomActu() {
    const actu1 = {
        idN: 1,
        titre: 'Startupfest 2019 – PME Montréal',
        img: imgActu1,
        auteur: 'Charles',
        date: 'juillet 12, 2019',
        preview: 'Startupfest 2019 – PME Montréal   Off The Grid remporte une bourse de 1000$ lors d’un concours de pitch pour Startupfest 2019.',
        type: 'Actualité',
        nbComments: '0'
    }
    const actu2 = {
        idN: 2,
        titre: 'Notre Équipe',
        img: '',
        auteur: 'Charles',
        date: 'septembre 4, 2019',
        preview: 'À propos d’Équipement Off The Grid inc. Chez Off The Grid, nous pensons que l’entraînement physique est une source d’énergie inexploitée. Nous avons lancé l’entreprise avec un objectif précis: réduire l’empreinte écologique de chaque entraînement! Avec cet objectif en tête, notre équipe repousse les frontières....',
        type: 'Rubrique',
        nbComments: ''
    }
    const actu3 = {
        idN: 3,
        titre: 'Accueil',
        img: '',
        auteur: 'Charles',
        date: 'septembre 26, 2019',
        preview: 'Réduire l’empreinte écologique de chaque entraînement Les vélos de spinning Off The Grid Nous sommes une entreprise québécoise entièrement dédiée à offrir des équipements d’entraînement écoresponsables. Convaincus que l’industrie du fitness a une part à jouer dans la transition écologique, nous avons développé un vélo...',
        type: 'Rubrique',
        nbComments: ''
    }
    const actu4 = {
        idN: 4,
        titre: 'Bourse d\'entepreunariat - HEC',
        img: imgActu4,
        auteur: 'Charles',
        date: 'décembre 15, 2019',
        preview: 'Bourse d’entrepreneuriat – HEC Montréal   À l’hiver 2019, l’équipe d’Off The Grid remporte une bourse d’entrepreneuriat de 10 000$ Bourse d’entrepreneuriat – 10 000$ Date: Hiver 2019  ',
        type: 'Actualité',
        nbComments: '0'
    }
    const actu5 = {
        idN: 5,
        titre: 'Embauche des deux premiers employés',
        img: imgActu5,
        auteur: 'Charles',
        date: 'août 30, 2020',
        preview: 'Embauche des deux premiers employés d’Off The Grid Nouvelle OTG Off The Grid embauche ses deux premiers employés, Véronique St-Louis et Kevin Donnithorne. Les deux employés portent le titre de spécialiste marketing, et s’occuperont de toutes les tâches marketing de la startup grandissante, que ça…',
        type: 'Actualité',
        nbComments: '0'
    }
    const actu6 = {
        idN: 6,
        titre: 'Charles et Sébastien vous présentent la startup en 60 secondes.',
        img: imgActu6,
        auteur: 'Charles',
        date: 'septembre 22, 2020',
        preview: 'Nos deux co-fondateurs vous présentent Off The Grid en 60 secondes.',
        type: 'Vidéo',
        nbComments: '0'
    }
    const actu7 = {
        idN: 7,
        titre: 'Finalistes aux MTL Tech Awards 2020',
        img: imgActu7,
        auteur: 'Charles',
        date: 'octobre 13, 2020',
        preview: 'Off The Grid se taille une place parmi les finalistes aux MTL Tech Awards 2020 Le concours MTL Tech Awards est organisé afin de promouvoir les projets innovateurs d’entrepreneurs montréalais et internationaux. 3 gagnants seront couronnés pour le prix du public, le prix Révélation et le grand…',
        type: 'Actualité',
        nbComments: '0'
    }
    const actus = [actu1, actu2, actu3, actu4, actu5, actu6, actu7]
    const id = useParams()
    const history = useHistory()
    const classes = useStyles()
    const actuDefault = {
        idN: 0,
        titre: '',
        img: '',
        auteur: '',
        date: '',
        preview: '',
        type: '',
        nbComments: '',
    }
    const [actu, setActu] = React.useState(actuDefault);
    const updateActu = (data) => {
        setActu(data);
    }
    const [error, setError] = React.useState(false);
    const updateError = (data) => {
        setError(data);
    }
    React.useEffect(() => {
        if (actu === actuDefault) {
            if (actus.filter(e => e.idN === parseInt(id.id)).length > 0) {
                updateActu(actus.filter(e => e.idN === parseInt(id.id))[0])
                updateError(false)
            } else {
                updateError(true)
            }
        }
    })
    return (
        <Fragment>
            {error ?
                <div><h1>404: page not found</h1><h1>404: page not found</h1><h1>404: page not found</h1><h1>404: page
                    not found</h1><h1>404: page not found</h1><h1>404: page not found</h1><h1>404: page not found</h1>
                </div> :
                <Box className={classes.box1}>
                    <Box className={classes.box1Content}>
                        <Grid container item direction={'column'}>
                            <Grid item>
                                <img src={actu.img}/>
                            </Grid>
                            <Grid item>
                                <Typography variant={'h1'}>{actu.titre}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'h5'}>{actu.date}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'h5'}>{actu.preview}</Typography>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
            }
        </Fragment>
    );
}
