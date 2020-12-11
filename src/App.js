import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Switch>
      <Route exact path="/" component={Home} />
  </Switch>
);

export default App;