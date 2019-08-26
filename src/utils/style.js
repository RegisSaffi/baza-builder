import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function MyTheme(t){

const theme = createMuiTheme({
  palette: {
  	 type: t===0?'light':'dark',
    primary: { main: '#f6567e' }, // Purple and green play nicely together.
    secondary: { main: '#f8a774', }, // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true,
  	fontFamily: 'Trebuchet MS',
   },
});

return theme;
}


function createStyled(styles, options) {
  function Styled(props) {
    const { children, ...other } = props;
    return children(other);
  }
  Styled.propTypes = {
    children: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };
  return withStyles(styles, options)(Styled);
}

const Styled = createStyled({
  root: {
    background: 'linear-gradient(45deg, #f8a774 30%, #f6567e 90%)',
    borderRadius: 25,
    border: 0,
    color: 'white',
    height: 40,
    padding: '0 30px',
    boxShadow: '0 1px 1px 2px rgba(255, 105, 135, .3)',
  },
});


export {MyTheme,Styled};