//import file Material UI
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import End

//stylying tampilan Web
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#f1f1f1',
        
    },
    title: {
        flexGrow: 1,
    },
}));
//styling ends

//function
export default function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor:'#009999'}}>
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Statistik Data Covid-19 Provinsi di Indonesia 
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
