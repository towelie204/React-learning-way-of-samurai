import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={classes.dialog}>
            <img className={ classes.dialog__avatar } src={`images/friends/${ props.imageUrl }`} alt={ props.name }/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;