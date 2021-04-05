import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reduser'

const MyPosts = (props) => {

  let postsElement =
    props.postData.map(p => <Post message={p.post} likeCount={p.likeCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {

    props.dispatch(addPostActionCreator());
  }
  let onPostChenge = () => {
    let text = newPostElement.current.value;
    let action = (updateNewPostTextActionCreator(text));
    props.dispatch(action);
  }
  return (
    <div className={classes.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChenge} ref={newPostElement} s
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>

      <div className={classes.posts}>
        {postsElement}

      </div>
    </div>
  )

}
export default MyPosts