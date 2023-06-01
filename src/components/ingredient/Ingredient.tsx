import React from 'react';
import {IIngredients} from "../../types";



interface Iprops {
    ingredient: IIngredients,
    onClickIngredient?: React.MouseEventHandler<HTMLDivElement>,
    onClickRemove?: React.MouseEventHandler<HTMLButtonElement>
}

const Ingredient: React.FC<Iprops> = ({ingredient,onClickIngredient, onClickRemove}) => {
    return (
        <div className="ingredient-container">
            <div className="img-container">
                <img src={ingredient.image} alt="#" className="ingredient-image"/>
            </div>
            <p id={ingredient.id} className="ingredient-name" onClick={onClickIngredient}>{ingredient.name}</p>
            <p className="ingredient-count">{ingredient.count}</p>
            <div className="button-container">
                <button className="button-delete" onClick={onClickRemove}>delete</button>
            </div>
        </div>
    );
};

export default Ingredient;