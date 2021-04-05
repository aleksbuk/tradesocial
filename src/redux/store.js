import rerenderEntireTree from '../render.js'
import profileReduser from './profile-reduser'
import dialogsReduser from './dialogs-reduser'
import sidebarReduser from './sidebar-reduser'




let store = {
    _state: {
        messagesPage: {

            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hi' },
                { id: 3, message: 'you are good' },
                { id: 4, message: 'yo' },
                { id: 5, message: 'you' }
            ],
            newMessageText: 'Write your text'
        },

        profile: {
            dialogsData: [
                { id: 1, name: 'Aleksey' },
                { id: 2, name: 'Dmitiy' },
                { id: 3, name: 'Grigorii' },
                { id: 4, name: 'Eugeny' },
                { id: 5, name: 'Artem' }
            ],
            postData: [
                { id: 1, post: 'Hi, how are you?', likeCount: 5 },
                { id: 2, post: "It's my first post", likeCount: 8 },
                { id: 3, post: 'you are good', likeCount: 8 },
                { id: 4, post: 'yo', likeCount: 8 },
                { id: 5, post: 'you', likeCount: 8 }
            ],
            newPostText: 'it-proframing'
        },
        sidebar: {}

    },
    
    _callSubscriber() {
        console.log('State chenged')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },

    
    dispatch(action) {
        
      this._state.profile = profileReduser(this._state.profile, action);
      this._state.messagesPage = dialogsReduser(this._state.messagesPage, action);
      this._state.sidebar = sidebarReduser(this._state.sidebar, action);
      this._callSubscriber(this._state)
 
 }
    
}


export default store;

window.store = store;