import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import MyCalendar from './components/MyCalendar/MyCalendar';
import Watchlist from './components/Watchlist/Watchlist';
import store from './redux/store';
const App = (props) => {


  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wraper-content'>

          <Route path='/Dialogs'
            render={() => <Dialogs
              store= {props.store}
              dialogsData={props.state.profile.dialogsData}
              messages={props.state.messagesPage.messages} 
              newMessageText={props.state.messagesPage.newMessageText}
              dispatch={props.dispatch}
              updateNewMessage={props.updateNewMessage} 
               
              />} />
          <Route path='/Profile'
            render={() => <Profile
              postData={props.state.profile.postData}
              newPostText={props.state.profile.newPostText}
              dispatch={props.dispatch} 
              updateNewPostText={props.updateNewPostText}/>} />

          <Route path='/Watchlist' render={() => <Watchlist />} />
          <Route path='/MyCalendar' render={() => <MyCalendar />} />

        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
