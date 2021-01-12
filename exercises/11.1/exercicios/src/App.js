import React from 'react';
import './App.css';

const tasks = ['estudar', 'dormir', 'dormir de novo', 'comer'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    tasks.map(task)
  );
}

export default App;
