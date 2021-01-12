import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import appReducers from './reducers/index';

 // chức năng debug redux
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// khởi tạo store
const store = createStore(
  appReducers,
  composeEnhancer(applyMiddleware())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
