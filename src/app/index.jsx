console.log("Hello World!");

import { store } from './store'

console.log(store.getState() );

import React from 'react';
import ReactDOM from 'react-dom';

import { Dashboard } from './components/Dashboard'


ReactDOM.render(
     <Dashboard/>,
     document.getElementById("app")
);
