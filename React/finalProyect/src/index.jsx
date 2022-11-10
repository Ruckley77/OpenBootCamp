// Imports from React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Imports from Redux
// import { Provider } from 'react-redux';

import App from './components/App';

// Import style sheets
import 'bootstrap';
import './styles/css/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ToDo If we work with redux, create store and apply middlgeware from redux saga

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
