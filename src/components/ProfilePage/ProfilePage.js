import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        return (
            <>

                {this.props.userInfo &&
                    <div>
                    <h2>First Name: {this.props.userInfo.firstName}</h2>
                        <h2>Last Name: {this.props.userInfo.lastName}</h2>
                        <h2>Email: {this.props.userInfo.email}</h2>
                        <h2>Phone Number: {this.props.userInfo.phoneNumber}</h2>
                        <h2>Age: {this.props.userInfo.age}</h2>
                        <h2>Gender: {this.props.userInfo.gender}</h2>
                        <h2>Years At Camp: {this.props.userInfo.yearsAtCamp}</h2>
                        <h2>Favorite Camp Activity: {this.props.userInfo.favoriteActivity}</h2>
                        <h2>Favorite Camp Memory: {this.props.userInfo.favoriteMemory}</h2>
                        <h2>Do you currently Give to the Annual fund?: {this.props.userInfo.annualFund}</h2>
                        <h2>Interested in doing volunteer work?: {this.props.userInfo.volunteerWork}</h2>
                        <h2>Would you like to be on our News list?: {this.props.userInfo.newsList}</h2>
                        <h2>Are you willing to be contacted by camp?: {this.props.userInfo.willingToBeContacted}</h2>
                    </div>

                }
                <>
                <Link to='/editProfilePage'>Edit Profile</Link>
                </>
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
    userInfo: state.userProfile.userProfileReducer
});

export default connect(mapStateToProps)(ProfilePage);

