import {ADD_TODO} from '../constant/ActionType';
// khởi tạo kho lưu trữ 
var initialState = {
  listTodo: []
};

const addToDo = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return{
              listTodo: [...state.listTodo,action.payload]
            };
        default :
            return state;
    }
}

export default addToDo;