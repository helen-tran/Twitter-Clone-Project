import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { CurrentUserProvider } from './components/Context/CurrentUserContext';
import {TweetProvider}from './components/Context/TweetContext';
import {ProfileDetailProvider} from './components/Context/ProfileDetailContext'


ReactDOM.render(
  <React.StrictMode>
    <ProfileDetailProvider>
    <TweetProvider>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
    </TweetProvider>
    </ProfileDetailProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
