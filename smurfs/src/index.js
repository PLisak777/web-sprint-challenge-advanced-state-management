import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';

import { smurfReducer } from './reducers/smurfReducer';

const store = createStore(smurfReducer, applyMiddleware(thunk));
=======
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import { smurfReducer } from '../src/reducers/smurfReducer';

export const store = createStore(smurfReducer, applyMiddleware(thunk));
>>>>>>> 121add124d1337086b7195122ea666b1c82a2e63

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
