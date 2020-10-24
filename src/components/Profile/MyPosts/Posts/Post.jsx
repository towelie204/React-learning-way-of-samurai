import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img className={classes.avatar} src="images/photo_2020-10-16_18-25-52.jpg" alt="avatar" />
            <div className={classes.post__block}>
                <p className={ classes.post__text }>{props.message}</p>
                <div className={classes.likes}>
                    <span>{props.likes}</span>
                    <span className={ classes.post__like }>like</span>
                </div>
            </div>
        </div>

    )
}

export default Post;