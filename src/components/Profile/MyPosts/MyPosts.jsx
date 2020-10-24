import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map( post => {
        return <Post message={ post.message } likes={ post.likesCount } />
    })


    let addPost = () => {
        props.dispatch(addPostCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        let action = updateNewPostTextCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.myPosts}>
            <div className={ classes.addPost__wrapper }>
                <textarea onChange={ onPostChange }
                    value={ props.newPostText } 
                    className={ classes.addPost__input } />
                <button onClick={ addPost } className={ classes.addPost__btn }>
                    Add post
                </button>
            </div>
            <div>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;