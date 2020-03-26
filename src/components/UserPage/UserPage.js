import React, { Component } from 'react';
import { connect } from 'react-redux';


// This is the page where the user will land upon log in. 
//It includes a Facebook feed of camp updates as well as a search box to search for alumni. 

class UserPage extends Component {
  state = {
    category: "firstName",
    search: ""
  };

  searchAlumni = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ALUMNI_SEARCH_QUERY',
      payload: this.state
    })
    this.props.history.push('/searchResultsPage');

  }
  handleChange = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
    console.log(this.state);

  }

  render() {
    return (
      <>
        <div>
          <h1 id="welcome">
            Welcome, {this.props.user.username}!
    </h1>
          <div className="fb-page" data-href="https://www.facebook.com/campicaghowan" data-tabs="timeline" data-width=""
            data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
            data-show-facepile="true">
          </div>
          <blockquote cite="https://www.facebook.com/campicaghowan" className="fb-xfbml-parse-ignore"><a
            href="https://www.facebook.com/campicaghowan">YMCA Camp Icaghowan</a></blockquote>
          {/* <LogOutButton className="log-in" /> */}
        </div>
        <form className="searchForm" onSubmit={this.searchAlumni}>
          <select onChange={this.handleChange('category')} value={this.state.category} placeholder='category'>
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="email">Email</option>
            <option value="yearsAtCamp">Year spent at Camp</option>
            <option value="phoneNumber">Phone Number</option>
          </select>
          <input onChange={this.handleChange('search')} value={this.state.search} placeholder='search'></input>
          <input
            className="search"
            type="submit"
            name="submit"
            value="Search"
          />
        </form>
      </>

    )
  };
}
// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
