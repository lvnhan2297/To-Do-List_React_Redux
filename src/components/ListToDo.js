import React from 'react'
import {removeToDo,changeStatus} from '../actions/toDoAction'
import { connect } from 'react-redux';
const ListToDo = ({removeItemTodo,changeItemTodo,listToDo}) => {

  const handleRemoveItem = (i,e) =>{
    e.stopPropagation();
    removeItemTodo(i);
  }

  const handleComplete = (i) =>{
    changeItemTodo(i);
  }

  return (
    <>
    {listToDo && listToDo.map((item,i)=>
      <div key={i} className={item.isComplete ? 'complete' : null} onClick={handleComplete.bind(this, i)}>{item.text}
        <button onClick={handleRemoveItem.bind(this, i)} >remove</button>
      </div>
    )}
    </>
  )
}
//gọi dữ liệu từ state từ store
const mapStateToProps = state => {
  return {
    listToDo: state.collectionToDo.listTodo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // chuyển dữ liệu từ 
    removeItemTodo: (index) => {dispatch(removeToDo(index))},
    changeItemTodo: (index) => {dispatch(changeStatus(index))},
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListToDo)
