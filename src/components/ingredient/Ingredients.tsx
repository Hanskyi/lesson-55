import React from 'react';
import Ingredient from "./Ingredient";

interface IProps {
    ingredients: { name: string; price: number; image: string }[],

}


const Ingredients: React.FC<IProps> = ({ingredients}) => {
    return (
        <div>
            {ingredients.map((ingredient,index) => {
                return <Ingredient
                    ingredient={ingredient}
                />
            })}

        </div>
    );
};

export default Ingredients;