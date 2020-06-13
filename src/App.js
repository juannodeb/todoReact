import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TaskContainer from './containers/TaskContainer';
import CreateContainer from './containers/CreateContainer';
import NotFound from './containers/NotFound';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={TaskContainer} />
        <Route exact path="/nueva-tarea" component={CreateContainer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
