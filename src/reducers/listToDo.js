import {ADD_TODO,REMOVE_ITEM,CHANGE_STATUS} from '../constant/ActionType';
// khởi tạo kho lưu trữ 
var initialState = {
  listTodo: []
};

const collectionToDo = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return{
              listTodo: [{text:action.payload,isComplete: false},...state.listTodo]
            };
        case REMOVE_ITEM:
          const newTasks = [...state.listTodo];
          newTasks.splice(action.payload, 1);
            return{
              listTodo: newTasks
            };
        case CHANGE_STATUS:
          const newTodos = [...state.listTodo];
          newTodos[action.payload].isComplete = !newTodos[action.payload].isComplete;
            return{
              listTodo: newTodos
            };
        default :
            return state;
    }
}

export default collectionToDo;