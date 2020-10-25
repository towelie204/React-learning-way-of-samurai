const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id:1, message: 'Hello, React!', likesCount: 6 },
        { id:2, message: 'I\'ll hack you)', likesCount: 17 },
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.messageText;
            return state;
        default:
            return state;
    }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const updateNewPostTextCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    messageText: text
})

export default profileReducer;