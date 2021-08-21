import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        // minWidth: 120,
        width: '300px',
      },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userid, setUserid] = useState('');
  const [pno, setPno] = useState('');
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(firstName, lastName, email, password);

//   };
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });

  };
//   onSubmit={handleSubmit}
function submit1(e){
    handleChange(e)
    e.preventDefault();
    const result={firstName,lastName,email,password,userid,pno,state}
   console.log(result)

    axios.post('http://localhost:8080/SignUp',result)
    .then((res) => {
      alert(res.data)
  }).catch((error) => {
      console.log(error)
  });
  }
  return (
    <form className={classes.root}  onSubmit={(e)=>submit1(e)}>
      <TextField
        label="First Name"
        variant="outlined"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        label="userid"
        variant="outlined"
        required
        value={userid}
        onChange={e => setUserid(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
        <TextField
          id="outlined-password-input"
          label="phone number"
         variant="outlined"
         value={pno}
        onChange={e => setPno(e.target.value)}
        />
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Role</InputLabel>
        <Select
          native
          value={state.name}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>manager</option>
          <option value={20}>ceo</option>
          <option value={30}>devloper</option>
          <option value={40}>lead</option>
        </Select>
      </FormControl>
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

  
export default Form;