import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [card, setCard] = useState({});
  
  useEffect(() => {
      fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then((card) => setCard(card));
      console.log(res.json)
      // return a clean-up function in order to debug terminal, cannot do setCard on an un-mounted component

  }, []);

  return (
    <div className="App">
      <h1>Name</h1>
      <p className="card-name">{card.name}</p>
    </div>
  );
}

export default App;
