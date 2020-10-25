let initialState = {
    friends: [
        { id:1, name: 'Ira', imageUrl: 'ava_ira.jpg' },
        { id:2, name: 'Chester', imageUrl: 'ava_chester.jpg' },
        { id:3, name: 'Lizard', imageUrl: 'ava_lizard.jpg' },
    ]
};

const friendsReducer = (state = initialState, action) => {
    return state;
}

export default friendsReducer;