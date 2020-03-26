import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        this.setState (this.props.alumniInfo.userSpecificProfile);
        console.log('logging in edit profile', this.state);
        
    }

    editUserProfile = (event) => {
        event.preventDefault();
        console.log('firing editUserProfile with object:', this.state);

        this.props.dispatch({
            type: 'EDITED_USER_INFO',
            payload: this.state
        })
        this.props.history.push('/profilePage');
    } // end alumniRegistration

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
        console.log(this.state);
        

    }

    render() {
        return (
            <div>

                <form className="alumniRegistrationForm" onSubmit={this.editUserProfile}>
                    <h1>Alumni Information</h1>
                    <div>
                        <label htmlFor="firstName">
                            First Name:
              <input
                                type="text"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleInputChangeFor('firstName')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="lastName">
                            Last Name:
              <input
                                type="lastName"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleInputChangeFor('lastName')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email">
                            Email:
              <input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChangeFor('email')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">
                            Phone Number:
              <input
                                type="phoneNumber"
                                name="phoneNumber"
                                value={this.state.phoneNumber}
                                onChange={this.handleInputChangeFor('phoneNumber')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="age">
                            Age:
              <input
                                type="age"
                                name="age"
                                value={this.state.age}
                                onChange={this.handleInputChangeFor('age')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="gender">
                            Gender:
              <input
                                type="gender"
                                name="gender"
                                value={this.state.gender}
                                onChange={this.handleInputChangeFor('gender')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="yearsAtCamp">
                            Years At Camp:
              <input
                                type="yearsAtCamp"
                                name="yearsAtCamp"
                                value={this.state.yearsAtCamp}
                                onChange={this.handleInputChangeFor('yearsAtCamp')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="favoriteActivity">
                            Favorite Camp Activity:
              <input
                                type="favoriteActivity"
                                name="favoriteActivity"
                                value={this.state.favoriteActivity}
                                onChange={this.handleInputChangeFor('favoriteActivity')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="favoriteMemory">
                            Favorite Camp Memory:
              <input
                                type="favoriteMemory"
                                name="favoriteMemory"
                                value={this.state.favoriteMemory}
                                onChange={this.handleInputChangeFor('favoriteMemory')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="annualFund">
                            Do you currently give to the Annual Fund?:
              <input
                                type="annualFund"
                                name="annualFund"
                                value={this.state.annualFund}
                                onChange={this.handleInputChangeFor('annualFund')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="volunteerWork">
                            Are you interested in doing any volunteer work at camp?:
              <input
                                type="volunteerWork"
                                name="volunteerWork"
                                value={this.state.volunteerWork}
                                onChange={this.handleInputChangeFor('volunteerWork')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="willingToBeContacted">
                            Is it okay for camp to contact you?:
              <input
                                type="willingToBeContacted"
                                name="willingToBeContacted"
                                value={this.state.willingToBeContacted}
                                onChange={this.handleInputChangeFor('willingToBeContacted')}
                            />
                        </label>
                    </div><div>
                        <label htmlFor="newsList">
                            Would you like to be added to our News List?:
              <input
                                type="newsList"
                                name="newsList"
                                value={this.state.newsList}
                                onChange={this.handleInputChangeFor('newsList')}
                            />
                        </label>
                    </div>
                    <div>
                        <input
                            className="edit"
                            type="submit"
                            name="edit"
                            value="Edit Profile"
                        />
                    </div>

                </form>
                <center> 
                </center>
            </div>
        );
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

export default connect(mapStateToProps)(EditProfilePage);

