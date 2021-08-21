import React,{useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PasswordUpdate from './PasswordUpdate';
import axios from 'axios'; 
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '25ch',
    },
  },
}));

export default function ProfileText() {
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
    profiles.map(profile=><form className={classes.root} noValidate autoComplete="off">
      <div>
     
      <Typography component="h2" variant="h6" color="primary" gutterBottom>Personal Details</Typography>
        <TextField
          required
          id="outlined-required"
          label="FirstName"
          defaultValue={profile.first_Name}
          variant="outlined"
        />
         <TextField
          required
          id="outlined-required"
          label="LastName"
          defaultValue={profile.last_Name}
          variant="outlined"
        />
         <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue={profile.email}
          variant="outlined"
        />
         <TextField
          required
          id="outlined-required"
          label="userId"
          defaultValue={profile.user_id}
          variant="outlined"
        />
         <TextField
          required
          id="outlined-required"
          label="Role"
          defaultValue={profile.Role}
          variant="outlined"
        />
        
        <TextField
          required
          id="outlined"
          label="phoneNo"
          defaultValue={profile.phone_No}
          variant="outlined"
        />

         <Typography component="h2" variant="h6" color="primary" gutterBottom>update password</Typography>
        <PasswordUpdate/>
      
      
      </div>
    </form>
  ));
}
