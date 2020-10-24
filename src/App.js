import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/MyFriends';

const App = (props) => {

  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <Navbar />
        <div className="content">
          <Route path='/profile'
            render={() => <Profile profilePage={props.state.profilePage} 
              dispatch={ props.dispatch } />} />
          <Route path='/friends'
            render={() => <Friends state={props.state.friendsPage} />} />
          <Route path='/dialogs'
            render={() => <Dialogs state={props.state.dialogsPage}
              dispatch={ props.dispatch } />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </main>
    </div>
  );
}

export default App;
