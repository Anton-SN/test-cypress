import React from 'react';
import logo from '../../assets/logo.svg';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://docs.cypress.io/guides/overview/why-cypress"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Cypress
        </a>
      </header>
    </div>
  );
}

export default App;
