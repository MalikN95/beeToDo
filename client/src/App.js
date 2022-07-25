import logo from './logo.svg';
import './App.css';
import React from 'react'
import TodoList from './Todo/TodoList';

function App() {
  return (
    <div className="App">
      <h1>ToDO</h1>

      <TodoList></TodoList>
    </div>
  );
}

export default App;
