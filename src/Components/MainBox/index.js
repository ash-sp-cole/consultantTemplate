import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MainCard from './MainCard';
import BannerImage from '../Image/Banner';
import HorizontalLinearStepper from '../Stepper';
import FloatingActionButtons from '../LeftBoxMain';
import MediaFeed from '../MediaFeed';
import ButtonBases from "../Gallery";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainBox() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}
   
      >
        <Grid item xs={12} 
        style={{margin:'auto'}}
      >
            <FloatingActionButtons/>
      
        </Grid>
        <Grid item xs={12} sm={6}
      
      >
            <MediaFeed/>
      
        </Grid>
        <Grid item xs={12} sm={6}
      
      >
            <MainCard/>
      
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            
      <ButtonBases/>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}
            elevation={12}
          ><HorizontalLinearStepper/></Paper>
        </Grid>
      
      
      </Grid>
    </div>
  );
}
