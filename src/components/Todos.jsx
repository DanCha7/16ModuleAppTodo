import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../Slice/todo/todoSlice';

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const filter = useSelector((state) => state.todo.filter);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true; 
  });

  return (
    <>
      <h2>Мои задания</h2>
      <div className="allTodos">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className='items'>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button className='remove' onClick={() => dispatch(removeTodo(todo.id))}>Удалить</button>
          </li>
        ))}
      </div>
    </>
  );
};

export default Todos;