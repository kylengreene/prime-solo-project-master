import React, { Component } from 'react';
import { connect } from 'react-redux';


// This page is accessed upon selecting search from user page. It displays search results.

class SearchResultsPage extends Component {
    state = {
        category: "firstName",
        search: ''
    };

    searchAlumni = (event) => {
        event.preventDefault();
        let searchArray = [];
        searchArray.push(this.state);
        console.log(searchArray);

        this.props.dispatch({
            type: 'ALUMNI_SEARCH_QUERY',
            payload: searchArray
        })
    }
    handleChange = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
        console.log(this.state);

    }

    viewProfile = (id) => {
        
        this.props.history.push('/alumniProfile')
    }


    render() {
        return (
            <>
       
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
                <h1>SEARCH RESULTS</h1>
                <ul>
                    {this.props.results.searchResults.map((result) => {
                        return (
                            <li key={result.id}>{result.firstName} {result.lastName} (Years at Camp): {result.yearsAtCamp}  <button onClick={() =>this.viewProfile(result.id)}>View Profile</button></li>
                        )
                    })}
                </ul>
            </>

        )
    };
}
// {
//     this.props.reduxState.movies.map((movie) => {
//         return (
//             <MovieListItem key={movie.movie_id} movie={movie} />
//         );
//     })
// }
// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
    user: state.user,
    results: state.searchReducer
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(SearchResultsPage);
