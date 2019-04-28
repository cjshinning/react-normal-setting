import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
// import App from './App';
import Index from './container/index/index';
import List from './container/list/list';
import Detail from './container/detail/detail';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Index}></Route>
            <Route path='/list' component={List}></Route>
            <Route path='/detail/:id' component={Detail}></Route>
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
