import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import provider from react-redux specifically
import { Provider } from 'react-redux';

// import Config Function of App store
import { AppStore } from './store/config/storeConfig';

let createAppStore = AppStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // prop store={yourstore}
  <Provider store={createAppStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
