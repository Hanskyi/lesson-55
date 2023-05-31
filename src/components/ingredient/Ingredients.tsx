import React from 'react';
import Ingredient from "./Ingredient";
import './ingredient.css';
import {IIngredients} from "../../types";

interface IProps {
    ingredients: IIngredients[],
    onClickIngredient: (id: string) => void,
}

const Ingredients: React.FC<IProps> = ({ingredients,onClickIngredient}) => {
    return (
        <div>
            {ingredients.map((ingredient) => {
                return <Ingredient
                    key ={ingredient.id}
                    ingredient={ingredient}
                    onClickIngredient ={() =>onClickIngredient(ingredient.id)}
                />
            })}
        </div>
    );
};

export default Ingredients;