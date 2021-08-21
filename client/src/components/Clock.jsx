import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import AnalogClock from 'analog-clock-react';
import Card from '@material-ui/core/Card';

let options = {
    width: "180px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#17a2b8",
    centerColor: "#459cff",
    handColors: {
      second: "#d81c7a",
      minute: "#fff",
      hour: "#fff"
    }
};

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
       <Typography component="h2" variant="h6" color="primary" gutterBottom>current time</Typography>
     <Card>
      <CardContent>
      <AnalogClock {...options} className={classes.title}/>
      </CardContent>
      </Card>
    </React.Fragment>
  );
}
