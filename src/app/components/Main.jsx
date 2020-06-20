import React from 'react';
//import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { ConnectedTaskDetail } from './TaskDetail'
//import { ConnectedDashboard } from './Dashboard'
//import { ConnectedNavigation } from './Navigation'
//import { ConnectedLogin } from './Login'
//import { ConnectedSignup } from './Signup'
import { store } from '../store';
//import { history } from '../store/history';
//import { Redirect } from 'react-router';
import {ConnectedDashboard} from './Dashboard';

// const RouteGuard = Component =>({match})=>
//     !store.getState().session.authenticated ?
//         <Redirect to="/"/> :
//         <Component match={match}/>;

export const Main = ()=>(
    //<Router history={history}>
        <Provider store={store}>
            <div>
                {/*DashBoard Goes Here*/}
                <ConnectedDashboard/>
            </div>
        </Provider>
);