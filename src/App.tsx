import React from 'react';
import './App.css';
import Login from './components/Login';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <h1>App.tsx</h1>
      <Login id="1" name="satake" age={28} isLive={true} />
    </div>
  );
};

export default App;
