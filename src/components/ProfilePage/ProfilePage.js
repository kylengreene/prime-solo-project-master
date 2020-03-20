import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfilePage extends Component {
    state = {
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

    componentDidMount=()=>{
       this.props.dispatch({type: 'GET_ALUMNI_PROFILE_INFO'});
        // console.log(this.props.alumniRegistrationReducer.alumniInfoForProfile);
    
    }

    render(){
        return (
            <div>
                <h1>{this.state.firstName}</h1>
            </div>
        )
    }

}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(ProfilePage);

