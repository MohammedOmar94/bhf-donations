import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL = 'https://api.justgiving.com/5f0fd882/v1';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
