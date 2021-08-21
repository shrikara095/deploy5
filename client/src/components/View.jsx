
import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    Color: '#784af4',
   
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    Color: '#784af4',

    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'workflow is in first step';
    case 1:
      return 'workflow is in 2nd step';
    case 2:
      return 'workflow is in 3rd step';
    default:
      return 'workflow is in'+step+ 'step';
  }
}


  


   
  
  
             

function createsteps(we)
{
  // console.log(we)
 return (<Step key={we}>
            <StepLabel>{we}</StepLabel>
          </Step>)

}



    
     
 function View() {
  const classes = useStyles();
  const [data,setdata]=React.useState([]);
   //update active step\
   useEffect(() => {
  window.arr=[]  
 axios.get('http://localhost:8080/getWorkFlow')
      .then(res => {

        console.log(res.data)
        setdata(res.data)
      window.arr=res.data
    })
},[])  
  

  
  

  return (
    <div className={classes.root}>
   
    {data.map(label=>{
      return(<>
    <h2 className="vertical-timeline-element-title">{label[0]}</h2>

    <Stepper alternativeLabel activeStep={label[1]}>

    {console.log(label.slice(1,label.length))}
    {label.slice(2,label.length).map(createsteps)}
 

        </Stepper> 
        <div>
          {label[0] === label.length ?(
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(label[1])}</Typography>
            </div>)}
        <Divider />
            </div>
          </>)})}
           
    </div>

  );
}
export default View;
