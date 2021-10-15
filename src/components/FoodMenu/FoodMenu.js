import React from 'react';
import { NavLink } from 'react-router-dom';
import './FoodMenu.css'

const activeStyle = {
    color: "rgb(187, 13, 13)",
    borderBottom: "2px solid rgb(187, 13, 13)"
}

const FoodMenu = () => {
    return (
        <div className="mt-5">
            <NavLink className="menu-link" activeStyle={activeStyle} to="/breakfast">Breakfast</NavLink>
            <NavLink className="menu-link" activeStyle={activeStyle} to="/lunch">Lunch</NavLink>
            <NavLink className="menu-link" activeStyle={activeStyle} to="/dinner">Dinner</NavLink>
        </div>
    );
};

export default FoodMenu;