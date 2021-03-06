import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Banner from '/Users/kylegreene/Prime/Tier 3/Solo Project/prime-solo-project-master/src/pictures/Icaghowan4C_GTC.jpg'


const styles = theme => ({
  
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    palette: {
      primary: '#0060af'
    }
  },
  
});


class LoginPage extends Component {
 
  state = {
    username: '',
    password: '',
  };
 
  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
    if (this.props.user) {
      this.props.history.push('/home')
    }
    else {
      this.props.history.push('/alumniRegistration')
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }
  
  render() {
     const { classes } = this.props;
    
    return (
    <div>
      <img src={Banner} style={{ marginLeft:'17%'}} />
    
   
      <Container component="main" maxWidth="xs">
        
      <div className={classes.paper}>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form className={classes.form} noValidate onSubmit={this.login}>
          <h1>Login</h1>
          <div>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username:"
              name="username"
              autoComplete="username"
              autoFocus
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
          </div>
          <div>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
           
          </div>
          <div>
              <Button variant="contained" color="primary"
                className={classes.submit}
                fullWidth
                variant="contained"
              type="submit"
              name="submit"
              value="Log In"
            >
              Log In
              </Button>
          </div>
        </form>
        <center>
          <Button variant="contained" color="primary"
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register / Admin 
          </Button>
        </center>
      </div>
      </Container>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
  user: state.user
});


export default connect(mapStateToProps)(withStyles(styles)(LoginPage));