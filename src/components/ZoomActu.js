import React, {Fragment, useEffect, useState} from "react"

import {makeStyles} from "@material-ui/core/styles"
import {Avatar, Box, Chip, Divider, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useHistory, useParams} from "react-router-dom";
import {DataStore, Predicates, SortDirection} from "@aws-amplify/datastore";
import {News} from "../models";
import {Storage} from "aws-amplify";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import {blue} from '@mui/material/colors';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";
const useStyles = makeStyles((theme) => ({
    root:
        {
            flexGrow: 1
        },
    pageContent: {
        backgroundColor: "#f2F2F2",
        paddingTop: "75px",
        minHeight: '100vh',
        display: "flex",
        alignItems: 'center',
        flexDirection: 'column'
    },
    box1: {
        backgroundColor: "#ffffff",
        width: '60vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box1Content: {
        width: '96%',
        marginTop: '3%',
        marginLeft: '2%',
        marginRight: '2%',
        display: "flex",
        justifyContent: 'center',

    },
    box2: {
        backgroundColor: "#ffffff",
        marginTop: '25px',
        width: '60vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box2Content: {
        width: '96%',
        marginTop: '2%',
        marginLeft: '2%',
        marginRight: '2%',
        display: "flex",
        justifyContent: 'center',

    },
    box3: {
        backgroundColor: "#ffffff",
        marginTop: '25px',
        width: '60vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box3Content: {
        width: '96%',
        marginTop: '2%',
        marginLeft: '2%',
        marginRight: '2%',
        display: "flex",
        justifyContent: 'center',

    },
    imgNews: {
        marginLeft: '1vw',
        marginRight: '1vw',
        marginTop: '2vh',
        marginBottom: '1vh',
        padding: '3px',
        minHeight: '30vh',
        maxHeight: '60vh',
        maxWidth: '58vw',
        objectFit: 'contain',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#efefef'
    },
    gridElements: {
        paddingBottom: '20px',
    },
    customDiv: {
        height: '5px',
        backgroundColor: '#000000',
        width: '35%',
        borderRadius: '15px',
        marginBottom: '5%'
    },
    imgRecentNews: {
        minWidth: '70%',
        maxWidth: '100%',
        maxHeight: '30vh',
        objectFit: 'contain'
    },
    gridRecentNews: {
        transition: 'all .3s',
        "&:hover": {
            transform: 'scale(1.04)',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            cursor: 'pointer',
        }
    },
    recentNewsTitle: {
        fontFamily: '"Montserrat-Bold"',
        fontSize: 17,
    },
    smallBold: {
        fontFamily: '"Montserrat-Bold"',
        fontSize: 18,
    },
    returnButton: {
        width:'fit-content',
        padding:'1%',
        marginBottom: '20px',
        transition: 'all .2s',
        fontFamily: "Montserrat-Light",
        fontSize:22,
        borderWidth:'0px',
        borderStyle:'solid',
        borderRadius:'20px',
        "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.02)',
            backgroundColor:'#eaeaea',
            borderWidth:'2px',
            color:'#0077ff',
            fontFamily: "Montserrat-Medium",
        }
    },
}));

export default function ZoomActu() {
    const history = useHistory();
    const id = useParams()
    const classes = useStyles()
    const actuDefault = {
        id: 0,
        idNews: 0,
        title: '',
        titleFR: '',
        author: '',
        date: '',
        content: '',
        contentFR: '',
        type: '',
        typeFR: '',
        nbComments: '',
        img: '',
        imgFile: '',
    }
    const mois = [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre'
    ];
    const formatDate = (date) => {
        const month = mois[parseInt(date.substring(5, 7)) - 1]
        return date.substring(8, 10) + ' ' + month + ' ' + date.substring(0, 4);
    };

    const [error, setError] = React.useState(false);
    const updateError = (data) => {
        setError(data);
    }
    const [actualite, setActualite] = useState(actuDefault);
    const [actusRecentes, setActusRecentes] = useState([]);

    React.useEffect(() => {
        const err = fetchNews(id.id);
        fetchRecentNews();
    }, []);

    async function fetchRecentNews() {
        let news = await DataStore.query(News, Predicates.ALL, {
            sort: s => s.idNews(SortDirection.DESCENDING),
            limit: 4
        });
        let actus = [];
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
            if (actu.img !== '' && actu.img !== null) {
                const image = await Storage.get(actu.img);
                actu.imgFile = image;
            } else {
                actu.imgFile = null;
            }
            actus.push(actu);
        }))
        setActusRecentes(actus);
    }

    async function fetchNews(id) {
        let news = await DataStore.query(News, c => c.idNews("eq", parseInt(id)));
        if (news.length <= 0 || (id.match(/^[0-9]+$/)) === null) {
            updateError(true)
            return false;
        }
        let newsItem = news[0];
        let a = {
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
        if (a.img !== '' && a.img !== null) {
            const image = await Storage.get(a.img);
            a.imgFile = image;
        } else {
            a.imgFile = null;
        }
        setActualite(a);
        return true;
    }

    return (
        <Fragment>
            {error ?
                <div><h1>404: page not found</h1><h1>404: page not found</h1><h1>404: page not found</h1><h1>404: page
                    not found</h1><h1>404: page not found</h1><h1>404: page not found</h1><h1>404: page not found</h1>
                </div> :
                <Fragment>
                    <Box className={classes.pageContent}>
                        <Box className={classes.box1}>
                            <Grid container item direction={'column'} className={classes.box1Content}>
                                <Grid item container direction={'row'} className={classes.returnButton} spacing={1} alignItems={'center'} onClick={()=> history.push('/actus/')}>
                                    <Grid item>
                                        <ArrowBackIcon style={{ display: "block" }}/>
                                    </Grid>
                                    <Grid item>
                                            Retour aux actualités
                                    </Grid>
                                </Grid>
                                <Grid item className={classes.gridElements}>
                                    <Typography variant={'h3'}>{actualite.titleFR}</Typography>
                                </Grid>
                                <Grid item container direction={'row'} spacing={1} className={classes.gridElements}>
                                    <Grid item>
                                        <Chip
                                            color={'primary'}
                                            avatar={<Avatar>C</Avatar>}
                                            label="Charles"
                                            clickable
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Chip
                                            color={'primary'}
                                            avatar={<Avatar color={'primary'}>
                                                <FeedOutlinedIcon sx={{color: "#FFFFFF"}}/>
                                            </Avatar>}
                                            label="Actualité"
                                            clickable
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item className={classes.gridElements}>
                                    <img className={classes.imgNews} src={actualite.imgFile}/>
                                </Grid>

                                <Grid item container direction={'row'} spacing={1} className={classes.gridElements}>
                                    <Grid item>
                                        <Typography variant={'body1'}>
                                            Publiée par
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.smallBold}>
                                            {actualite.author}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={'body1'}>
                                            le
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.smallBold}>
                                            {formatDate(actualite.date)}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item className={classes.gridElements}>
                                    <Divider/>
                                </Grid>
                                <Grid item className={classes.gridElements}>
                                    <Typography variant={'body1'}>{actualite.contentFR}</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.box2}>
                            <Grid container item direction={'column'} className={classes.box2Content}>
                                <Grid item className={classes.gridElements}>
                                    <Typography variant={'h5'}>
                                        {'Commentaires (' + actualite.nbComments + ')'}
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.gridElements}>
                                    <Divider/>
                                </Grid>
                                <Grid item className={classes.gridElements}>
                                    <Typography variant={'body1'}>
                                        {
                                            actualite.nbComments === 0 ? 'Aucun commentaire pour le moment' : 'Voici les commentaires'
                                        }
                                    </Typography>
                                </Grid>
                                <EmailShareButton url={'http://localhost:3000/en/actus'} />
                            </Grid>
                        </Box>
                        <Box className={classes.box3}>
                            <Grid container item direction={'column'} className={classes.box3Content}>
                                <Grid item className={classes.gridElements}>
                                    <Typography variant={'h5'}>
                                        Actualités récentes
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.gridElements}>
                                    <Divider/>
                                </Grid>
                                <Grid container item direction={'row'} className={classes.gridElements} spacing={4}>
                                    {actusRecentes.map(actu =>
                                        <Grid container item direction={'column'} xs={3}
                                              className={classes.gridRecentNews} onClick={() => {
                                            history.push('/actus/' + actu.idNews);
                                            history.go(0);
                                        }}>
                                            <Grid item>
                                                <img className={classes.imgRecentNews} src={actu.imgFile}/>
                                            </Grid>
                                            <Grid item>
                                                <Typography className={classes.recentNewsTitle}>
                                                    {actu.titleFR}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    )}
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Fragment>
            }
        </Fragment>
    );
}
