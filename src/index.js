import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { LoginProvider } from './components/Login/login-context';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode><Router>
    <LoginProvider>
      <App />
    </LoginProvider>   
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);
