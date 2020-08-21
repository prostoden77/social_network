import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';
export let rerendertree=(state)=>{
    ReactDOM.render(<App state={store.getState()}
    dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
}
rerendertree(store.getState())
store.subscribe(rerendertree)
