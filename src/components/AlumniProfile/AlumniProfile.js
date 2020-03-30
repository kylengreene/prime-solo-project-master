import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    div: {
        display: 'flex',
        width: '100%'
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
    card: {
        diplay: "inline-block",
        display: "flex",
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

class AlumniProfile extends Component {
    state = {};
     handleEditClick(event) {
        event.preventDefault();
        console.log(this.props);
        // this.props.history.push('/editProfilePage');
    }

    takeMeBack = (event) =>{
        if(this.props.user.admin){
            this.props.history.push('/adminSearch');
        }
        else{
            this.props.history.push('/searchResultsPage');
        }
        
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.div}>
                <Card className={classes.card}>
                    <CardContent>
                        {this.props.search &&
                            <div>
                                <h3>First Name: </h3>{this.props.search.firstName}
                                <h3>Last Name:</h3>{this.props.search.lastName}
                                <h3>Email: </h3>{this.props.search.email}
                                <h3>Phone Number: </h3>{this.props.search.phoneNumber}
                                <h3>Age: </h3>{this.props.search.age}
                                <h3>Gender: </h3>{this.props.search.gender}
                                <h3>Years At Camp:</h3> {this.props.search.yearsAtCamp}
                                <h3>Favorite Camp Activity: </h3>{this.props.search.favoriteActivity}
                                <h3>Favorite Camp Memory: </h3>{this.props.search.favoriteMemory}
                                <h3>Do you currently Give to the Annual fund?: </h3>{this.props.search.annualFund}
                                <h3>Interested in doing volunteer work?: </h3>{this.props.search.volunteerWork}
                                <h3>Would you like to be on our News list?:</h3> {this.props.search.newsList}
                                <h3>Are you willing to be contacted by camp?: </h3>{this.props.search.willingToBeContacted}
                                <br></br>

                            <br></br>
                            <button onClick={this.takeMeBack}>Back To Search Results</button>
                            </div>
                        }
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent >
                        <div className={classes.profPic}>
                            <img height="600px" src={this.props.search.url} />

                        </div>
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
    userInfo: state.userProfile.userProfileReducer,
    search: state.searchReducer.searchResults[0]
});

export default connect(mapStateToProps)(withStyles(styles)(AlumniProfile));

