const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let msg = state.newMessageBody;
            let body = {
                id: state.messages.length,
                message: msg
            }
            state.newMessageBody = '';
            state.messages.push(body);
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
})

export default dialogsReducer;