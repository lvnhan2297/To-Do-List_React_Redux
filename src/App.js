import React,{useState} from 'react'
import {addToDo} from './actions/toDoAction'
import { connect } from 'react-redux';
import ListToDo from './components/ListToDo'

const App = ({fetchItemTodo}) => {
  // khởi tạo state cho input 
  const [valueInput, setValueInput] = useState('');
  // sự kiện lấy giá trị input
  const handleChange = (e) => {
    setValueInput(e.target.value);
  }

  const addItemTodDo = (e) => {
    e.preventDefault();
    // truyền giá trị từ ô input
    if(valueInput!==''){
      // truyền giá trị input cho function fetchItemTodo
      fetchItemTodo(valueInput);
    }
    setValueInput('');
  }

  return (
    <>
    <h1>TODO LIST</h1>
      <form>
        <input type="text" value={valueInput} onChange={handleChange}/>
        <button onClick={addItemTodDo}>add list</button>
      </form>
        <ListToDo/>
    </>
  )
}

// gửi dữ liệu lên state trên store
const mapDispatchToProps = dispatch => {
  return {
    // chuyển dữ liệu từ 
    fetchItemTodo: (valueInput) => {dispatch(addToDo(valueInput))},
  }
}

export default connect(null,mapDispatchToProps)(App)
