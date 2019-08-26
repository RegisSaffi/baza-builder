import React,{useState} from 'react';
import logo from './logo.svg';
import ReactPageScroller from "react-page-scroller";

import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIconRounded from '@material-ui/icons/MoveToInboxRounded';
import MailIconRounded from '@material-ui/icons/MailRounded';
import CodeRounded from '@material-ui/icons/CodeRounded';
import HelpRounded from '@material-ui/icons/HelpRounded';
import InfoRounded from '@material-ui/icons/InfoRounded';
import MoneyRounded from '@material-ui/icons/MoneyRounded';
import QuestionAnswerRounded from '@material-ui/icons/QuestionAnswerRounded';
import ChatRounded from '@material-ui/icons/ChatRounded';
import PaletteRounded from '@material-ui/icons/PaletteRounded';

import {MyTheme}from './utils/style.js'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import {Link,Switch,Route} from 'react-router-dom';
import Typist from 'react-typist';
import {MessageMe,MessageHer} from './components/messageholder.js';
import Welcome from './components/welcome.js';
import Login from './components/log.js';


const routes = [
  { path: '/',
    exact: true,
    main: () => <Welcome/>
  },
  { path: '/welcome',
  exact: true,
  main: () => <Welcome/>
},
  { path: '/auth',
  exact: true,
  main: () => <Login/>
},
];


const styles = {
 root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  parent:{
  	height:'100%',
  	marginTop:56,
  },

paper:{
	padding:10,
},

  bottom:{
  	height:200,
  	maxHeight:300,
  	width:'100%',
  	position:'fixed',
  	bottom:0,
  	opacity:0.5,

  	  	backgroundImage: "url('./images/background.png')",
  	 backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  
  }
};

class Home extends React.Component {
  state = {
    left: false,
    theme:0,
  };

  constructor(props) {
    super(props);
  let t = window.localStorage.getItem('theme');
  console.log("theme is "+t);
  if (t===null || t===0) {
    
    this.setState=({theme:0});
  }else{
this.state={theme:1};
  }
}

   toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
  };

  switchTheme=(t)=>()=>{

  	this.setState({
      theme:t,

  	});

   // window.localStorage.setItem('theme',t);
  };

render(){

	const { classes } = this.props;
	const {theme}=this.state;

	const sideList = (
      <div className={classes.list}>

<div style={{width:230,textAlign:'center',padding:10,}}>
<img src="./images/icon.png" width="80" />
</div>
        <List>
      
           <ListItem button key='Meet Baza'>
              <ListItemIcon><ChatRounded /></ListItemIcon>
              <ListItemText primary='Meet Baza'/>
            </ListItem>

             <ListItem button key='What is it?'>
              <ListItemIcon><QuestionAnswerRounded /></ListItemIcon>
              <ListItemText primary='What is it?' />
            </ListItem>

             <ListItem button key='Donate'>
              <ListItemIcon><MoneyRounded /></ListItemIcon>
              <ListItemText primary='Donate' />
            </ListItem>

             <ListItem button key='Help'>
              <ListItemIcon><HelpRounded /></ListItemIcon>
              <ListItemText primary='Help' />
            </ListItem>
        </List>
        <Divider />
        <List>
          
            <ListItem button key='Developers'>
              <ListItemIcon><CodeRounded /></ListItemIcon>
              <ListItemText primary='Developers'/>
            </ListItem>

             <ListItem button key='About us'>
              <ListItemIcon><InfoRounded /></ListItemIcon>
              <ListItemText primary='About us' />
            </ListItem>

             <ListItem button key='Contact'>
              <ListItemIcon><MailIconRounded /></ListItemIcon>
              <ListItemText primary='Contact' />
            </ListItem>
         
        </List>
      </div>
    );

  return (
  	 <MuiThemeProvider theme={MyTheme(theme)}>


     <center>
    <Paper square className={classes.parent} elevation={0}>

     <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>

      <div className={classes.root}>
      <AppBar position="fixed" color="inherit" elevation={0}>
        <Toolbar>
           <div className="circle1"/>
         <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
           
          </Typography>
   
         <Link to="/auth" className={classes.link}><Button color="secondary"  variant="outlined" style={{borderRadius:25,marginRight:10}}>Get started</Button></Link>
         <Button variant="fab" mini color="inherit" elevation={0} onClick={this.switchTheme(theme===0?1:0)}>
         <PaletteRounded color="secondary"/>
         </Button>

          <div class="circle2"/>
        </Toolbar>
      </AppBar>
    </div>


      <Grid container spacing={0} >
        <Grid item xs={12} sm={12} md={6} >

 
  <Switch>
                    {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
          
        ))}
        
          </Switch>


        </Grid>
        <Grid item xs={12} sm={12} md={5} >
          <Paper className={classes.paper} square  elevation="0" style={{textAlign:'center'}} >
<div>
<img src="./images/iphone.png" height="550"/>

{ !true?<List>
          {["x7rtuciyvkjv   h uj gvg ","h hjjvbknbk kbj","bobonobo  k oubonoob","hey, how are you","I am fine","what are you doing?","nothing, you?","Nothing too","dbvwjfvdf dfdjv dvdv dv dv djvjdv dvd wvwdv wd vdvwv wdv wdv ndv dsv sdv sdvj vdv djvd v dvsj dsv","dvfisvdsv dsv dv dk vdsv dks vks vkds "].map((text, index) => (
            <ListItem key={text}  style={{margin:0,padding:0,}}>
             
               <ListItemText
          primary={
            <React.Fragment>
             {index%2!=0? <MessageMe message={text}/>:<MessageHer message={text}/>}
            </React.Fragment>
          }
        />
            </ListItem>
          ))}
 
    </List>:null
}

</div>
          </Paper>
        </Grid>
        </Grid>

<div className={classes.bottom}/>
    
    </Paper>
    </center>
   </MuiThemeProvider>
  );
}
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
