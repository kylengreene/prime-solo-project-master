import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
const styles = theme => ({
    container: {
        display: 'flex',
        direction: "row",
        justify: "flex-start",
        alignItems: "flex-start",
    },
    paper: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        marginTop: theme.spacing(3),
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});

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
        const { classes } = this.props;
        return (
            <>
                <h1>Alumni Search</h1>
                <div className={classes.paper}>
                <Grid item xs={12} m={6} >
                <FormControl className={classes.form}>
                    <InputLabel >Please select a Search Category</InputLabel>
                    <Select
                        id="category"
                        type="category"
                        name="category"
                        value={this.state.category}
                        onChange={this.handleChange('category')}
                    >
                        <MenuItem value="firstName">First Name</MenuItem>
                        <MenuItem value="lastName">Last Name</MenuItem>
                        <MenuItem value="email">Email</MenuItem>
                        <MenuItem value="yearsAtCamp">Year spent at Camp</MenuItem>
                        <MenuItem value="phoneNumber">Phone Number</MenuItem>
                    </Select>
                    
                </FormControl>
       
            <TextField
                name="search"
                variant="outlined"
                required
                fullWidth
                id="search"
                label="Search"
                autoFocus
                value={this.state.search}
                onChange={this.handleChange('search')}
            />
            <form className={classes.form} onSubmit={this.searchAlumni}>
                <Button variant="contained" color="primary"
                    className={classes.submit}
                    fullWidth
                    variant="contained"
                    type="submit"
                    name="submit"
                    value="Search"
                >
                    Search
              </Button>
                </form>
                </Grid>
       </div>
    
                <h1>Search Results</h1>
                <ul>
                    {this.props.results.searchResults.map((result) => {
                        return (
                            <li key={result.id} > <img height="150" src={result.url} /> {result.firstName} {result.lastName}  <button onClick={() => this.viewProfile(result.id)}> View {result.firstName}'s Profile</button></li>
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
export default connect(mapStateToProps)(withStyles(styles)(SearchResultsPage));