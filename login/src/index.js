import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import { AuthorizationProvider } from './Store/AuthorizationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthorizationProvider>
 <BrowserRouter>

    <App />
 
  </BrowserRouter>
 
  </AuthorizationProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
