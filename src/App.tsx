import React, {useState} from 'react';
import './App.css';
import Ingredients from "./components/ingredient/Ingredients";
import meatImage from "./assets/Meat.png";
import cheeseImage from "./assets/Cheese.png";
import saladImage from "./assets/Salad.png";
import baconImage from "./assets/Bacon.png";
import Burger from "./components/Burger/Burger";
import {IIngredients} from "./types";
import {nanoid} from "nanoid";

const INGREDIENTS: IIngredients[] = [

    {name: 'Meat', price: 80, image: meatImage, id: '12876534', count: 0},
    {name: 'Cheese', price: 50, image: cheeseImage, id: '542365', count: 0},
    {name: 'Salad', price: 10, image: saladImage, id: '637663', count: 0},
    {name: 'Bacon', price: 60, image: baconImage, id: '543654', count: 0},
];

let burgerElements = [
    <div className="Salad"></div>,
    <div className="Cheese"></div>,
    <div className="Meat"></div>
];

let totalSumPrise = 30;

function App() {
    const [ingredients, setIngredients] = useState(INGREDIENTS);
    const [totalPrice, setTotalPrice] = useState(totalSumPrise);
    const [burger, setBurger] = useState(burgerElements)


    const onClickIngredient = (id: string) => {
        setIngredients(prevState => {
            return prevState.map(ingredient => {
                if (ingredient.id === id) {
                    setTotalPrice(prevState => totalPrice + ingredient.price);
                    setBurger(prevState => {
                        const copyPrevState = [...prevState];
                        copyPrevState.push(<div key={nanoid()} className={ingredient.name}></div>);
                        return copyPrevState
                    })
                    return {
                        ...ingredient,
                        count: ingredient.count + 1,
                    }
                }
                return ingredient;
            });
        });
    };

    const onClickRemove = (id: string) => {
        setIngredients(prevState => {
            return prevState.map(ingredient => {
                if (ingredient.id === id) {

                    if (totalPrice > 30 && ingredient.count > 0) {
                        setTotalPrice(prevState => totalPrice - ingredient.price);
                    }

                    setBurger(prevState => {
                        const index = prevState.findIndex(el => el.props.className === ingredient.name);
                        if (index !== -1) {
                            prevState.splice(index, 1)
                        }
                        return prevState
                    })

                    if (ingredient.count > 0) {
                        return {
                            ...ingredient,
                            count: ingredient.count - 1,
                        }
                    } else {
                        return ingredient;
                    }
                }
                return ingredient;
            });
        });
    };

    return (
        <div className="App">
            <Ingredients
                ingredients={ingredients}
                onClickIngredient={onClickIngredient}
                onClickRemove={onClickRemove}
            />
            <Burger
                totalPrise={totalPrice}
                burgerElements={burger}
            />
        </div>
    );
}

export default App;
