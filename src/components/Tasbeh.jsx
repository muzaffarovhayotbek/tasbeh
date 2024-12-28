import React, { useState } from 'react';
import './Tasbih.css';

function Tasbih() {
  const [counter, setCounter] = useState(0);

  function handleAdd() {
    setCounter(counter + 1);
  }

  function handleReset() {
    setCounter(0);
  }
  return (
    <div>
      <main className="main">
        <div className="container">
          <div className="main-nav">
              <h1>Elektron Tasbeh</h1>
            <div className="main-title">
              <h2>{counter}</h2>
            </div>
            <div className="section">
            
              <button className="add" onClick={handleAdd}>
                count
              </button>
              <button className="reset" onClick={handleReset}>
                reset
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tasbih;
