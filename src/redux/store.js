import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id:1, message: 'Hello, React!', likesCount: 6 },
                { id:2, message: 'I\'ll hack you)', likesCount: 17 },
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id:1, name: 'Ira', imageUrl: 'ava_ira.jpg' },
                { id:2, name: 'Chester', imageUrl: 'ava_chester.jpg' },
                { id:3, name: 'Lizard', imageUrl: 'ava_lizard.jpg' },
            ],
            messages: [
                { id:1, message: 'hi!' },
                { id:2, message: 'how is your it-kamasutra?' },
                { id:3, message: 'yo' },
                { id:4, message: 'yo!' },
                { id:5, message: 'react instead sleep' },
            ],
            newMessageBody: ''
        }, 
        friendsPage: {
            friends: [
                { id:1, name: 'Ira', imageUrl: 'ava_ira.jpg' },
                { id:2, name: 'Chester', imageUrl: 'ava_chester.jpg' },
                { id:3, name: 'Lizard', imageUrl: 'ava_lizard.jpg' },
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {   //{ type: 'ADD-POST' }
    
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
    
}

export default store;

window.store = store;