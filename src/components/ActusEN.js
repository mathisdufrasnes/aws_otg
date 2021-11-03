import React, {Fragment, useEffect, useState} from "react"
import imgActu1 from '../media/actu1.png'
import imgActu4 from '../media/actu2.jpg'
import imgActu5 from '../media/actu3.png'
import imgActu6 from '../media/actu4.png'
import imgActu7 from '../media/actu5.png'
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {makeStyles} from "@material-ui/core/styles"
import "./Actus.css"
import {
    Box,
    Card,
    CardActions,
    CardContent, Checkbox,
    FormControl,
    Grid,
    InputLabel, ListItemText,
    MenuItem, OutlinedInput,
    Select, Slider,
    TextField
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {TimelineOppositeContent} from "@mui/lab";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import ZoomActu from "./ZoomActu";
import Accueil from "./Accueil";
import {DataStore, Predicates, SortDirection} from "@aws-amplify/datastore";
import {News} from "../models";
import {Storage} from "aws-amplify";

const actu1 = {
    id: 1,
    titre: 'Startupfest 2019 – PME Montréal',
    img: imgActu1,
    auteur: 'Charles',
    date: 'july 12, 2019',
    preview: 'Startupfest 2019 – PME Montréal   Off The Grid get a 1000$ subvention at a pitch contest during Startupfest 2019.',
    type: 'News',
    nbComments: '0'
}
const actu2 = {
    id: 2,
    titre: 'Our team',
    img: '',
    auteur: 'Charles',
    date: 'september 4, 2019',
    preview: 'About Equipement Off the Grid inc. Here at Off The Grid, we believe physical training is an untapped power source. We started this business for one purpose : reduce the ecological footprint of each traning. With this goal, our team pushes boundaries...',
    type: 'Section',
    nbComments: ''
}
const actu3 = {
    id: 3,
    titre: 'Home',
    img: '',
    auteur: 'Charles',
    date: 'september 26, 2019',
    preview: 'Reduce the ecological footprint of each training with the Off the Grid inc. spinning bike. We are a quebec-based company dedicated to propose ecofriendly training equipments...',
    type: 'Section',
    nbComments: ''
}
const actu4 = {
    id: 4,
    titre: 'Entrepreneurship grant - HEC',
    img: imgActu4,
    auteur: 'Charles',
    date: 'december 15, 2019',
    preview: 'Entrepreneurship grant – HEC Montréal   In winter 2019, Off the Grid wins an entrepreneurship grant of 10 000$',
    type: 'News',
    nbComments: '0'
}
const actu5 = {
    id: 5,
    titre: 'Two first employees hired',
    img: imgActu5,
    auteur: 'Charles',
    date: 'august 30, 2020',
    preview: 'Off the Grid hires its first two members :  Véronique St-Louis and Kevin Donnithorne. As marketing specialists, they will manage all the marketing-related tasks as well as many other similar tasks...',
    type: 'News',
    nbComments: '0'
}
const actu6 = {
    id: 6,
    titre: 'Charles and Sébastien present the startup in 60 seconds.',
    img: imgActu6,
    auteur: 'Charles',
    date: 'september 22, 2020',
    preview: 'Our two co-founders present Off The Grid in 60 secondes.',
    type: 'Video',
    nbComments: '0'
}
const actu7 = {
    id: 7,
    titre: 'Finalists at the MTL Tech Awards 2020',
    img: imgActu7,
    auteur: 'Charles',
    date: 'october 13, 2020',
    preview: 'Off The Grid is finalist at the MTL Tech Awards 2020',
    type: 'News',
    nbComments: '0'
}
export const actus = [actu1, actu2, actu3, actu4, actu5, actu6, actu7]
const MenuProps = {
    PaperProps: {
        style: {
            borderRadius: 0,
            width:'auto'
        },
    },
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
    },
    transformOrigin: {
        vertical: "top",
        horizontal: "left"
    },
    width:'auto',
    getContentAnchorEl: null,
};
const categories = [
    'News',
    'Section',
    'Video'
];
const mois = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
const auteurs = [
    'Charles'
];


const useStyles = makeStyles((theme) => ({
    root:
        {
            flexGrow: 1
        },
    box1: {
        backgroundColor: "#ffffff",

        minHeight: '100vh',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        backgroundColor: "#ffffff",
        paddingTop: "115px",
        paddingBottom: '4%',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContent: {
        width: '65vw',
    },
    box1Content: {
        width: '80vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    card: {
        borderRadius: '0px',
        width: '80%',
        transition: 'all .3s',
        "&:hover": {
            transform: 'scale(1.04)',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            cursor: 'pointer',
        }
    },
    cardContent: {
        textAlign: 'start',
        display: "flex",
        flexDirection: 'column',
    },
    TLContent: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    TLOppositeContent: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
    },
    titleText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: '24px',
    },
    authorText: {
        fontSize: '14px',
        fontFamily: 'Montserrat-Medium',
    },
    contentText: {
        fontSize: '14px',
        fontFamily: 'Montserrat-Light',
    },
    cardImg: {
        minWidth: '70%',
        maxWidth: '100%',
        maxHeight: '30vh',
        objectFit: 'contain'
    },
    TLSep: {
        height: '50%'
    },
    typeIcon: {
        marginRight: '5px'
    },
    cardActions: {
        display: "flex",
        justifyContent: 'space-between',
    },

}));

export default function Actus() {
    const [offset, setOffset] = useState(0);

    const [actualites, setActualites] = useState([]);
    useEffect(() => {
        fetchNews();
    }, []);

    async function fetchNews() {
        let news = await DataStore.query(News,Predicates.ALL, {
            sort: s => s.idNews(SortDirection.ASCENDING)});
        let actus=[];
        await Promise.all(news.map(async newsItem => {
            let actu = {
                id: newsItem.id,
                idNews: newsItem.idNews,
                title: newsItem.title,
                titleFR: newsItem.titleFR,
                author: newsItem.author,
                date: newsItem.date,
                content: newsItem.content,
                contentFR: newsItem.contentFR,
                type: newsItem.type,
                typeFR: newsItem.typeFR,
                nbComments: newsItem.nbComments,
                img: newsItem.img,
                imgFile: '',
            };
            if (actu.img!== '' && actu.img!== null) {
                const image = await Storage.get(actu.img);
                actu.imgFile = image;
            }
            else{
                actu.imgFile = null;
            }
            actus.push(actu);
        }))
        setActualites(actus);
    }

    const history = useHistory();
    const location = useLocation();

    const [category, setCategory] = React.useState([]);
    const [auteur, setAuteur] = React.useState([]);


    const [minDate, setMinDate]=React.useState([2019,7]);
    const [maxDate, setMaxDate]=React.useState([2022,1]);
    const [maxDateInterval, setMaxDateInterval]=React.useState(((maxDate[0]-minDate[0])* 12)+(maxDate[1]-minDate[1])+1);
    const [value2, setValue2] = React.useState([1, 100]);
    const minDistance = 1;
    const handleChangeDate = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue2([clamped - minDistance, clamped]);
            }
        } else {
            setValue2(newValue);
        }
    };
    const handleChangeCateg = (event) => {
        const {
            target: { value },
        } = event;
        setCategory(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeAuteur = (event) => {
        const {
            target: { value },
        } = event;
        setAuteur(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const formatDateSlider=(value) => {
        const yearSurplus= Math.floor(value / 12)
        let year = minDate[0] + yearSurplus
        value= value - (yearSurplus*12)
        if(value > (12 - minDate[1]))
        {
            value = value+ minDate[1] - 12
            year+=1
        }
        else{
            value = value + minDate[1]
        }

        let month = mois[(value)-1]
        return month+ ' '+year.toString()
    }

    function CategoryIcon(props) {
        switch (props.type) {
            case "News":
                return (<Fragment><FeedOutlinedIcon className={classes.typeIcon}/></Fragment>)
            case "Video":
                return (<Fragment><PlayCircleOutlineIcon className={classes.typeIcon}/></Fragment>)
            case "Section":
                return (<Fragment><AddCommentOutlinedIcon className={classes.typeIcon}/></Fragment>)
            default:
                return (<Fragment></Fragment>)
        }
    }

    const classes = useStyles()

    return (
        <Fragment>
            <Box className={classes.header}>
                <Grid container className={classes.headerContent} direction={'column'}>
                    <Grid item>
                        <Typography variant={'h2'}>News</Typography>
                    </Grid>
                    <Grid item>
                        <form>
                            <Grid container direction={'row'} spacing={2}>
                                <Grid item xs>
                                    <TextField label="Search"  fullWidth/>
                                </Grid>
                                <Grid item xs={2}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-multiple-checkbox-label" >Categories</InputLabel>
                                        <Select
                                            fullWidth
                                            labelId="demo-multiple-checkbox-label"
                                            id="demo-multiple-checkbox"
                                            multiple
                                            value={category}
                                            onChange={handleChangeCateg}
                                            renderValue={(selected) => selected.join(', ')}
                                            MenuProps={MenuProps}
                                        >
                                            {categories.map((categ) => (
                                                <MenuItem key={categ} value={categ}>
                                                    <Checkbox checked={category.indexOf(categ) > -1} />
                                                    <ListItemText primary={categ} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={2}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-multiple-checkbox-label" >Author</InputLabel>
                                        <Select
                                            fullWidth
                                            labelId="demo-multiple-checkbox-label"
                                            id="demo-multiple-checkbox"
                                            multiple
                                            value={auteur}
                                            onChange={handleChangeAuteur}
                                            renderValue={(selected) => selected.join(', ')}
                                            MenuProps={MenuProps}
                                        >
                                            {auteurs.map((aut) => (
                                                <MenuItem key={aut} value={aut}>
                                                    <Checkbox checked={auteur.indexOf(aut) > -1} />
                                                    <ListItemText primary={aut} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={2}>
                                    <FormControl fullWidth>
                                        <Slider
                                            value={value2}
                                            onChange={handleChangeDate}
                                            valueLabelDisplay="auto"
                                            disableSwap
                                            min={0}
                                            max={maxDateInterval}
                                            valueLabelFormat={val => formatDateSlider(val)}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box1}>
                <Grid className={classes.box1Content} container spacing={3}>
                    <Timeline position="alternate">
                        {actualites.sort((a,b) => (a.idNews > b.idNews) ? -1 : ((b.idNews > a.idNews) ? 1 : 0)).map(actualite=>
                            <Fragment>
                                <TimelineItem>
                                    <TimelineOppositeContent className={classes.TLOppositeContent}>
                                        <Typography variant={'h4'} color={'primary'}
                                                    style={{marginLeft: '10%', marginRight: '10%'}}>
                                            {actualite.date}
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineConnector className={classes.TLSep}/>
                                        <TimelineDot/>
                                        <TimelineConnector className={classes.TLSep}/>
                                    </TimelineSeparator>
                                    <TimelineContent className={classes.TLContent}>
                                        <Card className={classes.card} onClick={() => history.push('/actus/' + actualite.idNews)}>
                                            <CardContent className={classes.cardContent}>

                                                {<img src={actualite.imgFile} className={classes.cardImg}/>}

                                                <Typography className={classes.titleText}>
                                                    {actualite.title}
                                                </Typography>
                                                <Grid item container direction={'row'} spacing={1}>
                                                    <Grid item>
                                                        <Typography className={classes.contentText}>
                                                            by
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography className={classes.authorText}>
                                                            {actualite.author}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Typography className={classes.contentText}>
                                                    {actualite.content}
                                                </Typography>
                                            </CardContent>
                                            <CardActions className={classes.cardActions}>
                                                {(actualite.type === '' || actualite.type === null) ? '' : (
                                                    <Button>
                                                        <CategoryIcon type={actualite.type}/>
                                                        <Typography className={classes.contentText}>{actualite.type}</Typography>
                                                    </Button>)
                                                }
                                                {(actualite.nbComments === '' || actualite.nbComments === null) ? '' : (
                                                    <Button>
                                                        <CommentOutlinedIcon className={classes.typeIcon}/>
                                                        <Typography
                                                            className={classes.contentText}>{actualite.nbComments}</Typography>
                                                    </Button>)
                                                }
                                            </CardActions>
                                        </Card>
                                    </TimelineContent>
                                </TimelineItem>
                            </Fragment>
                        )}
                    </Timeline>
                </Grid>
            </Box>
        </Fragment>
    );
}
