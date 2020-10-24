import React from 'react';
import Friend from './FriendItem/Friend';
import classes from './MyFriends.module.css';

const MyFriends = (props) => {

    let FriendsElements = props.state.friends.map( friend => {
        return <Friend id={friend.id} 
            name={friend.name}
            imageUrl={friend.imageUrl} /> 
    })

    return(
        <div>
            { FriendsElements }
        </div>
    )
}

export default MyFriends;