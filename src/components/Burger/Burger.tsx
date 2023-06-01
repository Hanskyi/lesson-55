import React from 'react';
import './burger.css';

interface IProps {
    totalPrice: number;
    burgerElements: JSX.Element[];
}

const Burger:React.FC<IProps> = ({totalPrice,burgerElements}) => {
    return (
        <div className="burger-container">
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {burgerElements.map(burgerEl => {
                   return  burgerEl
                })}

                <div className="BreadBottom"></div>
            </div>
            <p className="burger-price">Total: {totalPrice} som</p>
            <span className="title">Burger</span>
        </div>
    );
};

export default Burger;