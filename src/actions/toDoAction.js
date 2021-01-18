import {ADD_TODO,REMOVE_ITEM,CHANGE_STATUS} from '../constant/ActionType';

export const addToDo = (data) => {
  return {
    // tên hành động
      type: ADD_TODO,
    // dữ liệu gửi đi
      payload: data
  }
}
export const removeToDo = (index) => {
  return {
    // tên hành động
      type: REMOVE_ITEM,
    // dữ liệu gửi đi
      payload: index
  }
}
export const changeStatus = (index) => {
  return {
    // tên hành động
      type: CHANGE_STATUS,
    // dữ liệu gửi đi
      payload: index
  }
}
