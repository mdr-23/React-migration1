import './App.css';
import { useState } from 'react';

function App() {

  const [task, setTask] = useState([])
  const [listTask, setListTask] = useState([])

  const handleInput = (event) => {
    if (event.target.value !== ""){
      setTask(event.target.value)
  }else{
    return ""
    }
  }
  
  const addTask = () => {
    if(task !== ""){
      setListTask([...listTask, task]);
      setTask('')
    }
  }




  return (
    <div className="App">

      <h1>Lista de tareas</h1>

      <input type="text" id="taskInput" placeholder="Nueva tarea" onChange={handleInput} />

      <button id="addTaskBtn" onClick={addTask}>Agregar tarea</button>

      <ul id="taskList">
        {listTask.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>


    </div>
  );
}

export default App;
