import { combineReducers } from 'redux';
import collectionToDo from './listToDo';

const appReducers = combineReducers({
  collectionToDo
});

export default appReducers;