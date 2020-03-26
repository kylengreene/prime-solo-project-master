import React, { Component } from 'react';
import { connect } from 'react-redux';
import Async from 'react-promise';

class ProfilePage extends Component {
    state = {};

    componentDidMount() {
        this.props.dispatch({ type: 'GET_ALUMNI_PROFILE_INFO', payload:this.props.user.id }); 
    }

    componentDidUpdate() {
        let array = this.props.alumniInfo.alumniInfoForProfile;
        console.log('array analog', array);
        let userIndex = this.props.user.id;
        console.log('user index here', userIndex);
    }
    
        getInfo = () => {
            if (this.state)
                this.setState(this.props.alumniInfo);
        }

        render(){
            return (
                <div>
                {/* {this.props.alumniInfo.alumniInfoForProfile ?
                        <div>
                            {this.props.alumniInfo.alumniInfoForProfile.map(person =>{
                                if (person.id === this.props.user.id) {
                                    return <h1>{person.firstName}</h1>
                                }
                            })}
                        } */}
                        <div>
                            {JSON.stringify(this.props.alumniInfo.alumniInfoForProfile[this.userIndex])}</div>
                        :
                        <div>Loading...</div>
                    
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
        alumniInfo: state.alumniRegistrationReducer
    });

    export default connect(mapStateToProps)(ProfilePage);

