import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return(
        <nav className={classes.nav}>
            <div className={classes.navLink__wrapper}>
                <NavLink to="/profile" activeClassName={classes.activeLink} 
                    className={classes.navLink}>
                        Profile
                </NavLink>
            </div>
            <div className={classes.navLink__wrapper}>
                <NavLink to="/friends" activeClassName={classes.activeLink} 
                    className={classes.navLink}>
                        Friends
                </NavLink>
            </div>
            <div className={classes.navLink__wrapper}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink} 
                    className={classes.navLink}>
                        Messages
                </NavLink>
            </div>
            <div className={classes.navLink__wrapper}>
                <NavLink to="/news" activeClassName={classes.activeLink} 
                    className={classes.navLink}>
                        News
                </NavLink>
            </div>
            <div className={classes.navLink__wrapper}>
                <NavLink to="/music" activeClassName={classes.activeLink} 
                    className={classes.navLink}>
                        Music
                </NavLink>
            </div>
            <div className={classes.navLink__wrapper}>
                <NavLink to="settings" activeClassName={classes.activeLink} 
                    className={classes.navLink}>
                        Settings
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;