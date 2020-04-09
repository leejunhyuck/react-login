import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import configureStore, { history } from './configureStore'

// console.log(store)

const store = configureStore()

ReactDOM.render(
    <Provider store= {store}>
        <App history={history}></App>
    </Provider>
    , 
    document.getElementById('root'));

serviceWorker.unregister();
