import React, {Fragment, useEffect, useState} from "react"

import {makeStyles} from "@material-ui/core/styles"
import {Box, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useHistory, useParams} from "react-router-dom";
import {DataStore, Predicates, SortDirection} from "@aws-amplify/datastore";
import {News} from "../models";
import {Storage} from "aws-amplify";


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
        width: '60%',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgNews:{
        maxHeight:'60vh',
        maxWidth:'60vw',
        objectFit: 'contain'
    }
}));

export default function ZoomActu() {
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
    const [error, setError] = React.useState(false);
    const updateError = (data) => {
        setError(data);
    }
    const [actualite, setActualite] = useState(actuDefault);
    React.useEffect(() => {
        const err = fetchNews(id.id)
    },[]);
    async function fetchNews(id) {
        console.log(id);
        let news = await DataStore.query(News, c => c.idNews("eq", parseInt(id)));
        if(news.length<=0 || (id.match(/^[0-9]+$/))===null)
        {
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
                <Box className={classes.box1}>
                    <Box className={classes.box1Content}>
                        <Grid container item direction={'column'} spacing={3}>
                            <Grid item>
                                <Typography variant={'h3'}>{actualite.titleFR}</Typography>
                            </Grid>
                            <Grid item>
                                <img className={classes.imgNews} src={actualite.imgFile}/>
                            </Grid>
                            <Grid item>
                                <Typography variant={'h5'}>{actualite.date}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'h5'}>{actualite.contentFR}</Typography>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
            }
        </Fragment>
    );
}
