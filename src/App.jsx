import React from 'react';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'


function App() {
  return (
    <div className=" container-fluid app">
      <h1 className="justify-content-center row">Todo List</h1>
      <div style={{marginTop: 50}} className="">
        <TodoList />
        <AddTodo />
      </div>
      
    </div>
  );
}

export default App;
