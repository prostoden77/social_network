import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
const App = (props) => {
  debugger
  return (<BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div class='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <Dialogs  store={props.store} dialogs={props.state.messagespage} />} />
        <Route path='/profile' render={() => <Profile
          profilepage={props.state.profilepage}
          dispatch={props.dispatch} />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/Settings' render={() => <Settings />} />
      </div>
    </div>
  </BrowserRouter>
  );
}
export default App;