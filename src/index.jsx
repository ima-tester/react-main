import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';


import './index.scss';

import {App} from './App';
import {Routes} from './pages/Routs';


ReactDOM.render(
    <HashRouter>
        <App>
            <Routes />
        </App>
    </HashRouter>,
    window.document.getElementById('react-root')
);
