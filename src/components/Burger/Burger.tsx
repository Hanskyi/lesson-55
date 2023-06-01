import React from 'react';
import './burger.css';

interface IProps {
    totalPrise: number;
    burgerElements: JSX.Element[]
}

const Burger:React.FC<IProps> = ({totalPrise,burgerElements}) => {
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
            <p className="burger-price">{totalPrise}</p>
        </div>
    );
};

export default Burger;