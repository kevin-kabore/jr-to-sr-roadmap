import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers.js';
import 'tachyons';


const store = createStore(searchRobots)

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
