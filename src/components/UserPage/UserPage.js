import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, { props.user.username }!
    </h1>
    <div className="fb-page" data-href="https://www.facebook.com/campicaghowan" data-tabs="timeline" data-width=""
      data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
      data-show-facepile="true">
    </div>
    <blockquote cite="https://www.facebook.com/campicaghowan" className="fb-xfbml-parse-ignore"><a
      href="https://www.facebook.com/campicaghowan">YMCA Camp Icaghowan</a></blockquote>
    {/* <LogOutButton className="log-in" /> */}
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
