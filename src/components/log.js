import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import AccountCircle from '@material-ui/icons/AccountCircle';
import SecuritySharp from '@material-ui/icons/SecuritySharp';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

import {Styled}from '../utils/style.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
 root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
paper:{
	padding:10,
},

 
};

class Login extends React.Component{

  state={
    'loading':false,
    'username':'',
    'pin':'',
    'unameError':false,
    'pinError':false,
    'unameErrorText':'',
    'pinErrorText':'',
  }

   handleChange = name => event => {

    let value=event.target.value;

    let errorName=name==='username'?'unameError':'pinError';
    let error=name==='username'?'unameErrorText':'pinErrorText';
    let errorText=name==='username'?'Name is empty':'Pin must be empty';

    if(value===''){
    this.setState({[error]:errorText,[errorName]:true, });
    }else{

    this.setState({ [error]:'',[errorName]:false,});
    }
    //console.log("name is "+error+" value is "+value);

    this.setState({
      [name]:value,
    
    });
    //console.log(this.state.email);
  };

  handleSubmit=name=>event=>{

if(this.state.username=='')
  { 
    this.setState({loading:false,unameError:true,unameErrorText:'Username is empty',pinError:false,}); 
  }
  else if(this.state.pin=='')
  {
   this.setState({loading:false,pinError:true,pinErrorText:'Pin must not be empty',unameError:false,}); 
  }
  else
  { 


   this.setState({
    loading:true,
   })
 }
  };

	render(){
			const { classes } = this.props;
      const {loading}=this.state;
	return (

         <Paper className={classes.paper} style={{padding:10,}} square elevation="0">

<Grid container direction="row" spacing={8}>
<Grid item xs={12} md={4} sm={4} style={{textAlign:'center',}}>
<img src="./images/cover.png" height="150" />
</Grid>

<Grid item xs={12} md={8} sm={8}>

<Card className={classes.card} >
      
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Log to your account.
          </Typography>
        
       

 <form className={classes.margin}>
        <Grid container spacing={16} alignItems="flex-end" className={classes.grid2}>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item xs>
            <TextField id="input-with-icon-grid" error={this.state.unameError} helperText={this.state.unameErrorText} label="@Username" style={{width:'100%'}} onChange={this.handleChange('username')}/>
          </Grid>
        </Grid>

        <Grid container spacing={16} alignItems="flex-end" className={classes.grid2}>
          <Grid item>
            <SecuritySharp />
          </Grid>
          <Grid item xs>
            <TextField id="input-with-icon-grid" label="Account pin" error={this.state.pinError} helperText={this.state.pinErrorText}  style={{width:'100%'}} onChange={this.handleChange('pin')} />
          </Grid>
        </Grid>

        <Grid container spacing={24} alignItems="flex-end" className={classes.grid2}>
         
         <Grid item sm>
         </Grid>
          <Grid item sm>
          <Styled>{({ classes }) => <Button fullWidth className={classes.root} variant="contained" color="primary" onClick={this.handleSubmit("")} >
        Sign in
      </Button>}</Styled>
      
         </Grid>
          <Grid item xs>
       
       {loading==true &&
       <CircularProgress className={classes.progress} /> 

       
      }
       
        </Grid>
         </Grid>
      </form>
        </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          help?
        </Button>
        <Button size="small" color="primary">
          Trouble signing in?
        </Button>
      </CardActions>
    </Card>

</Grid>
</Grid>

 

          </Paper>
		);
}
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles) (Login);