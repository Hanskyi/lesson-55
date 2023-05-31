import React from 'react';



interface Iprops {
    ingredient: { name: string; price: number; image: string }
}

const Ingredient: React.FC<Iprops> = ({ingredient}) => {
    return (
        <div className="ingridient-container">
            <div className="img-container">
                <img src={ingredient.image} alt="#" className="ingridient-image"/>
            </div>
            <p className="ingridient-name">{ingredient.name}</p>
            <p className="ingridient-count"></p>
            <div className="button-contauner">
                <button className="button-delete">delete</button>
            </div>
        </div>
    );
};

export default Ingredient;