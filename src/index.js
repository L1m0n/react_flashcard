import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import cards from './reducers/index';
import {createStore, combineReducers} from 'redux';

const store = createStore(combineReducers({
    cards
}));

render(
    <App />,
    document.getElementById('root')
);


