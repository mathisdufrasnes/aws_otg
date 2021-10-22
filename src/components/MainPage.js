import logo from '../media/LogoOTG.png';
import './MainPage.css';
import React, {useEffect, useState} from 'react';
import Flags from 'country-flag-icons/react/3x2'
import {alpha, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LanguageIcon from '@material-ui/icons/Language';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {FormControl, Grid, InputLabel, Select} from "@material-ui/core";
import {Link, Route, Router, Switch, useHistory, useLocation, useParams} from "react-router-dom";
import {Fragment} from "react";
import {Dropdown, Menu} from 'semantic-ui-react'
import Accueil from "./Accueil";
import AccueilEN from "./AccueilEN";
import Actus from "./Actus";
import ActusEN from "./ActusEN";
import Equipe from "./Equipe";
import EquipeEN from "./EquipeEN";
import FAQ from "./FAQ";
import FAQ_EN from "./FAQ_EN";
import Precommande from "./Precommande";
import PrecommandeEN from "./PrecommandeEN";
import {useSelector, useDispatch} from 'react-redux'
import {setLang, toggle} from "../reducers/languageSlice";
import {ThemeProvider, createTheme} from '@material-ui/core'
import ScrollButton from "./ScrollTop";
import ZoomActu from "./ZoomActu";
import ZoomActuEN from "./ZoomActuEN"

export const customTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#0077ff',
            light: '#598ab7',
            dark: '#337ab7',
        },
        secondary: {
            main: '#f2f2f2',
            light: '#ffffff',
            dark: '#bebebe',
            contrastText: '#000000',
        },
        background: {
            default: '#f2f2f2',
        },
        text: {
            primary: '#000000',
        },
        divider: '#bebebe',
    },
    typography: {
        fontFamily: '"Montserrat-Regular"',
        fontSize: 18,
        h1: {
            fontFamily: '"Montserrat-Bold"',
            fontSize: 60,
        },
        h2: {
            fontFamily: '"Montserrat-Bold"',
            fontSize: 50,
        },
        h3: {
            fontFamily: '"Montserrat-Bold"',
            fontSize: 35,
        },
        h4: {
            fontFamily: '"Montserrat-Bold"',
            fontSize: 30,
        },
        h5: {
            fontFamily: '"Montserrat-Bold"',
            fontSize: 21,
        },
        h6: {
            fontFamily: '"Montserrat-Bold"',
            fontSize: 25,
        },
        body1: {
            fontSize: 18,
        },
        body2: {
            fontSize: 20,
        },
        button: {
            fontSize: 26,
            textTransform: 'none',
            fontFamily: 'Montserrat-Medium',
        },
    },
    shape: {
        borderRadius: 35,
    },
    overrides: {
        MuiAppBar: {
            colorInherit: {
                backgroundColor: '#ffffff',
                color: '#000000',
            },
        },
    },
    props: {
        MuiAppBar: {
            color: 'inherit',
        },
        MuiTooltip: {
            arrow: true,
        },
    },
})

const useStyles = makeStyles((customTheme) => ({
    root: {
        flexGrow: 1,
    },
    menuText: {
        fontWeight: "bold",
        fontSize: "medium",
        textAlign: "center"
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        maxHeight: 40,
        marginTop: 10,
        marginBottom: 10,
    },
    appbar: {
        color: "white",
        spacing: 2,
        textAlign: "center",
    },
    offset: {
        marginTop: "10vw"
    }
}));

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


export default function MainPage() {


    const dispatch = useDispatch()
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    //const lang = useSelector(state => state.lang.value)
    const lang = location.pathname.includes('/en') ? 'gb' : 'fr'
    useEffect(()=>{
        dispatch(setLang(lang));
    })
    const toggleLanguage = (language) => {
        if (language === "fr") {
            history.push('/en' + location.pathname)
        } else if (language === "gb") {
            history.push(location.pathname.replace("/en", ""))
        }
        dispatch(toggle())
    };

    const setLanguage = (language) => {
        if (language === "gb") {
            history.push('/en' + location.pathname)
        } else if (language === "fr") {
            history.push(location.pathname.replace("/en", ""))
        }
        dispatch(setLang(language))
    };


    const languageOptions = [
        {key: 'fr', value: 'fr', flag: 'fr'},
        {key: 'gb', value: 'gb', flag: 'gb'},
    ]
    const DropdownExampleSearchSelection = () => (
        <Menu compact>
            <Dropdown
                fluid
                selection
                options={languageOptions}
                value={lang}
                onChange={() => toggleLanguage(lang)}
            />
        </Menu>
    )


    return (
        <ThemeProvider theme={customTheme}>
            <div>
                <div className={classes.root}>
                    {lang === "fr" ? (
                            <Fragment>
                                <AppBar position="fixed">
                                    <Toolbar>
                                        <Grid container alignItems="center">
                                            <Grid item xs>
                                                <Button className={classes.menuButton} aria-label="Home" size="large"
                                                        edge="start"
                                                        color="inherit" onClick={() => history.push('/')}>
                                                    <img className={classes.logo} src={logo}></img>
                                                </Button>
                                            </Grid>
                                            <Grid item container xs={9} spacing={2}>
                                                <Grid item xs={2}>
                                                    <Button className={classes.menuButton}
                                                            onClick={() => history.push('/')}>
                                                        <Typography className={classes.menuText}>Accueil</Typography>
                                                    </Button>
                                                </Grid>

                                                <Grid item xs={2}>
                                                    <Button className={classes.menuButton}
                                                            onClick={() => history.push('/actus')}>
                                                        <Typography className={classes.menuText}>Actualité</Typography>
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Button className={classes.menuButton}
                                                            onClick={() => history.push('/equipe')}>
                                                        <Typography className={classes.menuText}>Notre Equipe</Typography>
                                                    </Button>
                                                </Grid>

                                                <Grid item xs={2}>
                                                    <Button className={classes.menuButton}
                                                            onClick={() => history.push('/FAQ')}>
                                                        <Typography className={classes.menuText}>F.A.Q.</Typography>
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Button className={classes.menuButton}
                                                            onClick={() => history.push('/precommande')}>
                                                        <Typography className={classes.menuText}>Précommande</Typography>
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={1}>
                                                <DropdownExampleSearchSelection/>
                                            </Grid>
                                        </Grid>
                                    </Toolbar>
                                </AppBar>
                            </Fragment>
                        ) :
                        (
                            <Fragment>
                                <AppBar position="fixed" color="white">
                                    <Toolbar>
                                        <Grid container alignItems="center">
                                            <Grid item xs>
                                                <Button className={classes.menuButton} aria-label="Home" size="large"
                                                        edge="start"
                                                        color="inherit" onClick={() => history.push('/en')}>
                                                    <img className={classes.logo} src={logo}></img>
                                                </Button>
                                            </Grid>
                                            <Grid item container xs={9} spacing={2}>
                                                <Grid item xs={2}>
                                                    <Button className={classes.menuButton}
                                                            onClick={() => history.push('/en')}>
                                                        <Typography className={classes.menuText}>Home</Typography>
                                                    </Button>
                                                </Grid>

                                                <Grid item xs={2}>
                                                    <Button className={classes.menuButton}
                                                            onClick={() => history.push('/en/actus')}>
                                                        <Typography className={classes.menuText}>News</Typography>
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Button className={classes.menuButton}
                                                            onClick={() => history.push('/en/equipe')}>
                                                        <Typography className={classes.menuText}>Our Team</Typography>
                                                    </Button>
                                                </Grid>

                                                <Grid item xs={2}>
                                                    <Button className={classes.menuButton}
                                                            onClick={() => history.push('/en/FAQ')}>
                                                        <Typography className={classes.menuText}>F.A.Q.</Typography>
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Button className={classes.menuButton}
                                                            onClick={() => history.push('/en/precommande')}>
                                                        <Typography className={classes.menuText}>Preorder</Typography>
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={1}>
                                                <DropdownExampleSearchSelection/>
                                            </Grid>
                                        </Grid>
                                    </Toolbar>
                                </AppBar>
                            </Fragment>
                        )}
                </div>
                <div>
                    <Switch>
                        <Route path="/" exact component={Accueil}/>
                        <Route path="/actus" exact component={Actus}/>
                        <Route path="/actus/:id" exact component={ZoomActu}/>
                        <Route path="/equipe" exact component={Equipe}/>
                        <Route path="/FAQ" exact component={FAQ}/>
                        <Route path="/precommande" exact component={Precommande}/>
                        <Route path="/en" exact component={AccueilEN}/>
                        <Route path="/en/actus" exact component={ActusEN}/>
                        <Route path="/en/actus/:id" exact component={ZoomActuEN}/>
                        <Route path="/en/equipe" exact component={EquipeEN}/>
                        <Route path="/en/FAQ" exact component={FAQ_EN}/>
                        <Route path="/en/precommande" exact component={PrecommandeEN}/>
                        <Route render={() => <div><h1>404: page not found</h1><h1>404: page not found</h1><h1>404: page not found</h1><h1>404: page not found</h1><h1>404: page not found</h1><h1>404: page not found</h1><h1>404: page not found</h1></div>}/>
                    </Switch>
                </div>
            </div>
            <ScrollButton />
        </ThemeProvider>
    );

}


