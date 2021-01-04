import React from "react";
import { Link } from "react-router-dom";
import {AppBar,Tabs,Tab, makeStyles} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import logo from './logo/logo.svg'
import './Navbar.css'



const useStyles = makeStyles(()=>({
   appbar:{
     backgroundColor:"#032541",
     height:70,

   },
  //  tabs:{
  //   marginTop:"12px"
  //  }, 
  //  logo:{
  //   paddingLeft: "25px",
  //   width: "80px",
    
  //  },
  //  link:{
  //   color: "white",
  //   textDecoration: "none",
  //  },
  //  searchIcon:{
  //   height: "50px",
  //  paddingLeft:"35%"
  
  //  }


}))


const Navbar = () => {
  const classes = useStyles();
  return (
       <div>
        {/* <AppBar position="static" className={classes.appbar}>
     
        <Tabs className={classes.tabs}>
        <Link to='/'><img className={classes.logo} src={logo} alt="Logo"/></Link>
          <Link to="/upcoming"> <Tab label="Upcoming" className={classes.link} /></Link>
          <Link to="/trending"><Tab label="Trending" className={classes.link}/></Link>
          <Link to="/tvshows"><Tab label="TV Shows" className={classes.link}/></Link>
          <Link to="/people"><Tab label="People" className={classes.link}/></Link>
          <SearchIcon className={classes.searchIcon}/>
        </Tabs>
       
         </AppBar> */}

     
        <AppBar position="static" className={classes.appbar}>

          <Link to='/'>
          <img className="Navbar-logo" src={logo} alt="Logo"/>
          </Link>
         <div className="Navbar-tabs">
          <Link to="/upcoming" >Upcoming </Link>
          <Link to="/trending">Trending</Link>
          <Link to="/tvshows">TV shows</Link>
          <Link to="/people">People</Link>
          <SearchIcon className=""/>
        </div> 
        
      
        </AppBar>
        
       </div>


  );
};

export default Navbar;
