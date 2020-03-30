import React from 'react';
import { Button } from 'antd';

import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="btn-wrapper">
          <Button type="primary">Primary</Button>
          </div>  
          
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
