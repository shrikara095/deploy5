import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '62ch',
    },
  },
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '30ch',
  },
  divide:{
      marginBottom:'10px',
  },
  flabel:{
    marginTop:'20px',
  },
    flabel1:{
      marginTop:'50px',
    },
    
        Button1:{
            marginLeft:"376px",
    },
    firstField:{

      margin: theme.spacing(1),
      width: '25ch',
    
    }
}));


export default function Viewwrkflw() {
  const classes = useStyles();
   const [val, setValue] = React.useState('approve');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <form className={classes.root} onSubmit={(e)=>proceedwork(e,val)} noValidate autoComplete="off">
      
      <div>
      <Typography variant="h5" component="h2">
           enter the workflow name
      </Typography>
       <TextField id="standard-basic" style={{width:'25ch'}}  />
         <Divider className={classes.divide}/>
       <FormLabel component="legend" className={classes.flabel}>add activities</FormLabel>
    
        <TextField
          id="outlined-multiline-static"
          label="add note"
          multiline
          rows={4}
          
          variant="outlined"
        />
      
      
          <div>
    <Divider className={classes.divide}/>
    <FormControl component="fieldset" >
     
      <FormLabel component="legend" className={classes.flabel}>add action</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={val} onChange={handleChange}>
        <FormControlLabel value="approve" control={<Radio />} label="approve" />
        <FormControlLabel value="deny" control={<Radio />} label="deny" />
       {/* <FormControlLabel value="cancel" control={<Radio />} label="cancel" />*/}
       
      </RadioGroup>
    </FormControl>
    </div>
  
      <Button type="submit" variant="outlined" color="secondary" size="large" >
  Submit
</Button>


      
        
      
        
      </div>
    </form>
  );
}
function proceedwork(e,val)
{
   e.preventDefault();
  
  
  let request1={
    workflowname:document.getElementById('ffield').value,
    note:document.getElementById('outlined-multiline-static').value,
    action:val,
  };
  console.log(request1)
  axios.post('http://localhost:8080/form',request1)
  .then((res)=>{
    console.log(res.data)
  }).catch((error)=>{
    console.log(error)
    console.log("inside catch")
  })
  
  
 

}