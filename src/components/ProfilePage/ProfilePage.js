import React, { Component } from 'react';
import { connect } from 'react-redux';
import Async from 'react-promise';

class ProfilePage extends Component {
    state = {};

    componentDidMount() {
        this.props.dispatch({ type: 'GET_ALUMNI_PROFILE_INFO' });
    }

    componentDidUpdate() {
       let array = this.props.alumniInfo.alumniInfoForProfile;
    for (let item of array){
    if (this.props.alumniInfo.alumniInfoForProfile.user_id === this.props.user.id) {
                this.setState (item);
                console.log('compdidupdate!!!',this.state);
}
        // array.forEach(element => {
        //     if (this.props.alumniInfo.alumniInfoForProfile.user_id == this.props.user.id) {
        //         this.setState =element;
        //         console.log(this.state);
                
        //     }
        // });
        
            //     }
            //     // this.setState (this.props.alumniInfo.alumniInfoForProfile)
            //    this.props.user.id

        }
    }
    
        getInfo = () => {
            if (this.state)
                this.setState(this.props.alumniInfo);


        }

        render(){
            return (
                <div>

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

