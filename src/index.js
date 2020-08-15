import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';
import { addPost, updateNewPostText, subscribe } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
export let rerendertree=()=>{
    ReactDOM.render(<App state={state} updateNewPostText={updateNewPostText} addPost={addPost}/>, document.getElementById('root'));
}
rerendertree(state)
subscribe(rerendertree)

