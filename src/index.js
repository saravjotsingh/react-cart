import React from 'react';
import ReactDOM from 'react-dom';
//this is for cart;

import App from './App';
import './index.css';
//this is for side bar;

import Sidebar from './sidebar.js';
import Dashboard from './admin-dashboard';
import AddItem from './addItem';
import OrderList from './orderlist';

import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Dashboard />, document.getElementById('root'));
//ReactDOM.render(<AddItem />, document.getElementById('root'));
ReactDOM.render(<OrderList />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
