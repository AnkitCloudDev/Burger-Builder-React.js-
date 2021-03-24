import React from 'react'
import Auxiliary from '../../Auxiliary/Auxiliary';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredient).map(
        key => {
        return   <li> <span>{key}</span>: {props.ingredient[key]} </li>
        }
    );
    
    return (
        <Auxiliary>
            <p> Your Order: </p>
            <p>A Delicious burger with the following ingredients: </p>
            <ul>

            </ul>
        </Auxiliary>
    )
};

export default orderSummary;
