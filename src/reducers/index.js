import { combineReducers } from 'redux';
import addToDo from './addToDo';

const appReducers = combineReducers({
  addToDo
});

export default appReducers;