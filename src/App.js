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
import { Provider } from 'react-redux'
import store from './store'
import MyAppBar from './Components/AppBar'
import CartPage from './Pages/cart';
import CourseDetails from './Components/course-details';
import Form from './data/form';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store} >
          <Router>
            <div className="responsive" >
              <MyAppBar />
            </div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/pidgin/about-us' component={AboutUs} />
              <Route exact path='/pidgin/cart' component={CartPage} />
              <Route exact path='/find-my-class' component={FindMyClass} />
              <Route exact path='/pidgin/help' component={Help} />
              <Route exact path='/pidgin/contact-us' component={ContactUs} />
              <Route exact path='/pidgin/courses' component={Courses} />
              <Route exact path='/pidgin/search/:id' component={Search} />
              <Route exact path='/pidgin/login' component={Login} />
              <Route exact path='/pidgin/payment' component={Payment} />
              <Route exact path='/class/class-details/:id/:doc' component={CourseDetails} />
              <Route exact path='/form/:id' component={Form} />
              <Route exact path='/class/:id' component={ClassDisplay} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

