import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import About from './Components/AboutUs';
import Home from './Components/Home';
import SearchView from './Pages/Search';
import EnrollmentForm from './Pages/TeamUp'
import ClassDisplay from './Pages/ClassDisplay'

export default class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route path='/class/:id' exact component={ClassDisplay} />
          <Route path='/about' exact component={About} />
          <Route path='/classesAdd' exact component={EnrollmentForm}/>
          <Route path='/search' exact component={SearchView} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    );
  }  
}

