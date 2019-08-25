import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.querySelector('#root'));



