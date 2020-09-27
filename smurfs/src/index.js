import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { smurfReducer } from './reducers/smurfReducer';

import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';

const store = createStore(smurfReducer, applyMiddleware(thunk));
console.log('pl: index.js: store: ', store);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
