import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    div:{
display: 'flex',
width:'100%'
    },
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
    card:{
        diplay: "inline-block",
        display:"flex",
        width: "50%"
    },
    form: {
        width: "800px", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 375,
        marginTop: theme.spacing(-1)
    },
    
});

class ProfilePage extends Component {
    state = {};

    componentDidMount() {
        this.props.dispatch({ type: 'GET_USER_PROFILE', payload: this.props.user.id });
        console.log('testing id in profile', this.props.user.id);
    }

    handleEditClick(event){
        event.preventDefault();
        console.log(this.props);
        // this.props.history.push('/editProfilePage');
    }



    render() {
        const { classes } = this.props;
        return (
            <div className={classes.div}>
                <Card className={classes.card}>
                    <CardContent>
                {this.props.userInfo &&
                    <div>
                        <h3>First Name: </h3>{this.props.userInfo.firstName}
                        <h3>Last Name:</h3>{this.props.userInfo.lastName}
                        <h3>Email: </h3>{this.props.userInfo.email}
                        <h3>Phone Number: </h3>{this.props.userInfo.phoneNumber}
                        <h3>Age: </h3>{this.props.userInfo.age}
                        <h3>Gender: </h3>{this.props.userInfo.gender}
                        <h3>Years At Camp:</h3> {this.props.userInfo.yearsAtCamp}
                        <h3>Favorite Camp Activity: </h3>{this.props.userInfo.favoriteActivity}
                        <h3>Favorite Camp Memory: </h3>{this.props.userInfo.favoriteMemory}
                        <h3>Do you currently Give to the Annual fund?: </h3>{this.props.userInfo.annualFund}
                        <h3>Interested in doing volunteer work?: </h3>{this.props.userInfo.volunteerWork}
                        <h3>Would you like to be on our News list?:</h3> {this.props.userInfo.newsList}
                        <h3>Are you willing to be contacted by camp?: </h3>{this.props.userInfo.willingToBeContacted}
                    </div>

                }
                </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent >
             <img height = "400px" src={this.props.userInfo.url} />
                        <Link to='/editProfilePage'>Edit Profile</Link>
                    </CardContent>             
              </Card>
              
               
            
                
            </div>
        )

    }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
    errors: state.errors,
    user: state.user,
    userInfo: state.userProfile.userProfileReducer
});

export default connect(mapStateToProps)(withStyles(styles)(ProfilePage));
