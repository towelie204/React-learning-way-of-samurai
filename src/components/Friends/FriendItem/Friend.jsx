import React from 'react';
import classes from './Friend.module.css';

const Friend = (props) => {

    return(
        <div className={ classes.friend__wrapper }>
            <img className={ classes.friend__avatar } src={`images/friends/${ props.imageUrl }`} alt={ props.name }/>
            <div className={ classes.friend__name }>
                { props.name }
            </div>
        </div>
    )
}

export default Friend;