import React from 'react';
import {IIngredients} from "../../types";



interface Iprops {
    ingredient: IIngredients,
    onClickIngredient?: React.MouseEventHandler<HTMLDivElement>,
}

const Ingredient: React.FC<Iprops> = ({ingredient,onClickIngredient}) => {
    return (
        <div className="ingridient-container">
            <div className="img-container">
                <img src={ingredient.image} alt="#" className="ingridient-image"/>
            </div>
            <p id={ingredient.id} className="ingridient-name" onClick={onClickIngredient}>{ingredient.name}</p>
            <p className="ingridient-count">{ingredient.count}</p>
            <div className="button-contauner">
                <button className="button-delete">delete</button>
            </div>
        </div>
    );
};

export default Ingredient;