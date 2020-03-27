import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { ExportToCsv } from 'export-to-csv';


// This page is accessed upon selecting search from user page. It displays search results.

const options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'My Awesome CSV',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
};
const csvExporter = new ExportToCsv(options);
class AdminSearch extends Component {
    state = {
        category: "firstName",
        search: ''
    };

    searchAlumni = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'ALUMNI_SEARCH_QUERY',
            payload: this.state
        })
    }
    handleChange = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
        console.log(this.state);

    }

    viewProfile = (id) =>{

    this.props.history.push('/alumniProfile') 
    }

    deleteUser = (id) =>{
        Swal.fire({
            title: 'Are you sure you want to delete this user?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete this user!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'User Deleted!',
                    'Database Updated.',
                    'success'
                )
                this.props.dispatch({ type: 'DELETE_USER', payload: id })
                this.props.history.push('/adminHome');
                
            }
        })
    
    }
   

    exportResults = () => {
        console.log('logging from csv generator', this.props.results.searchResults);
        
        csvExporter.generateCsv(this.props.results.searchResults);

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
                <h1>Admin Search:</h1>
                <ul>
                    {this.props.results.searchResults?
                    this.props.results.searchResults.map((result) => {
                        return (
                            <li key={result.id}>{result.firstName} {result.lastName} (Years at Camp): {result.yearsAtCamp}  <button onClick={() => this.viewProfile(result.id)}>View Profile</button>  <button onClick={() => this.deleteUser(result.user_id)}>Delete User</button></li>
                        )
                    })
                    :
                    <h1>No Results</h1>
                }
                </ul>
              
                <button onClick={this.exportResults}>Export Results As CSV</button>
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
export default connect(mapStateToProps)(AdminSearch);
