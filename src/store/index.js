import { createStore, compose, applyMiddleware } from 'redux';

import appReducers from '../reducers/index';

 // chức năng debug redux
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// khởi tạo store
export const store = createStore(
  appReducers,
  composeEnhancer(applyMiddleware())
);