import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MainCard from './MainCard';
import HorizontalLinearStepper from '../Stepper';
import MediaFeed from '../MediaFeed';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import MenuIcon from '@material-ui/icons/Menu';
import DisplayBoxFrame from '../DisplayBox';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    '& > *': {
      margin: theme.spacing(1),

    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainBox() {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}

      >
        <Grid item xs={12}
          style={{ margin: 'auto' }}
        >

          <div className={classes.root}>

            <Fab color="secondary" aria-label="edit"
            onClick={() => setCount(count + 1)}
            >
              <MenuIcon />
            </Fab>
            <Fab variant="extended"
            onClick={() => setCount(count - 1)}
            >
              <NavigationIcon className={classes.extendedIcon} />
        Explore Heyoka!
      </Fab>

          </div>

        </Grid>
        <Grid item xs={12} sm={6}

        >
         <DisplayBoxFrame
         
         menuSelection={count}

         />

        </Grid>
        <Grid item xs={12} sm={4}

        >
          <MainCard />

        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <HorizontalLinearStepper />
            {/* <ButtonBases/> */}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Paper className={classes.paper}
            elevation={12}
          ></Paper> */}
        </Grid>


      </Grid>
    </div>
  );
}
