import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Categories from './Components/Categories'
import * as serviceWorker from './serviceWorker';
import MyList from './Components/List';

ReactDOM.render(
  <React.StrictMode>
    <Categories/>
  </React.StrictMode>,
  document.getElementById('categories')
);

ReactDOM.render(
  <React.StrictMode>
    <MyList/>
  </React.StrictMode>,
  document.getElementById('list')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
