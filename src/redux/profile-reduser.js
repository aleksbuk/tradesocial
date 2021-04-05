
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = { 
    
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
    
};
export const profileReduser = (state = initialState, action) => {

    switch (action.type) {
       
        case ADD_POST:
            let newPost = {
                id: 6,
                post: state.newPostText,
                likeCount: 0
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }


}

export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
export default profileReduser;