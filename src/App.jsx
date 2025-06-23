import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [taskInput, setTaskInput] = useState('');

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Write your task here"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button type='submit'>Create task</button>
    </div>

  );
}
export default App;
