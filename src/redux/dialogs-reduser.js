const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'you are good' },
        { id: 4, message: 'yo' },
        { id: 5, message: 'you' }
    ],
    newMessageText: 'Write your text'
}
const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMess;
            return state;
        default:
            return state
    }

}
export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' })
export const updateNewMessageActionCreator = (mess) =>
    ({ type: 'UPDATE-NEW-MESSAGE', newMess: mess })

export default dialogsReduser;