import React, {useState}  from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Steps from './Createworkflowsteps';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    Button1:{
            marginLeft: "586px",
    },
    Button2:{

      marginLeft:"0",
    
    }
}));

export default function createworkflow() {
  const classes = useStyles();
  const [add,setAdd]= useState([]);
  const [people,setpeople] =useState([]);

  function abc(val1)
  {
  
    setpeople(prevAdd =>{
        
      return [...prevAdd,val1]
     
    })
    

  }
 console.log(people)

  
  function addplus(){
    setAdd(prevAdd =>{
      return [...prevAdd,<Steps abc={abc}/>]
    })

  }
 


  return(

    <div>
     <Typography component="h1" variant="h5" >
            workflowname
          </Typography>
            <div>
        <TextField style={{marginBottom:'5ch',width:'40ch'}} id="name" label="name" variant="outlined" />
       
    </div>
    <VerticalTimeline>
    {add}
    </VerticalTimeline>
  
    

 <Button variant="outlined" onClick={()=>addplus()} color="secondary" size="large" className={classes.Button2}>
  add step
</Button>
 <Button variant="outlined" color="secondary" onClick={()=>submitflow(people)}  size="large" className={classes.Button1} >
  submit
</Button>
</div>

);

}
function submitflow(people){
  
  
  let users={
    workflowname:document.getElementById('name').value,
    names:people,
      };
  
  
  axios.post('http://localhost:8080/createflow1',users)
  .then((res) => {
    console.log(res.data);
   }).catch((error) => {
    console.log(error)
});
}

 