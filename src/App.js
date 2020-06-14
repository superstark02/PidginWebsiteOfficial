import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import About from './Components/AboutUs';
import Home from './Components/Home';
import Classes from './Components/classes';

export default class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route path='/class/:id' exact component={Classes} />
          <Route path='/about' exact component={About} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    );
  }  
}

