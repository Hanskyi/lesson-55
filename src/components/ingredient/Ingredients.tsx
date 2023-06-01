import React from 'react';
import Ingredient from "./Ingredient";
import './ingredient.css';
import {IIngredients} from "../../types";

interface IProps {
    ingredients: IIngredients[],
    onClickIngredient: (id: string) => void,
    onClickRemove: (id: string) => void,
}

const Ingredients: React.FC<IProps> = ({ingredients,onClickIngredient, onClickRemove}) => {
    return (
        <div className="container">
            {ingredients.map((ingredient) => {
                return <Ingredient
                    key ={ingredient.id}
                    ingredient={ingredient}
                    onClickIngredient ={() =>onClickIngredient(ingredient.id)}
                    onClickRemove = { () => onClickRemove(ingredient.id)}
                />
            })}
            <span className="title">ingredients</span>
        </div>
    );
};

export default Ingredients;