import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return(
        <header className={classes.header}>
            <img className={classes.logo} src="./images/photo_2020-10-16_18-25-50.jpg" alt="cat"/>
        </header>
    )
}

export default Header;