// Imports from React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Imports from Redux
// import { Provider } from 'react-redux';

// Import style sheets

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/css/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));

// ToDo If we work with redux, create store and apply middlgeware from redux saga

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
