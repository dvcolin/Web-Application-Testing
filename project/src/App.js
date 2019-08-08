import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display'
import Dashboard from './components/Dashboard'


function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(0);

  const resetValues = () => {
    setStrikes(0);
    setBalls(0);
    setFouls(0);
  }

  const addStrike = () => {
    strikes === 2 ? resetValues() : setStrikes((strikes + 1));
  }
  
  const addBall = () => {
    balls === 3 ? resetValues() : setBalls((balls + 1));
  }

  const addFoul = () => {
    fouls === 2 ? resetValues() : setFouls((fouls + 1));
  }


  return (
    <div className="App">
      <Display strikes={strikes} balls={balls} fouls={fouls} />
      <Dashboard addStrike={addStrike} addBall={addBall} addFoul={addFoul} resetValues={resetValues} />
    </div>
  );
}

export default App;
