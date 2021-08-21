import React , {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import {ListItems,SecondaryListItems}  from './listitems';
// import SecondaryListItems from './SecondaryListItems';
import Inbox from './Inbox';
import Clock from './Clock'
import MyProfile from './MyProfile';
import logo from './images/pp.jpg';
import Fab from '@material-ui/core/Fab';
import Profile from './Profieside';
import View from './View';
import Proceedworkflow from './Proceedworkflow';
import Createworkflow from './Createworkflow';

// import SignIn from './SignIn';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  div:{
    display:'inline',
    height:0,
    width:0,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor:'rebeccapurple'
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
     
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height:400,
  },
  fixedHeight1: {
    height: 400,
  },
  logo:{
      marginRight:'10px'
  },
  space:
  {
    paddingLeft:'30px',
  },
  

}));


function Dashboard() {
  const classes = useStyles();
  const[darkMode,setDarkMode]=useState(false);
  const [nm,setNm] = useState(true);
  const [cl,setCl] = useState(true);
  const [vw,setVw] = useState(false);
  const [fm,setFm] = useState(false);
  const [pt,setPt]= useState(false);
  const [create,setCreate]=useState(false);
  const name = (ab) =>{
    setNm(ab);
  }
  
  const clock = (cd) => {
    setCl(cd);
  }
  const view = (vu) =>{
    setVw(vu);
  }
  const setf = (fm) =>{
    setFm(fm);
  }
  const allf = (n,c,v,s,p,z) =>{
      setNm(n);
      setCl(c);
      setVw(v);
      setFm(s);
      setPt(p);
      setCreate(z);
  }
  
 
  
    const theme = createMuiTheme({
     
        palette: {
          type:darkMode?"dark":"light",
        }
      });
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <ThemeProvider theme={theme}>
 
     <div className={classes.root}> 
    {/* <Paper> */}
      <CssBaseline />
      <AppBar position="absolute" style={{ backgroundColor: 'linear-gradient( 234.1deg,  rgba(199,45,143,1) 16.8%, rgba(249,154,73,1) 75.2% )'}} className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            // onChange={()=>setDarkMode(!darkMode)}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
          
       
            <MenuIcon />
           
          </IconButton>
          <Avatar alt="logo" src={logo} className={classes.logo}/>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Workflow
          </Typography>
          <Tooltip title="toggle dark/light">
          <IconButton color="inherit">
            <Brightness4Icon onClick={()=>setDarkMode(!darkMode)}/>
          </IconButton>
          </Tooltip>
          <Tooltip title="notifications">
          
          <IconButton color="inherit" onClick={() => allf(true,true,false,false,false,false)}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
         
          </Tooltip>
         
          <Tooltip title="profile">
          <Fab>
          <IconButton color='inherit' onClick={() => allf(false,false,false,false,true,false) }>
            <AccountCircleIcon /> 
          </IconButton>
          </Fab>
          </Tooltip>
          
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List><Profile allf={allf}/></List>
        <Divider/>
        <List><ListItems name={name} clock={clock} view={view} setf={setf} allf={allf}/></List>
        <Divider />
        <List><SecondaryListItems/></List>
      </Drawer>
    
    <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}> 
          {nm===true ? 
          <> 
           {/* NAME PART nm*/}
             <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}> 
                <Inbox />
            
                </Paper> 
            </Grid> 
            </>: null }
           {cl===true ?
            <>
            {/* CLOCKS cl*/}
             {/* Recent Deposits  */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Clock />
             </Paper>
            </Grid> 
            </> : null}
          
            {create===true ? 
            <>
            {/* create workflow vw */}

             Recent Orders 
             <Grid item xs={12}>
              <Paper className={classes.paper}>
                 <Createworkflow />
             
              </Paper>
            </Grid>
            </> : null }
            {fm===true ? 
            <>
            {/* proceed workflow*/}
            <Grid item xs={12} >
              <Grid  container 
               direction="column-reverse"
                justify="center"
                alignItems="center" >
              <Grid item xs={12} md={7} className={classes.space}>
              <Paper className={classes.paper}>
             
                  <Proceedworkflow />
              

              
              </Paper>
              </Grid>
              </Grid>
            </Grid> 
            </> : null }
         {/*view workflow*/}
            {vw===true ? 
            <>
              <Grid item xs={12} >
              
              <Grid item xs={12} md={12} className={classes.space}>
              <Paper className={classes.paper}>
           
             <View />
              </Paper>
              </Grid>
              </Grid>
            
            </> : null }
              {/* profile profile*/}
              {pt===true ? 
            <>
              <Grid item xs={12} >
              <Grid  container 
               direction="column-reverse"
                justify="center"
                alignItems="center" >
              <Grid item xs={12} md={12} className={classes.space}>
              <Paper className={classes.paper}>
           
              <MyProfile />
              
              </Paper>
              </Grid>
              </Grid>
            </Grid> 
            </> : null }

            
         
          </Grid>
       </Container>
        {Copyright()}
      </main> 

       {/* </Paper>  */}
    </div> 
    
    
    </ThemeProvider>
  );
}
export default  Dashboard;
