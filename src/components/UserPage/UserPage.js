import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserPage.css';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Picture1 from '/Users/kylegreene/Prime/Tier 3/Solo Project/prime-solo-project-master/src/pictures/IMG_0098.png'
import Picture2 from '/Users/kylegreene/Prime/Tier 3/Solo Project/prime-solo-project-master/src/pictures/IMG_0118.jpeg'
import Picture3 from '/Users/kylegreene/Prime/Tier 3/Solo Project/prime-solo-project-master/src/pictures/IMG_0207.jpeg'
import Picture4 from '/Users/kylegreene/Prime/Tier 3/Solo Project/prime-solo-project-master/src/pictures/IMG_7658.JPG'
import Picture5 from '/Users/kylegreene/Prime/Tier 3/Solo Project/prime-solo-project-master/src/pictures/IMG_8056.JPG'
import Picture6 from '/Users/kylegreene/Prime/Tier 3/Solo Project/prime-solo-project-master/src/pictures/IMG_8751.jpeg'
import Picture7 from '/Users/kylegreene/Prime/Tier 3/Solo Project/prime-solo-project-master/src/pictures/IMG_9287.jpeg'
import Picture8 from '/Users/kylegreene/Prime/Tier 3/Solo Project/prime-solo-project-master/src/pictures/IMG_9463.jpeg'
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
        <div className="UserPage">
          <div className="carousel">
          <Carousel
              centered
              slidesPerPage={3}
              infinite
              keepDirectionWhenDragging
            autoPlay={3000}
            animationSpeed={1000}
            infinite
          >
            <img height='400' alt='camp icaghowan fun' src={Picture1}/>
              <img height='400' src={Picture2} alt='camp icaghowan fun' />
              <img height='400' src={Picture3} alt='camp icaghowan fun' />
              <img height='400' src={Picture4} alt='camp icaghowan fun' />
              <img height='400' src={Picture5} alt='camp icaghowan fun' />
              <img height='400' src={Picture6} alt='camp icaghowan fun' />
              <img height='400' src={Picture7} alt='camp icaghowan fun' />
              <img height='400' src={Picture8} alt='camp icaghowan fun' />
          </Carousel>
        </div>
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
        </div>
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
