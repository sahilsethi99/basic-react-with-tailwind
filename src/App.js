// src/App.js
import React from 'react';
import TodoApp from './components/ToDoApp';
import Counter from './components/Counter';

function App() {
  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center ">
      {/* <TodoApp /> */}
      <Counter/>
    </div>
  );
}

export default App;