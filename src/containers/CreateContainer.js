import React from 'react';
import TaskForm from '../components/TaskForm';

const CreateContainer = () => {
  return (
    <div>
      <div className="container">
        <h1 className="display-4 font-weight-bolder text-center mt-4">Nueva Tarea</h1>
        <hr className="mb-4" />
        <TaskForm />
        </div>
    </div>
  )
}

export default CreateContainer;
