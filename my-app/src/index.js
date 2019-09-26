import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css"
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.querySelector('#root'));



