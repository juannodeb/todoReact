import React from 'react';
import axios from 'axios';

const Task = ({id, title, priority, time, done, getTasks}) => {
  const ENDPOINT_DELETE = '';
  const ENDPOINT_UPDATE = '';

  const deleteTask = ({id}) => {
    axios.delete(`${ENDPOINT_DELETE}${id}.json`)
      .then(() => getTasks())
      .catch((error) => alert(error));
  };

  const updateTask = (status) => {
    const body = {
      [id]: {
        title: title,
        done: status,
        time: time,
        priority: priority
      }
    };

    axios.patch(ENDPOINT_UPDATE, body)
      .then(() => getTasks())
      .catch((error) => alert(error));
  };

  return (
    <div className="row">
      <div className="col-sm-12 col-md-8 offset-md-2">
        <div className="card text-center mb-4">
          <div className="card-header">
            <h4 className="font-weight-bolder text-center">{title}</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <p className="font-weight-bolder">Prioridad</p>
              </div>
              <div className="col">
              <p className="font-weight-bolder">Duración</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>{priority}</p>
              </div>
              <div className="col">
                <p>{time} hora(s)</p>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            <div className="row">
              <div className="col">
                <button type="button" className="btn btn-danger btn-block font-weight-bolder" onClick={() => deleteTask({id})}><i className="fas fa-trash-alt"></i> Eliminar</button>
              </div>
              <div className="col">
                { done
                  ? <button type="button" className="btn btn-info btn-block font-weight-bolder" onClick={() => updateTask(false)}><i className="fas fa-undo-alt"></i> Deshacer</button>
                  : <button type="button" className="btn btn-success btn-block font-weight-bolder" onClick={() => updateTask(true)}><i className="fas fa-check"></i> Completar</button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task;
