import React from 'react';
import { NavLink } from 'react-router-dom';

const FoodMenu = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <NavLink exact to="/breakfast" style={activeStyle}>Breakfast</NavLink>
            <NavLink exact to="/lunch" style={activeStyle}>Lunch</NavLink>
            <NavLink exact to="/dinner" style={activeStyle}>Dinner</NavLink>
        </div>
    );
};

export default FoodMenu;