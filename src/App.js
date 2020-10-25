import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/MyFriends';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {

  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <Navbar />
        <div className="content">
          <Route path='/profile'
            render={() => <Profile store={ props.store } />} />
          <Route path='/friends'
            render={() => <Friends state={props.state.friendsPage} />} />
          <Route path='/dialogs'
            render={() => <DialogsContainer store={ props.store } />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </main>
    </div>
  );
}

export default App;
