import React from 'react';
import  classes from './Post.module.css';

const Post = (props) => {
  
return (

<div className= {classes.item}>
    <img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4iwojH8SPBXk-n_U2ezw1vkHNec_ClX5t_w&usqp=CAU' />
{ props.message } 

<div>
<span>like { props.likeCount }</span>
</div>
</div>

)

}
export default Post