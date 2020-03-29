import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { ExportToCsv } from 'export-to-csv';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


// This page is accessed upon selecting search from user page. It displays search results.

const options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Alumni Export',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
};
const csvExporter = new ExportToCsv(options);
let searchArray = [];
class AdminSearch extends Component {
    state = {
       category:'firstName',
       search:''
    };

    searchAlumni = (event) => {
        event.preventDefault();
        console.log('testing search array un search function', searchArray);
        
        this.props.dispatch({
            type: 'ALUMNI_SEARCH_QUERY',
            payload: searchArray
        })
        searchArray = [];
    }
    handleChange = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
        console.log(this.state);

    }

    saveSpecificSearch = () =>{
        searchArray.push(this.state) 
        console.log('search array', searchArray);
        
    }

    viewProfile = (id) =>{

    this.props.history.push('/alumniProfile') 
    }

    deleteUser = (id) =>{
        Swal.fire({
            title: 'Are you sure you want to delete this user?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'primary',
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

                <form className="searchForm" onSubmit={this.saveSpecificSearch}>
                    <select onChange={this.handleChange('category')} value={this.state.category} placeholder='category'>
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                        <option value="email">Email</option>
                        <option value="yearsAtCamp">Year spent at Camp</option>
                        <option value="phoneNumber">Phone Number</option>
                    </select>
                    <input onChange={this.handleChange('search')} value={this.state.search} placeholder='search'></input>
                    <input type="submit" value="Save Search Line"/> 
                </form>
                <form className="searchForm2" onSubmit={this.saveSpecificSearch}>
                    <select onChange={this.handleChange('category')} value={this.state.category} placeholder='category'>
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                        <option value="email">Email</option>
                        <option value="yearsAtCamp">Year spent at Camp</option>
                        <option value="phoneNumber">Phone Number</option>
                    </select>
                    <input onChange={this.handleChange('search')} value={this.state.search} placeholder='search'></input>
                    <input type="submit" value="Save Search Line" /> 
                </form>
                <Button onClick={this.searchAlumni}>Search</Button>
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
