import React from 'react';
import './style.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo">
      {todos.map(todo => (
        <li
          style={{listStyle:"none", marginTop: '3px', background:"#FFFFFF", color:"black"}}
          className="list-items"
          key={todo.id}
        >
          <input
            style={{ background: 'none',marginLeft:"20px", borderStyle: 'none',listStyle:'none',color:"#0000000 ",height: '30px', marginRight: '10px', width: '250px' }}
            type="text"
            value={todo.title}
            className="list"
            onChange={event => event.preventDefault()}
          />



          <button
            style={{marginLeft:"80px", background: 'none', borderStyle: 'none', height: '20px' }}
            className="button-complite task-button"
            onClick={() => handleDelete(todo)}
          >
      <i style={{ color: '#d50000', fontSize:"20px" }} class="fa fa-times-circle-o" aria-hidden="true"></i>
          </button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
