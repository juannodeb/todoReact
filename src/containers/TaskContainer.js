import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from '../components/Task';

const TaskContainer = () => {

  const [tasks, setTask] = useState({});
  const ENDPOINT = '';

  const getTasks = () => {
    axios.get(ENDPOINT)
      .then((response) => setTask(response.data))
      .catch((error) => alert(error));
  }

  useEffect(() => {
    getTasks();
  }, []);
  
  return (
    <div>
      <div className="container">
        <h1 className="display-4 font-weight-bolder text-center mt-4">Mis Tareas</h1>
        <hr className="mb-4" />
        { Object.keys(tasks).map((id) =>
          <Task key={tasks[id].title} id={id} title={tasks[id].title} priority={tasks[id].priority} time={tasks[id].time} done={tasks[id].done} getTasks={getTasks} />
        )}
      </div>
    </div>
  )
}

export default TaskContainer;
