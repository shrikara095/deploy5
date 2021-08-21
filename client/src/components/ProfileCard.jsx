import React,{useState,useEffect} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 80,
    height:80,
    borderRadius:'100%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function ProfileCard() {
  const classes = useStyles();
   const [profiles,setprofiles]=useState([])
   useEffect( () => {
  
  
   axios.get('http://localhost:8080/getprofile')
      .then(res => {
        setprofiles(res.data)
       
 }).catch(error=>{
      console.log(error)
      console.log("inside catch") })
      
},[])  

  return (
   profiles.map(profile=><Card className={classes.root}>
    
     <CardMedia
        className={classes.cover}
        image="./images/download.jpg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
        
          <Typography component="h6" variant="h6">
            
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {profile.Role}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        <Typography component="h5" variant="h5">
            {profile.first_Name+" "+profile.last_Name}
          </Typography>
        </div>
      </div>
       </Card>
  ));
}