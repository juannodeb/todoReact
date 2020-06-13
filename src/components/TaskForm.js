import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const TaskForm = () => {
  const ENDPOINT = '';

  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState('');

  const history = useHistory();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handlePriority = (e) => {
    setPriority(e.target.value);
  };

  const createTask = () => {
    const body = {
      title: title,
      done: false,
      time: time,
      priority: priority
    };

    if (priority <= 3 && time > 0 && title !== '') {
      axios.post(ENDPOINT, body)
      .then(() => history.push('/'))
      .catch((error) => alert(error));
    } else {
      alert('Valores Incorrectos');
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 offset-md-2">
            <div className="form-group mt-5">
              <label htmlFor="title" className="font-weight-bolder lead">Título</label>
              <input type="text" className="form-control" id="title" onChange={handleTitle} />
            </div>
          </div>
          <div className="col-sm-12 col-md-8 offset-md-2">
            <div className="form-group">
              <label htmlFor="time" className="font-weight-bolder lead">Duración</label>
              <select className="form-control" id="time" onChange={handleTime}>
                <option>Elige un valor</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 offset-md-2">
            <div className="form-group mb-5">
              <label htmlFor="priority" className="font-weight-bolder lead">Prioridad</label>
              <select className="form-control" id="priority" onChange={handlePriority}>
                <option>Elige un valor</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-8 offset-md-2">
            <button className="btn btn-success btn-block font-weight-bolder" onClick={() => createTask()}>Crear</button>
            <hr />
            <button className="btn btn-secondary btn-block font-weight-bolder" onClick={() => history.push('/')}>Volver</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskForm;
