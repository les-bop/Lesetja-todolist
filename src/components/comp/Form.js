import React from 'react';
import './style.css';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = event => {
    setInput(event.target.value);
  };
  const onFormSubmit = event => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput('');
  };

  return (
    <div className="todo">
      <form onSubmit={onFormSubmit}>
        <input
          style={{
            marginBottom: '10px',
            borderStyle: 'none',
            borderRadius: '0px',
            textAlign: 'center',
            marginLeft: '70px',
            marginTop: '50px',
            width: '270px',
            height: '40px'
          }}
          type="text"
          placeholder="Type something......"
          className="task-input"
          value={input}
          required
          onChange={onInputChange}
        />

        <button
          style={{
            backgroundColor: '#0099FF',
            height: '40px',
            width: '60px',
            color: 'white',
            borderStyle: 'none'
          }}
          className="button-add"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
