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
import Card from '@material-ui/core/Card';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// This is the page where the user will land upon log in. 
//It includes a Facebook feed of camp updates as well as a search box to search for alumni. 

const styles = theme => ({
  container:{
    display: 'flex',
    direction: "row",
    justify: "flex-start",
    alignItems: "flex-start",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    width: '100%'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
   
    display: "flex",
    width: "50%"
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  div: {
    display: 'flex',
    width: '100%'
  },
  formControl: {
    width: '100%',
    align: 'center'
  }
});

class UserPage extends Component {
  state = {
    category: "firstName",
    search: ""
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
    this.props.history.push('/searchResultsPage');

  }
  handleChange = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
    console.log(this.state);

  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.carousel}>
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
          
         
          <div className='div'>
     
          
            <div className='feed'>
          <div className="fb-page" data-href="https://www.facebook.com/campicaghowan" data-tabs="timeline" data-width=""
            data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
            data-show-facepile="true">
          </div>
          {/* <blockquote cite="https://www.facebook.com/campicaghowan" className="fb-xfbml-parse-ignore"><a
            href="https://www.facebook.com/campicaghowan">YMCA Camp Icaghowan</a></blockquote>  */}
            </div>
            
     
          
            <div className="search">
             <h1 id="welcome">
            Welcome, {this.props.user.username}!
    </h1> 
            <h1>Alumni Search</h1>
                <FormControl className={classes.formControl}>
               <InputLabel >Please select a Search Category</InputLabel>
                <Select
                  id="category"
                  type="category"
                  name="category"
                    value={this.state.category}
                  onChange={this.handleChange('category')}
                  width="300px"
                >
                    <MenuItem value="firstName">First Name</MenuItem>
                    <MenuItem value="lastName">Last Name</MenuItem>
                    <MenuItem value="email">Email</MenuItem>
                    <MenuItem value="yearsAtCamp">Year spent at Camp</MenuItem>
                    <MenuItem value="phoneNumber">Phone Number</MenuItem>
                </Select>
                <FormHelperText>Please Select</FormHelperText>
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
            </div>
        </div>
        
       
          
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
export default connect(mapStateToProps)(withStyles(styles)(UserPage));