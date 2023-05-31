import React, {useState} from 'react';
import './App.css';
import Ingredients from "./components/ingredient/Ingredients";
import meatImage from "./assets/Meat.png";
import cheeseImage from "./assets/Cheese.png";
import saladImage from "./assets/Salad.png";
import baconImage from "./assets/Bacon.png";

const INGREDIENTS = [

    {name: 'Meat', price: 50, image: meatImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Salad', price: 50, image: saladImage},
    {name: 'Bacon', price: 50, image: baconImage},


];
function App() {
    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0}
    ])

    return (
        <div className="App">
            <Ingredients
                ingredients={INGREDIENTS}
            />
        </div>
    );
}

export default App;
