import React from "react";
// import ProfileInfo from './../../Profile/ProfileInfo/ProfileInfo'
import classes from './../../Dialogs.module.css';
// import Message from './'

const MessageAva = (props) => {
    // let messageAva = 
    // props.dialogsData.map (m => <Message name={m.name} id={m.id} />)
    return (
        <div className= {classes.item}>
        <img src= 'https://upload.wikimedia.org/wikipedia/ru/c/ce/Aang.png' />
    { props.name } 
    
    </div>
        
        
    )
}


export default MessageAva