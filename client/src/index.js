import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {CurrentUserProvider} from './components/CurrentUserContext';
import {TweetProvider} from './components/TweetContext'


ReactDOM.render(
  <React.StrictMode>
    <TweetProvider>
    <CurrentUserProvider>
    <App />
    </CurrentUserProvider>
    </TweetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
