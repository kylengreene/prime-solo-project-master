import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
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
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 375,
        marginTop: theme.spacing(-1)
    }
});

class EditProfilePage extends Component {
    state = {
        userId: this.props.user.id,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        age: '',
        gender: '',
        yearsAtCamp: '',
        favoriteActivity: '',
        favoriteMemory: '',
        annualFund: '',
        volunteerWork: '',
        newsList: '',
        willingToBeContacted: '',
    };

    componentDidMount(){
        this.setState (this.props.userProfile);
        console.log('logging in edit profile', this.state);
        
    }

    editUserProfile = (event) => {
        event.preventDefault();

        Swal.fire({
            title: 'Are you sure you want to save these edits?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, submit these edits it!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Edits Saved!',
                    'Your profile has been edited.',
                    'success'
                )
                console.log('firing editUserProfile with object:', this.state);

                this.props.dispatch({
                    type: 'EDITED_USER_INFO',
                    payload: this.state
                })
                this.props.dispatch({ type: 'GET_USER_PROFILE', payload: this.props.user.id });
                this.props.history.push('/profilePage');
            }
        })
      
    } // end alumniRegistration

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
        console.log(this.state);
        

    }

    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Alumni Information
        </Typography>
                    <form className={classes.form} noValidate onSubmit={this.alumniRegistration}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={this.state.firstName}
                                    onChange={this.handleInputChangeFor('firstName')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChangeFor('lastName')}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChangeFor('email')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="Phone Number"
                                    name="phoneNumber"
                                    autoComplete="phoneNumber"
                                    value={this.state.phoneNumber}
                                    onChange={this.handleInputChangeFor('phoneNumber')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="age"
                                    label="Age"
                                    autoComplete="age"
                                    type="age"
                                    name="age"
                                    value={this.state.age}
                                    onChange={this.handleInputChangeFor('age')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="gender"
                                    label="Gender"
                                    type="gender"
                                    name="gender"
                                    value={this.state.gender}
                                    onChange={this.handleInputChangeFor('gender')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="yearsAtCamp"
                                    label="Years At Camp"
                                    type="yearsAtCamp"
                                    name="yearsAtCamp"
                                    value={this.state.yearsAtCamp}
                                    onChange={this.handleInputChangeFor('yearsAtCamp')}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="favoriteActivity"
                                    label="Favorite Camp Activity"
                                    type="favoriteActivity"
                                    name="favoriteActivity"
                                    value={this.state.favoriteActivity}
                                    onChange={this.handleInputChangeFor('favoriteActivity')}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="favoriteMemory"
                                    label="Favorite Memory"
                                    type="favoriteMemory"
                                    name="favoriteMemory"
                                    value={this.state.favoriteMemory}
                                    onChange={this.handleInputChangeFor('favoriteMemory')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel> Do you currently give to the Annual Fund?</InputLabel>
                                    <Select
                                        labelId="annualFund"
                                        id="annualFund"
                                        name="annualFund"
                                        value={this.state.annualFund}
                                        onChange={this.handleInputChangeFor('annualFund')}
                                    >
                                        <MenuItem value="" disabled>
                                            Do you currently give to the Annual Fund
          </MenuItem>
                                        <MenuItem value={'Yes'}>Yes</MenuItem>
                                        <MenuItem value={'No'}>No</MenuItem>
                                    </Select>
                                    <FormHelperText>Please Select</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel >Are you willing to be contacted?</InputLabel>
                                    <Select
                                        id="willingToBeContacted"
                                        type="willingToBeContacted"
                                        name="willingToBeContacted"
                                        value={this.state.willingToBeContacted}
                                        onChange={this.handleInputChangeFor('willingToBeContacted')}
                                    >
                                        <MenuItem value={'Yes'}>Yes</MenuItem>
                                        <MenuItem value={'No'}>No</MenuItem>
                                    </Select>
                                    <FormHelperText>Please Select</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} >
                                <FormControl className={classes.formControl}>
                                    <InputLabel >Are you interested in volunteering at camp?</InputLabel>
                                    <Select
                                        id="volunteerWork"
                                        type="volunteerWork"
                                        name="volunteerWork"
                                        value={this.state.volunteerWork}
                                        onChange={this.handleInputChangeFor('volunteerWork')}
                                    >
                                        <MenuItem value="" disabled>
                                            Are you interested in volunteering at camp?
                                        </MenuItem>
                                        <MenuItem value={'Yes'}>Yes</MenuItem>
                                        <MenuItem value={'No'}>No</MenuItem>
                                    </Select>
                                    <FormHelperText>Please Select</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} >
                                <FormControl className={classes.formControl}>
                                    <InputLabel> Would you like to be added to our News List? </InputLabel>
                                    <Select

                                        id="newsList"
                                        name="newsList"
                                        value={this.state.newsList}
                                        onChange={this.handleInputChangeFor('newsList')}
                                    >
                                        <MenuItem value="" disabled>
                                            Would you like to be added to our News List?
                                        </MenuItem>
                                        <MenuItem value={'Yes'}>Yes</MenuItem>
                                        <MenuItem value={'No'}>No</MenuItem>
                                    </Select>
                                    <FormHelperText>Please Select</FormHelperText>
                                </FormControl>
                            </Grid>

                        </Grid>
                        <div>
                            <input
                                className="register"
                                type="submit"
                                name="submit"
                                value="Register"
                            />
                        </div>

                    </form>
                    <center> <button type="button"
                        className="link-button"
                        onClick={() => this.alumniRegistration}
                    >
                        Login
          </button>
                    </center>


                </div>
            </Container>
        );
    }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
    errors: state.errors,
    user: state.user,
    alumniInfo: state.alumniRegistrationReducer,
    userProfile: state.userProfile.userProfileReducer
});

export default connect(mapStateToProps)(withStyles(styles)(EditProfilePage));

