import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import AlumniRegistration from '../AlumniRegistration/AlumniRegistration'
import ProfilePage from '../ProfilePage/ProfilePage'
import SearchResultsPage from '../SearchResults/SearchResults'
import EditProfilePage from '../EditProfilePage/EditProfilePage'
import AdminLogIn from '../AdmingLogIn/AdminLogIn'
import './App.css';
import AdminSearch from '../AdminSearch/AdminSearch';
import AlumniProfile from '../AlumniProfile/AlumniProfile';
import AdminHome from '../AdminHome/AdminHome'
import AWS from '../Aws/Aws'

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            <Route
              exact
              path="/adminLogIn"
              component={AdminLogIn}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            <ProtectedRoute
              exact
              path="/adminHome"
              component={AdminHome}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            <ProtectedRoute
              exact
              path="/aws"
              component={AWS}
            />
            <ProtectedRoute
              exact
              path="/alumniRegistration"
              component={AlumniRegistration}
            />
            <ProtectedRoute
              exact
              path="/profilePage"
              component={ProfilePage}
            />
            <ProtectedRoute
              exact
              path="/searchResultsPage"
              component={SearchResultsPage}
            />
            <ProtectedRoute
              exact
              path="/editProfilePage"
              component={EditProfilePage}
            />
            <ProtectedRoute
              exact
              path="/adminSearch"
              component={AdminSearch}
            />
            <ProtectedRoute
              exact
              path="/alumniProfile"
              component={AlumniProfile}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
