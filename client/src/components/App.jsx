import React from "react";
import Dashboard from './Dashboard';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import MyProfile from './MyProfile';
import SignIn from './SignIn';
import Register from './register';

function App()
{
  window.nm="true";
  window.vw="true";
  window.cl="true";
  window.fm="false";
  

  return(
    <Router>
    <div>
    
    <Switch>
    <Route path="/" exact component={SignIn}/> 
    <Route path="/home" exact component={Dashboard}/>
    <Route path="/register" exact component={Register}/>
    <Route path="/profile" component={MyProfile} /> 
    </Switch>
     
    </div>
    </Router>
  );
  
}
export default App;
