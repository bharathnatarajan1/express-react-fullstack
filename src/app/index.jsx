console.log("Hello World!");

import { store } from './store'

console.log(store.getState() );

import React from 'react';
import ReactDOM from 'react-dom';

//import { Dashboard } from './components/Dashboard'
import { Main } from './components/Main'


ReactDOM.render(
     <Main/>,
     document.getElementById("app")
);
