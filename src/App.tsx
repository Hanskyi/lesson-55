import React, {useState} from 'react';
import './App.css';
import meatImage from './assets/Bacon.png';

function App() {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0}
  ])

  return (
    <div className="App">
      <div className="ingridient-container">
        <div className="img-container">
          <img src={meatImage} alt="#" className="ingridient-image"/>
        </div>
        <p className="ingridient-name">{ingredients[0].name}</p>
        <p className="ingridient-count">0</p>
        <div className="button-contauner">
          <button className="button-delete">delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
