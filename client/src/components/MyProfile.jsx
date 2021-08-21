import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ProfileCard from './ProfileCard';
import ProfileText from './ProfileText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      fixedHeight: {
        height:400,
      },
  }));

          
           
export default function MyProfile() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
  
    <div className={classes.root}>
      <Grid  container 
               direction="row"
  justify="center"
  alignItems="center" ><Grid item xs={12} md={11} >
              <Paper className={fixedHeightPaper}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>my Profile</Typography>
              
      <Grid container spacing={1}>
       
     
          <Paper className={classes.paper}><ProfileCard/></Paper>
        <Divider></Divider>
       
        <Grid item xs={12}>
          <Paper className={classes.paper}><ProfileText/></Paper>
        </Grid>
       <Divider/>
       <Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
                
              </Paper>
            </Grid>
            </Grid>
    
    </div>
      
      
      
    

  );
}
