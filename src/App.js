import React from 'react';
import Register from './Register';
import Login from './Login';
import './App.css';
import HomeContainer from './HomeContainer';
import UserContainer from './UserContainer';
import LoginHeader from './LoginHeader';
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
      <LoginHeader />
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/cars" component={ HomeContainer } />
        <Route exact path="/savedcars" component={ UserContainer } />
        <Route component={ My404 } />
      </Switch>
    </main>
  );
}

export default App;
