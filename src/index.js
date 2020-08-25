import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';
export let rerendertree=(state)=>{
    ReactDOM.render(<App state={store.getState()} store={store}
    dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
}
rerendertree(store.getState())
store.subscribe(rerendertree)
