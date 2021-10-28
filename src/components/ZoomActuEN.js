import React, {Fragment} from "react"

import {makeStyles} from "@material-ui/core/styles"
import {Box, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useHistory, useParams} from "react-router-dom";
import imgActu1 from "../media/actu1.png";
import imgActu4 from "../media/actu2.jpg";
import imgActu5 from "../media/actu3.png";
import imgActu6 from "../media/actu4.png";
import imgActu7 from "../media/actu5.png";


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

export default function ZoomActuEN() {
    const actu1 = {
        idN: 1,
        titre: 'Startupfest 2019 – PME Montréal',
        img: imgActu1,
        auteur: 'Charles',
        date: 'july 12, 2019',
        preview: 'Startupfest 2019 – PME Montréal   Off The Grid get a 1000$ subvention at a pitch contest during Startupfest 2019.',
        type: 'News',
        nbComments: '0'
    }
    const actu2 = {
        idN: 2,
        titre: 'Our team',
        img: '',
        auteur: 'Charles',
        date: 'september 4, 2019',
        preview: 'About Equipement Off the Grid inc. Here at Off The Grid, we believe physical training is an untapped power source. We started this business for one purpose : reduce the ecological footprint of each traning. With this goal, our team pushes boundaries...',
        type: 'Section',
        nbComments: ''
    }
    const actu3 = {
        idN: 3,
        titre: 'Home',
        img: '',
        auteur: 'Charles',
        date: 'september 26, 2019',
        preview: 'Reduce the ecological footprint of each training with the Off the Grid inc. spinning bike. We are a quebec-based company dedicated to propose ecofriendly training equipments...',
        type: 'Section',
        nbComments: ''
    }
    const actu4 = {
        idN: 4,
        titre: 'Entrepreneurship grant - HEC',
        img: imgActu4,
        auteur: 'Charles',
        date: 'december 15, 2019',
        preview: 'Entrepreneurship grant – HEC Montréal   In winter 2019, Off the Grid wins an entrepreneurship grant of 10 000$',
        type: 'News',
        nbComments: '0'
    }
    const actu5 = {
        idN: 5,
        titre: 'Two first employees hired',
        img: imgActu5,
        auteur: 'Charles',
        date: 'august 30, 2020',
        preview: 'Off the Grid hires its first two members :  Véronique St-Louis and Kevin Donnithorne. As marketing specialists, they will manage all the marketing-related tasks as well as many other similar tasks...',
        type: 'News',
        nbComments: '0'
    }
    const actu6 = {
        idN: 6,
        titre: 'Charles and Sébastien present the startup in 60 seconds.',
        img: imgActu6,
        auteur: 'Charles',
        date: 'september 22, 2020',
        preview: 'Our two co-founders present Off The Grid in 60 secondes.',
        type: 'Video',
        nbComments: '0'
    }
    const actu7 = {
        idN: 7,
        titre: 'Finalists at the MTL Tech Awards 2020',
        img: imgActu7,
        auteur: 'Charles',
        date: 'october 13, 2020',
        preview: 'Off The Grid is finalist at the MTL Tech Awards 2020',
        type: 'News',
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
                console.log(id.id)
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
