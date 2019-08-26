import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

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

class Welcome extends React.Component{

	render(){
			const { classes } = this.props;
	return (

         <Paper className={classes.paper} style={{padding:10,}} square elevation="0">
<Grid container direction="row" spacing={8}>
<Grid item xs={12} md={4} sm={4} style={{textAlign:'center',}}>
<img src="./images/cover.png" height="150" />
</Grid>

<Grid item xs={12} md={8} sm={8}>

<Typography variant="h4" color="inherit" align="left" gutterBottom="true">
            Baza assistant
          </Typography>

<Typography variant="h6" align="left" gutterBottom="true">
            Let's build the future with AI driven services,
          </Typography>

<Typography variant="h6" align="left" gutterBottom="true">
           Meet Baza assistant, 
          </Typography>

          
           <Typography variant="h6" align="left" gutterBottom="true">
           A vertual assistant that can help you in daily life using Natural language processing to communicate with you!
          </Typography> 

      

     <Styled>{({ classes }) => <Button className={classes.root} variant="contained" color="primary" >
        Submit skill idea
      </Button>}</Styled>&nbsp;

     <Button className={classes.root} variant="outlined" style={{borderRadius:25,}} color="primary" >
        Learn more
      </Button>

</Grid>
</Grid>
          </Paper>
		);
}
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles) (Welcome);