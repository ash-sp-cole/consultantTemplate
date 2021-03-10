import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from "../Header";
import MainBox from '../MainBox';
import "../../App.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}

                style={{
                    width: '85vw',
                    height: '95vh',
                    margin: 'auto'
                }}

            >
                <Grid item xs={12}
                    style={{
                        height: ' 15%',
                    }}

                >
                    
                   <Header/> 
                </Grid>


                <Grid item xs={12}
                    style={{
                        height: ' 85%',
                        margin: 'auto'

                    }}
                >
                   
                        <MainBox/>

                </Grid>




            </Grid>
        </div>
    );
}
