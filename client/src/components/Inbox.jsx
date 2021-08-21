import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import thuzi from './images/thuzi.jpeg';
// import chel from './images/chel.jpeg';
// import kold from './images/kolder.jpeg';
import axios from 'axios';
import rand from './images/download.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '66ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
 
}));
export default  function Inbox() {
  const [data,setdata]=useState([])
  const classes = useStyles();
   useEffect( () => {
  
  
   axios.get('http://localhost:8080/getmessages')
      .then(res => {
    
      
        const person=res.data
        console.log(person)
        setdata(res.data)
 }).catch(error=>{
      console.log(error)
      console.log("inside catch") })
      
},[])  
return (
      <>
        
      {data.map(msg=> <List className={classes.root}>
      <ListItem alignItems="flex-start" component="li">
        <ListItemAvatar>
      
          <Avatar alt="suja" src={rand} />
        </ListItemAvatar>
        <ListItemText
          primary={msg.first_Name+" "+msg.last_Name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                 {msg.first_Name+" "+msg.last_Name} has {decide(msg.message_type)}

              </Typography>
              ----{msg.message}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
      </List>
    
)}
    
      </>
      
  );
}


function decide(msg1)
{
  console.log(msg1)
  console.log("hiiiS")
  if(msg1==="approve")
  {
    
    return "approved "
  }
  else if(msg1==="deny")
  {
    return "denied "
  }
   else if(msg1==="cancel")
  {
    return "canceled "
  }
}