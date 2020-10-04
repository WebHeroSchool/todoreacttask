import React from 'react';
import logo from './logo.svg';
import './App.css';
let salary = 300;
let isThis = true;
let count = 23;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: "red"    
        }}
          >hello
        </p>
        {count}
        {45}
        {count+45}
        {isThis && " is true"}
        {salary>300 ? " good" : " bad" }
        {undefined} 
        {null} 
        {false}
        {true}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
