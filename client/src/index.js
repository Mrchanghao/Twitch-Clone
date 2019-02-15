import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import 'semantic-ui-css/semantic.min.css';
import {Provider} from 'react-redux';
import {store} from './store/index';

import App from './components/App';


const app = <Provider store={store}><App /></Provider>

ReactDOM.render(app, document.getElementById('root'));