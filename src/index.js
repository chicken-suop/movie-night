import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const loader = document.querySelector('.loader');
const showLoader = () => loader.classList.remove('loader-hidden');
const hideLoader = () => loader.classList.add('loader-hidden');

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <>
      <App
        showLoader={showLoader}
        hideLoader={hideLoader}
      />
    </>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
