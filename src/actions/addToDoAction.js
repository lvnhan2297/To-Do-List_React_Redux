import {ADD_TODO} from '../constant/ActionType';

export const addToDo = (data) => {
  return {
    // tên hành động
      type: ADD_TODO,
    // dữ liệu gửi đi
      payload: data
  }
}