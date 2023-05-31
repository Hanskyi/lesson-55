import React from 'react';
import './burger.css';

interface IProps {
    totalPrise: number;
}

const Burger:React.FC<IProps> = ({totalPrise}) => {
    return (
        <div className="burger-container">
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                <div className="Salad"></div>
                <div className="Cheese"></div>
                <div className="Meat"></div>
                <div className="BreadBottom"></div>
            </div>
            <p className="burger-price">{totalPrise}</p>
        </div>
    );
};

export default Burger;