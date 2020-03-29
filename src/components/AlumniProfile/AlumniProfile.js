import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        return (
            <>

                {this.props.search.url &&
                    <div>
                        <h2>First Name: {this.props.search.firstName}</h2>
                        <h2>Last Name: {this.props.search.lastName}</h2>
                        <h2>Email: {this.props.search.email}</h2>
                        <h2>Phone Number: {this.props.search.phoneNumber}</h2>
                        <h2>Age: {this.props.search.age}</h2>
                        <h2>Gender: {this.props.search.gender}</h2>
                        <h2>Years At Camp: {this.props.search.yearsAtCamp}</h2>
                        <h2>Favorite Camp Activity: {this.props.search.favoriteActivity}</h2>
                        <h2>Favorite Camp Memory: {this.props.search.favoriteMemory}</h2>
                        <h2>Do you currently Give to the Annual fund?: {this.props.search.annualFund}</h2>
                        <h2>Interested in doing volunteer work?: {this.props.search.volunteerWork}</h2>
                        <h2>Would you like to be on our News list?: {this.props.search.newsList}</h2>
                        <h2>Are you willing to be contacted by camp?: {this.props.search.willingToBeContacted}</h2>
                    </div>
    }
                <div> <img src={this.props.search.url} /></div>
                
                <button onClick={this.takeMeBack}>Back To Search Results</button>
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
    userInfo: state.userProfile.userProfileReducer,
    search: state.searchReducer.searchResults[0]
});

export default connect(mapStateToProps)(AlumniProfile);

