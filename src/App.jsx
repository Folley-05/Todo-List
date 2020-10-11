import React from 'react';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'


function App() {
  return (
    <div className="App">
      <h1 className="align-item-center">Todo List</h1>
      <div style={{marginTop: 50}} className="">
        <AddTodo />
      </div>
      
    </div>
  );
}

export default App;
