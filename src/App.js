import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AboutUs from './Pages/about-us';
import ClassDisplay from './Components/Class';
import ContactUs from './Pages/contact-us'
import Courses from './Pages/use-it-correct';
import Search from './Pages/search';
import Help from './Pages/Help';
import FindMyClass from './Pages/Find-My-Class';
import Login from './Log/login';
import Payment from './Pages/payment';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/pidgin/about-us' component={AboutUs} />
            <Route exact path='/find-my-class' component={FindMyClass} />
            <Route exact path='/pidgin/help' component={Help} />
            <Route exact path='/pidgin/contact-us' component={ContactUs} />
            <Route exact path='/pidgin/courses' component={Courses} />
            <Route exact path='/pidgin/search' component={Search} />
            <Route exact path='/pidgin/login' component={Login} />
            <Route exact path='/pidgin/payment' component={Payment} />
            <Route exact path='/class/:id' component={ClassDisplay} />
          </Switch>
        </Router>
      </div>
    );
  }
}

