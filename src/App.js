import React,{useState} from 'react'
// addToDo function lấy data từ input truyền lên reducers
import {addToDo} from './actions/addToDoAction'
// kết nối giúp redux kết nối với react vì bản chất redux nó làm thư viện hoạt động riêng biệt vơi react
import { connect } from 'react-redux';

// fetchItemTodo hàm gửi dữ liệu hoạt động ở component App truyền sang addToDo để gửi đi
// listToDo data được lấy từ store thông qua mapStateToProps
const App = ({fetchItemTodo,listToDo}) => {
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
        <ol>
          {listToDo.map((item,i)=>
          <li key={i}>{item}</li>
          )}
        </ol>
      </form>
    </>
  )
}
//gọi dữ liệu từ state từ store
const mapStateToProps = state => {
  return {
      listToDo: state.addToDo.listTodo
  }
}
// gửi dữ liệu lên state trên store
const mapDispatchToProps = dispatch => {
  return {
    // chuyển dữ liệu từ 
    fetchItemTodo: (valueInput) => {dispatch(addToDo(valueInput));}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
