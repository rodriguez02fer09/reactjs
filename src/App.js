import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoTitle } from './TodoTitle';
// import './App.css';

const todos = [
  { text: 'Tarea 1 ', completed: true },
  { text: 'Tarea 2', completed: false },
  { text: 'Tarea 3', completed: false },
  { text: 'Tarea 4', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoTitle/>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;