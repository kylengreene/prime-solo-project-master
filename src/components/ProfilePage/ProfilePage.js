import React, { Component } from 'react';
import { connect } from 'react-redux';
import Async from 'react-promise';

class ProfilePage extends Component {
    state = {};

    componentDidMount() {
        this.props.dispatch({ type: 'GET_ALUMNI_PROFILE_INFO', payload: this.props.user.id });

    }

    componentDidUpdate() {


    }

    getInfo = () => {
        if (this.state)
            this.setState(this.props.alumniInfo);
    }

    render() {
        return (
            <>

                {this.props.alumniInfo.userSpecificProfile &&
                    <div>
                        <h2>First Name: {this.props.alumniInfo.userSpecificProfile.firstName}</h2>
                        <h2>Last Name: {this.props.alumniInfo.userSpecificProfile.lastName}</h2>
                        <h2>Email: {this.props.alumniInfo.userSpecificProfile.email}</h2>
                        <h2>Phone Number{this.props.alumniInfo.userSpecificProfile.phoneNumber}</h2>
                        <h2>Age: {this.props.alumniInfo.userSpecificProfile.age}</h2>
                        <h2>Gender: {this.props.alumniInfo.userSpecificProfile.gender}</h2>
                        <h2>Years At Camp: {this.props.alumniInfo.userSpecificProfile.yearsAtCamp}</h2>
                        <h2>Favorite Camp Activity: {this.props.alumniInfo.userSpecificProfile.favoriteActivity}</h2>
                        <h2>Favorite Camp Memory: {this.props.alumniInfo.userSpecificProfile.favoriteMemory}</h2>
                        <h2>Do you currently Give to the Annual fund?: {this.props.alumniInfo.userSpecificProfile.annualFund}</h2>
                        <h2>Interested in doing volunteer work?: {this.props.alumniInfo.userSpecificProfile.volunteerWork}</h2>
                        <h2>Would you like to be on our News list?: {this.props.alumniInfo.userSpecificProfile.newsList}</h2>
                        <h2>Are you willing to be contacted by camp?: {this.props.alumniInfo.userSpecificProfile.willingToBeContacted}</h2>
                    </div>

                }

            </>
        )

    }

}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
    errors: state.errors,
    user: state.user,
    alumniInfo: state.alumniRegistrationReducer
});

export default connect(mapStateToProps)(ProfilePage);

