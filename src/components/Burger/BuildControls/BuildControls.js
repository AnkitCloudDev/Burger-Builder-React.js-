import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    
];

const buildControls = (props) => (
    <div className = {classes.BuildControls}>
        <p>Current Price: {props.price.toFixed(2)}</p>
        {controls.map( ctrl => (
            <BuildControl
             key = {ctrl.label} 
             label = {ctrl.label}
             disabled = {props.disabled}
             added = {() => props.ingredientAdded(ctrl.type)}
             removed = {() => props.ingredientRemoved(ctrl.type)} >

             </BuildControl>
        ))}
        <button
        className = {classes.OrderButton}
        disabled = {!props.purchasable}
        onClick = {props.order}
        >
            
            Order Now</button>

    </div>
);

export default buildControls;