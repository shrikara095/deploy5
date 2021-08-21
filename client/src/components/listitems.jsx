import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useHistory} from 'react-router-dom';



 function  ListItems(props){
  const history=useHistory();
  
  return(
  <div>
   
    <ListItem button onClick={()=>props.allf(false,false,false,false,false,true) }>
      <ListItemIcon>
      <AddCircleOutlineIcon />
        
      </ListItemIcon>
      
      <ListItemText primary="Create workflow" />
  
    </ListItem>
    
    <ListItem button onClick={() => view(props) }>
      <ListItemIcon>
          
        <VisibilityIcon/>
      </ListItemIcon>
      <ListItemText primary="view workflows" />
    </ListItem>
    <ListItem button onClick={() => props.allf(false,false,false,true,false,false) }>
      <ListItemIcon>
      <CreateIcon />
      </ListItemIcon>
      <ListItemText primary="Proceed workflow" />
    </ListItem>
 
    <ListItem button onClick={() =>view(props)}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText button primary="logout" onClick={()=>history.push("/")} />
    </ListItem>
  </div>
);

}
function SecondaryListItems() {
  return(
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
}
function view(props)
{
  
  return(props.allf(false,false,true,false,false,false))
 
}

export {ListItems,SecondaryListItems};

