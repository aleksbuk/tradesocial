import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

console.log(classes)

const Navbar = () => {
return <nav className= {classes.nav}>

      <div className= {classes.item}>
        
      <div>
      <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink> 
      </div>
      <div className= {`${classes.item} ${classes.active}`}>
        <NavLink to='/dialogs' activeClassName={classes.activeLink}>Message</NavLink>
      </div>
      <div>
        <NavLink to='/watchList' activeClassName={classes.activeLink}>Watch list</NavLink>
      </div>
      <div>
      <NavLink to='/myCalendar' activeClassName={classes.activeLink}>My calendar</NavLink>
      </div>
      
      <div>
        <a>Settings</a>
       </div>
      </div>

      <div className= {classes.friend} >Friends</div>
    </nav>
}
export default Navbar; 
