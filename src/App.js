import React from 'react';
import Register from './Register';
import Login from './Login';
import './App.css';
import CarContainer from './CarContainer';
import HeaderComponent from './HeaderComponent';
import { Route, Switch } from 'react-router-dom';


const My404 = () => {
  return (
    <div>
      <h3>Uh oh, page not found.</h3>
    </div>
  )
}

function App() {
  return (
    <main>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={ Register } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/cars" component={ CarContainer } />
        <Route exact path="/" component={ CarContainer } />
        <Route component={ My404 } />
      </Switch>
    </main>
  );
}

export default App;
