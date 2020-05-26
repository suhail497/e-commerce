import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Homepage } from './pages/homepage.component';
import { Route, Link, Switch } from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/hatspage' component={HatsPage} />
        </Switch>
      </div>
    )
  }
}

const HatsPage = () => {
  return (
    <div>
      <h1>This is HatPage</h1>
    </div>
  )
}


export default App;
