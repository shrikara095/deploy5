import React, {useState }  from 'react';
 import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
window.arr17=[];
export default function Steps(props)
    {
  const [value, setValue] = useState();


  // function qwerty(val1) {
  // 	window.arr17.push(val1)
    
    


  //   console.log(people)
  //   console.log("hiii")
  // 	console.log(window.arr17)

  // }
  const handleChange = (event) => {
    setValue(event.target.value);
    
  };
  
  return(
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="step1"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<CreateIcon />}
  >
    
     <h2 className="vertical-timeline-element-title">assignee</h2>
   <TextField
          id="outlined-multiline-flexible"
          label="name"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
        <div style={{margin:"3px",marginLeft:"90px"}}>

     <Button variant="outlined" onClick={()=>props.abc(value)} color="secondary" size="large" >
  confirm
</Button>
{/*<Button variant="outlined" color="secondary" size="large" >
  add step
</Button>*/}
</div>
  
  </VerticalTimelineElement>);
}
