import React, {useState} from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button";
import {Grid, IconButton} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root:
        {
            flexGrow: 1
        },
    scrollTop : {
        position:'fixed',
        bottom:'40px',
        right:'40px',
        cursor:'pointer',
        backgroundColor:"#0077ff",
        transition:'0.3s',
        "&:hover":{
            backgroundColor:"#337AB7",
        },
        "&:active":{
            backgroundColor:"#70A2CC",
        },
    }
}));
export default function ScrollButton(){
    const classes = useStyles()
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <IconButton size="large" className={classes.scrollTop} color={'secondary'} style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop}>
            <KeyboardArrowUpIcon fontSize="inherit" />
        </IconButton>
    );
}
