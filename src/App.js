import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import About from './Components/AboutUs';
import Home from './Components/Home';
import history from "./history";

export default class App extends React.Component {
  render(){
    return (
      <Router history={history}>
        <Switch>
          <Route path='/about' exact component={About} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    );
  }  
}

