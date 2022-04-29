import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppProvider from './hooks';
import Example from './pages/Example';

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Example />
        </header>
      </div>
    </AppProvider>
  );
};

export default App;
